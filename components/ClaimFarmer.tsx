import {
  MediaRenderer,
  Web3Button,
  useContract,
  useContractMetadata,
  useNFT,
} from "@thirdweb-dev/react";
import { FARMER_ADDRESS } from "../const/addresses";
import {
  Box,
  Spacer,
  Container,
  Spinner,
  SimpleGrid,
  Flex,
  Heading,
} from "@chakra-ui/react";

export function ClaimFarmer() {
  const { contract } = useContract(FARMER_ADDRESS);
  const { data: metadata } = useContractMetadata(contract);

  return (
    <Container maxW={"1200px"}>
      <Flex
        color={"#fefefe"}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading>Choice your Avatar</Heading>
        <Box color={"#fefefe"} borderRadius={"8px"} overflow={"hidden"} my={10}>
          <Flex>
            <Box mx={"2rem"}>
              <MediaRenderer
                src="https://ipfs-2.thirdwebcdn.com/ipfs/QmUWf82okgfGZy637vA2zyzFyUMCR3ypHuAyuPgT2pnwSL/0.jpg"
                height="auto"
                width="200px"
              />
            </Box>
            <Box mx={"2rem"}>
              <MediaRenderer
                src="https://ipfs-2.thirdwebcdn.com/ipfs/QmQggQPH79aeWy1w7nHcWVyst8q92xuv2PgJTc2BY6zgeM/1.jpg"
                height="auto"
                width="200px"
              />
            </Box>
            <Box mx={"2rem"}>
              <MediaRenderer
                src="https://ipfs-2.thirdwebcdn.com/ipfs/QmXg3VobjYeR8jpem149XZntt7UdJMtSoUfdTYSNCobNxB/2.jpg"
                height="auto"
                width="200px"
              />
            </Box>
            <Box mx={"2rem"}>
              <MediaRenderer
                src="https://ipfs-2.thirdwebcdn.com/ipfs/Qmf7tRNGDL84Uw4DyhTYGckr8GpJAKjwDabLjrd57k8SgJ/3.jpg"
                height="auto"
                width="200px"
              />
            </Box>
          </Flex>
        </Box>
        <Flex maxW={"1200px"}>
          <Box justifyContent={"space-between"}>
            <Flex gap={20}>
              <Box mx={"1rem"}>
                <Web3Button
                  contractAddress={FARMER_ADDRESS}
                  action={(contract) => contract.erc1155.claim(0, 1)}
                >
                  Claim Farmer
                </Web3Button>
              </Box>
              <Box mx={"1rem"}>
                <Web3Button
                  contractAddress={FARMER_ADDRESS}
                  action={(contract) => contract.erc1155.claim(1, 1)}
                >
                  Claim Farmer
                </Web3Button>
              </Box>
              <Box mx={"1rem"}>
                <Web3Button
                  contractAddress={FARMER_ADDRESS}
                  action={(contract) => contract.erc1155.claim(2, 1)}
                >
                  Claim Farmer
                </Web3Button>
              </Box>
              <Box mx={"1rem"}>
                <Web3Button
                  contractAddress={FARMER_ADDRESS}
                  action={(contract) => contract.erc1155.claim(3, 1)}
                >
                  Claim Farmer
                </Web3Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}
