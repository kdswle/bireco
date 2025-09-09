import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Box, 
  Rating, 
  Avatar, 
  Chip,
  Button,
  Alert
} from '@mui/material';
import { ArrowBack, Person } from '@mui/icons-material';
import { reviewsApi } from '../lib/api-client';
import type { Review } from '../generated-api/client';
import { LoadingSpinner } from '../components/LoadingSpinner';

export function ReviewDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [review, setReview] = useState<Review | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadReview = async () => {
      if (!id) {
        setError('レビューIDが指定されていません');
        setLoading(false);
        return;
      }

      try {
        const reviewData = await reviewsApi.getById(id);
        // Handle different response formats from new client
        let review: Review;
        if (reviewData && 'data' in reviewData && typeof reviewData.data === 'object') {
          review = reviewData.data as Review;
        } else {
          review = reviewData as Review;
        }
        setReview(review);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'レビューの取得に失敗しました');
      } finally {
        setLoading(false);
      }
    };

    loadReview();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
        <Button 
          startIcon={<ArrowBack />} 
          onClick={() => navigate(-1)}
        >
          戻る
        </Button>
      </Container>
    );
  }
  if (!review) return null;

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Button 
        startIcon={<ArrowBack />} 
        onClick={() => navigate(-1)}
        sx={{ mb: 3 }}
      >
        戻る
      </Button>

      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
              {review.user.avatar_url ? (
                <img src={review.user.avatar_url} alt={review.user.username} />
              ) : (
                <Person />
              )}
            </Avatar>
            <Box>
              <Typography variant="h6">{review.user.username}</Typography>
              <Typography variant="caption" color="text.secondary">
                {new Date(review.created_at).toLocaleDateString('ja-JP')}
              </Typography>
            </Box>
          </Box>

          <Typography variant="h4" component="h1" gutterBottom>
            {review.title}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Chip 
              label={review.book_title} 
              color="primary" 
              variant="outlined"
              sx={{ mr: 2 }}
              onClick={() => navigate(`/books/${review.book_id}`)}
            />
            {review.rating && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Rating value={review.rating} readOnly size="small" sx={{ mr: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  ({review.rating}/5)
                </Typography>
              </Box>
            )}
          </Box>

          <Typography 
            variant="body1" 
            component="div"
            sx={{ 
              whiteSpace: 'pre-wrap',
              lineHeight: 1.7,
              mt: 3
            }}
          >
            {review.content}
          </Typography>

          {review.updated_at !== review.created_at && (
            <Typography variant="caption" color="text.secondary" sx={{ mt: 3, display: 'block' }}>
              最終更新: {new Date(review.updated_at).toLocaleDateString('ja-JP')}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}