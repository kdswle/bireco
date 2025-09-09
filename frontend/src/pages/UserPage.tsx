import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Avatar,
  Button,
  Grid,
  Tab,
  Tabs,
  Rating,
  Chip,
  Alert,
} from '@mui/material';
import { 
  Person, 
  ArrowBack,
  RateReview as ReviewIcon,
  MenuBook as BookIcon,
} from '@mui/icons-material';
import { reviewsApi } from '../lib/api-client';
import { LoadingSpinner } from '../components/LoadingSpinner';
import type { Review, User } from '../generated-api/client';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

export function UserPage() {
  const { id: userId } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const [user, setUser] = useState<User | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) {
      navigate('/');
      return;
    }

    const loadUserData = async () => {
      try {
        // Get all reviews and filter by user ID
        const reviewsData = await reviewsApi.list(undefined, 100, 0);
        
        // Handle different response formats from new client
        let reviews: Review[] = [];
        if (Array.isArray(reviewsData)) {
          reviews = reviewsData;
        } else if (reviewsData && 'data' in reviewsData && Array.isArray(reviewsData.data)) {
          reviews = reviewsData.data;
        }
        
        const userReviews = reviews.filter(review => review.user.id === userId);
        
        if (userReviews.length > 0) {
          setUser(userReviews[0].user);
          setReviews(userReviews);
        } else {
          setError('ユーザーが見つかりません');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'ユーザー情報の取得に失敗しました');
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, [userId, navigate]);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Button 
          startIcon={<ArrowBack />} 
          onClick={() => navigate(-1)}
          sx={{ mb: 3 }}
        >
          戻る
        </Button>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  if (!user) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Button 
          startIcon={<ArrowBack />} 
          onClick={() => navigate(-1)}
          sx={{ mb: 3 }}
        >
          戻る
        </Button>
        <Alert severity="error">ユーザーが見つかりません</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button 
        startIcon={<ArrowBack />} 
        onClick={() => navigate(-1)}
        sx={{ mb: 3 }}
      >
        戻る
      </Button>

      {/* User Profile Header */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Avatar 
              sx={{ width: 80, height: 80, mr: 3, bgcolor: 'primary.main' }}
            >
              {user.avatar_url ? (
                <img src={user.avatar_url} alt={user.username} style={{ width: '100%', height: '100%' }} />
              ) : (
                <Person sx={{ fontSize: 40 }} />
              )}
            </Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h4" gutterBottom>
                {user.username}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                参加日: {new Date(user.created_at).toLocaleDateString('ja-JP')}
              </Typography>
            </Box>
          </Box>

          {/* Stats */}
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" color="primary">
                {reviews.length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                投稿レビュー
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" color="primary">
                {reviews.length > 0 
                  ? (reviews.reduce((acc, review) => acc + (review.rating || 0), 0) / reviews.length).toFixed(1)
                  : '0'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                平均評価
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Card>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="レビュー" icon={<ReviewIcon />} iconPosition="start" />
            <Tab label="読書リスト" icon={<BookIcon />} iconPosition="start" />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          {reviews.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <ReviewIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                まだレビューがありません
              </Typography>
              <Typography variant="body2" color="text.secondary">
                このユーザーはまだレビューを投稿していません
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={3}>
              {reviews.map((review) => (
                <Grid key={review.id} size={{ xs: 12, md: 6 }}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        elevation: 4,
                        transform: 'translateY(-2px)',
                      },
                    }}
                    onClick={() => navigate(`/reviews/${review.id}`)}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                          {review.title}
                        </Typography>
                        {review.rating && (
                          <Rating value={review.rating} readOnly size="small" />
                        )}
                      </Box>
                      
                      <Chip 
                        label={review.book_title} 
                        size="small" 
                        color="primary" 
                        variant="outlined"
                        sx={{ mb: 2 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/books/${review.book_id}`);
                        }}
                      />
                      
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {review.content}
                      </Typography>
                      
                      <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                        {new Date(review.created_at).toLocaleDateString('ja-JP')}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <BookIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              読書リスト機能は開発中です
            </Typography>
            <Typography variant="body2" color="text.secondary">
              近日中に利用できるようになります
            </Typography>
          </Box>
        </TabPanel>
      </Card>
    </Container>
  );
}