import React, { Component } from 'react'

class Repos extends Component {
  componentDidMount() {
    if (this.props.repos.size === 0) this.props.refreshFeed()
  }

  repoList = repos => {
    return (
      <ul>
        {repos.map(repo => (
          <li className="panel repo" style={{ listStyle: 'none' }}>
            <h3>{repo.get('name')}</h3>
            <p>{repo.get('ownerLogin')}</p>
            <p>{repo.get('language')}</p>
            <p>Stars: {repo.get('stargazersCount')}</p>
          </li>
        ))}
      </ul>
    )
  }

  loadingState = fetching => {
    const text = fetching ? 'Gathering data...' : 'No repositories to show'
    return (
      <div className="panel center">
        <h2>
          {text}
          {fetching && <div className="loader" />}
        </h2>
      </div>
    )
  }

  render() {
    const { repos, fetchingRepos } = this.props
    return (
      <div>
        {this.props.repos.size === 0
          ? this.loadingState(fetchingRepos)
          : this.repoList(repos)}
      </div>
    )
  }
}

export default Repos
