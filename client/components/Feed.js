import React from 'react'
import FeedControlls from './FeedControlls'

const Feed = ({
  includeFollowers,
  includeFollowing,
  includeMe,
  toggleFeedParam
}) => (
  <div className="panel">
    <FeedControlls
      includeFollowers={includeFollowers}
      includeFollowing={includeFollowing}
      includeMe={includeMe}
      toggleFeedParam={toggleFeedParam}
    />
  </div>
)

export default Feed
