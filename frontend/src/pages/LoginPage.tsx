import { useState } from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  Divider,
} from '@mui/material';
import { MenuBook as BookIcon } from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import type { LoginRequest } from '../types';

export function LoginPage() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginRequest>({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Already authenticated, redirect to home
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleChange = (field: keyof LoginRequest) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value,
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!formData.email.trim() || !formData.password) {
      setError('メールアドレスとパスワードを入力してください');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('有効なメールアドレスを入力してください');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await login(formData);
      navigate('/', { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'ログインに失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          py: 4,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 2,
          }}
        >
          {/* Header */}
          <Box display="flex" alignItems="center" justifyContent="center" mb={3}>
            <BookIcon sx={{ fontSize: 40, color: 'primary.main', mr: 1 }} />
            <Typography variant="h4" component="h1" fontWeight="bold">
              bireco
            </Typography>
          </Box>
          
          <Typography
            variant="h5"
            component="h2"
            textAlign="center"
            gutterBottom
            color="textPrimary"
          >
            ログイン
          </Typography>
          
          <Typography
            variant="body2"
            textAlign="center"
            color="textSecondary"
            sx={{ mb: 4 }}
          >
            アカウントにログインして感想を投稿しましょう
          </Typography>

          {/* Error Alert */}
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          {/* Login Form */}
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="メールアドレス"
              type="email"
              variant="outlined"
              margin="normal"
              required
              value={formData.email}
              onChange={handleChange('email')}
              disabled={isLoading}
              autoComplete="email"
              autoFocus
            />
            
            <TextField
              fullWidth
              id="password"
              name="password"
              label="パスワード"
              type="password"
              variant="outlined"
              margin="normal"
              required
              value={formData.password}
              onChange={handleChange('password')}
              disabled={isLoading}
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={isLoading}
              sx={{ mt: 3, mb: 2, py: 1.5 }}
            >
              {isLoading ? 'ログイン中...' : 'ログイン'}
            </Button>
          </Box>

          {/* Divider */}
          <Divider sx={{ my: 3 }} />

          {/* Register Link */}
          <Box textAlign="center">
            <Typography variant="body2" color="textSecondary">
              アカウントをお持ちでない方は
            </Typography>
            <Button
              component={Link}
              to="/register"
              variant="text"
              sx={{ mt: 1 }}
            >
              新規登録はこちら
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}