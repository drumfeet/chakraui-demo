import { Flex, Link } from "@chakra-ui/react"

export default function Home() {
  return (
    <>
      <Flex flexDirection="column" alignItems="center" gap="18px">
        <Link href="/boxes">/boxes</Link>
        <Link href="/pricing">/pricing</Link>
      </Flex>
    </>
  )
}
