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
    <LanguageWidget languages={languages} />
  </ul>
)

export default FeedControlls
