import React from 'react'

const FeedControlls = ({
  followers,
  following,
  me,
  toggleFeedParam,
  user,
  languages
}) => (
  <ul className="filter-list">
    <li>
      <a
        href="#"
        className={`filter-item ${followers && ' selected'}`}
        onClick={() => toggleFeedParam('followers', !followers)}
      >
        <span className="count">{user.get('followers').size}</span>
        Followers
      </a>
    </li>
    <li>
      <a
        href="#"
        className={`filter-item ${following && ' selected'}`}
        onClick={() => toggleFeedParam('following', !following)}
      >
        <span className="count">{user.get('following').size}</span>
        Following
      </a>
    </li>

    <li>
      <a
        href="#"
        className={`filter-item ${me && ' selected'}`}
        onClick={() => toggleFeedParam('me', !me)}
      >
        Me
      </a>
    </li>
    {languages.entrySeq().map(([key, val]) => (
      <li key={key}>
        <a href="#" className={`filter-item ${true && ' selected'}`}>
          <span className="count">{val}</span>
          {key}
        </a>
      </li>
    ))}
  </ul>
)

export default FeedControlls
