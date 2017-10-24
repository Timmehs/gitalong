import React from 'react'
import FeedControlls from './FeedControlls'
import ReposContainer from 'client/containers/ReposContainer'

const Feed = ({ followers, following, me, toggleFeedParam, reposLoaded }) => (
  <div className="panel">
    <FeedControlls
      followers={followers}
      following={following}
      me={me}
      toggleFeedParam={toggleFeedParam}
    />
    {reposLoaded ? (
      <ReposContainer />
    ) : (
      <div className="panel">
        <h2 className="center">
          Please wait, talking to Github... <span className="loader" />{' '}
        </h2>
      </div>
    )}
  </div>
)

export default Feed
