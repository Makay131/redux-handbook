/* eslint-disable react/react-in-jsx-scope */
import { Link, useParams } from 'react-router-dom'

import { useAppSelector } from '../../hooks'
import { selectPostById } from './postsSlice'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from '../../../components/TimeAgo'
import { ReactionButtons } from './ReactionButtons'
import { selectCurrentUsername } from '../auth/authSlice'

export const SinglePostPage = () => {
  const { postId } = useParams()

  const currentUsername = useAppSelector(selectCurrentUsername)!

  const post = useAppSelector((state) => selectPostById(state, postId!))

  const canEdit = currentUsername === post?.user

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
        {canEdit && (
          <Link to={`/editPost/${post.id}`} className="button">
            Edit Post
          </Link>
        )}
      </article>
    </section>
  )
}
