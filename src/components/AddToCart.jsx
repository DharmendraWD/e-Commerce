import { Link } from 'react-router-dom'
import './AddToCart.css'


const AddToCart = () => {
    return (
      <Link
        to=""
        className="btn addToCart text-center"
        style={{
          width: "100%",
          backgroundColor: "#1a2024",
          color: "white",
          fontSize: "1.1rem",
        }}
      >
        Add to Cart
      </Link>
    );
  };
export default AddToCart;