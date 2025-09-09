import { Routes, Route } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'
import { Navigation } from './components/Navigation'
import { LoadingSpinner } from './components/LoadingSpinner'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { SearchPage } from './pages/SearchPage'
import { BookDetailPage } from './pages/BookDetailPage'
import { ReviewDetailPage } from './pages/ReviewDetailPage'
import { ProfilePage } from './pages/ProfilePage'
import { CreateReviewPage } from './pages/CreateReviewPage'
import { UserPage } from './pages/UserPage'
import './App.css'

function App() {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation />
      <main style={{ flex: 1, padding: 0, margin: 0, paddingTop: '24px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/books/:id" element={<BookDetailPage />} />
          <Route path="/books/:id/review" element={<CreateReviewPage />} />
          <Route path="/reviews/:id" element={<ReviewDetailPage />} />
          <Route path="/users/:id" element={<UserPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
