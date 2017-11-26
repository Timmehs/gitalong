import React, { Component } from 'react'
import Repo from './Repo'

class Repos extends Component {
  componentWillMount() {
    this.props.refreshFeed(this.props.filter || 'following')
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.filter !== nextProps.filter) {
      const filterName = nextProps.filter ? nextProps.filter : 'following'
      this.props.refreshFeed(filterName)
    }
  }

  repoList = repos => repos.map(repo => <Repo repo={repo} />)

  render() {
    const { repos, fetchingRepos } = this.props
    const showLoadingState = this.props.repos.size === 0
    return (
      <ul className={`repos-list ${fetchingRepos && ' loading-repos'}`}>
        {showLoadingState ? (
          <div className="blankslate">
            <h3>
              <i className="fa fa-code-fork" aria-hidden="true" />
            </h3>
            <h3>No repositories to show</h3>
          </div>
        ) : (
          this.repoList(repos)
        )}
      </ul>
    )
  }
}

export default Repos
