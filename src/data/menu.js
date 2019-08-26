// // TODO: Add menu data using the following structure:

const linkClass = 'nav-link'
const activeClass = 'active'
const menu = [
  {
    children: 'Events',
    className: linkClass,
    activeClass: activeClass,
    to: '/events'
  },
  {
    children: 'Artists',
    className: linkClass,
    activeClass: activeClass,
    to: '/artists'
  },
  {
    children: 'Contact',
    className: linkClass,
    activeClass: activeClass,
    to: '/contact'
  }
]
export default menu
