import {
  ConnectWallet,
  MediaRenderer,
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import {
  FARMER_ADDRESS,
  REWARDS_ADDRESS,
  STAKING_ADDRESS,
  TOOLS_ADDRESS,
} from "../const/addresses";
import { ClaimFarmer } from "../components/ClaimFarmer";
import { Inventory } from "../components/Inventory";
import { Avatar } from "../components/Avatar";
import { Equipped } from "../components/Equipped";
import { BigNumber, ethers } from "ethers";
import {
  Text,
  Box,
  Card,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
  Stack,
  Skeleton,
} from "@chakra-ui/react";

const Home: NextPage = () => {
  const address = useAddress();

  const { contract: farmercontract } = useContract(FARMER_ADDRESS);
  const { contract: toolsContract } = useContract(TOOLS_ADDRESS);
  const { contract: stakingContract } = useContract(STAKING_ADDRESS);
  const { contract: rewardContract } = useContract(REWARDS_ADDRESS);

  const { data: ownedFarmers, isLoading: loadingOwnedFarmers } = useOwnedNFTs(
    farmercontract,
    address
  );
  const { data: ownedTools, isLoading: loadingOwnedTools } = useOwnedNFTs(
    toolsContract,
    address
  );

  const { data: equippedTools } = useContractRead(
    stakingContract,
    "getStakeInfo",
    [address]
  );

  const { data: rewardBalance } = useContractRead(rewardContract, "balanceOf", [
    address,
  ]);

  if (!address) {
    return (
      <Container maxW={"1200px"} backgroundColor={"#0f1318"} color={"#e7e8e8"}>
        <Flex
          direction={"column"}
          h={"100vh"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading my={"40px"}>
            Welcome to Crypto Mine With NFT Stake Protocol
          </Heading>
          <ConnectWallet />
        </Flex>
      </Container>
    );
  }

  if (loadingOwnedFarmers) {
    return (
      <Container maxW={"1200px"}>
        <Flex>
          <Spinner />
        </Flex>
      </Container>
    );
  }

  if (ownedFarmers?.length === 0) {
    return (
      <Container maxW={"1200px"}>
        <ClaimFarmer />
      </Container>
    );
  }

  return (
    <Container maxW={"1200px"}>
      <br />
      <br />
      <SimpleGrid columns={2} spacing={10}>
        <Card backgroundColor={"#5A5A5A"} color={"#fefefe"} p={5}>
          <Heading>Farmer:</Heading>
          <SimpleGrid>
            <Box>
              <Avatar nft={ownedFarmers} />
            </Box>
            <br />
            <Box>
              <Text fontSize={"small"} fontWeight={"bold"}>
                $PADI Balance:
              </Text>
              {rewardBalance && (
                <p>{ethers.utils.formatUnits(rewardBalance, 18)}</p>
              )}
            </Box>
          </SimpleGrid>
        </Card>
        <Card backgroundColor={"#5A5A5A"} color={"#fefefe"} p={5}>
          <Heading>Inventory:</Heading>
          <Skeleton isLoaded={!loadingOwnedTools}>
            <br />
            <Inventory nft={ownedTools} />
          </Skeleton>
        </Card>
      </SimpleGrid>
      <Card backgroundColor={"#5A5A5A"} color={"#fefefe"} p={5} my={10}>
        <Heading mb={"30px"}>Equiped Tools:</Heading>
        <SimpleGrid columns={3} spacing={10}>
          {equippedTools &&
            equippedTools[0].map((nft: BigNumber) => (
              <Equipped key={nft.toNumber()} tokenId={nft.toNumber()} />
            ))}
        </SimpleGrid>
      </Card>
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
};

export default Home;
