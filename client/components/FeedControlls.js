import React from 'react'

const FeedControlls = ({
  followers,
  following,
  me,
  toggleFeedParam,
  user,
  languages
}) => (
  <ul className="feed-controlls">
    <li>
      <label htmlFor="followers">
        Include Followers ({user.get('followers').size})
      </label>
      <input
        id="followers"
        type="checkbox"
        defaultChecked={followers}
        name="followers"
        onClick={toggleFeedParam}
      />
    </li>

    <li>
      <label htmlFor="following">
        Include Following ({user.get('following').size})
      </label>
      <input
        id="following"
        type="checkbox"
        defaultChecked={following}
        name="following"
        onClick={toggleFeedParam}
      />
    </li>
    <li>
      <label htmlFor="me">Include Me</label>
      <input
        id="me"
        type="checkbox"
        defaultChecked={me}
        name="me"
        onClick={toggleFeedParam}
      />
    </li>
    {languages.entrySeq().map(([key, val]) => (
      <li>
        <label htmlFor={key + '-cb'}>
          {key} ({val})
        </label>
        <input
          id={key + '-cb'}
          type="checkbox"
          defaultChecked={true}
          name={key}
        />
      </li>
    ))}
  </ul>
)

export default FeedControlls
