import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { PolygonZkevmTestnet } from "@thirdweb-dev/chains";
import { ChakraProvider, DarkMode } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { extendTheme } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Footer from "../components/Footer";

// STYLES
// Bootstrap v4.4.1 css
import '../assets/css/bootstrap.min.css';
// animate css
import '../assets/css/animate.css';
// magnific css
import '../assets/css/magnific-popup.css';
// owl.carousel css
import '../assets/css/owl.carousel.css';
// off canvas css
import '../assets/css/off-canvas.css';
// flaticon css
import '../assets/css/ico-moon-fonts.css';
// spacing css
import '../assets/css/sc-spacing.css';
// style css
import '../assets/css/style.css';
// responsive css
import '../assets/css/responsive.css';
// background colors

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
// const activeChain = "PolygonZkevmTestnet";
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Box bg="#0f1318" color="#e7e8e8">
      <ThirdwebProvider activeChain={activeChain}>
        <ChakraProvider>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
        </ChakraProvider>
      </ThirdwebProvider>
    </Box>
  );
}

export default MyApp;
