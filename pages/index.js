import Head from 'next/head'
import { Poppins } from '@next/font/google'
import HomeContainer from '@/Components/Home/HomeContainer'

const poppins = Poppins({ weight: ["600", "400", "300", "500", "700"], preload: false })

export default function Home() {
  return (
    <>
      <Head>
        <title>Form Approval Workflow Software | Google Workflow Software</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <main className={`${poppins.className} overflow-x-hidden`}>
        <HomeContainer />
      </main>
    </>
  )
}
