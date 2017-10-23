import React from 'react'
import FeedContainer from '../containers/FeedContainer'

const Gitalong = ({ user }) => (
  <main>
    <header>
      <h2 style={{ margin: 0 }}>gitalong</h2>
    </header>
    <div className="row">
      <div className="col-xs-12" style={{ textAlign: 'center' }}>
        {user ? (
          <a href="/auth/logout">{`Log out ${user.get('login')}`}</a>
        ) : (
          <a href="/auth/github">Login with GitHub</a>
        )}
      </div>
      <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
        <FeedContainer />
      </div>
    </div>
  </main>
)

export default Gitalong