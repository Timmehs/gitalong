import React, { Component } from 'react'
import Repo from './Repo'

class Repos extends Component {
  componentDidMount() {
    if (this.props.repos.size === 0) this.props.refreshFeed()
  }

  repoList = repos => repos.map(repo => <Repo repo={repo} />)

  loadingState = fetching => {
    const text = fetching ? 'Gathering data...' : 'No repositories to show'
    return (
      <div className="blankslate">
        <h3>
          <i
            className="fa fa-spinner fa-pulse fa-2x fa-fw"
            style={{ marginBottom: '1rem' }}
          />
        </h3>
        <span className="sr-only">Loading...</span>
        <h3>{text}</h3>
      </div>
    )
  }

  render() {
    const { repos, fetchingRepos } = this.props
    return (
      <ul>
        {this.props.repos.size === 0
          ? this.loadingState(fetchingRepos)
          : this.repoList(repos)}
      </ul>
    )
  }
}

export default Repos
