import 'whatwg-fetch'

const headers = new Headers()
headers.append('Accept', 'application/json')
headers.append('Content-Type', 'application/json')

// Generic GET request
export function get(url) {
  return fetch(url, {
    credentials: 'same-origin',
    headers
  }).then(response => {
    if (response.ok) {
      return response.json()
    }
    throw new Error('Failed GET ' + url)
  })
}
