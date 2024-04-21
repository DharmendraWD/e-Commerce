import { Link } from 'react-router-dom'
import './css/AddToCart.css'
import { useContext } from 'react';
import userContext from './context/Context';


const AddToCart = (props) => {
const value = useContext(userContext)
  const AddToCartStyle = {
    width: "100%",
    backgroundColor: "#1a2024",
    color: "white",
    fontSize: "1.1rem",
  };

  // let data = props.exploreItems || props.lists;
  let { addC, removeC } = props;

  // Determine which items to use based on the provided props
  const items = removeC || addC || [];

    return (
      <Link
        to=""
        className="btn addToCart text-center"
        style={AddToCartStyle}
        onClick={value.addRemoveFromCart}
      >
  {items}
      </Link>
    );
  };
export default AddToCart;