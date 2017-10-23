import React from 'react'

const FeedControlls = ({
  includeFollowers,
  includeFollowing,
  includeMe,
  toggleFeedParam
}) => (
  <div className="row">
    <div className="col-xs-4 center">
      <label htmlFor="include-followers">Include Followers</label>
      <input
        id="include-followers"
        type="checkbox"
        defaultChecked={includeFollowers}
        name="includeFollowers"
        onClick={toggleFeedParam}
      />
    </div>
    <div className="col-xs-4 center">
      <label htmlFor="include-following">Include Following</label>
      <input
        id="include-following"
        type="checkbox"
        defaultChecked={includeFollowing}
        name="includeFollowing"
        onClick={toggleFeedParam}
      />
    </div>
    <div className="col-xs-4 center">
      <label htmlFor="include-me">Include Me</label>
      <input
        id="include-me"
        type="checkbox"
        defaultChecked={includeMe}
        name="includeMe"
        onClick={toggleFeedParam}
      />
    </div>
  </div>
)

export default FeedControlls
