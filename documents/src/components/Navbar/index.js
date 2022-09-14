import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { initialcards, resetScore,shufflecards } from '../../redux/Game/gameSlice';

import Clock from '../Clock';


function Navbar() {
  const score = useSelector((state) => state.game.score);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(initialcards());
    dispatch(shufflecards());
    dispatch(resetScore());
  };

  

  return (
    <div>


    <Box bg='black' w='100%' p={4} justifyContent='center' color='white'>
      <HStack textAlign='center' justify='center'>
      <Box  p={1}  border='4px' borderRadius='lg' bg='green' borderColor='black' me={4}>
        <Text style={{textTransform:"capitalize"}}> Your Score: {score}</Text> 
      </Box>

      
      <Box ms={4} >
        <Button colorScheme='teal' onClick={()=>handleClick()}>New Game</Button>
      </Box>
      </HStack>
    </Box>
<Clock/>


    </div>
  )
}

export default Navbar;