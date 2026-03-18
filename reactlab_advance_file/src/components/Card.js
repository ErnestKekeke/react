import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  // return null;
  return (
  <VStack
    bg="white"
    borderRadius="lg"
    overflow="hidden"
    align="start"
    spacing={0}
    boxShadow="md"
  >
    {/* Image */}
    <Image src={imageSrc} alt={title} w="100%" h="200px" objectFit="cover" />

    {/* Content */}
    <VStack align="start" p={4} spacing={3}>
      <Heading size="md">{title}</Heading>

      <Text color="gray.600">{description}</Text>

      <HStack spacing={2} color="teal.500" fontWeight="bold">
        <Text>See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  </VStack>
);
};

export default Card;
