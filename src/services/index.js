const url = 'http://localhost:3001'

module.exports = {
  getAllEvents,
  getAllArtists
  // getAllCurators,
  // getAllSponsors
}

function getAllEvents() {
  return fetch(`${url}/events`).then(res => res.json())
}
function getAllArtists() {
  return fetch(`${url}/artists`).then(res => res.json())
}
function getAllCurators() {
  return fetch(`${url}/curators`).then(res => res.json())
}
function getAllSponsors() {
  return fetch(`${url}/sponsors`).then(res => res.json())
}
