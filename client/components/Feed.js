import React from 'react'
import LanguageList from './LanguageList'
import ReposContainer from 'client/containers/ReposContainer'
import { NavLink } from 'react-router-dom'

const Feed = ({ user, filter, languages }) => (
  <div className="col-xs-12">
    <div className="row">
      <div className="col-xs-12 col-md-10 first-md">
        <nav className="UnderlineNav" style={{ marginBottom: '1.5rem' }}>
          <div className="UnderlineNav-body">
            <NavLink
              exact
              to="/"
              role="tab"
              title="Following"
              activeClassName="selected"
              className="UnderlineNav-item"
            >
              Following
            </NavLink>
            <NavLink
              to="/followers"
              role="tab"
              title="Followers"
              activeClassName="selected"
              className="UnderlineNav-item"
            >
              Followers
            </NavLink>
          </div>
        </nav>
        <ReposContainer filter={filter} />
      </div>
      <div className="col-xs-12 col-md-2 first-xs">
        <LanguageList languages={languages} />
      </div>
    </div>
  </div>
)

export default Feed
