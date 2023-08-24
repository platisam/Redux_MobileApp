import { CartIcon } from "../icons";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
