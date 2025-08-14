'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Grid, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/scrollbar'
import 'swiper/css/pagination'

import Image from 'next/image'
import '../styles/custom.css'

import type { Artwork } from '../app/types/artwork'
import { artworks } from '@/app/data/artworks'

export default function ArtGallery() {
  const [selectedImage, setSelectedImage] = useState<Artwork | null>({ image: "/art/art3.png", alt: "art3_alt" })

  return (
    <div>
     <div id="art">
      <h1 className="bg-white/90 text-black text-3xl font-black tracking-tighter m-8 mt-20 pl-2 w-20">
       ART
      </h1>
    </div>
    <div className="
                  flex flex-col md:flex-row gap-4 justify-center p-8 mt-10
                  bg-gradient-to-l from-zinc-950 via-black to-zinc-950
                  rounded-lg">

      <div className="md:w-96 flex items-center justify-center rounded-lg">
        {selectedImage ? (
          <Image
            src={selectedImage.image}
            alt={selectedImage.alt}
            width={350}
            height={500}
            priority
            loading="eager"
            className="rounded-lg invert"
          />
        ) : (
          <p className="text-neutral-500">Select an image</p>
        )}
      </div>

      <Swiper
        pagination={true}
        modules={[Pagination, Grid]}
        slidesPerView={3}
        grid={{ rows: 2, fill: 'row' }}
        spaceBetween={0}
        className="flex-1 rounded-lg bg-black"
      >
        {artworks.map((artwork, index) => (
          <SwiperSlide key={index}>
            <Image
              src={artwork.image}
              alt={artwork.alt}
              width={300}
              height={400}
              className="transition-all duration-300 hover:invert object-cover cursor-pointer"
              onClick={() => setSelectedImage(artwork)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
    </div>
  )
}

