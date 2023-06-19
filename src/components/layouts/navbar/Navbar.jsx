import "./Navbar.css"
import CartWidget from "../../common/cartWidget/CartWidget"

const Navbar = () => {
  return (
    <div className="navBarContainer">
        <h2>Game Shop</h2>
        <ul className="listStyle">
            <li><a href="#">Playstation</a></li>
            <li><a href="#">Xbox</a></li>
            <li><a href="#">Nintendo</a></li>
        </ul>
        <CartWidget />
    </div>
  )
}

export default Navbar