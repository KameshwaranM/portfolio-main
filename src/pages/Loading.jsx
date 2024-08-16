import { Box,Heading,Center } from '@chakra-ui/react'
import Typewriter from 'typewriter-effect'
import React from 'react'
import '../style.css'


export default function Loading() {
  return (
    <Box bg="black" w="100vw" h="100vh">
      <span class="loader" id="ll" ></span>

            {/* <Heading id="span" margin="auto"> 
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings:["Welcome"]

                }} />
              </Heading> */}

              
    </Box>
  )
}
