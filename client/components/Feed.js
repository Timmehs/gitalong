import React from 'react'
import FeedControlls from './FeedControlls'
import ReposContainer from 'client/containers/ReposContainer'

const Feed = ({
  followers,
  following,
  me,
  user,
  toggleFeedParam,
  languages
}) => (
  <div className="col-xs-12">
    <div className="row">
      <div className="col-xs-12 col-md-8 first-md">
        <nav className="UnderlineNav">
          <div className="UnderlineNav-body">
            <a
              href="#url"
              role="tab"
              title="Item 1"
              className="UnderlineNav-item selected"
            >
              Item 1
            </a>
            <a
              href="#url"
              role="tab"
              title="Item 2"
              className="UnderlineNav-item"
            >
              Item 2
            </a>
            <a
              href="#url"
              role="tab"
              title="Item 3"
              className="UnderlineNav-item"
            >
              Item 3
            </a>
            <a
              href="#url"
              role="tab"
              title="Item 4"
              className="UnderlineNav-item"
            >
              Item 4
            </a>
          </div>
        </nav>
        <ReposContainer />
      </div>
      <div className="col-xs-12 col-md-3 col-md-offset-1 first-xs">
        <FeedControlls
          followers={followers}
          following={following}
          me={me}
          languages={languages}
          user={user}
          toggleFeedParam={toggleFeedParam}
        />
      </div>
    </div>
  </div>
)

export default Feed
