'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'

import Image from 'next/image'
import '../styles/custom.css'

import type { Artwork } from '../app/types/artwork'
import { artworks } from '@/app/data/artworks'

export default function ArtGallery() {
  const [selectedImage, setSelectedImage] = useState<Artwork | null>({ image: "/art/art3.png", alt: "art3_alt" })

  return (
    <div className='mb-16'>
       <div id="art">
         <span className="flex items-center">
            <span className="text-gray-900 dark:text-white">
              <h1 className="bg-white/90 rounded-lg text-black text-3xl font-black tracking-tighter my-18 mr-6 pl-2 w-20">
               ART
              </h1>
            </span>

            <span className="h-px flex-1 bg-gradient-to-l from-zinc-900 to-zinc-800"></span>
         </span>

       </div>
      <div className="
                    flex flex-col md:flex-row gap-4 justify-center p-8
                    bg-gradient-to-l from-zinc-950 via-black to-zinc-950
                    rounded-lg">

        <div className="flex items-center justify-center rounded-lg">
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
          pagination={{ clickable: true }}
          modules={[Pagination, Grid]}
          spaceBetween={0}
          className="w-full sm:w-80 flex-1 rounded-lg bg-black"
          breakpoints={{
            0: {
              slidesPerView: 2,
              grid: { rows: 2, fill: 'row' },
            },
            480: {
              slidesPerView: 3,
              grid: { rows: 2, fill: 'row' },
            },
            768: {
              slidesPerView: 2,
              grid: { rows: 2, fill: 'row' },
            },
            1024: {
              slidesPerView: 3,
              grid: { rows: 2, fill: 'row' },
            },
          }}
        >
          {artworks.map((artwork, index) => (
            <SwiperSlide key={index}>
              <img
                src={artwork.image}
                alt={artwork.alt}
                className="transition-all duration-300 object-cover hover:invert cursor-pointer rounded"
                onClick={() => setSelectedImage(artwork)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  )
}

