import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="navbar bg-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          FalseCar
        </Link>
      </div>
    </nav>
  );
};
