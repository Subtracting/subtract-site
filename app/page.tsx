import ArtGallery from "@/components/ArtGallery"
import Hero from "@/components/Hero"
import Misc from "@/components/Misc"
import Projects from "@/components/Projects"

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <ArtGallery></ArtGallery>
      <Projects></Projects>
      <Misc></Misc>
   </div>
  )
}
