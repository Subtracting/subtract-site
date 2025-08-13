import Image from 'next/image'
import HeroAnimation from './HeroAnimation'

export default function Hero() {
  return (
    <div
        id="home"
        className="p-4 flex flex-col md:flex-row gap-8 justify-center"
    >
      <div className="rounded-md p-8 pr-2 flex-1 content-evenly text-2xl">
          <h2 className="text-3xl font-black tracking-tighter mb-6 opacity-30">
            I AM
          </h2>
          <h1
            className="text-3xl md:text-6xl font-black tracking-tighter mb-6
                       bg-gradient-to-r from-zinc-100 via-amber-200/[40%] via-amber-100/[60%] via-amber-200/[80%] to-zinc-100
                       bg-clip-text text-transparent
                       [background-size:200%_100%] [animation:gradientShift_8s_linear_infinite]"
          >
           SUBTRACTING
          </h1>
        <p className="text-1xl tracking-wide opacity-40">
          a developer and artist with
          a passion for problem-solving, puzzles and patterns. coding and art allow me to express and challenge myself.
        </p>
      </div>
      <div className="flex-none w-full max-w-sm min-w-[150px] max-w-[400px]">
        <HeroAnimation></HeroAnimation>
      {/*<Image
          src="/art/portrait2.png"
          alt="my_portrait"
          width={350}
          height={400}
          className="rounded-lg object-cover h-auto"
        />*/}
      </div>
    </div>
  )
}
