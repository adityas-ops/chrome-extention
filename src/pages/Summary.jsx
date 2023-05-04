import { Box } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import MovieSummary from '../components/MovieSummary'

import { useShows } from '../api/ShowsProvider'


function Summary() {
  const {id} = useParams()
  let data = useShows()
  data = data.map(item => item.show)

  const item = data.find(item => item.id === Number(id))
  console.log("this is item ", item)


  return (
    <Box
    pt={{
      base: "100px",
      md: "10px",
      lg: "70px",
      xl: "70px",
    }}
      height={{
        base: "140%",
        md: "140%",
        lg: "100vh",
        xl: "100vh",
      }} color="white">
      <MovieSummary item={item} />
      </Box>
  )
}

export default Summary