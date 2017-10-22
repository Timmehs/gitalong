import React from 'react'

const Gitalong = ({ user }) => (
  <main>
    <header>
      <h2 style={{ margin: 0 }}>gitalong</h2>
    </header>
    <div className="row">
      <div className="col-xs-12">
        <center>
          {user ? (
            <a href="/auth/logout">{`Log out ${user.get('login')}`}</a>
          ) : (
            <a href="/auth/github">Login with GitHub</a>
          )}
        </center>
      </div>
      <div className="col-xs-10 col-xs-offset-2 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
        bleep bloop blop doop
      </div>
    </div>
  </main>
)

export default Gitalong
