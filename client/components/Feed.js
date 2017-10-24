import React from 'react'
import FeedControlls from './FeedControlls'
import ReposContainer from 'client/containers/ReposContainer'

const Feed = ({ followers, following, me, user, toggleFeedParam }) => (
  <div className="panel">
    <FeedControlls
      followers={followers}
      following={following}
      me={me}
      user={user}
      toggleFeedParam={toggleFeedParam}
    />
    <ReposContainer />
  </div>
)

export default Feed
