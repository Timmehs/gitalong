import React from 'react'

const LanguageWidget = ({ languages }) => (
  <div>
    {languages.entrySeq().map(([key, val]) => (
      <button
        style={{ margin: '0 0.5rem 0.5rem 0' }}
        className="btn btn-outline"
        type="button"
        role="button"
        key={key}
      >
        {key}
        <span style={{ marginLeft: '0.5rem' }} className="Counter">
          {val}
        </span>
      </button>
    ))}
  </div>
)
const FeedControlls = ({
  followers,
  following,
  me,
  toggleFeedParam,
  user,
  languages
}) => (
  <ul>
    <li>
      <div className="form-checkbox">
        <label>
          <input
            type="checkbox"
            checked={followers}
            name="followers"
            onClick={toggleFeedParam}
          />
          Followers
        </label>
        <p className="note">Include repos of users who follow you.</p>
      </div>

      <div className="form-checkbox">
        <label>
          <input
            type="checkbox"
            checked={following}
            name="following"
            onClick={toggleFeedParam}
          />
          Following
        </label>
        <p className="note">Include repos of users you are following.</p>
      </div>

      <div className="form-checkbox">
        <label>
          <input
            type="checkbox"
            checked={me}
            name="me"
            onClick={toggleFeedParam}
          />
          Me
        </label>
        <p className="note">Show my repos.</p>
      </div>
    </li>

    <LanguageWidget languages={languages} />
  </ul>
)

export default FeedControlls
