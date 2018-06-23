import React from 'react'
import moment from 'moment'
import LanguageIcon from './LanguageIcon'

/**
 *
 * repo.pushedAt
 * repo.owner.avatarUrl
 * repo.language
 *
 *
 */
const Repo = ({ repo }) => (
  <li className={`panel repo border-bottom`}>
    <div className="row">
      <div className="col-xs-1">
        <img
          src={repo.getIn(['owner', 'avatarUrl'])}
          width="100%"
          className="avatar rounded-1"
        />
      </div>
      <div className="col-xs-11">
        <div className="row">
          <div className="col-xs-12">
            <h3>
              <a className="text-bold" href={repo.get('htmlUrl')}>
                {repo.get('name')}
              </a>
            </h3>
          </div>
          <div className="col-xs-12">
            <p className="text-gray text-small mt-2 mb-3">
              {repo.get('description')}
            </p>
          </div>
          {repo.get('topics').length > 0 && (
            <div className="col-xs-12">
              {repo.get('topics', []).map(topic => (
                <a
                  className="topic-tag topic-tag-link f6 my-1"
                  key={`${repo.get('name')}-topics-${topic}`}
                >
                  {topic}
                </a>
              ))}
            </div>
          )}
          <div className="col-xs-12 mt-2 f6 text-gray">
            {repo.get('language') && (
              <span className="mr-3">
                <LanguageIcon language={repo.get('language')} />
                {repo.get('language')}
              </span>
            )}
            <span className="mr-3" style={{ display: 'inline-block' }}>
              <i className="fa fa-star mr-1" />
              {repo.get('stargazersCount')}
            </span>
            <span className="mr-3" style={{ display: 'inline-block' }}>
              Updated {moment(repo.get('pushedAt')).fromNow()}
            </span>
          </div>
        </div>
      </div>
    </div>
  </li>
)
export default Repo
