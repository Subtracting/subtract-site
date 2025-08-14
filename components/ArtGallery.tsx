'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Grid } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/scrollbar'

import Image from 'next/image'
import '../styles/custom.css'

import type { Artwork } from '../app/types/artwork'
import { artworks } from '@/app/data/artworks'

export default function ArtGallery() {
  const [selectedImage, setSelectedImage] = useState<Artwork | null>({ image: "/art/art1.png", alt: "art1_alt" })

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center pl-8 pt-8 pb-8 pr-8 mt-10 bg-zinc-950 rounded-lg">

      <div className="w-full md:w-96 flex items-center justify-center rounded-lg">
        {selectedImage ? (
          <Image
            src={selectedImage.image}
            alt={selectedImage.alt}
            width={350}
            height={500}
            priority
            loading="eager"
            className="rounded-lg object-contain invert"
          />
        ) : (
          <p className="text-neutral-500">Select an image</p>
        )}
      </div>

      <Swiper
        scrollbar={{ hide: false, draggable: true }}
        modules={[Scrollbar, Grid]}
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
  )
}

