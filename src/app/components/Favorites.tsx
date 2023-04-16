import Image from "next/image"

const list = [
  {
    id: 1,
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/'
  },
  {
    id: 2,
    name: 'Github',
    url: 'https://github.com/'
  },
  {
    id: 3,
    name: 'Codepen',
    url: 'https://codepen.io/'
  },
  {
    id: 4,
    name: 'MDN',
    url: 'https://developer.mozilla.org/en-US/'
  },
  {
    id: 5,
    name: 'W3Schools',
    url: 'https://www.w3schools.com/'
  },
  {
    id: 6,
    name: 'Can I Use',
    url: 'https://caniuse.com/'
  },
  {
    id: 7,
    name: 'Google',
    url: 'https://www.google.com/'
  },
  {
    id: 8,
    name: 'Youtube',
    url: 'https://www.youtube.com/'
  }
]

export function Favorites() {
  return (
    <nav className="flex justify-center gap-4 flex-wrap mt-[15%] mx-auto">
      {list.map((item) => (
        <a
          key={item.id}
          href={item.url}
          className='flex flex-col items-center gap-2 px-4 py-2 mt-4 text-sm w-[5rem] font-medium text-gray-700 bg-zinc-100/20 rounded-md hover:bg-zinc-100/30'
        >
          <Image
            src={`https://www.google.com/s2/favicons?sz=64&domain=${item.url}`}
            width={64}
            height={64}
            alt={item.name}
            className='w-8 h-8'
          />
          <span className="text-center text-zinc-200">{item.name}</span>
        </a>
      ))}
    </nav>
  )
}