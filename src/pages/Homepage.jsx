import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Homepage/Navbar";
import note from "../assets/blue2.png";

export default function Homepage() {
  return (
    <Box padding={8}>
      <Image position={"absolute"} top={40} right={10} w={500} src={note} />
      <Heading mt={16} textAlign={"start"} size={"4xl"}>
        BayMax
      </Heading>
      <Text mt={8} maxW={"50%"} textAlign={"justify"}>
        Namaste ,Bonjour ,Nǐ hǎo, Hola  🙏🏻🙏🏻🙏🏻🙏🏻
        Hello, I am BayMax, your personal assistant.
        I am here to assist you in organizing your daily tasks and ensuring that you don't miss any important deadlines. To begin, kindly provide me with a list of your daily priorities each morning so that we can effectively manage your time and achieve your goals. With your dedication and my support, I am confident that we will accomplish great things together.
      </Text>
    </Box>
  );
}

