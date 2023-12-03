import Head from 'next/head'
import { Inter } from 'next/font/google'
import Chat from '@/components/Chat'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
     <Head>
        <title>wellnesAI | Your health partner</title>
        <meta
          name="description"
          content="Your personalized well-being companion for a healthier life"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Chat />
     </div>
  )
}
