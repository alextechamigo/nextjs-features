import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../components/navbar'
import styles from '../../styles/Home.module.css'

export async function getStaticPaths() {
  return {
    paths: [],
    // this will mean the first request waits for the getStaticProps call before loading page
    // fallback: 'blocking', 

    // this will mean the first request waits for the getStaticProps call before loading page
    // subsequent calls follow the ISR path (as per revalidate)
    // fallback: true,  this also seems to exhibit the same behaviour in this context

    fallback: 'blocking',
  }
}

export async function getStaticProps(context: any) {

  console.log("generating a prime page")

  const isPrime = function(n) {
    for(var i = 2; i < n; i++)
      if(n % i === 0) return false;
    return n > 1;
  }(context.params.id)

  return {
    props: {
      id: context.params.id,
      isPrime: isPrime,
      at: new Date().toLocaleString()
    },
    revalidate: 20
  }
}

const SsgPage = (props: {isPrime: boolean, id: number, at: string, secret: string}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ISR Page {props.id}
        </h1>
        <Navbar />
        <p>At {props.at}, {props.id} is {props.isPrime ? 'prime': 'non-prime'}</p>
      </main>
    </div>
  )
}

export default SsgPage
