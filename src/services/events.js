const url = 'http://localhost:3001'

module.exports = {
  getAllEvents,
  create
}

function getAllEvents() {
  return fetch(`${url}/events`).then(res => res.json())
}

function create(event) {}
