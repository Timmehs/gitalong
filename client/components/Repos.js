import React, { Component } from 'react'

class Repos extends Component {
  componentDidMount() {
    if (this.props.repos.size === 0) this.props.refreshFeed()
  }

  render() {
    const { repos } = this.props
    return (
      <div>
        <ul>
          {repos.map(repo => (
            <li className="panel" style={{ listStyle: 'none' }}>
              <h3>{repo.get('name')}</h3>
              <p>{repo.get('ownerLogin')}</p>
              <p>{repo.get('language')}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Repos
