import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react"
import { CheckIcon } from "./images/icons/icons"

export const ListItem = ({ props, children }) => {
  return (
    <>
      <Flex direction="row" mb="16px">
        <Icon as={CheckIcon} />
        <Text marginLeft="20px" fontSize="18px" fontWeight="400">
          {children}
        </Text>
      </Flex>
    </>
  )
}

export function Pricing() {
  return (
    <>
      <Box
        transform="translateY(-160px)"
        borderRadius="12px"
        background="#FFF"
        boxShadow="0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)"
        maxW="994px"
        margin={"auto"}
      >
        <Flex>
          {/* Left */}
          <Box
            py="60px"
            px="48px"
            bg="#652CD31A"
            color="#171923"
            textAlign="center"
          >
            <Text fontSize="24px" fontWeight="800" pb="16px">
              Premium PRO
            </Text>
            <Heading as="h3" fontSize="60px" fontWeight="800" pb="8px">
              $329
            </Heading>
            <Text fontSize="18px" fontWeight="500" pb="24px">
              billed just once
            </Text>
            <Button
              colorScheme="purple"
              color="#F7FAFC"
              fontSize="16px"
              fontWeight="700"
              px="74px"
              py="14px"
              w="282px"
              size="lg"
            >
              Get Started
            </Button>
          </Box>

          {/* Right */}
          <Box py="60px" px="48px">
            <Text
              mb="24px"
              fontSize="18px"
              fontWeight="400"
              textAlign="left"
              flexWrap={"wrap"}
            >
              Access these features when you get this pricing package for your
              business.
            </Text>
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>Additional phone numbers</ListItem>
            <ListItem>Automated messages via Zapier</ListItem>
            <ListItem>24/7 support and consulting</ListItem>
          </Box>
        </Flex>
      </Box>
    </>
  )
}
