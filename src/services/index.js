import tokenService from './tokenService'

const BASE_URL = 'http://localhost:3001'

// * Service Workers for Auth *//

function signup(user) {
  return (
    fetch(BASE_URL + '/users/signup', {
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
    fetch(BASE_URL + '/users/login', {
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

// * Get Requests for Page body copy *//

// returns a list of created Events by BBCA
function getAllEvents() {
  console.log(tokenService)
  return fetch(`${BASE_URL}/events`).then(res => res.json())
}

// returns a list of Artists show by BBCA and collaborators
function getAllArtists() {
  return fetch(`${BASE_URL}/artists`).then(res => res.json())
}

// returns a list of all Curators from BBCA
function getAllCurators() {
  return fetch(`${BASE_URL}/curators`).then(res => res.json())
}

// returns a list of Sponsors in collaboration with BBCA
function getAllSponsors() {
  return fetch(`${BASE_URL}/sponsors`).then(res => res.json())
}

export default {
  getAllEvents,
  getAllArtists,
  // getAllCurators,
  // getAllSponsors,
  signup,
  getUser,
  logout,
  login
}
