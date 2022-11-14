import "./Navbar.css"
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navbar">
        <nav>
            <Link to="/" className="brand">
                <h1>Cooking Omeruta</h1>
            </Link>
            <Link to="/create">
                <h2>Create Recipe</h2>
            </Link>
        </nav>
    </div>
  )
}

export default Navbar