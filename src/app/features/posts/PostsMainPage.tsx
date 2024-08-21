/* eslint-disable react/react-in-jsx-scope */
import { PostsList } from './PostsList'
import { AddPostForm } from './AddPostForm'

export function PostsMainPage() {
  return (
    <div>
      <AddPostForm />
      <PostsList />
    </div>
  )
}
