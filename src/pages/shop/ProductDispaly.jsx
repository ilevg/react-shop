import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import okOmg from '../../assets/images/ok.png'

const desc = 'Voluptate Lorem aute incididunt nulla culpa magna non aute nisi laboris consequat eu labore.'

const ProductDispaly = ({ item }) => {
    const { name, id, price, seller, ratingsCount, quantity, img} = item
    const [prequantity, setQuantity] = useState(quantity)
    const [coupon, setCoupon] = useState('')
    const [size, setSize] = useState('Select Size')
    const [added, setAdded] = useState(false)
    const handleSizeChange = e => {
        setSize(e.target.value)
    }
    
    const handleDecrease = () => {
        if(prequantity > 1) {
            setQuantity(prequantity - 1)
        }
    }
    const handleIncrease = () => {
        setQuantity(prequantity + 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const product = {
            id: id,
            img: img,
            name: name,
            price: price,
            quantity: prequantity,
            size: size,
            coupon: coupon
        }
        const existingCart = JSON.parse(localStorage.getItem('cart')) || []
        const existingProductIndex = existingCart.findIndex((item) => item.id === id)

        if(existingProductIndex !== -1) {
            existingCart[existingProductIndex].quantity += prequantity
        } else {
            existingCart.push(product)
        }

        // update localStor

        localStorage.setItem('cart', JSON.stringify(existingCart))

        //reset form
        setQuantity(1)
        setSize('Select Size')
        setCoupon('')
        setAdded(true)
    }

    return (
        <>
            <div>
                <h4>{name}</h4>
                <p className='rating'>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <span>{ratingsCount} review</span>
                </p>
                <h4>{price}</h4>
                <h6>{seller}</h6>
                <p>{desc}</p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="m-0 select-product size">
                        <select value={size} onChange={handleSizeChange}>
                            <option>Select Size</option>
                            <option value="40">40</option>
                            <option value="41">41</option>
                            <option value="42">42</option>
                            <option value="43">43</option>
                            <option value="44">44</option>
                        </select>
                        <i className="icofont-rounded-down"></i>
                    </div>
                    <div className="mb-0 mx-auto mt-2 m-sm-0 cart-plus-minus">
                        <div className='dec qtybutton' onClick={handleDecrease}>-</div>
                        <input 
                            className='cart-plus-minus-box'
                            type="text" 
                            name='qtybutton'
                            id='qtybutton'
                            value={prequantity}
                            onChange={e => setQuantity(parseInt(e.target.value, 10))}
                        />
                        <div className='inc qtybutton' onClick={handleIncrease}>+</div>
                    </div>

                    <div className="mt-2 w-100 disc-code">
                        <input type="text" placeholder='Enter Discount Code' onChange={(e) => setCoupon(e.target.value)}/>
                    </div>
                    <button type='submit' className='lab-btn w-100 relative'>
                        <span>Add to Cart</span>
                        {
                            added 
                            ?<span><img className='absolute' src={okOmg} width={35} height={35} alt="done" /></span>
                            : ''
                        }
                    </button>
                </form>
            </div>
        </>
    )
}

export default ProductDispaly
