import { useState, useEffect } from "react";
import {
  MediaRenderer,
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
  useNFT,
} from "@thirdweb-dev/react";
import { STAKING_ADDRESS, TOOLS_ADDRESS } from "../const/addresses";
import { ethers } from "ethers";
import styles from "../styles/Home.module.css";
import { Text, Box, Card, Stack, Flex } from "@chakra-ui/react";

interface EquippedProps {
  tokenId: number;
}

export const Equipped = (props: EquippedProps) => {
  const address = useAddress();

  const { contract: toolContract } = useContract(TOOLS_ADDRESS);
  const { data: nft } = useNFT(toolContract, props.tokenId);

  const { contract: stakingContract } = useContract(STAKING_ADDRESS);

  const [claimableRewards, setClaimableRewards] = useState([0, 0]);

  useEffect(() => {
    const fetchClaimableRewards = async () => {
      if (stakingContract) {
        const rewards = await stakingContract.call("getStakeInfoForToken", [
          props.tokenId,
          address,
        ]);
        setClaimableRewards(rewards);
      }
    };

    // İlk kez çalıştır
    fetchClaimableRewards();

    // Yarım saniyede bir güncelleme yap
    const interval = setInterval(() => {
      fetchClaimableRewards();
    }, 250);

    // Temizleme işlemi
    return () => {
      clearInterval(interval);
    };
  }, [stakingContract, props.tokenId, address]);

  if (!nft) {
    return null; // Render nothing if nft is null or undefined
  }

  return (
    <Box>
      <Card backgroundColor={"#5A5A5A"} color={"#fefefe"} className={styles.equipcontainer} p={5}>
        <Flex>
          <Box >
            <MediaRenderer src={nft.metadata.image} height="80%" width="80%" />
          </Box>
          <Stack spacing={1}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              {nft.metadata.name}
            </Text>
            <Text>
              Equipped: {ethers.utils.formatUnits(claimableRewards[0], 0)}
            </Text>
            <Web3Button
              contractAddress={STAKING_ADDRESS}
              action={(contract) =>
                contract.call("withdraw", [props.tokenId, 1])
              }
              className={styles.unequipbutton}
            >
              Unequip
            </Web3Button>
          </Stack>
        </Flex>
        <Box mt={5}>
          <Text>Claimable $ORE:</Text>
          <Text>{ethers.utils.formatUnits(claimableRewards[1], 18)}</Text>
          <Web3Button
            contractAddress={STAKING_ADDRESS}
            action={(contract) =>
              contract.call("claimRewards", [props.tokenId])
            }
          >
            Claim $ORE
          </Web3Button>
        </Box>
      </Card>
    </Box>
  );
};
