import React from 'react'
import { Card,Box, Image, Heading, Tag, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
function MovieCard({item}) {
  return (
   <>
    <Box 
         borderWidth="1px" borderRadius="lg"  m="10px"  
          width={{
            base: "310px",
            md: "310px",
            lg: "100%",
            xl: "100%",
          }}
         >
      <Card 
        // maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        bg="transparent"
        
      >
      <Tag
        size="lg"
        borderRadius="full"
        variant="solid"
        colorScheme="purple"
        position="absolute"
        top="10px"
        right="10px"
        >
        {
          item.rating.average ? item.rating.average : 'N/A'
        }
        </Tag>
          {item.image && item.image.medium ? (
            <Image  src={item.image.medium} alt={item.name} borderBottom="1px solid white" />
          ) : (
            <Box
              height="288px"
              width="200px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderBottom="1px solid white"
              >
              <Heading  color="white" textAlign="center" m="10px" size='md' >No Image</Heading>
              </Box>
          )}
        <Box
          p="6"
        >
        <Heading  color="white" textAlign="center" m="10px" size='md'>{item.name}</Heading>
        <Link
          to={`/${item.id}`}
          >
        <Button
          colorScheme="purple"
          variant="outline"
          width="100%"
          // m={}
          >
          View Details
          </Button>
          </Link>
        </Box>
        
      </Card>
    </Box>
   </>
  )
}

export default MovieCard