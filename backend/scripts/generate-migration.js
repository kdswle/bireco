#!/usr/bin/env node

/**
 * Simple schema diff generator for D1 migrations
 * Compares current schema with target schema and generates migration SQL
 */

const fs = require('fs');
const path = require('path');

// Parse CREATE TABLE statements from SQL
function parseCreateTable(sql) {
  const tables = {};
  const createTableRegex = /CREATE TABLE (\w+) \(([\s\S]*?)\);/gi;
  
  let match;
  while ((match = createTableRegex.exec(sql)) !== null) {
    const tableName = match[1];
    const columnsStr = match[2];
    
    // Parse columns
    const columns = {};
    const lines = columnsStr.split(',').map(line => line.trim());
    
    for (const line of lines) {
      const columnMatch = line.match(/^(\w+)\s+(.*?)(?:,|$)/);
      if (columnMatch) {
        const [, columnName, definition] = columnMatch;
        columns[columnName] = definition.trim();
      }
    }
    
    tables[tableName] = { columns };
  }
  
  return tables;
}

// Generate migration SQL
function generateMigration(oldSchema, newSchema) {
  const migrations = [];
  
  // Compare each table
  for (const [tableName, newTable] of Object.entries(newSchema)) {
    const oldTable = oldSchema[tableName];
    
    if (!oldTable) {
      // New table - generate CREATE TABLE
      migrations.push(`-- Create new table: ${tableName}`);
      // Would need to reconstruct full CREATE TABLE statement
      continue;
    }
    
    // Compare columns
    const oldColumns = oldTable.columns;
    const newColumns = newTable.columns;
    
    // Find removed columns
    for (const [columnName, definition] of Object.entries(oldColumns)) {
      if (!newColumns[columnName]) {
        migrations.push(`-- Remove column ${tableName}.${columnName}`);
        migrations.push(`-- Note: SQLite doesn't support DROP COLUMN directly`);
        migrations.push(`-- Requires table recreation strategy`);
      }
    }
    
    // Find added columns
    for (const [columnName, definition] of Object.entries(newColumns)) {
      if (!oldColumns[columnName]) {
        migrations.push(`ALTER TABLE ${tableName} ADD COLUMN ${columnName} ${definition};`);
      }
    }
    
    // Find modified columns
    for (const [columnName, newDefinition] of Object.entries(newColumns)) {
      const oldDefinition = oldColumns[columnName];
      if (oldDefinition && oldDefinition !== newDefinition) {
        migrations.push(`-- Modify column ${tableName}.${columnName}`);
        migrations.push(`-- Old: ${oldDefinition}`);
        migrations.push(`-- New: ${newDefinition}`);
        migrations.push(`-- Note: SQLite doesn't support ALTER COLUMN directly`);
        migrations.push(`-- Requires table recreation strategy`);
      }
    }
  }
  
  return migrations.join('\n');
}

// Main function
function main() {
  const migrationsDir = path.join(__dirname, '..', 'migrations');
  const currentSchemaFile = path.join(migrationsDir, '0001_initial_schema.sql');
  
  if (!fs.existsSync(currentSchemaFile)) {
    console.error('Current schema file not found:', currentSchemaFile);
    process.exit(1);
  }
  
  const currentSql = fs.readFileSync(currentSchemaFile, 'utf8');
  
  // For this example, we'll compare with the updated schema
  // In practice, you'd get this from the database or a target schema file
  const targetSql = currentSql; // Replace with your target schema
  
  const oldSchema = parseCreateTable(currentSql);
  const newSchema = parseCreateTable(targetSql);
  
  const migration = generateMigration(oldSchema, newSchema);
  
  if (migration) {
    const migrationNumber = String(Date.now()).slice(-4);
    const migrationFile = path.join(migrationsDir, `${migrationNumber}_auto_generated.sql`);
    
    const fullMigration = `-- Auto-generated migration
-- Created: ${new Date().toISOString()}

${migration}
`;
    
    fs.writeFileSync(migrationFile, fullMigration);
    console.log(`Generated migration: ${migrationFile}`);
  } else {
    console.log('No schema changes detected.');
  }
}

if (require.main === module) {
  main();
}

module.exports = { parseCreateTable, generateMigration };