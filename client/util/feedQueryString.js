export default function(feedParams) {
  const params = feedParams.reduce((result, value, key) => {
    if (value) {
      result.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    }
    return result
  }, [])
  return '?' + params.join('&')
}
