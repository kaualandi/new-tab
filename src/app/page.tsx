import { Inter } from 'next/font/google'
import { Favorites } from './components/Favorites'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { Weather } from './components/Weather'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
      <Header />

      <Weather />

      <div className='flex flex-col mx-8 mt-20'>
        <SearchBar />

        <Favorites />
      </div>
    </main>
  )
}
