import tokenService from '../Token'

// * Service Workers for Auth *//
const BASE_URL = 'http://localhost:3001/users'

function signup(user) {
  return (
    fetch(BASE_URL + '/signup', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(user)
    })
      .then(res => {
        // here, the tokenized user is returned by res.json()
        if (res.ok) return res.json()
        throw new Error('Username already taken!')
      })
      // here the imported token service is passed the token via .then
      .then(({ token }) => tokenService.setToken(token))
  )
}

function login(creds) {
  return (
    fetch(BASE_URL + '/login', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(creds)
    })
      .then(res => {
        // here, the tokenized user is returned by res.json()
        if (res.ok) return res.json()
        // Bad Credentials provided
        throw new Error('The credentials you provided are incorrect')
      })
      // here the imported token service is passed the token via .then
      .then(({ token }) => tokenService.setToken(token))
  )
}

function getUser() {
  return tokenService.getUserFromToken()
}

function logout() {
  tokenService.removeToken()
}

export default {
  signup,
  login,
  logout,
  getUser
}
