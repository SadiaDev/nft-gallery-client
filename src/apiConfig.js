let apiUrl
const apiUrls = {
  production: 'https://rocky-ocean-73265.herokuapp.com/artwork',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
