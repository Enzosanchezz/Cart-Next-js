import Link from 'next/link'
import React, { useContext } from 'react'
import Layout from '../../components/Layout'
import { Store } from '../../utils/Store'
import { BsCartXFill } from "react-icons/bs"

export default function Cart() {

    const {state, dispatch} = useContext(Store)
    const {cart : {cartItems}} = state
    const handleRemoveCart = (item) =>{
        dispatch({type: 'CART_REMOVE_ITEM', payload:item})
    }
    const handleUpdateCart = (item, qty) =>{
        const quantity = Number(qty)
        dispatch({type:'CARD_ADD_ITEM', payload: {...item, quantity}})
    }


  return (
    <div>
        <Layout title="Shopping Cart" >
            {/* <h2 className='mt-5 mb-5 text-center' >Shopping Cart</h2> */}
            <div className='container' >
                {
                    cartItems.length === 0 ? (
                    <div className='empty' >
                        <img className='img-cart-empty' src='/images/cartEmpty.png' />
                       <Link href="/" style={{textDecoration: "none", color:'black'}} >Go Shopping</Link>
                    </div>
                    ) : (
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map(item =>(
                                    <tr key={item.slug} >
                                    <td><img src={item.image} alt="image" width={70} height={70} />
                                    &nbsp;
                                    {item.name}
                                    </td>
                                    <td>
                                        <select value={item.quantity} onChange={(e) => handleUpdateCart(item , e.target.value)} >
                                            {
                                                [...Array(item.countInStock).keys()].map(x =>(
                                                    <option key={x+1} value={x+1} >
                                                        {x+1}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                    </td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button className='btn btn-danger' style={{width: '50px', height: '33px'}} onClick={() => handleRemoveCart(item)} >X</button>
                                    </td>
                                    </tr>
                                ))}
                                
                            </tbody>
                            </table>

                            <div>
                                Subtotal : $ ({cartItems.reduce((a,c)=> a+c.quantity, 0)})
                                {cartItems.reduce((a,c)=>a+c.quantity * c.price, 0)}
                            </div>
                    </div>
                    )
                }
            </div>
        </Layout>
    </div>
  )
}
