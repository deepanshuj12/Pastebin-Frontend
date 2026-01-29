import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#0d6efd" }}>
      <Link to="/" style={{ color: "white", fontWeight: "bold" }}>
        Pastebin
      </Link>
      {" | "}
      <Link to="/write" style={{ color: "white" }}>
        New Paste
      </Link>
    </nav>
  );
}

export default Navbar;
