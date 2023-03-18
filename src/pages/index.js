import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Layout from '../../components/Layout'
import data from '../../utils/data'
import ProductItem from '../../components/ProductItem'
import Footer from '../../components/Footer'



export default function Home() {
  return (
    <div>
      <Layout title={"Home Shopping"} >
        <img className='img-icon' src='/images/ShoppingProject.png' alt='icon' />
          <div className='container'>
            <div className='row row-cols-1 row-cols-md-4 g-4' >
              {
                data.products.map((product) => (
                  <ProductItem key={product.slug} product={product} />
                ))
              }
            </div>
          </div>
      </Layout>
      <Footer/>
    </div>
  )
}
