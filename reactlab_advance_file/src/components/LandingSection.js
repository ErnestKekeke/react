import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

// Import your local photo
import myPhoto from "../images/ernestkekekephoto.png";

const greeting = "Hello, I am Ernest Kekeke!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
<FullScreenSection
  justifyContent="center"
  alignItems="center"
  isDarkBackground
  backgroundColor="#2A4365"
>
  <VStack spacing={6}>
    <Avatar
      size="2xl"
      name="Pete"
      // src="https://i.pravatar.cc/150?img=7"
      src={myPhoto} // Use imported photo here
    />

    <Heading as="h1" size="xl">
      {greeting}
    </Heading>

    <Heading as="h2" size="md" fontWeight="normal">
      {bio1}
    </Heading>

    <Heading as="h2" size="md" fontWeight="normal">
      {bio2}
    </Heading>
  </VStack>
</FullScreenSection>
);

export default LandingSection;
