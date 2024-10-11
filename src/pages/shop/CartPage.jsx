import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import delImgUrl from '/images/shop/del.png'
import CheckoutPage from './CheckoutPage'

const CartPage = () => {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        if (Array.isArray(storedCartItems)) {
            setCartItems(storedCartItems);
        }
    }, []);

    const calculateTotalPrice = (item) => {
        return item.price * item.quantity
    }

    const handleIncrease = (item) => {
        item.quantity += 1
        setCartItems([...cartItems])
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }

    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1
            setCartItems([...cartItems])
            localStorage.setItem('cart', JSON.stringify(cartItems))
        }
    }

    const handleRemoveItem = (item) => {
        const updateCart = cartItems.filter((cartItem) => cartItem.id !== item.id)
        setCartItems(updateCart)
        updateLocalStorage(updateCart)
    }

    const updateLocalStorage = (cart) => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    const cartSubtotal = cartItems.reduce((total, item) => {
        return total + calculateTotalPrice(item)
    }, 0)

    const orderTotal = cartSubtotal


    return (
        <div>
            <PageHeader title={'Shop Cart'} curPage={'Cart Page'} />
            <div className="shop-cart padding-tb">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="cart-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th className='cat-product'>Product</th>
                                        <th className='cat-price'>Price</th>
                                        <th className='cat-quantity'>Quantity</th>
                                        <th className='cat-toprice'>Total</th>
                                        <th className='cat-edit'>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItems.map((item, indx) => (
                                            <tr key={indx}>
                                                <td className='product-item cat-product'>
                                                    <div className="p-thumb">
                                                        <Link to='/shop'>
                                                            <img src={item.img} alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="p-content">
                                                        <Link to='/shop'>{item.name}</Link>
                                                    </div>
                                                </td>

                                                <td className='cat-price'>${item.price}</td>
                                                <td className='cat-quantity'>
                                                    <div className="cart-plus-minus">
                                                        <div className="dec qtybutton" onClick={() => handleDecrease(item)}>-</div>
                                                        <input 
                                                            type="text" 
                                                            className="cart-plus-minus-box" 
                                                            name='qtybutton'
                                                            value={item.quantity}
                                                            readOnly
                                                        />
                                                        <div className="inc qtybutton" onClick={() => handleIncrease(item)}>+</div>
                                                    </div>
                                                </td>
                                                <td className='cat-price'>${calculateTotalPrice(item)}</td>
                                                <td className='cat-edit'>
                                                    <a href="#" onClick={() =>handleRemoveItem(item) }>
                                                        <img src={delImgUrl} alt="" />
                                                    </a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className="cart-bottom">
                            <div className="cart-checkout-box">
                                <form action="" className="coupon">
                                    <input 
                                        type="text"
                                        className='cart-page-input-text'
                                        name='coupon'
                                        id='coupon'
                                        placeholder='Coupon code ....'
                                    />
                                    <input type="submit" value='Apply Coupon' />
                                </form>

                                <form className='cart-checkout'>
                                    <input type="submit" value="Update Cart" />
                                    <CheckoutPage />
                                </form>
                            </div>
                            <div className="shiping-box">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="calculate-shiping">
                                            <h3>Calculate Shiping</h3>
                                            <div className="outline-select">
                                                <select>
                                                    <option value="sl">Select coyntry</option>
                                                    <option value="uk">United Kingdom (UK)</option>
                                                    <option value="pl">Poland</option>
                                                    <option value="ua">Ukraine</option>
                                                    <option value="us">USA</option>
                                                </select>
                                                <span className="select-icon">
                                                    <i className="icofont-rounded-down"></i>
                                                </span>
                                            </div>
                                            <div className="outline-select shipping-select">
                                                <select>
                                                    <option value="sl">New York</option>
                                                    <option value="uk">London</option>
                                                    <option value="pl">Warsaw</option>
                                                    <option value="ua">Kyiv</option>
                                                    <option value="us">Paris</option>
                                                </select>
                                                <span className="select-icon">
                                                    <i className="icofont-rounded-down"></i>
                                                </span>
                                            </div>
                                            <input 
                                                type="text" 
                                                name='postalCode' 
                                                id='postalCode' 
                                                className="cart-page-input-text"
                                                placeholder='Postcode/ZIP *'
                                            />
                                            <button type='submit'>Update Adress</button>
                                        </div>
                                    </div>


                                    <div className="col-md-6 col-12">
                                        <div className="cart-overview">
                                            <h3>Cart Total</h3>
                                            <ul className="lab-ul">
                                                <li>
                                                    <span className='pull-left'>Cart Subtotal</span>
                                                    <p className='pull-right'>$ {cartSubtotal}</p>
                                                </li>

                                                <li>
                                                    <span className='pull-left'>Shiping and Handling</span>
                                                    <p className='pull-right'>Free Shiping</p>
                                                </li>

                                                <li>
                                                    <span className='pull-left'>Order Total</span>
                                                    <p className='pull-right'>$ {orderTotal.toFixed(2)}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage