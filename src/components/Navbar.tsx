/* eslint-disable react/react-in-jsx-scope */

import { Link } from 'react-router-dom'
import { userLoggedOut } from '../app/features/auth/authSlice'
import { UserIcon } from './UserIcon'
import { selectCurrentUser } from '../app/features/users/usersSlice'
import { useAppDispatch, useAppSelector } from '../app/hooks'

export const Navbar = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectCurrentUser)

  const isLoggedIn = !!user
  let navContent: React.ReactNode = null

  if (isLoggedIn) {
    const onLogoutClicked = () => {
      dispatch(userLoggedOut())
    }

    navContent = (
      <div className="navContent">
        <div className="navLinks">
          <Link to="/posts">Posts</Link>
        </div>
        <div className="userDetails">
          <UserIcon size={32} />
          {user.name}
          <button className="button small" onClick={onLogoutClicked}>
            Log Out
          </button>
        </div>
      </div>
    )

    return (
      <nav>
        <section>
          <h1>Redux Essentials Example</h1>
          {navContent}
        </section>
      </nav>
    )
  }
}
