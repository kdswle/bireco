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
import type { RegisterRequest } from '../generated-api/client';

export function RegisterPage() {
  const { register, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterRequest>({
    username: '',
    email: '',
    password: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Already authenticated, redirect to home
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleChange = (field: keyof RegisterRequest | 'confirmPassword') => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    
    if (field === 'confirmPassword') {
      setConfirmPassword(value);
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value,
      }));
    }
    
    // Clear error when user starts typing
    if (error) setError('');
  };

  const validateForm = (): string | null => {
    if (!formData.username.trim()) {
      return 'ユーザー名を入力してください';
    }
    
    if (formData.username.length > 32) {
      return 'ユーザー名は32文字以下である必要があります';
    }
    
    if (!formData.email.trim()) {
      return 'メールアドレスを入力してください';
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return '有効なメールアドレスを入力してください';
    }
    
    if (!formData.password) {
      return 'パスワードを入力してください';
    }
    
    if (formData.password.length < 6) {
      return 'パスワードは6文字以上である必要があります';
    }
    
    if (formData.password !== confirmPassword) {
      return 'パスワードが一致しません';
    }
    
    return null;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await register(formData);
      navigate('/', { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : '登録に失敗しました');
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
            新規登録
          </Typography>
          
          <Typography
            variant="body2"
            textAlign="center"
            color="textSecondary"
            sx={{ mb: 4 }}
          >
            アカウントを作成して感想の投稿を始めましょう
          </Typography>

          {/* Error Alert */}
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          {/* Register Form */}
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="username"
              name="username"
              label="ユーザー名"
              type="text"
              variant="outlined"
              margin="normal"
              required
              value={formData.username}
              onChange={handleChange('username')}
              disabled={isLoading}
              autoComplete="username"
              autoFocus
              helperText="32文字以下（日本語・英数字・記号可）"
            />
            
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
              autoComplete="new-password"
              helperText="6文字以上"
            />
            
            <TextField
              fullWidth
              id="confirm_password"
              name="confirm_password"
              label="パスワード（確認）"
              type="password"
              variant="outlined"
              margin="normal"
              required
              value={confirmPassword}
              onChange={handleChange('confirmPassword')}
              disabled={isLoading}
              autoComplete="new-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={isLoading}
              sx={{ mt: 3, mb: 2, py: 1.5 }}
            >
              {isLoading ? '登録中...' : 'アカウント作成'}
            </Button>
          </Box>

          {/* Divider */}
          <Divider sx={{ my: 3 }} />

          {/* Login Link */}
          <Box textAlign="center">
            <Typography variant="body2" color="textSecondary">
              すでにアカウントをお持ちの方は
            </Typography>
            <Button
              component={Link}
              to="/login"
              variant="text"
              sx={{ mt: 1 }}
            >
              ログインはこちら
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}