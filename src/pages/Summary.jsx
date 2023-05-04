import { Box } from '@chakra-ui/react'
import React,{useEffect,useState} from 'react'
// import { Link } from '@reach/router'
import { useParams } from 'react-router-dom'



function Summary() {
  const {id} = useParams()
  const [data,setData] = useState([])
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
    .then(res => res.json())
    .then(data => setData(data))
  },[])

  let item = data.find(item => item.show.id === parseInt(id))
  item = item.show
  console.log("item is ", item)
  return (
    <Box
      height="91.22vh" color="white">
        hello
      </Box>
  )
}

export default Summary