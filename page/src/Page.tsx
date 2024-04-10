import { Text, Avatar, Box, Button, Input, Image } from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <Image boxSize={"80px"} ml={"40px"} src="dribble.png" alt="hello"></Image>
      <Box width={{ base: "150%", md: "100%" }}>
        <Text
          fontWeight={"bold"}
          fontSize={"30px"}
          ml={{ base: "110px", md: "-40px" }}
        >
          Welcome! Let's create your profile
        </Text>
        <br></br>
        <Text color={"#8590A2"} ml={{ base: "80px", md: "-130px" }}>
          Let others get to know you better! You can do these later
        </Text>
        <br></br>
        <Text
          ml={{ base: "-150px", md: "-390px" }}
          fontSize={"18px"}
          fontWeight={"bold"}
        >
          Add an avatar
        </Text>
        <br></br>
        <Avatar
          size="2xl"
          src="https://bit.ly/dan-abramov"
          ml={{ base: "60px", md: "-150px" }}
        />
        <Button
          ml={"100px"}
          colorScheme="gray"
          variant="outline"
          color={"black"}
        >
          Choose Image
        </Button>
        <Text
          color={"#8590A2"}
          mt={"-70px"}
          ml={{ base: "290px", md: "160px" }}
        >
          ! Or choose one of our defaults
        </Text>
        <br></br>
        <br></br>
        <br></br>
        <Text
          fontWeight={"bold"}
          ml={{ base: "-120px", md: "-360px" }}
          fontSize={"18px"}
        >
          Add your location
        </Text>
        <br></br>
        <Input
          variant="flushed"
          placeholder="San Francisco"
          _placeholder={{ color: "black", fontWeight: "bold" }}
          width={"510px"}
          ml={{ base: "190px", md: "-10px" }}
        />
      </Box>
      <br></br>
      <br></br>
      <Button
        colorScheme="pink"
        size="md"
        ml={{ base: "100px", md: "-310px" }}
        width={"200px"}
        isDisabled
      >
        Next
      </Button>
      <br></br>

      <Text
        ml={{ base: "100px", md: "-300px" }}
        fontSize={"13px"}
        color={"#8590A2"}
      >
        or Press <span style={{ fontWeight: "bold" }}>RETURN</span>
      </Text>
    </>
  );
}
