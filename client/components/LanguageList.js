import React from 'react'

const LanguageList = ({ languages }) => (
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

export default LanguageList
