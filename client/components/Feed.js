import React from 'react'
import FeedControlls from './FeedControlls'
import ReposContainer from 'client/containers/ReposContainer'

const Feed = ({ followers, following, me, user, toggleFeedParam }) => (
  <div className="col-xs-12">
    <div className="row">
      <div className="col-xs-12 col-md-8 first-md">
        <ReposContainer />
      </div>
      <div className="col-xs-12 col-md-3 col-md-offset-1 first-xs">
        <FeedControlls
          followers={followers}
          following={following}
          me={me}
          user={user}
          toggleFeedParam={toggleFeedParam}
        />
      </div>
    </div>
  </div>
)

export default Feed
