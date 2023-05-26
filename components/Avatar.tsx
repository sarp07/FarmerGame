import {
  MediaRenderer,
  Web3Button,
  useAddress,
  useContract,
} from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";
import { STAKING_ADDRESS, TOOLS_ADDRESS } from "../const/addresses";
import Link from "next/link";
import { Text, Box, Button, Card, SimpleGrid, Stack } from "@chakra-ui/react";

type Props = {
  nft: NFT[] | undefined;
};

export function Avatar({ nft }: Props) {
  const address = useAddress();
  const { contract: toolContract } = useContract(TOOLS_ADDRESS);
  const { contract: stakingContract } = useContract(STAKING_ADDRESS);

  async function stakeNFT(id: string) {
    if (!address) {
      return;
    }

    const isApproved = await toolContract?.erc1155.isApproved(
      address,
      STAKING_ADDRESS
    );

    if (!isApproved) {
      await toolContract?.erc1155.setApprovalForAll(STAKING_ADDRESS, true);
    }
    await stakingContract?.call("stake", [id, 1]);
  }

  return (
    <SimpleGrid columns={3} spacing={4}>
      {nft?.map((nft) => (
        <Card
          key={nft.metadata.id}
          backgroundColor={"#5A5A5A"}
          color={"#fefefe"}
        >
          <Box>
            <MediaRenderer
              src={nft.metadata.image}
              height="auto"
              width="300px"
            />
          </Box>
        </Card>
      ))}
    </SimpleGrid>
  );
}
