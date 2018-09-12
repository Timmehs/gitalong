import React from 'react'
import FeedContainer from 'client/containers/FeedContainer'

const Gitalong = ({ user, feedFilter }) => (
  <main>
    <header>
      <div className="header-inner">
        <h2 className="header-brand">gitalong</h2>
        {user ? (
          <a href="/auth/logout">
            <i className="fa fa-sign-out" />
          </a>
        ) : (
          <a href="/auth/github">Login with GitHub</a>
        )}
      </div>
    </header>
    <div className="gitalong-container mt-4">
      {user && <FeedContainer filter={feedFilter} />}
    </div>
  </main>
)

export default Gitalong
