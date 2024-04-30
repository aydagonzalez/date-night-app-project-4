import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <nav>
      <p>Welcome, {user.name}</p>
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/events/saved">Saved</Link>
      &nbsp; | &nbsp;
      <Link to="/events/concerts">Concerts</Link>
      &nbsp; | &nbsp;
      <Link to="/events/restaurants">Restaurants</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut} >Log Out</Link>
    </nav>
  )
}

