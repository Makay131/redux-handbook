import { useAppSelector } from '../../hooks'
import { selectUserById } from '../users/usersSlice'

interface PostAuthorProps {
  userId: string
}

export const PostAuthor = ({ userId }: PostAuthorProps) => {
  const author = useAppSelector(state => selectUserById(state, userId))

  return <span>by {author?.name ?? 'Unknown author'}</span>
}