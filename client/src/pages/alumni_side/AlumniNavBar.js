import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function AlumniNavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="BCA Alumni">
        Welcome
      </Link>
      <ul>
        <CustomLink to="/news">News</CustomLink>
        <CustomLink to="/profile">Profile</CustomLink>
        <CustomLink to="/messages">Messages</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
	const resolvedPath = useResolvedPath(to)
	const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
	return (
	  <li className={isActive ? "active" : ""}>
		<Link to={to} {...props}>
		  {children}
		</Link>
	  </li>
	)
  }