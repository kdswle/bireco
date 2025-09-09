import { useQuery } from '@tanstack/react-query';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  Chip,
  Avatar,
  CardActionArea,
} from '@mui/material';
import {
  Star as StarIcon,
  MenuBook as BookIcon,
  TrendingUp as TrendingIcon,
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { reviewsApi } from '../lib/api';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { useAuth } from '../contexts/AuthContext';
import type { Review } from '../types';

export function HomePage() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const { data: latestReviews, isLoading } = useQuery({
    queryKey: ['reviews', 'latest'],
    queryFn: () => reviewsApi.latest(8),
  });

  if (isLoading) {
    return <LoadingSpinner message="最新の感想を読み込み中..." />;
  }

  const renderStars = (rating?: number) => {
    if (!rating) return null;
    
    return (
      <Box display="flex" alignItems="center" gap={0.5}>
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon
            key={star}
            sx={{
              fontSize: 16,
              color: star <= rating ? '#ffc107' : '#e0e0e0',
            }}
          />
        ))}
        <Typography variant="caption" sx={{ ml: 0.5 }}>
          ({rating})
        </Typography>
      </Box>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: 'center',
          py: { xs: 4, md: 6 },
          mb: 4,
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2rem', md: '3rem' },
            color: 'primary.main',
          }}
        >
          本の感想を共有しよう
        </Typography>
        <Typography
          variant="h5"
          color="textSecondary"
          paragraph
          sx={{ mb: 4, fontSize: { xs: '1.1rem', md: '1.5rem' } }}
        >
          あなたの読書体験を記録し、他の読者と感動を分かち合いましょう
        </Typography>
        
        <Box display="flex" gap={2} justifyContent="center" flexWrap="wrap">
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/search')}
            startIcon={<BookIcon />}
            sx={{ minWidth: 200 }}
          >
            本を検索して感想を投稿
          </Button>
          {!isAuthenticated && (
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/register"
              sx={{ minWidth: 150 }}
            >
              アカウント作成
            </Button>
          )}
        </Box>
      </Box>

      {/* Latest Reviews Section */}
      <Box sx={{ mb: 6 }}>
        <Box display="flex" alignItems="center" gap={2} mb={3}>
          <TrendingIcon color="primary" />
          <Typography variant="h4" component="h2" fontWeight="bold">
            最新の感想
          </Typography>
        </Box>

        {latestReviews && latestReviews.length > 0 ? (
          <Grid container spacing={3}>
            {latestReviews.map((review: Review) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={review.id}>
                <Card
                  elevation={2}
                  sx={{
                    height: '100%',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      elevation: 4,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <CardActionArea
                    component={Link}
                    to={`/reviews/${review.id}`}
                    sx={{ height: '100%' }}
                  >
                    <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      {/* Book Title */}
                      <Typography
                        variant="subtitle2"
                        color="primary"
                        gutterBottom
                        noWrap
                        sx={{ fontWeight: 'medium' }}
                      >
                        {review.book_title}
                      </Typography>

                      {/* Review Title */}
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
                        {review.title}
                      </Typography>

                      {/* Rating */}
                      {renderStars(review.rating)}

                      {/* Content Preview */}
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                          mt: 1,
                          mb: 2,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          flexGrow: 1,
                        }}
                      >
                        {review.content}
                      </Typography>

                      {/* Author and Date */}
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        mt="auto"
                      >
                        <Box display="flex" alignItems="center" gap={1}>
                          <Avatar sx={{ width: 24, height: 24, fontSize: '0.75rem' }}>
                            {review.user.username[0]}
                          </Avatar>
                          <Typography variant="caption" color="textSecondary">
                            {review.user.username}
                          </Typography>
                        </Box>
                        <Typography variant="caption" color="textSecondary">
                          {formatDate(review.created_at)}
                        </Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Card>
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              <BookIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                まだ感想が投稿されていません
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                最初の感想を投稿してみませんか？
              </Typography>
              <Button
                variant="contained"
                onClick={() => navigate('/search')}
                startIcon={<BookIcon />}
              >
                本を検索する
              </Button>
            </CardContent>
          </Card>
        )}
      </Box>

      {/* Features Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" fontWeight="bold" textAlign="center" mb={4}>
          birecoの特徴
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card elevation={1} sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <BookIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom fontWeight="bold">
                豊富な書籍データベース
              </Typography>
              <Typography variant="body2" color="textSecondary">
                国立国会図書館の検索APIを活用し、幅広い書籍情報を提供します
              </Typography>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card elevation={1} sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <StarIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Markdown対応エディタ
              </Typography>
              <Typography variant="body2" color="textSecondary">
                自動保存機能付きのMarkdownエディタで、思い通りの感想を記録できます
              </Typography>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card elevation={1} sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <TrendingIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom fontWeight="bold">
                コミュニティ機能
              </Typography>
              <Typography variant="body2" color="textSecondary">
                他の読者の感想を参考にして、新しい本との出会いを見つけましょう
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}