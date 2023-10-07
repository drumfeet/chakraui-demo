import { Header } from "@/components/Header"
import { Pricing } from "@/components/Pricing"
import { Box } from "@chakra-ui/react"

export default function Home() {
  return (
    <>
      <Box>
        <Header />
        <Pricing />
      </Box>
    </>
  )
}
