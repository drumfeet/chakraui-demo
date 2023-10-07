import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"

export function Header() {
  return (
    <Box
      as="section"
      pb="200px"
      pt="88px"
      px="32px"
      color="#F7FAFC"
      bg="#6B46C1"
      textAlign="center"
    >
      <Heading fontSize="48px" fontWeight="800">
        Simple pricing for your business
      </Heading>
      <Text fontSize="24px" fontWeight="500" pt="16px" opacity="0.8">
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
  )
}
