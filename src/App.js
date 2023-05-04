
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from "./pages/Home"
import Summary from "./pages/Summary"
import { Box, Text } from '@chakra-ui/react';
function App() {
  return (
   <>
   <Box
   bg="#18122B"
    h="fit-content"
    w="100%"
    >
    <Box
    bg="#18122B"
    w="100%"
    borderBottom="1px solid #443C68"
    >
      <Text
      fontSize="3xl"
      fontWeight="bold"
      textAlign="center"
      p={3}
      color="white"
      >
        Movies 
      </Text>
    </Box>
 <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/:id" element={<Summary/>} />
    </Routes>
    </Box>
    </>
  );
}

export default App;
