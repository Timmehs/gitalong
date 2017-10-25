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
    <div className="row">
      <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
        {user && <FeedContainer />}
      </div>
    </div>
  </main>
)

export default Gitalong
