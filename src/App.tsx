/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import { useAppSelector } from './app/hooks'
import { LoginPage } from './app/features/auth/LoginPage'
import { PostsMainPage } from './app/features/posts/PostsMainPage'
import { SinglePostPage } from './app/features/posts/SinglePostPage'
import { EditPostForm } from './app/features/posts/EditPostForm'
import { Navbar } from './components/Navbar'
import { selectCurrentUsername } from './app/features/auth/authSlice'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const username = useAppSelector(selectCurrentUsername)

  if (!username) {
    return <Navigate to="/" replace />
  }

  return children
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Routes>
                  <Route path="/posts" element={<PostsMainPage />} />
                  <Route path="/posts/:postId" element={<SinglePostPage />} />
                  <Route path="/editPost/:postId" element={<EditPostForm />} />
                </Routes>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
