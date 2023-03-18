import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Swal from 'sweetalert2'
import Layout from '../../../components/Layout'
import data from '../../../utils/data'
import { Store } from '../../../utils/Store'

export default function ProductScreen() {
    const {state, dispatch} = useContext(Store)
    const router = useRouter()
    const {query} = useRouter()
    const {slug} = query

    // para buscar en nuestra api local
    const product = data.products.find(x => x.slug === slug)
    if(!product)return <div>Product not found</div>

    //funcion para agregar al carrito
    const handleAddCart = () =>{
        const existItem = state.cart.cartItems.find(x => x.slug === product.slug)
        const quantity = existItem ? existItem.quantity + 1 : 1

        if(product.countInStock < quantity){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Sorry, product is out of stock",
              })
            return
        }
        dispatch({type : "CARD_ADD_ITEM",  payload: {...product, quantity}})
        router.push("/Cart")
    }

  return (
    <div>
        <Layout title="Product single page" >
            <img className='img-icon' src='/images/ShoppingProject.png' alt='Icon' />
            <div className='container' >
                <button className='btn btn-primary mb-4' onClick={() =>router.push('/')} >Back to Shopping</button>
                <div className='card mb-3 maximo-card' >
                    <div className='row g-0' >
                        <div className='col-md-4'>
                            <img src={product.image} className="img-fluid rounded-start" alt="product image" />
                        </div>
                        <div className='col-md-8'>
                            <div className='card-body' >
                                <h5 className='card-title' >{product.name}</h5>
                                <h5 className='card-title' >Price: ${product.price}</h5>
                                <h5 className='card-title' >Category: {product.category}</h5>
                                <h5 className='card-title' >⭐: {product.rating}</h5>
                                <h6>
                                    description:
                                    <br />
                                    {product.description}
                                </h6>
                                <p>{product.countInStock > 0 ? "In Stock" : "Unavailable" }</p>
                                <button className='btn btn-primary' onClick={handleAddCart} >Add to Cart</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </Layout>
    </div>
  )
}
