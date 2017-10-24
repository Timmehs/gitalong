import React from 'react'

const FeedControlls = ({ followers, following, me, toggleFeedParam }) => (
  <div className="row">
    <div className="col-xs-4 center">
      <label htmlFor="followers">Include Followers</label>
      <input
        id="followers"
        type="checkbox"
        defaultChecked={followers}
        name="followers"
        onClick={toggleFeedParam}
      />
    </div>
    <div className="col-xs-4 center">
      <label htmlFor="following">Include Following</label>
      <input
        id="following"
        type="checkbox"
        defaultChecked={following}
        name="following"
        onClick={toggleFeedParam}
      />
    </div>
    <div className="col-xs-4 center">
      <label htmlFor="me">Include Me</label>
      <input
        id="me"
        type="checkbox"
        defaultChecked={me}
        name="me"
        onClick={toggleFeedParam}
      />
    </div>
  </div>
)

export default FeedControlls
