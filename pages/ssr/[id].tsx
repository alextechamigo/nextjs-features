import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../components/navbar'
import styles from '../../styles/Home.module.css'


export async function getServerSideProps(context: any) {
  const isPrime = function(n) {
    for(var i = 2; i < n; i++)
      if(n % i === 0) return false;
    return n > 1;
  }(context.params.id)
  return {
    props: {
      id: context.params.id,
      isPrime: isPrime
    }
  }
}

const SsrPage = (props: {isPrime: boolean, id: number}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          SSG Page {props.id}
        </h1>
        <Navbar />
        <p>{props.id} is {props.isPrime ? 'prime': 'non-prime'}</p>
      </main>
    </div>
  )
}

export default SsrPage
