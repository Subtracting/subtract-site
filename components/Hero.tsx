import Image from 'next/image'

export default function Hero() {
  return (
    <div className="p-4 flex flex-row gap-8">
      <div className="rounded-md p-8 flex-1 content-evenly text-2xl">
          <h2 className="text-3xl font-black tracking-tighter mb-6 opacity-30">
            I AM
          </h2>

          <h1 className="text-6xl font-black tracking-tighter mb-6 opacity-90">
           SUBTRACTING
          </h1>
        <p className="text-1xl tracking-wide opacity-60">
          a developer and artist with
          a passion for problem-solving, puzzles and patterns. coding and art allow me to express and challenge myself.
        </p>
      </div>
      <Image
        src="/art/portrait2.png"
        alt="my_portrait"
        width={350}
        height={400}
        className="rounded-lg object-cover flex-none"
      />
    </div>
  )
}
