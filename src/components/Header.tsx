import { NavLink, Link } from "react-router";

export default function Header() {
  return (
    <nav className="flex">
      <Link to="/">
        <span>Watch Next Logo</span>
      </Link>

      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Search
      </NavLink>
      <NavLink to="/random"> Random </NavLink>
      <NavLink to="/bookmarks"> Bookmarks </NavLink>
    </nav>
  );
}
