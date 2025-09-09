import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Rating,
  Button,
  Box,
  Alert,
  CircularProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { booksApi, reviewsApi } from '../lib/api-client';
import type { Book } from '../generated-api/client';

const MarkdownEditor = styled('textarea')(({ theme }) => ({
  width: '100%',
  minHeight: 300,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  fontFamily: 'monospace',
  fontSize: '14px',
  resize: 'vertical',
  '&:focus': {
    outline: `2px solid ${theme.palette.primary.main}`,
  },
}));

const PreviewContainer = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  minHeight: 300,
  backgroundColor: theme.palette.background.paper,
  '& h1, & h2, & h3, & h4, & h5, & h6': {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  '& p': {
    marginBottom: theme.spacing(1),
    lineHeight: 1.6,
  },
  '& pre': {
    backgroundColor: theme.palette.action.hover,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    overflow: 'auto',
  },
  '& code': {
    backgroundColor: theme.palette.action.hover,
    padding: '2px 4px',
    borderRadius: (theme.shape.borderRadius as number) / 2,
    fontFamily: 'monospace',
  },
}));

const CreateReviewPage: React.FC = () => {
  const { id: bookId } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  console.log('CreateReviewPage: bookId from useParams:', bookId);
  
  const [book, setBook] = useState<Book | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState<number | null>(null);
  const [isPreview, setIsPreview] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Auto-save draft functionality (temporarily disabled)
  // useEffect(() => {
  //   if (!bookId || (!title && !content)) return;

  //   setSaveStatus('saving');
  //   const timeoutId = setTimeout(async () => {
  //     try {
  //       const draftData = {
  //         book_id: bookId!,
  //         title,
  //         content,
  //         rating: rating ?? undefined,
  //       };

  //       if (draftId) {
  //         await draftsApi.update(draftId, draftData);
  //       } else {
  //         const newDraft = await draftsApi.save(draftData);
  //         setDraftId(newDraft.id);
  //       }

  //       setSaveStatus('saved');
  //       setShowSaveNotification(true);
  //     } catch (error) {
  //       console.error('Failed to save draft:', error);
  //       setSaveStatus('unsaved');
  //     }
  //   }, 2000); // Save after 2 seconds of inactivity

  //   return () => clearTimeout(timeoutId);
  // }, [title, content, rating, bookId, draftId]);

  // Load book and existing draft
  useEffect(() => {
    const loadData = async () => {
      if (!bookId) return;

      try {
        setLoading(true);
        
        // Load book details
        const book = await booksApi.getById(bookId);
        setBook(book);

        // Try to load existing draft (temporarily disabled)
        // const draft = await draftsApi.getByBook(bookId);
        // if (draft) {
        //   setTitle(draft.title || '');
        //   setContent(draft.content || '');
        //   setRating(draft.rating);
        //   setDraftId(draft.id);
        // }
      } catch (error) {
        setError('Failed to load book details');
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [bookId]);

  // Simple markdown-to-HTML converter for preview
  const renderMarkdown = (text: string) => {
    return text
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/^\s*(.+)/gm, '<p>$1</p>')
      .replace(/<\/p><p><h([1-6])>/g, '</p><h$1>')
      .replace(/<\/h([1-6])><p>/g, '</h$1><p>');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim() || rating === null) {
      setError('Please fill in all fields');
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const reviewData = await reviewsApi.create({
        book_id: bookId!,
        title: title.trim(),
        content: content.trim(),
        rating: rating ?? undefined,
      });
      
      console.log('Review created successfully:', reviewData);

      // Delete draft after successful review creation (temporarily disabled)
      // if (draftId) {
      //   try {
      //     await draftsApi.delete(draftId);
      //   } catch (error) {
      //     console.error('Failed to delete draft:', error);
      //   }
      // }

      // Force refresh by navigating with replace and state
      navigate(`/books/${bookId}`, { replace: true, state: { refreshReviews: true } });
    } catch (error: any) {
      setError(error.message || 'Failed to create review');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ py: 4, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
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
      <Typography variant="h4" component="h1" gutterBottom>
        レビューを書く
      </Typography>
      
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {book.title}
          </Typography>
          {book.authors && (
            <Typography variant="body2" color="text.secondary" gutterBottom>
              著者: {book.authors}
            </Typography>
          )}
          {book.publisher && (
            <Typography variant="body2" color="text.secondary">
              出版社: {book.publisher}
            </Typography>
          )}
        </CardContent>
      </Card>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 3 }}>
          <TextField
            label="レビュータイトル"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
            margin="normal"
            placeholder="この本についてのレビューのタイトルを入力してください"
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" gutterBottom>
            評価
          </Typography>
          <Rating
            value={rating}
            onChange={(_, newValue) => setRating(newValue)}
            size="large"
            precision={1}
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Typography variant="subtitle1">
              レビュー内容
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button
                variant={isPreview ? 'contained' : 'outlined'}
                size="small"
                onClick={() => setIsPreview(!isPreview)}
              >
                {isPreview ? 'エディタ' : 'プレビュー'}
              </Button>
            </Box>
          </Box>
          
          {isPreview ? (
            <PreviewContainer>
              {content ? (
                <div dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }} />
              ) : (
                <Typography color="text.secondary" sx={{ fontStyle: 'italic' }}>
                  プレビューする内容がありません
                </Typography>
              )}
            </PreviewContainer>
          ) : (
            <MarkdownEditor
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="レビュー内容を入力してください。Markdownが使用できます。

# 見出し
## 小見出し

**太字** *斜体*

- リスト項目
- リスト項目

`コード` や ```コードブロック``` も使用できます。"
            />
          )}
          
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
            Markdownを使用して自由にレビューを書いてください。
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            type="submit"
            variant="contained"
            disabled={submitting || !title.trim() || !content.trim() || rating === null}
            sx={{ minWidth: 120 }}
          >
            {submitting ? <CircularProgress size={24} /> : 'レビューを投稿'}
          </Button>
          
          <Button
            variant="outlined"
            onClick={() => navigate(`/books/${bookId}`)}
            disabled={submitting}
          >
            キャンセル
          </Button>
        </Box>
      </form>

    </Container>
  );
};

export { CreateReviewPage };
