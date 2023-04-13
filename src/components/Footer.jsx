import React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <Box bgColor="gray.100" py="10">
      <Flex direction="column" align="center">
        <Text fontWeight="bold" mb="4">
          Connect with us
        </Text>
        <Flex direction="row" justify="center" mb="6">
          <Link href="#" mr="4">
            <FaTwitter />
          </Link>
          <Link href="#" mr="4">
            <FaFacebook />
          </Link>
          <Link href="#" mr="4">
            <FaInstagram />
          </Link>
        </Flex>
        <Flex direction="row" wrap="wrap" justify="center">
          <Link href="#" mr="4" mb="4">
            Trading tools
          </Link>
          <Link href="#" mr="4" mb="4">
            Market analysis
          </Link>
          <Link href="#" mr="4" mb="4">
            News and updates
          </Link>
          <Link href="#" mr="4" mb="4">
            Customer support
          </Link>
        </Flex>
        <Text mt="6" textAlign="center">
          © 2023 Crypto Trading. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
