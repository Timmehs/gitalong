import { render } from 'react-dom'
import React from 'react'
import 'whatwg-fetch'

const anchorNode = document.getElementById('main')
const rawUser = anchorNode.getAttribute('data-user')
const user = rawUser !== 'undefined' ? JSON.parse(rawUser) : null

// Generic GET request
function get(url) {
  return fetch(url, { credentials: 'same-origin' }).then(response => {
    if (response.ok) {
      return response.json()
    }
    throw new Error('Failed GET ' + url)
  })
}

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: props.user,
      repoParams: {
        includeFollowing: false,
        includeFollowers: false,
        includeMe: false
      }
      following: [],
      followers: [],
      repos: [],
      loading: false
    }
  }

  repoParams = () {
    const { repoParasm } = this.state
    const params = Object.keys(repoParams).reduce((result, key) => {
      result.push(`${encodeURIComponent(key)}=${encodeURIComponent(repoParams[key])}`)
    }, []).join('&')
    return '?' + params
  }

  getRepos = () => {
    const { includeFollowing, includeFollowers } = this.state
    let url = '/user/repos' + this.repoParams()
    this.setState({ loading: true }, () => {
      get(url)
        .then(json => {
          if (json.repos) {
            this.setState({ repos: json.repos, loading: false })
          } else {
            throw Error('No repos return')
          }
        })
        .catch(err => {
          console.error(err)
        })
    })
  }

  // TODO: change this to getFeed eventually
  getFollowing = () => {
    this.setState({ loading: true }, () => {
      get('/user/following')
        .then(json => {
          if (json.following) {
            this.setState({ following: json.following, loading: false })
          }
        })
        .catch(err => {
          console.error(err)
        })
    })
  }

  getFollowers = () => {
    this.setState({ loading: true }, () => {
      get('/user/followers')
        .then(json => {
          if (json.followers) {
            this.setState({ followers: json.followers, loading: false })
          }
        })
        .catch(err => {
          console.error(err)
        })
    })
  }

  render() {
    return (
      <div>
        <header>
          <h1 onClick={this.getFollowing}>gitalong</h1>
          {this.state.loading && <div className="loader" />}
        </header>
        <p>see what your community is working on</p>
        {user ? (
          <div>
            <article>
              <input
                id="include_followers"
                type="checkbox"
                checked={this.state.includeFollowers}
                onChange={e => {
                  const newstate = { includeFollowers: e.target.checked }
                  if (e.target.checked) {
                    this.getFollowers()
                  } else {
                    newstate['followers'] = []
                  }
                  this.setState(newstate)
                }}
              />
              <label htmlFor="include_followers">Include Followers</label>
            </article>
            <article>
              <input
                id="include_following"
                type="checkbox"
                checked={this.state.includeFollowing}
                onChange={e => {
                  const newstate = { includeFollowing: e.target.checked }
                  if (e.target.checked) {
                    this.getFollowing()
                  } else {
                    newstate['following'] = []
                  }
                  this.setState(newstate)
                }}
              />
              <label htmlFor="include_following">Include Following</label>
            </article>
            <button onClick={() => this.getRepos()}>Fetch repos</button>
            <p>Repo Count: {this.state.repos.length}</p>
            <ul>{this.state.repos.map(repo => <li>{repo.name}</li>)}</ul>
            <p>Following Count: {this.state.following.length}</p>
            <p>Followers Count: {this.state.followers.length}</p>
            {this.state.repos.map(repo => <p>{repo.name}</p>)}

            <ul>
              {this.state.following.concat(this.state.followers).map(user => {
                return (
                  <li key={user.login} style={{ listStyle: 'none' }}>
                    <img
                      src={user.avatarUrl}
                      style={{
                        height: '50px',
                        width: '50px',
                        borderRadius: '50%'
                      }}
                    />
                    <br />
                    <a href={user.githubUrl} target="_blank">
                      {user.login}
                    </a>
                  </li>
                )
              })}
            </ul>
            <a href="/auth/logout">{`Log out ${user.login}`}</a>
          </div>
        ) : (
          <a href="/auth/github">Login with GitHub</a>
        )}
      </div>
    )
  }
}

render(<Main user={user} />, anchorNode)
