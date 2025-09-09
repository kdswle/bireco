import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  Chip,
  Alert,
  CircularProgress,
  Divider,
  Rating,
} from '@mui/material';
import { 
  RateReview as ReviewIcon,
  Person as PersonIcon,
  CalendarMonth as YearIcon,
  Business as PublisherIcon,
} from '@mui/icons-material';
import { booksApi, reviewsApi } from '../lib/api-client';
import { useAuth } from '../contexts/AuthContext';
import type { Book, Review } from '../generated-api/client';

export function BookDetailPage() {
  console.log('BookDetailPage: Component rendered');
  
  const { id: bookId } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  
  console.log('BookDetailPage: bookId from useParams:', bookId);
  console.log('BookDetailPage: isAuthenticated:', isAuthenticated);
  
  const [book, setBook] = useState<Book | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    console.log('BookDetailPage: useEffect triggered with bookId:', bookId);
    
    const loadData = async () => {
      if (!bookId) {
        console.log('BookDetailPage: No bookId provided');
        return;
      }

      console.log('BookDetailPage: Loading data for bookId:', bookId);

      try {
        setLoading(true);
        
        console.log('BookDetailPage: Calling booksApi.getById...');
        const book = await booksApi.getById(bookId);
        console.log('BookDetailPage: Book data received:', book);
        
        console.log('BookDetailPage: Calling reviewsApi.list...');
        const reviewsData = await reviewsApi.list(bookId, 20, 0);
        console.log('BookDetailPage: Reviews data received:', reviewsData);
        
        setBook(book);
        
        // Handle different response formats from new client
        let reviews: Review[] = [];
        if (Array.isArray(reviewsData)) {
          reviews = reviewsData;
        } else if (reviewsData && 'data' in reviewsData && Array.isArray(reviewsData.data)) {
          reviews = reviewsData.data;
        }
        setReviews(reviews);
      } catch (error: any) {
        console.error('BookDetailPage: Error loading data:', error);
        setError(error.message || 'Failed to load book details');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [bookId, refreshTrigger]);

  // Refresh data when returning from review creation
  useEffect(() => {
    if (location.state?.refreshReviews) {
      setRefreshTrigger(prev => prev + 1);
      // Clear the state to prevent repeated refreshes
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  // Refresh data when page becomes visible (e.g., when returning from review creation)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setRefreshTrigger(prev => prev + 1);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handleCreateReview = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    navigate(`/books/${bookId}/review`);
  };

  if (loading) {
    console.log('BookDetailPage: Rendering loading state');
    return (
      <Container maxWidth="md" sx={{ py: 4, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <CircularProgress />
        <Typography sx={{ mt: 2 }}>本の詳細を読み込み中... (bookId: {bookId})</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  if (!book) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="error">Book not found</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Book Details */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            {book.title}
          </Typography>
          
          <Box sx={{ mb: 3 }}>
            {book.authors && (
              <Box display="flex" alignItems="center" gap={1} mb={1}>
                <PersonIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                <Typography variant="body1" color="text.secondary">
                  {book.authors}
                </Typography>
              </Box>
            )}
            
            <Box display="flex" gap={2} flexWrap="wrap" mb={2}>
              {book.publication_year && (
                <Box display="flex" alignItems="center" gap={0.5}>
                  <YearIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                  <Chip size="small" label={`${book.publication_year}年`} variant="outlined" />
                </Box>
              )}
              {book.publisher && (
                <Box display="flex" alignItems="center" gap={0.5}>
                  <PublisherIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                  <Chip size="small" label={book.publisher} variant="outlined" />
                </Box>
              )}
            </Box>
          </Box>

          {book.description && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="body1" paragraph>
                <div dangerouslySetInnerHTML={{ __html: book.description }} />
              </Typography>
            </Box>
          )}

          <Box display="flex" alignItems="center" gap={2} sx={{ mb: 3 }}>
            <Typography variant="h6">
              評価: {book.average_rating ? book.average_rating.toFixed(1) : '未評価'}
            </Typography>
            {book.average_rating && (
              <Rating value={book.average_rating} precision={0.1} readOnly />
            )}
            <Typography variant="body2" color="text.secondary">
              ({book.review_count}件のレビュー)
            </Typography>
          </Box>

          <Button
            variant="contained"
            startIcon={<ReviewIcon />}
            onClick={handleCreateReview}
            sx={{ mr: 2 }}
          >
            {isAuthenticated ? 'レビューを書く' : 'ログインしてレビューを書く'}
          </Button>
        </CardContent>
      </Card>

      {/* Reviews Section */}
      <Typography variant="h5" gutterBottom>
        レビュー ({reviews.length}件)
      </Typography>
      
      {reviews.length === 0 ? (
        <Card>
          <CardContent>
            <Typography variant="body1" color="text.secondary" textAlign="center">
              まだレビューがありません。最初のレビューを書いてみませんか？
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Box>
          {reviews.map((review, index) => (
            <Card 
              key={review.id} 
              sx={{ 
                mb: 2,
                cursor: 'pointer',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  elevation: 4,
                  transform: 'translateY(-1px)',
                },
              }}
              onClick={() => navigate(`/reviews/${review.id}`)}
            >
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {review.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      by {review.user.username} • {new Date(review.created_at).toLocaleDateString()}
                    </Typography>
                  </Box>
                  {review.rating && (
                    <Rating value={review.rating} readOnly size="small" />
                  )}
                </Box>
                
                <Typography 
                  variant="body1"
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

                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                  <Button 
                    size="small" 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/reviews/${review.id}`);
                    }}
                  >
                    詳細を見る
                  </Button>
                </Box>
              </CardContent>
              {index < reviews.length - 1 && <Divider />}
            </Card>
          ))}
        </Box>
      )}
    </Container>
  );
}