import { Container, Flex, Heading, Link, Box } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function NavBar() {
  return (
    <Container
      backgroundColor={"#0f1318"}
      color={"#e7e8e8"}
      maxW={"1200px"}
      py={4}
    >
      <Flex direction={"row"} justifyContent={"space-between"}>
        <Heading>
          <Link href={"/"}>
            <img src="logo.png" width={"180px"} alt="logo" id="navbar" />
          </Link>
          <Flex
            style={{
              marginLeft: "auto",
              marginTop: "15px",
              fontWeight: "300",
              fontSize: "12px",
            }}
          >
            ( NFT Stake Protocol )
          </Flex>
        </Heading>
        <Flex alignItems={"center"}>
          <Link href={"/home"} mx={2}>
            Farming
          </Link>
          <Link href={"/battle"} mx={2}>
            Battle
          </Link>
          <Link href={"/shop"} mx={2}>
            Shop
          </Link>
          <Link href={"/packs"} mx={2}>
            Packs
          </Link>
          <Link href={"http://localhost:3000"} mx={2}>
            Marketplace
          </Link>
        </Flex>
        <Box mt={"45px"}>
          <ConnectWallet />
        </Box>
      </Flex>
    </Container>
  );
}
