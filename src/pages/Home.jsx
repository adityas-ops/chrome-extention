import React,{useState,useEffect} from 'react'
import MovieCard from '../components/MovieCard'
import { Grid, GridItem } from '@chakra-ui/react'
// import { Link } from 'react-router-dom'

function Home() {
  //  fetch data from api
  const [data,setData] = useState([])
  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
    .then(res => res.json())
    .then(data => data.map(item => item.show))
    .then(data => setData(data))
  },[])
  console.log("data is ", data)
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

      >
        {
      data.map((item,index) => {
        return (
          
          <GridItem key={index}>
            <MovieCard item={item} />
          </GridItem>
        
        )
      })
      }
      </Grid>
</>
  )
}

export default Home