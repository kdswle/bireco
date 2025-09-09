import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  Grid,
  Chip,
  CardActions,
  InputAdornment,
  Alert,
  Skeleton,
} from '@mui/material';
import {
  Search as SearchIcon,
  MenuBook as BookIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import { booksApi } from '../lib/api';
import { useAuth } from '../contexts/AuthContext';
import type { BookSearchResult } from '../types';

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { } = useAuth();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');

  const { data: searchResults, isLoading, error, refetch } = useQuery({
    queryKey: ['books', 'search', searchParams.get('q')],
    queryFn: () => booksApi.search(searchParams.get('q') || '', 20),
    enabled: false, // 自動実行を無効化
  });

  // Update search query from URL parameters and execute search
  useEffect(() => {
    const query = searchParams.get('q') || '';
    setSearchQuery(query);
    if (query.trim()) {
      refetch(); // URLパラメータが変更された時に検索実行
    }
  }, [searchParams, refetch]);

  const normalizeSearchQuery = (query: string) => {
    // 全角空白を半角空白に変換してtrim
    return query.replace(/　/g, ' ').trim();
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const normalizedQuery = normalizeSearchQuery(searchQuery);
    if (normalizedQuery) {
      setSearchParams({ q: normalizedQuery });
      refetch(); // 手動でクエリを実行
    }
  };

  const handleViewBook = async (book: BookSearchResult) => {
    try {
      // Create book in database first, then navigate to book details
      const createdBook = await booksApi.create({
        ...book,
        source_type: 'ndl', // Assuming NDL for now
      });
      navigate(`/books/${createdBook.id}`);
    } catch (error) {
      console.error('Failed to create book:', error);
      // Handle error - maybe show a toast notification
    }
  };

  const renderSearchResults = () => {
    const currentQuery = searchParams.get('q') || '';
    
    if (!currentQuery.trim()) {
      return (
        <Box textAlign="center" py={8}>
          <SearchIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h6" gutterBottom>
            本を検索してみましょう
          </Typography>
          <Typography variant="body2" color="textSecondary">
            タイトルや著者名で検索できます
          </Typography>
        </Box>
      );
    }

    if (isLoading) {
      return (
        <Grid container spacing={3}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Grid key={index}>
              <Card>
                <CardContent>
                  <Skeleton variant="text" width="60%" height={24} />
                  <Skeleton variant="text" width="40%" height={20} />
                  <Skeleton variant="text" width="30%" height={20} />
                  <Skeleton variant="rectangular" width="100%" height={60} sx={{ mt: 1 }} />
                </CardContent>
                <CardActions>
                  <Skeleton variant="rectangular" width={120} height={36} />
                  <Skeleton variant="rectangular" width={80} height={36} />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    }

    if (error) {
      return (
        <Alert severity="error" sx={{ mb: 3 }}>
          検索中にエラーが発生しました。もう一度お試しください。
          <Button onClick={() => refetch()} sx={{ ml: 2 }}>
            再試行
          </Button>
        </Alert>
      );
    }

    if (!searchResults || searchResults.length === 0) {
      return (
        <Box textAlign="center" py={8}>
          <BookIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h6" gutterBottom>
            「{currentQuery}」の検索結果が見つかりませんでした
          </Typography>
          <Typography variant="body2" color="textSecondary">
            別のキーワードで検索してみてください
          </Typography>
        </Box>
      );
    }

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          「{currentQuery}」の検索結果 ({searchResults.length}件)
        </Typography>
        
        <Grid container spacing={3} sx={{ mt: 1 }}>
          {searchResults.map((book, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={`${book.source_id}-${index}`}>
              <Card
                elevation={2}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    elevation: 4,
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  {/* Book Title */}
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      minHeight: '3rem',
                    }}
                  >
                    {book.title}
                  </Typography>

                  {/* Authors */}
                  {book.authors && (
                    <Box display="flex" alignItems="center" gap={1} mb={1}>
                      <PersonIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                      <Typography variant="body2" color="textSecondary">
                        {book.authors}
                      </Typography>
                    </Box>
                  )}

                  {/* Publication Info */}
                  <Box display="flex" gap={1} mb={2} flexWrap="wrap">
                    {book.publication_year && (
                      <Chip
                        size="small"
                        label={`${book.publication_year}年`}
                        variant="outlined"
                      />
                    )}
                    {book.publisher && (
                      <Chip
                        size="small"
                        label={book.publisher}
                        variant="outlined"
                      />
                    )}
                  </Box>

                  {/* Description */}
                  {book.description && (
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        '& p': { margin: 0, marginBottom: 0.5 },
                        '& ul': { margin: 0, paddingLeft: 2 },
                        '& li': { marginBottom: 0.25 },
                      }}
                      dangerouslySetInnerHTML={{ __html: book.description }}
                    />
                  )}
                </CardContent>

                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => handleViewBook(book)}
                    startIcon={<BookIcon />}
                  >
                    詳細を見る
                  </Button>
                  <Button 
                    size="small" 
                    variant="outlined"
                    onClick={() => handleViewBook(book)}
                  >
                    レビューを見る
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };

  return (
    <Container maxWidth="lg">
      {/* Page Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
          本を検索
        </Typography>
        <Typography variant="body1" color="textSecondary">
          気になる本を見つけて感想を投稿しましょう
        </Typography>
      </Box>

      {/* Search Form */}
      <Box component="form" onSubmit={handleSearch} sx={{ mb: 4 }}>
        <TextField
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="書籍名、著者名で検索..."
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={!searchQuery.trim() || isLoading}
        >
          {isLoading ? '検索中...' : '検索'}
        </Button>
      </Box>

      {/* Search Results */}
      {renderSearchResults()}
    </Container>
  );
}
