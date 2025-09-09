import { Container, Typography } from '@mui/material';

export function ReviewDetailPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        レビュー詳細ページ
      </Typography>
      <Typography variant="body1">
        このページは現在開発中です。
      </Typography>
    </Container>
  );
}