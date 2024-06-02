import React from "react";
import { Container, VStack, HStack, Box, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, IconButton, Image } from "@chakra-ui/react";
import { FaChartLine, FaDollarSign, FaUsers, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <Text fontSize="4xl" fontWeight="bold">
          Business Dashboard
        </Text>

        <HStack spacing={8} width="100%" justifyContent="space-around">
          <StatBox icon={FaDollarSign} label="Revenue" value="$50,000" change="+5%" />
          <StatBox icon={FaShoppingCart} label="Sales" value="1,200" change="+3%" />
          <StatBox icon={FaUsers} label="Customers" value="300" change="+2%" />
          <StatBox icon={FaChartLine} label="Growth" value="15%" change="+1%" />
        </HStack>

        <Image src="https://images.unsplash.com/photo-1497215842964-222b430dc094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZHxlbnwwfHx8fDE3MTczNjM0OTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Business Dashboard" borderRadius="md" boxShadow="md" />
      </VStack>
    </Container>
  );
};

const StatBox = ({ icon, label, value, change }) => {
  return (
    <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md" width="200px" textAlign="center">
      <IconButton aria-label={label} icon={React.createElement(icon)} size="lg" isRound mb={4} />
      <Stat>
        <StatLabel>{label}</StatLabel>
        <StatNumber>{value}</StatNumber>
        <StatHelpText>
          <StatArrow type={change.startsWith("+") ? "increase" : "decrease"} />
          {change}
        </StatHelpText>
      </Stat>
    </Box>
  );
};

export default Index;
