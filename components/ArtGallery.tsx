import Image from "next/image"
import '../styles/custom.css'
import { artworks } from '@/app/data/artworks'

export default function ArtGallery() {

  return (
    <div>
      <div id="art">
        <h1 className="
                    bg-zinc-950
                    text-zinc-400 text-4xl font-black tracking-tighter p-4 max-w-24 items-center
                    ">
         art.
        </h1>
      </div>
      <div className="
                      w-full flex flex-col justify-center py-8
                      bg-zinc-950 rounded-lg
                      ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 px-4 max-w-7xl">

          {artworks.map((artwork, index) => (
              <Image
                src={artwork.image}
                alt={artwork.alt}
                key={index}
                width={300}
                height={400}
                className="transition-all duration-300 hover:invert rounded-lg object-cover w-full h-auto"
              />
          ))}
        </div>
      </div>
    </div>
  )
}
