import React from 'react'
import MovieCard from '../components/MovieCard'
import { Grid, GridItem } from '@chakra-ui/react'
import { useShows } from '../api/ShowsProvider'

function Home() {

  const data = useShows()
  // console.log("data is the  ", data)
  return (
<>
    <Grid
      templateColumns="repeat(5,1fr)" gap={6}
      p={3}
        width="100%"
        // height="100%"
        overflow="auto"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        flexWrap="wrap"
        mt={{
          base: "60px",
          md: "60px",
          lg: "70px",
          xl: "70px",
        }}

      >
        {
          data.map(item => (
            <GridItem key={item.id} >
              <MovieCard item={item.show} />
            </GridItem>
          ))
      }
      </Grid>
</>
  )
}

export default Home