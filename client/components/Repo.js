import React from 'react'
import moment from 'moment'
import LanguageIcon from './LanguageIcon'

const Repo = ({ repo }) => (
  <li
    className={`panel repo repo-language-${repo.get('language')}`}
    style={{ listStyle: 'none' }}
  >
    <div className="row">
      <div className="col-xs-1 vertical-center">
        <img
          src={repo.getIn(['owner', 'avatarUrl'])}
          className="avatar"
          width="100%"
        />
      </div>
      <div className="col-xs-8 repo-meta">
        <span className="xsmall">
          last push {moment(repo.get('pushedAt')).fromNow()}
        </span>
        <h2 className="no-margin">
          <a className="xlarge" href={repo.get('htmlUrl')}>
            {repo.get('name')}
          </a>
        </h2>
        <a className="small" href={repo.getIn(['owner', 'githubUrl'])}>
          {repo.getIn(['owner', 'login'])}
        </a>
      </div>
      <div className="col-xs-3 align-right">
        {repo.get('language') && (
          <LanguageIcon lang={repo.get('language', '')} />
        )}
      </div>
    </div>
    <div className="row">
      <div className="col-xs-9">
        <p>{repo.get('description')}</p>
      </div>
    </div>
  </li>
)
export default Repo
