import React from 'react'
import { useState, useEffect } from "react";
import { Box, Flex, Heading, List, ListItem, Text, Button, Center, Image, Divider, IconButton, Spinner } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, Grid, GridItem, Stack } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { LuHeartHandshake } from "react-icons/lu";
import { FaHtml5, FaBootstrap, FaReact, FaLinkedin, FaHeart, FaCheckCircle, FaJava, FaYoutube, FaGithub, FaNodeJs } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiChakraui } from "react-icons/si";
import { } from "react-icons/si";
import { GrMysql, GrInstagram } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { LuPhoneCall } from "react-icons/lu";
import { Icon } from '@chakra-ui/react'
import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import { MdSettings } from 'react-icons/md'
import { NavLink, Link } from "react-router-dom";
import { ArrowUpIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import '../style.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Loading from './Loading';
import Typewriter from 'typewriter-effect'



export default function Home() {

  useEffect(() => {
    Aos.init()
  }, [])

  const [display, setDisplay] = useState('none')
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setDisplay('display');
      } else {
        setDisplay('none');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scrolls to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const [displayy, ChangeDisplayy] = useState('none')

  const [loading, setLoading] = useState(true);

  //Loading 
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);


  return (

    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Box bg="#000000" height="100%" >

            {/* Navbar and WEB DEVELOPER */}
            <Box className='NAV' position="relative" pt={["55px", "55px", "0px"]} mb={["130px", "80px", "80px", "50px"]}>


              <Flex pt="20px" className='NAVV' as="nav" >
                {/* Desktop View */}
                <Flex
                  as="nav"
                  alignItems="center"
                  justifyContent={["space-evenly", "space-evenly", "space-evenly", "space-between", "space-between", "space-between"]}
                  color="white"
                  width="100%"
                  zIndex="1"
                  pl={["0px", "0px", "0px", "50px", "140px"]}
                  pr={["0px", "0px", "0px", "50px", "140px"]}
                  display={["none", "none", "flex", "flex", "flex"]}
                  gap={10}>
                  <Heading fontSize={['xl', 'xl', 'xl', 'xl', '3xl']} color="#fbfbfb" className='rahul'>KAMESHWARAN M</Heading>

                  <Flex align="center" justifyContent="center">
                    <List display="flex" alignItems="center" justifyContent="center">
                      <ListItem mr={["30px", "30px", "25px", "40px"]} mt="3px">
                        <a href="#">
                          <Text fontSize={['md', 'md', 'md', 'md', 'lg']} as='b' _hover={{ color: 'orange' }} color="#fbfbfb">Home</Text>
                        </a>
                      </ListItem>
                      <ListItem mr={["30px", "30px", "25px", "40px"]} mt="3px">
                        <a href="#about">
                          <Text fontSize={['md', 'md', 'md', 'md', 'lg']} as='b' _hover={{ color: 'orange' }} color="#fbfbfb">About</Text>
                        </a>
                      </ListItem>
                      <ListItem mr={["30px", "30px", "25px", "40px"]} mt="3px">
                        <a href="#skills">
                          <Text fontSize={['md', 'md', 'md', 'md', 'lg']} as='b' _hover={{ color: 'orange' }} color="#fbfbfb">Skills</Text>
                        </a>
                      </ListItem>
                      <ListItem mr={["30px", "30px", "25px", "40px"]} mt="3px">
                        <a href="#project">
                          <Text fontSize={['md', 'md', 'md', 'md', 'lg']} as='b' _hover={{ color: 'orange' }} color="#fbfbfb">Project</Text>
                        </a>
                      </ListItem>

                      <ListItem mr={["30px", "30px", "25px", "40px"]} mt="3px">
                        <a href="#contact">
                          <Text fontSize={['md', 'md', 'md', 'md', 'lg']} as='b' color="#fbfbfb" _hover={{ color: 'orange' }}>Contact</Text>
                        </a>
                      </ListItem>
                    </List>


                  </Flex>

                  <Flex >
                    <NavLink>
                      <Link to="/Contact">
                        <Button rightIcon={<ArrowForwardIcon />} fontSize={['md', 'md', 'md', 'md', 'lg']} _hover={{ bg: 'orange', color: 'black' }} bg=' orange' p={["15px", "15px", "10px", "10px", "20px"]} borderRadius="50px">Lets Talk</Button>
                      </Link>
                    </NavLink>
                  </Flex>

                </Flex>


                {/* Mobile View */}
                <Flex display={['flex', 'flex', 'none', 'none']} pt="10px" pb="10px" position="fixed" width="100vw" bg="black"
                  top="0"
                  left="0" zIndex={100} alignItems="center" justifyContent="space-between">
                  <Box>
                    <a href="#"><Heading fontSize={['2xl']} pl="10px" color="#fbfbfb" className='rahul'>KAMESHWARAN M</Heading></a>
                  </Box>
                  <Box>
                    <IconButton
                      aria-label="Open Menu"
                      fontSize='30px'
                      pr="10px"
                      align="right"
                      icon={<HamburgerIcon color="#fbfbfb" />}

                      color="black" bg="transparent" _hover={{ bg: 'transparent' }}
                      onClick={() => ChangeDisplayy('flex')} />

                  </Box>


                  <Flex
                    w="100vw"
                    h="100vh"
                    bg="black"
                    position="fixed"
                    top="0"
                    right="0"
                    zIndex={20}
                    overflowY="auto"
                    flexDir="column"
                    display={displayy}
                  >
                    <Flex justifyContent="flex-end">
                      <IconButton
                        position="fixed"
                        top="17"
                        right="2"
                        aria-label="Close Menu"
                        fontSize='23px'
                        icon={<CloseIcon color="#fbfbfb" />}
                        color="black" bg="transparent" _hover={{ bg: 'transparent' }}
                        onClick={() => ChangeDisplayy('none')}></IconButton>
                    </Flex>
                    <Flex
                      flexDir="column"
                      justifyContent="center"
                    >
                      <List mt="95px">
                        <Center>
                          <ListItem mb="30px">
                            <a href="#">
                              <Text onClick={() => ChangeDisplayy('none')} fontSize={['xl', 'lg', 'lg', 'md', 'lg']} as='b' _hover={{ color: 'orange' }} color="#fbfbfb">Home</Text>
                            </a>
                          </ListItem>
                        </Center>

                        <Center>
                          <ListItem mb="30px">
                            <a href="#about">
                              <Text onClick={() => ChangeDisplayy('none')} fontSize={['xl', 'lg', 'lg', 'md', 'lg']} as='b' _hover={{ color: 'orange' }} color="#fbfbfb">About</Text>
                            </a>

                          </ListItem>
                        </Center>

                        <Center>
                          <ListItem mb="30px" >
                            <a href="#Skills">
                              <Text onClick={() => ChangeDisplayy('none')} fontSize={['xl', 'lg', 'lg', 'md', 'lg']} as='b' _hover={{ color: 'orange' }} color="#fbfbfb">Skills</Text>
                            </a>
                          </ListItem>
                        </Center>

                        <Center>
                          <ListItem mb="30px">
                            <a href="#project">
                              <Text onClick={() => ChangeDisplayy('none')} fontSize={['xl', 'lg', 'lg', 'md', 'lg']} as='b' _hover={{ color: 'orange' }} color="#fbfbfb">Project</Text>
                            </a>

                          </ListItem>
                        </Center>


                        <Center>
                          <ListItem mb="30px">
                            <a href="#contact">
                              <Text onClick={() => ChangeDisplayy('none')} fontSize={['xl', 'lg', 'lg', 'md', 'lg']} as='b' color="#fbfbfb" _hover={{ color: 'orange' }}>Contact</Text>
                            </a>
                          </ListItem>
                        </Center>

                      </List>

                    </Flex>
                  </Flex>
                </Flex>





              </Flex>
              <Text position="absolute" color="#fbfbfb" display={["none", "none", "flex", "flex"]} width={["230px", "200px", "190px", "250px"]} left={["24%", "10%", "9%", "12%", "17%", "20%"]} top={["103%", "70%", "35%", "35%", "38%"]} fontSize={["lg", "lg", "xl", "xl"]} lineHeight="22px" zIndex={99}>A dedicated Front-End developer passionate about creating seamless and powerful web applications</Text>

              <Heading position="absolute" className='web' color="#fbfbfb" left={["1%", "9%", "9%", "12%", "17%", "20%"]} top={["66%", "66%", "55%", "50%"]} zIndex={90}>WEB</Heading>
              <Heading position="absolute" className='web' color="#fbfbfb" left={["21%", "25%", "27%", "27%", "33%"]} top={["80%", "80%", "78%", "78%", "76%"]} zIndex={90}>DEVELOPER</Heading>

              <Box>
                <Center>
                  <Image loading="lazy" mt={["10px", "", "50px", "20px"]} src='images/Kameshh.png' borderRadius="100%" boxShadow='xs' bg='#f2801d' alt='rahul' w={["94%", "70%", "65%", "50%", "50%", "40%"]} />
                </Center>
              </Box>
              <Center>
                <Text position="absolute" mt="120px" color="#fbfbfb" display={["flex", "flex", "none", "none"]} width={["60%"]} fontSize={["lg", "lg", "lg", "md"]} lineHeight="24px" zIndex={99}>A dedicated full-stack developer passionate about creating seamless and powerful web applications</Text>
              </Center>


            </Box>

            {/* Skills */}
            <Box bg="#ffffff">

              <Box className='NAV' pb="100px" >
                <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']} pt="100px" gap={[10, 10, 10]}>
                  <Center>
                    <GridItem w={["100%", "100%", "100%", "80%", "100%"]} h="100%" data-aos="fade-down" data-aos-delay="100">
                      <Center>
                        <Card maxW={['xs', 'sm', 'lg', 'sm']} bg="#131313">
                          <CardBody>
                            <Icon as={MdSettings} boxSize={[90]} color="orange" />
                            <Stack mt='3' spacing='3'>
                              <Heading size={['lg', 'lg', 'lg', 'md', 'lg']} color="#fbfbfb">Deep Skill Set</Heading>
                              <Text color="#fbfbfb" fontSize={["lg", "lg", "xl", "xl"]}>
                                Web developer with deep skills in creating efficient, stunning websites. Passionate about turning ideas into online experiences.
                              </Text>
                            </Stack>
                          </CardBody>
                        </Card>
                      </Center>
                    </GridItem>
                  </Center>

                  <Center>
                    <GridItem w={["100%", "100%", "100%", "80%", "100%"]} data-aos="fade-down" data-aos-delay="100">
                      <Center>
                        <Card maxW={['xs', 'sm', 'lg', 'sm']} bg="#131313">
                          <CardBody>
                            <Icon as={PiSuitcaseSimpleLight} boxSize={90} color="orange" />
                            <Stack mt='3' spacing='4' >
                              <Heading size={['lg', 'lg', 'lg', 'md', 'lg']} color="#fbfbfb">Creative Work</Heading>
                              <Text color="#fbfbfb" fontSize={["lg", "lg", "xl", "xl"]} mb="20px">
                                I specialize in creating creative and unique user experiences, bringing innovation and flair to my work
                              </Text>
                            </Stack>
                          </CardBody>
                        </Card>
                      </Center>
                    </GridItem>
                  </Center>


                  <Center>
                    <GridItem w={["100%", "100%", "100%", "80%", "100%"]} h="100%" data-aos="fade-down" data-aos-delay="100">
                      <Center>
                        <Card maxW={['xs', 'sm', 'lg', 'sm']} bg="#131313">
                          <CardBody>
                            <Icon as={LuHeartHandshake} boxSize={90} color="orange" />
                            <Stack mt='3' spacing='3'>
                              <Heading size={['lg', 'lg', 'lg', 'md', 'lg']} color="#fbfbfb">Strong Dedication</Heading>
                              <Text color="#fbfbfb" fontSize={["lg", "lg", "xl", "xl"]}>
                                I possess a strong dedication to my work, consistently striving for excellence and achieving goals with unwavering commitment
                              </Text>
                            </Stack>
                          </CardBody>
                        </Card>
                      </Center>
                    </GridItem>
                  </Center>

                </Grid>

                {/* Who Loves To Code */}
                <Box id="Skills">

                </Box>
                <Box mt="100px" id="skills">
                  <Center>
                    <Heading fontSize={['2xl', '3xl', '3xl', '4xl']} >SKILLS</Heading>
                  </Center>
                  <Center>
                    <Heading fontSize={['2xl', '3xl', '3xl', '4xl']}>A  <span color='#ff7300' id="span">Passionate</span> Developer</Heading>
                  </Center>
                  <Center>
                    <Heading fontSize={['2xl', '3xl', '3xl', '4xl']}>Who Loves To Code</Heading>
                  </Center>

                  <Grid templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)', 'repeat(4, 1fr)']} pt={["50px", "100px"]} mr={["0px", "0px", "0px", "0px", "100px"]} ml={["0px", "0px", "0px", "0px", "100px"]}>
                    <GridItem w="100%" h="100%" data-aos="zoom-in-up" data-aos-delay="100">
                      <Center>
                        <Icon as={FaHtml5} boxSize={[100, 100, 100, 110, 150]} color="#e44d26" />
                      </Center>
                    </GridItem>
                    <GridItem w="100%" h="100%" data-aos="zoom-in-up" data-aos-delay="100">
                      <Center>
                        <Icon as={IoLogoCss3} boxSize={[100, 100, 100, 110, 150]} color="#2465f1" />
                      </Center>
                    </GridItem>
                    <GridItem w="100%" h="100%" mt={["40px", "40px", "0px"]} data-aos="zoom-in-up" data-aos-delay="100">
                      <Center>
                        <Icon as={FaBootstrap} boxSize={[100, 100, 100, 110, 150]} color="#7010f5" />
                      </Center>
                    </GridItem>
                    <GridItem w="100%" h="100%" mt={["40px", "40px", "0px"]} data-aos="zoom-in-up" data-aos-delay="100">
                      <Center>
                        <Icon as={IoLogoJavascript} boxSize={[100, 100, 100, 110, 150]} color="#f0dc4e" />
                      </Center>
                    </GridItem>
                  </Grid>


                  <Grid templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)', 'repeat(4, 1fr)']} pt="40px" mr={["0px", "0px", "0px", "0px", "100px"]} ml={["0px", "0px", "0px", "0px", "100px"]}>
                    <GridItem w="100%" h="100%" data-aos="zoom-in-up" data-aos-delay="100">
                      <Center>
                        <Icon as={FaReact} boxSize={[100, 100, 100, 110, 150]} color="#00d8ff" />
                      </Center>
                    </GridItem>
                    <GridItem w="100%" h="100%" data-aos="zoom-in-up" data-aos-delay="100">
                      <Center>
                        <Icon as={FaJava} boxSize={[100, 100, 100, 110, 150]} color="#e44d26" />
                      </Center>
                    </GridItem>
                    <GridItem w="100%" h="100%" data-aos="zoom-in-up" data-aos-delay="100">
                      <Center>
                        <Icon as={GrMysql} boxSize={[100, 100, 100, 110, 150]} color="#0e358f" />
                      </Center>
                    </GridItem>
                    {/* <GridItem w="100%" h="100%" data-aos="zoom-in-up" data-aos-delay="100">
                    <Center>
                      <Icon as={FaNodeJs} boxSize={[100,100,100,110,150]}  color="#58a846"/>
                    </Center>
                  </GridItem>
                  <GridItem w="100%" h="100%" mt={["40px","40px","0px"]} data-aos="zoom-in-up" data-aos-delay="100">
                    <Center>
                      <Icon as={SiExpress} boxSize={[100,100,100,110,150]}  color="#00000"/>
                    </Center>
                  </GridItem>
                  <GridItem w="100%" h="100%"  mt={["40px","40px","0px"]} data-aos="zoom-in-up" data-aos-delay="100">
                    <Center>
                      <Icon as={DiMongodb} boxSize={[100,100,100,110,150]}  color="#4fa940"/>
                    </Center>
                  </GridItem> */}
                  </Grid>




                  {/* <Grid  templateColumns={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)','repeat(4, 1fr)']}  pt="40px"  mr={["0px","0px","0px","0px","100px"]} ml={["0px","0px","0px","0px","100px"]}>
                <GridItem w="100%" h="100%" data-aos="zoom-in-up" data-aos-delay="100">
                    <Center>
                      <Icon as={SiChakraui} boxSize={[100,100,100,110,150]}  color="#35c7bb"/>
                    </Center>
                  </GridItem>
                  <GridItem w="100%" h="100%" data-aos="zoom-in-up" data-aos-delay="100">
                    <Center>
                      <Icon as={FaJava} boxSize={[100,100,100,110,150]}  color="#e44d26"/>
                    </Center>
                  </GridItem>
                  <GridItem w="100%" h="100%" mt={["40px","40px","0px"]} data-aos="zoom-in-up" data-aos-delay="100">
                    <Center>
                      <Icon as={SiTypescript} boxSize={[100,100,100,110,150]}  color="#2d79c7"/>
                    </Center>
                  </GridItem>
                </Grid> */}


                </Box>
              </Box>
            </Box>


            {/* About Me */}
            <Box bg="#00000" id="about">
              <Box className='NAV' pb="100px">
                <Center>
                  <Heading color="#fbfbfb" mt={["60px", "60px", "50px"]} fontSize={['2xl', '3xl', '3xl', '4xl']}>ABOUT ME</Heading>
                </Center>
                <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']} pt="50px" >
                  <GridItem w="100%" h="100%">
                    <Center>
                      <Box border="2px solid orange" p="10px" borderRadius='50%' data-aos="fade-right"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine">
                        <Image borderRadius='50%' boxSize={['300px', '300px', '300px', '400px', '450px']} src='images/Kameshh.png' bg='orange' alt='rahul' />
                      </Box>
                    </Center>

                  </GridItem>
                  <GridItem w="100%" h="100%" data-aos="flip-right" data-aos-delay="200">
                    <Box display="flex" alignItems="center" mt={["20px", "20px", "20px", "13%"]} justifyContent={["center", "center", "center", "center", "flex-start"]}>
                      <Flex >
                        <Heading color="#fbfbfb">Hello, I'm </Heading>
                        <Heading ml="10px" mt="3px">
                          <span id="span" color='orange'>
                            <Typewriter
                              options={{
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                strings: ["Kameshwaran M"]

                              }}
                            /></span>

                        </Heading>


                      </Flex>


                    </Box>

                    <Box display="flex" alignItems="center" justifyContent={["center", "center", "center", "center", "flex-start"]}>
                      <Text color="#fbfbfb" width={["90%", "70%"]} pl={["0px", "0px", "0px", "15px", "0px"]} fontSize="l">Growing up, I was always intrigued by puzzles and logic problems. It was that same sense of curiosity and problem-solving that drew me to the world of web development. I realized that writing a piece of code is like solving a puzzle and the joy of seeing the end result is unparalleled.

