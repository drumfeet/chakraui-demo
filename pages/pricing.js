import Features from "@/components/Features"
import { Header } from "@/components/Header"
import { Pricing } from "@/components/Pricing"
import { Pricing2 } from "@/components/Pricing2"

export default function Home() {
  return (
    <>
      <Header />
      <Pricing />
      {/* <Pricing2 /> */}
      <Features />
    </>
  )
}
