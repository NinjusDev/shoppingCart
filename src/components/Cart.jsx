import './Cart.css';

import { useId } from 'react';
import { useCart } from '../hooks/useCart.js';
import { CartIcon, ClearCartIcon } from './Icons.jsx';

function CartItem ({ thumbnail, price, title, quantity, addToCart, stock }) {
  const handleAddToCart = () => {
    if (quantity < stock) {
      addToCart();
    }
  };

  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={handleAddToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
        {cart.map(product => (
          <CartItem
            key={product.id}
            addToCart={() => addToCart(product)}
            stock={product.stock} // Pasa el stock del producto
            {...product}
          />
        ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
