import Head from 'next/head'
import Carousel from "../components/layout/MainLayout/CarouselHome"

export default function Home() {
  return (
    <div>
      <Head>
        <title>SecondHand</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
    </div>
  )
}
