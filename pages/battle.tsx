//@ts-nocheck
import React from "react";
import Link from "next/link";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  TimeIcon,
  AtSignIcon,
  HamburgerIcon,
  StarIcon,
} from "@chakra-ui/icons";
import {
  Text,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Spinner,
  AspectRatio,
  Box,
  Stack,
  Image,
  Grid,
} from "@chakra-ui/react";

const battle = () => {
  return (
    <Container maxW={"1200px"}>
    <br />
    <br />
      <Flex justifyContent="center" alignItems="center">
        <Box>
          <Flex mr="50px" maxW={"1200px"}>
            <Image maxW={"200px"} borderRadius={"25px"} mx={"150px"} src="/player2.jpg" alt="battleShip" />
            <Spacer />
            <Image maxW={"250px"} src="/vs.png" alt="vs" />
            <Spacer />
            <Image maxW={"200px"} borderRadius={"25px"} mx={"150px"} src="/player1.jpg" alt="battleShip" />
          </Flex>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Flex>
            <Box>
              <div className="wrapper">
                <Heading fontSize={"25pt"} ml={"485px"}>
                    coming soon<span className="dot">. . .</span>
                </Heading>
              </div>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <br />
      <br />
    </Container>
  );
};

export default battle;
