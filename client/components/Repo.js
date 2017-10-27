import React from 'react'
import moment from 'moment'

const Repo = ({ repo }) => (
  <li
    className={`panel repo repo-language-${repo.get('language')}`}
    style={{ listStyle: 'none' }}
  >
    <div className="row">
      <div className="col-xs-1 repo-avatar">
        <img src={repo.getIn(['owner', 'avatarUrl'])} width="100%" />
      </div>
      <div className="col-xs-8">
        <div className="repo-meta">
          <h3>
            <a href={repo.get('htmlUrl')}>{repo.get('name')}</a>
          </h3>
          <a href={repo.getIn(['owner', 'githubUrl'])}>
            {repo.getIn(['owner', 'login'])}
          </a>
        </div>
        <p>{repo.get('description')}</p>
      </div>
      <div className="col-xs-3">
        <div className="repo-meta small">
          {repo.get('language') && <p>Language: {repo.get('language')}</p>}
          <p>Stars: {repo.get('stargazersCount')}</p>
          <p>last push was {moment(repo.get('pushedAt')).fromNow()}</p>
        </div>
      </div>
    </div>
  </li>
)
export default Repo
