const url = 'http://localhost:3001'

module.exports = {
  getAllEvents,
  getAllArtists
  // getAllCurators,
  // getAllSponsors
}

// returns a list of created Events by BBCA
function getAllEvents() {
  return fetch(`${url}/events`).then(res => res.json())
}

// returns a list of Artists show by BBCA and collaborators
function getAllArtists() {
  return fetch(`${url}/artists`).then(res => res.json())
}

// returns a list of all Curators from BBCA
function getAllCurators() {
  return fetch(`${url}/curators`).then(res => res.json())
}

// returns a list of Sponsors in collaboration with BBCA
function getAllSponsors() {
  return fetch(`${url}/sponsors`).then(res => res.json())
}
