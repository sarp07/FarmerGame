import { useContract, useNFTs } from "@thirdweb-dev/react";
import { TOOLS_ADDRESS } from "../const/addresses";
import Link from "next/link";
import {
  Text,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import NFT from "../components/NFT";

export default function Shop() {
  const { contract } = useContract(TOOLS_ADDRESS);
  const { data: nfts } = useNFTs(contract);
  console.log(nfts);

  return (
    <Container maxW={"1200px"}>
    <br />
      <Flex
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={"#0f1318"}
      >
        <Link href="/home">
          <Button>Back</Button>
        </Link>
      </Flex>
      <br />
      <Heading mt={"40px"}>Packs</Heading>
      <Text>Purchase Packs with $MATIC to increase your earnings.</Text>
      <br />
      {!nfts ? (
        <Flex h={"50vh"} justifyContent={"center"} alignItems={"center"}>
          <Spinner />
        </Flex>
      ) : (
        <SimpleGrid columns={3} spacing={10}>
          {nfts?.map((nftItem) => (
            <NFT key={nftItem.metadata.id} nft={nftItem} />
          ))}
        </SimpleGrid>
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
}