While interning at Autointelli, I designed an internal company website, which improved communication among team members. I also developed an understanding of various web technologies, including HTML, CSS, JavaScript and React-js.

Outside of coding, I enjoy playing chess and participating in local coding challenges. I believe these activities not only help me relax but also improve my strategic thinking and problem-solving skills, which are crucial in web development.

If you’re looking for a passionate junior developer who is always excited to learn and contribute to web development projects, please feel free to email me at kameshwaranm1209@gamil.com.</Text>
                    </Box>
                  </GridItem>
                </Grid>

              </Box>


            </Box>

            {/* Project */}
            <Box bg="#ffffff" pb="50px" id="project">
              <Center><Heading mt={["60px", "60px", "50px"]} fontSize={['2xl', '3xl', '3xl', '4xl']}>PROJECT</Heading></Center>
              <Center><Heading fontSize={['2xl', '3xl', '3xl', '4xl']}>Take A Look At My <span id="span">Porfile</span></Heading></Center>

              <Box display="flex" flexDir={["column", "column", "column", "row", "row"]} alignItems="center" justifyContent="center" gap={[5, , , 5, 20]} mt="50px">
                <Box ml={["15px", "15px", "0px"]} mr={["15px", "15px", "0px"]} p="15px" border="2px solid black" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                  <a href="https://" target='_blank'><Image src='images/Automation.PNG' alt='tattoo' height={['230px']} width={['380px']} /></a>
                </Box>

                <Box ml={["15px", "15px", "0px"]} mr={["15px", "15px", "0px"]} p="15px" border="2px solid black" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                  <a href="https://" target='_blank'> <Image src='images/EmailSent.PNG' alt='tattoo' height={['230px']} width={['380px']} /></a>
                </Box>
                {/* <Box ml={["15px","15px","0px"]} mr={["15px","15px","0px"]} p="15px" border="2px solid black" data-aos="flip-left"  data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            <a href="https://" target='_blank'><Image src='images/Login.PNG'  alt='tattoo' height={['230px']} width={['380px']} /></a> 
                </Box> */}

              </Box>

              <Box display="flex" flexDir={["column", "column", "column", "row", "row"]} alignItems="center" justifyContent="center" gap={[5, , , 5, 20]} mt="50px">
                <Box p="15px" ml={["15px", "15px", "0px"]} mr={["15px", "15px", "0px"]} border="2px solid black" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                  <a href="https://" target='_blank'> <Image src='images/Login.PNG' alt='tattoo' height={['230px']} width={['380px']} /></a>
                </Box>
                <Box ml={["15px", "15px", "0px"]} mr={["15px", "15px", "0px"]} p="15px" border="2px solid black" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                  <a href="https://" target='_blank'><Image src='images/Website.PNG' alt='tattoo' height={['230px']} width={['380px']} /></a>
                </Box>
                {/* <Box ml={["15px","15px","0px"]} mr={["15px","15px","0px"]} p="15px" border="2px solid black" data-aos="flip-left"  data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                <a href="https://" target='_blank'> <Image src='images/electro.jpeg'  alt='tattoo' height={['230px']} width={['380px']} /></a> 
            </Box> */}
              </Box>

              {/* <Box display="flex"   flexDir={["column","column","column","row","row"]} alignItems="center" justifyContent="center" gap={[5,,,5,20]} mt="50px">
              <Box ml={["15px","15px","0px"]} mr={["15px","15px","0px"]} p="15px"  border="2px solid black" data-aos="flip-left"  data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                <a href="https://rahul-raj9367.github.io/portfolioo/Resume.html" target='_blank'><Image src='images/resume.jpeg'  alt='tattoo' height={['430px']} width={['380px']} /></a> 
                </Box>
                <a href="https://github.com/rahul-raj9367/Problem-Solving/tree/main" target='_blank'><Box p="15px" border="2px solid black" data-aos="flip-left"  data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                  <Flex flexDir="column" align="center"  >
                  <Heading mt="10px" fontSize="lg">100 Days Coding Completed</Heading>
                  <Icon  mt="20px" mb="20px" as={FaCheckCircle } boxSize={180} color="orange"/>
                  </Flex>
                    </Box>
                </a>
                
            </Box>
  
            <Center>
            <a href="https://www.youtube.com/channel/UC2NvX4WgLdhHCrLAPdUwVLg" target='_blank'><Button mt="50px" rightIcon={<ArrowForwardIcon size="20px" />} _hover={{ bg:'orange', color: 'black' }} fontSize="xl"  bg='orange' p="25px" pl="25px" pr="15px" borderRadius="50px">See More</Button></a>
            </Center> */}


              <Center>



              </Center>


            </Box>




            {/* Contact Me */}
            <Box bg="black" id="contact">
              <Center>
                <Heading color="#fbfbfb" mt={["60px", "60px", "50px"]} fontSize={['2xl', '3xl', '3xl', '4xl']}>CONTACT ME</Heading>
              </Center>

              <Center>
                <Flex align="center" justify="center" mt="50px" gap={[2, 4, 4, 4]}>
                  <Heading color="#fbfbfb" className='talk' data-aos="zoom-in"> Let's</Heading>
                  <Box border="2px solid orange" p="10px" borderRadius='50% ' data-aos="zoom-in-up">
                    <Image borderRadius='50%' boxSize={['150px', '150px', '150px', '200px', '250px']} src='images/Kameshh.png' bg='orange' alt='rahul' />
                  </Box>

                  <Heading color="#fbfbfb" className='talk' data-aos="zoom-in">Talk</Heading>

                </Flex>
              </Center>


              <Center>
                <Flex display={["none", "none", "flex", "flex"]} gap={[6, 6, 10, 16, 20]} mt="30px">
                  <a href="https://www.linkedin.com/in/kameshwaran-mahendran-156ba3297/" target='_blank'><Flex gap={2}>
                    <Icon as={FaLinkedin} boxSize={6} color="orange" />
                    <Text color="#fbfbfb">LinkedIn</Text>
                  </Flex></a>
                  <Center height='25px'>
                    <Divider orientation='vertical' />
                  </Center>

                  <a href="https://github.com/KameshwaranM" target='_blank'><Flex gap={2}>
                    <Icon as={FaGithub} boxSize={6} color="orange" />
                    <Text color="#fbfbfb">Github</Text>
                  </Flex></a>

                  <Center height='25px'>
                    <Divider orientation='vertical' />
                  </Center>

                  <a href="tel:+918807405041" cursor="pointer"><Flex gap={2}>
                    <Icon as={LuPhoneCall} boxSize={6} color="orange" />
                    <Text color="#fbfbfb">+91 8807405041</Text>
                  </Flex></a>

                </Flex>

              </Center>


              {/* Mobile */}
              <Center>
                <Flex display={["flex", "flex", "none", "none"]} gap={[6, 6, 10, 16, 20]} mt="30px">
                  <a href="https://www.linkedin.com/in/kameshwaran-mahendran-156ba3297/" target='_blank'><Flex gap={2}>
                    <Icon as={FaLinkedin} boxSize={6} color="orange" />
                    <Text color="#fbfbfb">LinkedIn</Text>
                  </Flex></a>
                  <Center height='25px'>
                    <Divider orientation='vertical' />
                  </Center>

                  <a href="https://github.com/KameshwaranM" target='_blank'><Flex gap={2}>
                    <Icon as={FaGithub} boxSize={6} color="orange" />
                    <Text color="#fbfbfb">Github</Text>
                  </Flex></a>

                  <Center height='25px'>
                    <Divider orientation='vertical' />
                  </Center>
                </Flex>

              </Center>

              <Center>
                <a href="tel:+91807405041" cursor="pointer" ><Flex display={["flex", "flex", "none", "none"]} mt="20px" gap={2}>
                  <Icon as={LuPhoneCall} boxSize={6} color="orange" />
                  <Text color="#fbfbfb">+91 8807405041</Text>
                </Flex></a>
              </Center>

              <Center>
                <NavLink>
                  <Link to="/Contact">
                    <Button mt="25px" mb="25px" _hover={{ bg: 'orange', color: 'black' }} className='r' size={["lg"]} pt="30px" pb="30px" bg='orange' pr={["90px", "92px", "260px", "260px"]} pl={["90px", "92px", "260px", "260px"]} data-aos="zoom-in-down" data-aos-delay="10" borderRadius="50px">Write A Message</Button>
                  </Link>
                </NavLink>

              </Center>

              <Center>
                <Flex display={["none", "none", "flex", "flex"]} gap={[6, 6, 8, 10, 20]}>
                  <a href="mailto: kameshwaran1209@gmail.com" target="_blank"><Flex gap={1}>
                    <Icon as={SiGmail} boxSize={6} color="orange" />
                    <Text color="#fbfbfb">kameshwaran1209@gmail.com</Text>
                  </Flex></a>

                  <Center height='25px'>
                    <Divider orientation='vertical' />
                  </Center>

                  <a href="https://wa.me/8807405041" target="_blank"><Flex gap={2}>
                    <Icon as={BsWhatsapp} boxSize={6} color="orange" />
                    <Text color="#fbfbfb">Whatsapp</Text>
                  </Flex></a>

                  <Center height='25px'>
                    <Divider orientation='vertical' />
                  </Center>

                  <a href="https://www.instagram.com/prince.kamesh.offl/" target='_blank'><Flex gap={2}>
                    <Icon as={GrInstagram} boxSize={6} color="orange" />
                    <Text color="#fbfbfb">Instagram</Text>
                  </Flex></a>

                  <Center height='25px'>
                    <Divider orientation='vertical' />
                  </Center>

                  <a href="#" target='_blank'><Flex gap={2}>
                    <Icon as={FaYoutube} boxSize={6} color="orange" />
                    <Text color="#fbfbfb">Youtube</Text>
                  </Flex></a>

                </Flex>

              </Center>

              {/* Mobile  */}
              <Center>
                <Flex display={["flex", "flex", "none", "none"]} gap={[4, 4, 8, 10, 20]}>
                  <a href="mailto: kameshwaran1209@gmail.com" target="_blank"><Flex gap={2}>
                    <Icon as={SiGmail} boxSize={6} color="orange" />
                    <Text color="#fbfbfb">kameshwaran1209@gmail.com</Text>
                  </Flex></a>
                  <Center height='25px'>
                    <Divider orientation='vertical' />
                  </Center>

                </Flex>

              </Center>

              <Center>

                <a href="https://wa.me/8807405041" target="_blank"><Flex mt="20px" display={["flex", "flex", "none", "none"]} gap={[2, 4, 8, 10, 20]}>
                  <Icon as={BsWhatsapp} boxSize={6} color="orange" />
                  <Text color="#fbfbfb">Whatsapp</Text>

                  <Center height='25px'>
                    <Divider orientation='vertical' />
                  </Center>
                </Flex></a>
              </Center>


              <Center>
                <Flex display={["flex", "flex", "none", "none"]} gap={[4, 4, 8, 10, 20]} mt="20px">

                  <a href="https://www.instagram.com/prince.kamesh.offl/" target='_blank'><Flex gap={2}>
                    <Icon as={GrInstagram} boxSize={6} color="orange" />
                    <Text color="#fbfbfb">Instagram</Text>
                  </Flex></a>

                  <Center height='25px'>
                    <Divider orientation='vertical' />
                  </Center>

                  <a href="#" target='_blank'><Flex gap={2}>
                    <Icon as={FaYoutube} boxSize={6} color="orange" />
                    <Text color="#fbfbfb">Youtube</Text>
                  </Flex></a>
                </Flex>

              </Center>




              <Center>
                <Divider orientation='horizontal' pb="10px" width="90%" borderTop="1px solid" mt="50px" borderBlockEndWidth="0px" borderColor="white" />
              </Center>

              <Center>
                <Flex gap={1} mb="5px" mt="10px" >
                  <Text pb="10px" color="#fbfbfb">Made With </Text>
                  <Icon as={FaHeart} boxSize={6} color="orange" />
                  <Text color="#fbfbfb">by Kameshwaran M</Text>
                </Flex>
              </Center>


            </Box>

            <Box display={display} position="fixed" right={["15px", "15px"]} bottom={["15px", "30px"]} cursor="pointer" >
              <IconButton
                onClick={scrollToTop}
                boxSize={[8]}
                p="25px"
                borderRadius="70%"
                bg="orange"
                _hover={{ bg: 'orange', color: 'black' }}
                display={["none", "none", "flex", "flex"]}
                icon={<ArrowUpIcon boxSize={[8, 8, 8, 8, 12]} color="black" />}
              ></IconButton>
            </Box>


          </Box>
        </>
      )}
    </>



  )
}
