import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link to="/authors">
        <button>authors</button>
      </Link>
      <Link to="/books">
        <button>books</button>
      </Link>
      <Link to="/add">
        <button>add book</button>
      </Link>
    </nav>
  )
}

export default Nav
