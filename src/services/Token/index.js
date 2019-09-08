function setToken(token) {
  // if there is a token then save it in the browser storage
  if (token) {
    localStorage.setItem('token', token)
    // if not, remove any token available
  } else {
    localStorage.removeItem('token')
  }
}
function getToken() {
  let token = localStorage.getItem('token')
  if (token) {
    const payload = JSON.parse(atob(token.split('.')[1]))
    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem('token')
      token = null
    }
  }
  return token
}

function getUserFromToken() {
  const token = getToken()
  return token ? JSON.parse(atob(token.split('.')[1])) : null
}

function removeToken() {
  localStorage.removeItem('token')
}

export default {
  setToken,
  getToken,
  getUserFromToken,
  removeToken
}
