import { Box,
  Button,
  Flex,
  Heading,
  Image,
  Tag,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure, } from "@chakra-ui/react";
import React from "react";
import Formi from "./Formi";

function MovieSummary({ item }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box height="100%" width="100%" color="white" mt={{
        base: "20px",
        md: "20px",
        lg: "0rem",
        xl: "0rem",
      }}>
        <Flex
          height="100%"
          width="100%"
          flexDir={{
            base: "column",
            md: "column",
            lg: "row",
            xl: "row",
          }}
        >
          <Box 
            flex={{
              base: "100%",
              md: "100%",
              lg: "40%",
              xl: "40%",
            }}
            display="flex"
            justifyContent={{
              base: "center",
              md: "center",
              lg: "end",
              xl: "end",
            }}
            alignItems="center"
          

          >
            <Image
              src={item.image.original}
              alt={item.name}
             width={{
              base: "70%",
              md: "70%",
              lg: "80%",
              xl: "80%",
             }}
              objectFit="cover"
            />
          </Box>
          <Box flex={{
              base: "100%",
              md: "100%",
              lg: "60%",
              xl: "60%",
          }}
            display="flex"
            justifyContent={{
              base: "center",
              md: "center",
              lg: "start",
              xl: "start",
            }}
            alignItems="center"
            ml={{
              base: "0rem",
              md: "0rem",
              lg: "40px",
              xl: "40px",
            }}
            mt={{
              base: "20px",
              md: "20px",
              lg: "5rem",
              xl: "5rem",
            }}
            pb="100px"
          >
            <Box height="70%" width="80%" >
              <Heading
                as="h1"
                size="2xl"
                color="white"
                textAlign="center"
                mb="20px"
              >
                {item.name}
              </Heading>
              <Text
                fontSize="1.2rem"
                color="white"
                textAlign="justify"
                lineHeight="1.5"
                >
                {item.summary.replace(/<[^>]*>?/gm, "")}
                </Text>
                <Box
                  display={{
                    base: "none",
                    md: "none",
                    lg: "flex",
                    xl: "flex",
                  }}
                  justifyContent="start"
                  alignItems="center"
                  mt="1rem"
                  flexWrap="wrap"
                  pb={{
                    base: "5rem",
                    md: "5rem",
                    lg: "0rem",
                    xl: "0rem",

                  }}

                >
                  <Tag
                  size='lg'
                  borderRadius="full"
                  variant="solid"
                  colorScheme="purple"
                  m={5}

                    >
                    Rating: {item.rating.average ? item.rating.average : 'N/A'}
                  </Tag>
                  <Tag
                    size='lg'
                  borderRadius="full"
                  variant="solid"
                  colorScheme="green"
                  m={5}
                    >
                    Premiered: {
                      item.premiered ? item.premiered : 'N/A'
                    }
                  </Tag>
                    <Tag
                      size='lg'
                  borderRadius="full"
                  variant="solid"
                  colorScheme="yellow"
                  m={5}
                    >
                      Status: {
                        item.status ? item.status : 'N/A'
                      }
                    </Tag>
                    <Tag
                        size='lg'
                  borderRadius="full"
                  variant="solid"
                  colorScheme="red"
                  ml={5}
                  mr={5}
                    >
                      Runtime: {
                        item.runtime ? item.runtime : 'N/A'
                      }
                    </Tag>
                    <Tag
                       size='lg'
                  borderRadius="full"
                  variant="solid"
                  colorScheme="gray"
                  ml={5}
                    >
                      Language: {
                        item.language ? item.language : 'N/A'
                      }
                    </Tag>
                  </Box>
                  <Button
                    variant="outline"
                    colorScheme="green"
                    width="100%"
                    mt="3rem"
                    _hover={{
                      bg: "#18A558",
                      color: "white",
                    }}
                    onClick={onOpen}
                    
                    >
                    Book Ticket
                    </Button>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Modal 
         
       isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent 
          bg="gray.900"
        >
          <ModalCloseButton color="gray" />
          <ModalBody>
            <Formi movieName={item.name} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default MovieSummary;
