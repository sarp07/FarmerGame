import React from "react";
import { useContract, useNFTs } from "@thirdweb-dev/react";
import { TOOLS_ADDRESS } from "../const/addresses";
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
import NFT from "../components/NFT";
import { url } from "inspector";

export default function Home() {
  return (
    <Container
      maxW={"1200px"}
      h={"auto"}
      maxH={"auto"}
      backgroundColor={"#0f1318"}
    >
      <br />
      <br />
      <br />
      <Flex justifyContent="center" mt="20px">
        <Box maxW="450px">
          <Image borderRadius="25px" src="/banner.jpg" alt="Dan Abramov" />
        </Box>
        <Spacer />
        <Box maxW="550px" borderRadius="25px">
          <Stack mx={4}>
            <p style={{ fontSize: "14pt", textAlign: "justify" }}>
              Sci-Fi Farmer is an NFT Stake Protocol. We made this protocol a
              game to make it more fun. You can join the game by choosing your
              avatar and equipment. Equipment (Tools) has been created as 8
              pieces in the test network for now. Additional equipment will be
              created in the following processes. In order to enjoy the game
              more, we have added a package system and a market area to the
              game. Or they will be able to buy through the market area.
            </p>
            <br />
            <p style={{ fontSize: "14pt", textAlign: "justify" }}>
              Marketplace and bundles are of greater importance for Battle Mode.
              Battle mod is still in development. When the development period is
              completed, the Beta process will begin and all our players will be
              entitled to participate in this beta. Battle system and winning
              logic will be fully reciprocated. If we consider it as Player1 and
              Player2, the one who started the war will place the bet in the
              middle and the participant in the war will accept this bet. As a
              result, the winner will be able to win the PAD Token collected in
              the pool. In addition, PvE will be added to the game model in the
              future, and in this model, players will be able to earn certain
              equipment and various game NFTs from drops.
            </p>
          </Stack>
        </Box>
      </Flex>
      <br />
      <div className="gamfi-about-secion pb-80 md-pb-45">
        <div className="container">
          <div className="pt-130 md-pt-80 heading-area align-items-center d-flex justify-content-between mb-30">
            <div className="sec-heading">
              <div className="sub-inner mb-15">
                <span className="sub-title">3 easy steps</span>
                <img
                  className="heading-left-image"
                  src="/steps.png"
                  alt="Steps-Image"
                />
              </div>
              <h2 className="title">How to Play</h2>
            </div>
          </div>
          <div
            className="participate-area row"
            style={{ justifyContent: "space-between" }}
          >
            <div className="col-lg-4" style={{ width: "350px" }}>
              <div
                className="participate-item d-flex wow fadeInUp"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <div className="number-image">
                  <img src="/participate-image.png" alt="Participate-Image" />
                </div>
                <div className="participate-info">
                  <h4 className="mb-10">Claim Farmer</h4>
                  <p className="description" style={{ textAlign: "justify" }}>
                    After connecting your wallet, you can choose your avatar.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4" style={{ width: "350px" }}>
              <div
                className="participate-item d-flex wow fadeInUp mr-30"
                data-wow-delay="200ms"
                data-wow-duration="2000ms"
              >
                <div className="number-image">
                  <img src="/participate-image2.png" alt="Participate-Image" />
                </div>
                <div className="participate-info">
                  <h4 className="mb-10">Choice a Equipment</h4>
                  <p className="description" style={{ textAlign: "justify" }}>
                    After choosing your avatar, you can participate in the
                    farming activity by choosing the equipment (tool) to start
                    Farming.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4" style={{ width: "350px" }}>
              <div
                className="participate-item d-flex wow fadeInUp mr-20"
                data-wow-delay="300ms"
                data-wow-duration="2500ms"
              >
                <div className="number-image">
                  <img src="/participate-image3.png" alt="Participate-Image" />
                </div>
                <div className="participate-info">
                  <h4 className="mb-10">Start Farming</h4>
                  <p className="description" style={{ textAlign: "justify" }}>
                    If everything is ok, start farming using your
                    equipment(tool) and enjoy passive earnings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Flex justifyContent="center" gap={120}>
        <Box maxW={"200px"} justifyContent="center">
          <HamburgerIcon w={10} h={10} color="blue.500"></HamburgerIcon>
          <br />
          <br />
          <p style={{ textAlign: "justify" }}>
            Sci-Fi Farmer and Palladium Token is a very diverse project. Using
            Farming, PvP and PvE modes, WEB3 offers participants a wide variety
            of fun modes in the playground. We are based on a wide variety of
            applications rather than today`s WEB3 applications. We find it
            remarkable and entertaining in every way.
          </p>
        </Box>
        <Box maxW={"200px"} justifyContent="center">
          <TimeIcon w={10} h={10} color="green.500" />
          <br />
          <br />
          <p style={{ textAlign: "justify" }}>
            We know how important your time is. That`s why we did not add a
            timer to the NFT Stake Protocol, your NFTs will continue to bring
            you passive income even if you are not active.
          </p>
        </Box>
        <Box maxW={"200px"} justifyContent="center">
          <StarIcon w={10} h={10} color="gray.500"></StarIcon>
          <br />
          <br />
          <p style={{ textAlign: "justify" }}>
            We know how much fun graphic visuals add to your activities. For
            this reason, we created our graphics with the help of today`s
            technologies, AI structures.
          </p>
        </Box>
        <Box maxW={"200px"} justifyContent="center">
          <AtSignIcon w={10} h={10} color="red.500"></AtSignIcon>
          <br />
          <br />
          <p style={{ textAlign: "justify" }}>
            This project will be a general and ongoing project. It is a project
            that has no borders and always cares about diversity. For this
            reason, how much interaction will bring extras to the development of
            the projects and your earnings.
          </p>
        </Box>
      </Flex>
      <br />
      <br />
      <Box>
        <Box>
          <div className="gamfi-tokenomics-section tokenomics-left-right-shape pb-115 pt-115 md-pt-75 md-pb-45">
            <div className="container">
              <div className="sec-heading">
                <div className="sub-inner mb-15">
                  <span className="sub-title">padi token</span>
                  <img
                    className="heading-left-image"
                    src="/steps.png"
                    alt="Steps-Image"
                  />
                </div>
                <h2 className="title">Tokenomics</h2>
              </div>
              <div className="tokenomics-item d-flex">
                <div className="tokenomics-menu pr-60">
                  <div className="dsc">Team</div>
                  <h5>7.5%</h5>
                </div>
                <div className="tokenomics-menu pr-63">
                  <div className="dsc">AirDrop</div>
                  <h5>9.50%</h5>
                </div>
                <div className="tokenomics-menu pr-65">
                  <div className="dsc">Advisors</div>
                  <h5>10.00%</h5>
                </div>
                <div className="tokenomics-menu pr-95">
                  <div className="dsc">Liquidity</div>
                  <h5>12.00%</h5>
                </div>
                <div className="tokenomics-menu pr-105">
                  <div className="dsc">Pre-Sale</div>
                  <h5>16.33%</h5>
                </div>
                <div className="tokenomics-menu pr-122">
                  <div className="dsc">Marketing</div>
                  <h5>18.00%</h5>
                </div>
                <div className="tokenomics-menu">
                  <div className="dsc">Ecosystem</div>
                  <h5>30.00%</h5>
                </div>
              </div>
              <div className="tokenomics-image mb-60 md-mb-40">
                <img src="/tokenomices-image.jpg" alt="Tokenomics-Image" />
              </div>
              <div className="tokenomics-counter">
                <div className="row">
                  <div className="col-lg-3 col-md-6 mb-30">
                    <div className="counter-info">
                      <h4 className="counter-number mb-6">
                        <span className="counter">8</span>
                      </h4>
                      <h5>Tools NFT Cards</h5>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-30">
                    <div className="counter-info">
                      <h4 className="counter-number mb-6">
                        <span className="counter">4</span>
                      </h4>
                      <h5>Avatars NFT Cards</h5>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-30">
                    <div className="counter-info">
                      <h4 className="counter-number mb-6">
                        <span className="counter">500</span> M
                      </h4>
                      <h5>PADI - Total Supply</h5>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-30">
                    <div className="counter-info">
                      <h4 className="counter-number mb-6">
                        $<span className="counter">0</span>
                      </h4>
                      <h5>Initial Market Cap</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
      <br />
      <Box>
        <div className="sec-heading">
          <div className="sub-inner mb-15">
            <span className="sub-title">upgrading</span>
            <img
              className="heading-left-image"
              src="/steps.png"
              alt="Steps-Image"
            />
          </div>
          <h2 className="title">Roadmap</h2>
        </div>
        <div className="gamfiRoadMap">
          <div className="RoadMapSect">
            <div className="container RoadMapContainer">
              <div className="Roadmap2021">
                <div className="roadmap2021Divider">
                  <span>2023</span>
                </div>
                <div className="row m-0">
                  <div className="col-md-6 p-0">
                    <div className="RodmapConetent RodmapLeftConetent">
                      <div className="RodmapConetentbox RodmapConetentbox1">
                        <h3>Q2 2023</h3>
                        <ul>
                          <li>
                            <span>
                              <img
                                src="/kycimg/RMcheckicon.svg"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            Launch Beta on TestNet
                          </li>
                          <li>
                            <span>
                              <img
                                src="/kycimg/munies.svg"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            Start AirDrop for Beta
                          </li>
                          <li>
                            <span>
                              <img
                                src="/kycimg/munies.svg"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            Development of NFT Marketplace
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 p-0">
                    <div className="RodmapConetent RodmapRightConetent">
                      <div className="RodmapConetentbox RodmapConetentbox2">
                        <h3>Q3 2023</h3>
                        <ul>
                          <li>
                            <span>
                              <img
                                src="/kycimg/munies.svg"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            First Packs Pre-Sale
                          </li>
                          <li>
                            <span>
                              <img
                                src="/kycimg/munies.svg"
                                alt="icon"
                                className="img-fluid"
                              />
                              List on CEX
                            </span>
                          </li>
                          <li>
                            <span>
                              <img
                                src="/kycimg/munies.svg"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            List process on DEX
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 p-0">
                    <div className="RodmapConetent RodmapLeftConetent">
                      <div className="RodmapConetentbox RodmapConetentbox3">
                        <br />
                        <br />
                        <h3>Q4 2023</h3>
                        <ul>
                          <li>
                            <span>
                              <img
                                src="/kycimg/munies.svg"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            List on more DEX
                          </li>
                          <li>
                            <span>
                              <img
                                src="/kycimg/munies.svg"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            Development on PvP Mode
                          </li>
                          <li>
                            <span>
                              <img
                                src="/kycimg/munies.svg"
                                alt="icon"
                                className="img-fluid"
                              />
                            </span>
                            Development on PvE Mode
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <br />
      <br />
      <Flex>
        <div className="gamfi-tokenomics-section tokenomics-left-right-shape pb-115 pt-115 md-pt-75 md-pb-45">
          <div className="container">
            <div className="sec-heading">
              <div className="sub-inner mb-15">
                <span className="sub-title">choice your style</span>
                <img
                  className="heading-left-image"
                  src="/steps.png"
                  alt="Steps-Image"
                />
              </div>
              <h2 className="title">Avatars</h2>
            </div>
          </div>
        </div>
      </Flex>
      <SimpleGrid maxW="1600px">
        <Flex gap={100} justifyContent="center" ml="25px">
          <Box maxW="300px">
            <Image borderRadius="25px" src="/avatars/khiyoshi.jpg" alt="1" />
          </Box>

          <Box maxW="300px">
            <Image borderRadius="25px" src="/avatars/catWomen.jpg" alt="2" />
          </Box>

          <Box maxW="300px">
            <Image borderRadius="25px" src="/avatars/bigHead.jpg" alt="3" />
          </Box>

          <Box maxW="300px">
            <Image borderRadius="25px" src="/avatars/cAllien.jpg" alt="4" />
          </Box>
        </Flex>
      </SimpleGrid>
      <br />
      <br />
      <br />
      <br />
      <Flex>
        <div className="gamfi-tokenomics-section tokenomics-left-right-shape pb-115 pt-115 md-pt-75 md-pb-45">
          <div className="container">
            <div className="sec-heading">
              <div className="sub-inner mb-15">
                <span className="sub-title">choice your tools</span>
                <img
                  className="heading-left-image"
                  src="/steps.png"
                  alt="Steps-Image"
                />
              </div>
              <h2 className="title">Equipments</h2>
            </div>
          </div>
        </div>
      </Flex>
      <SimpleGrid maxW="1600px">
        <Flex gap={100} justifyContent="center" ml="25px">
          <Box maxW="300px">
            <Image borderRadius="25px" src="/tools/bigDrill.jpg" alt="1" />
          </Box>

          <Box maxW="300px">
            <Image borderRadius="25px" src="/tools/lazerDrill.jpg" alt="2" />
          </Box>

          <Box maxW="300px">
            <Image borderRadius="25px" src="/tools/rockDrill.jpg" alt="3" />
          </Box>

          <Box maxW="300px">
            <Image borderRadius="25px" src="/tools/dozer.jpg" alt="4" />
          </Box>
        </Flex>
        <br />
        <br />
        <br />
        <br />
        <Flex gap={100} justifyContent="center" ml="25px">
          <Box maxW="300px">
            <Image borderRadius="25px" src="/tools/dynamite.jpg" alt="1" />
          </Box>

          <Box maxW="300px">
            <Image borderRadius="25px" src="/tools/drill.jpg" alt="2" />
          </Box>

          <Box maxW="300px">
            <Image borderRadius="25px" src="/tools/shovel.jpg" alt="3" />
          </Box>

          <Box maxW="300px">
            <Image borderRadius="25px" src="/tools/hand.jpg" alt="4" />
          </Box>
        </Flex>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </SimpleGrid>
      <br />
      <br />
      <div className="gamfi-partner-section pb-110 md-pb-80">
        <div className="container">
          <div className="sec-heading text-center">
            <div className="sub-inner mb-55">
              <img
                className="heading-right-image"
                src="/steps2.png"
                alt="Steps-Image"
              />
              <span className="sub-title white-color">Our partners</span>
              <img
                className="heading-left-image"
                src="/steps.png"
                alt="Steps-Image"
              />
            </div>
          </div>
          <div className="gamfi-partner-inner">
            <div className="partner-image">
              <img
                style={{ maxWidth: "200px" }}
                src="/partner/partner-image.png"
                alt="Partner-Image"
              />
            </div>
            <div className="partner-image">
              <img
                style={{ maxWidth: "200px" }}
                src="/partner/partner-image2.png"
                alt="Partner-Image"
              />
            </div>
            <div className="partner-image">
              <img
                style={{ maxWidth: "200px" }}
                src="/partner/partner-image3.png"
                alt="Partner-Image"
              />
            </div>
            <div className="partner-image">
              <img
                style={{ maxWidth: "200px" }}
                src="/partner/partner-image5.png"
                alt="Partner-Image"
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="gamfi-partner-section pb-110 md-pb-80">
        <div className="container">
          <div className="sec-heading text-center">
            <div className="sub-inner mb-55">
              <span className="sub-title white-color">Will List On</span>
            </div>
          </div>
          <div className="gamfi-partner-inner">
            <div className="partner-image">
              <img
                style={{ maxWidth: "200px" }}
                src="/partner/lbank.png"
                alt="Partner-Image"
              />
            </div>
            <div className="partner-image">
              <img
                style={{ maxWidth: "200px" }}
                src="/partner/probit.png"
                alt="Partner-Image"
              />
            </div>
            <div className="partner-image">
              <img
                style={{ maxWidth: "200px" }}
                src="/partner/bitget.png"
                alt="Partner-Image"
              />
            </div>
            <div className="partner-image">
              <img
                style={{ maxWidth: "200px" }}
                src="/partner/coinstbit.png"
                alt="Partner-Image"
              />
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="gamfi-partner-inner">
            <div className="partner-image">
              <img
                style={{ maxWidth: "200px" }}
                src="/partner/cmc.png"
                alt="Partner-Image"
              />
            </div>
            <div className="partner-image">
              <img
                style={{ maxWidth: "200px", cursor: "pointer" }}
                src="/partner/quickswap.png"
                alt="Partner-Image"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
