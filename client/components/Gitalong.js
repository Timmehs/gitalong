import React from 'react'
import FeedContainer from 'client/containers/FeedContainer'

const Gitalong = ({ user }) => (
  <main>
    <header>
      <h2 style={{ margin: 0 }}>gitalong</h2>
      {user ? (
        <a href="/auth/logout">{`Log out ${user.get('login')}`}</a>
      ) : (
        <a href="/auth/github">Login with GitHub</a>
      )}
    </header>
    <div className="row container">{user && <FeedContainer />}</div>
  </main>
)

export default Gitalong
