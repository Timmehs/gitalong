import React from 'react'
import FeedContainer from 'client/containers/FeedContainer'

const Gitalong = ({ user }) => (
  <main className='container'>
    <header>
      <h2 className="header-brand">gitalong</h2>
      {user ? (
        <a href="/auth/logout">
          <i className="fa fa-sign-out" />
        </a>
      ) : (
        <a href="/auth/github">Login with GitHub</a>
      )}
    </header>
    <div className="container">{user && <FeedContainer />}</div>
  </main>
)

export default Gitalong
