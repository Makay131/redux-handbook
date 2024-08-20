import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { PostsMainPage } from './app/features/posts/PostsMainPage'
import { SinglePostPage } from './app/features/posts/SinglePostPage'
import { EditPostForm } from './app/features/posts/EditPostForm'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
      <Routes>
          <Route path="/" element={<PostsMainPage />}></Route>
          <Route path="/posts/:postId" element={<SinglePostPage />} />
          <Route path="/editPost/:postId" element={<EditPostForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App