import {
  Container,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import linkedin2 from "@/assets/linkedin2.svg";
import twitter2 from "@/assets/twitter2.svg";
import dribble2 from "@/assets/dribble2.svg";
import behance2 from "@/assets/behance2.svg";
import insta2 from "@/assets/insta2.svg";

const Connect = () => {
  const textColor = useColorModeValue("black", "white");

  return (
    <Container maxW='7xl'>
      <Flex
        w='100%'
        justify='space-between'
        gap={{ base: "60px", xl: "0px" }}
        pb='100px'
        pt={{ base: "50px", xl: "0px" }}
        direction={{ base: "column", xl: "row" }}
      >
        <VStack w={{ base: "full", xl: "40%" }} align='flex-start'>
          <Text
            color={textColor}
            align={{ base: "center", xl: "initial" }}
            fontSize={{ base: "25px", xl: "48px" }}
            fontWeight='bold'
            lineHeight={{ base: "32px", xl: "50px" }}
          >
            Would you love to get to know me more? Follow me on social media
          </Text>
        </VStack>

        <VStack w={{ base: "full", xl: "50%" }} spacing={{ base: "30px", xl: "70px" }}>
          <HStack spacing={{ base: "50px", xl: "70px" }}>
            <Link
              isExternal
              href='https://www.dribbble.com/Prince_Jese'
              _active={{
                transform: "scale(0.98)",
                transition: "0.3s ease all",
              }}
            >
              <Image src={dribble2} w={{ base: "75px", xl: "90px" }} />
            </Link>

            <Link
              isExternal
              href='https://twitter.com/Prince_Jese'
              _active={{
                transform: "scale(0.98)",
                transition: "0.3s ease all",
              }}
            >
              <Image src={twitter2} w={{ base: "75px", xl: "90px" }} />
            </Link>

            <Link
              isExternal
              href='https://www.behance.net/ayomideahamefu'
              _active={{
                transform: "scale(0.98)",
                transition: "0.3s ease all",
              }}
            >
              <Image src={behance2} w={{ base: "75px", xl: "90px" }} />
            </Link>
          </HStack>

          <HStack spacing={{ base: "50px", xl: "70px" }}>
            <Link
              isExternal
              href='https://www.linkedin.com/in/princejese/'
              _active={{
                transform: "scale(0.98)",
                transition: "0.3s ease all",
              }}
            >
              <Image src={linkedin2} w={{ base: "75px", xl: "90px" }} />
            </Link>

            <Link
              isExternal
              href='https://www.instagram.com/prince_jese/'
              _active={{
                transform: "scale(0.98)",
                transition: "0.3s ease all",
              }}
            >
              <Image src={insta2} w={{ base: "75px", xl: "90px" }} />
            </Link>
          </HStack>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Connect;
