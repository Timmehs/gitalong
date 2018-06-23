import React from 'react'
import moment from 'moment'
import LanguageIcon from './LanguageIcon'

const Repo = ({ repo }) => (
  <li className={`panel repo no-border col-xs-8`}>
    <div className="height-full border border-gray-light rounded-1 bg-white p-3">
      <div className="d-flex flex-justify-between flex-items-start mb-1">
        <h1 className="f2 lh-condensed mb-1">
          <a
            href={repo.getIn(['owner', 'githubUrl'])}
            className="d-inline-block v-align-top mr-2"
          >
            <img
              className="rounded-1"
              src={repo.getIn(['owner', 'avatarUrl'])}
              width="30"
              height="30"
              alt={`@${repo.get('ownerLogin')}`}
            />
          </a>
          <a
            href={repo.get('htmlUrl')}
            data-ga-click="Repository, go to repository"
          >
            <span className="text-normal">{repo.get('ownerLogin')} /</span>
            {' ' + repo.get('name')}
          </a>
        </h1>
      </div>
      <p className="text-gray small mb-2">{repo.get('description')}</p>
      <div className="list-topics-container f6 mb-3">
        {repo.get('topics', []).map(topic => (
          <a
            className="topic-tag topic-tag-link f6 my-1"
            key={`${repo.get('name')}-topics-${topic}`}
          >
            {topic}
          </a>
        ))}
      </div>
      <div className="d-flex f6">
        <a
          href="/dylanaraps/pure-bash-bible/stargazers"
          className="d-inline-block link-gray mr-4"
          data-ga-click="Repository, go to repository stargazers"
        >
          <svg
            className="octicon octicon-star mr-1"
            viewBox="0 0 14 16"
            version="1.1"
            width="14"
            height="16"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
            />
          </svg>
          {repo.get('starrgazersCount', 0)}
        </a>
        <a
          href="/dylanaraps/pure-bash-bible/network"
          className="d-inline-block link-gray mr-4"
          data-ga-click="Repository, go to repository forks"
        >
          <svg
            className="octicon octicon-git-branch mr-1"
            viewBox="0 0 10 16"
            version="1.1"
            width="10"
            height="16"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
            />
          </svg>
          {repo.get('forksCount')}
        </a>
      </div>
    </div>
    {/*    {repo.get('topics').length > 0 && (

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
    </div>*/}
  </li>
)
export default Repo
