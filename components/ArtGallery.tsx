import Image from "next/image"
import '../styles/custom.css'
import { artworks } from '@/app/data/artworks'

export default function ArtGallery() {
  return (
    <div>
      <div id="art">
        <h1 className="bg-white/90 text-black text-3xl font-black tracking-tighter m-8 pl-2 max-w-20">
          ART
        </h1>
      </div>
    <div className="w-full flex flex-col items-center py-8
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
