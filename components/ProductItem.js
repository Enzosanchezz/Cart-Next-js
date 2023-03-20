import Link from 'next/link'
import React from 'react'

export default function ProductItem({product}) {
  return (
    <div>
        <div className='col'>
            <div className='card' >
                <img src={product.image} alt='' className='image-card' />
                <div className='card-body'>
                    <h5>{product.name}</h5>
                    <p>{product.category}</p>
                    <p>{product.price}</p>
                    <Link href={`/product/${product.slug}`} >
                        <button className='btn btn-primary btn-p ' >
                            View Product
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
