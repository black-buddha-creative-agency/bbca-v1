const BASE_URL = 'http://localhost:3001'

module.exports = {
  getAllEvents,
  getAllArtists,
  // getAllCurators,
  // getAllSponsors,
  signup
}

// * Get Requests for Page body copy *//

// returns a list of created Events by BBCA
function getAllEvents() {
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

// * Service Workers for Auth *//

function signup(user) {
  return fetch(BASE_URL + '/users/signup', {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(user)
  })
    .then(res => {
      if (res.ok) return res.json()
      throw new Error('Username already taken!')
    })
    .then(data => data)
}
