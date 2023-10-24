import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react"
export default function Home() {
  return (
    <>
      <Box
        bg={["red", "blue", "green", "yellow"]}
        w="100%"
        p={8}
        style={{
          boxShadow:
            "0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)",
        }}
      >
        Home2
      </Box>
      <Box bg={{ sm: "red", md: "blue", lg: "green" }} w="100%">
        Home
      </Box>
      <Box>
        <Box bg={["red", "blue", "green", "yellow"]} w="100%">
          Home
        </Box>
        <Box bg={{ sm: "red", md: "blue", lg: "green" }} w="100%">
          Home
        </Box>
      </Box>
      <Flex flexDirection="column">
        <Box bg={["red", "blue", "green", "yellow"]} w="100%">
          Home
        </Box>
        <Box bg={{ sm: "red", md: "blue", lg: "green" }} w="100%">
          Home
        </Box>
      </Flex>

      <Link href="/">
        <Heading as="h2" size={"3xl"}>
          Home
        </Heading>
      </Link>
      <Button>Test BTN</Button>

      <Box _after={{ content: '"🙂"', display: "inline-block", mr: "5px" }}>
        A pseudo element
      </Box>
    </>
  )
}
