import 'whatwg-fetch'

// Generic GET request
export function get(url) {
  return fetch(url, { credentials: 'same-origin' }).then(response => {
    if (response.ok) {
      return response.json()
    }
    throw new Error('Failed GET ' + url)
  })
}
