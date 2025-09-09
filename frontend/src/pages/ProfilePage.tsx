import { Container, Typography } from '@mui/material';

export function ProfilePage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        プロフィールページ
      </Typography>
      <Typography variant="body1">
        このページは現在開発中です。
      </Typography>
    </Container>
  );
}