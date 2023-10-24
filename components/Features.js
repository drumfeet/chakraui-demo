import { Box, Flex, Icon, Text } from "@chakra-ui/react"
import {
  MoneyBackGuaranteeIcon,
  HassleFreeIcon,
  MonthlySubscriptionIcon,
} from "./images/icons/icons"

export const FeaturesList = ({ children, iconName }) => (
  <>
    <Icon as={iconName} />
    <Text
    //  pl="24px"
    >
      {children}
    </Text>
  </>
)

export default function Features() {
  return (
    <Flex
      //  bg="blue"
      justifyContent="center"
    >
      <Flex
        flexDirection="row"
        // bg="red"
        // gap="24px"
        color="#171923"
        fontSize="18px"
        fontWeight="700"
      >
        <FeaturesList iconName={MoneyBackGuaranteeIcon}>
          30 days money back Guarantee
        </FeaturesList>
        <FeaturesList iconName={HassleFreeIcon}>
          <>
            No setup fee
            <br />
            100% hassle-free
          </>
        </FeaturesList>
        <FeaturesList iconName={MonthlySubscriptionIcon}>
          <>
            No monthly subscription
            <br />
            Pay once and for all
          </>
        </FeaturesList>
      </Flex>
    </Flex>
  )
}
