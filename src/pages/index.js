import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Layout from '../../components/Layout'
import data from '../../utils/data'
import ProductItem from '../../components/ProductItem'



export default function Home() {
  return (
    <div>
      <Layout title={"Home Shopping"} >
        <h2 className='text-center mt-5 mb-5' >List of Products</h2>
          <div className='container'>
            <div className='row row-cols-2 row-cols-md-4 g-4' >
              {
                data.products.map((product) => (
                  <ProductItem key={product.slug} product={product} />
                ))
              }
            </div>
          </div>
      </Layout>
    </div>
  )
}
