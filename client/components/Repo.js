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
  <li className={`panel repo`}>
    <div className="row">
      <div className="col-xs">
        <img
          src={repo.getIn(['owner', 'avatarUrl'])}
          width="32px"
          height="32px"
          className="avatar avatar-small"
        />
      </div>
      <div className="col-xs-11">
        <div className="row">
          <div className="col-xs-12">
            <a className="text-bold" href={repo.get('htmlUrl')}>
              {repo.get('name')}
            </a>
          </div>
          <div className="col-xs-12">
            <p className="text-gray text-small mt-2 mb-3">
              {repo.get('description')}
            </p>
          </div>
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
