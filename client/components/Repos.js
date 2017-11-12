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
      <li className="panel repo">
        <div className="row">
          <div className="col-xs-12">
            <h2>
              {text}
              {fetching && <div className="loader" />}
            </h2>
          </div>
        </div>
      </li>
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
