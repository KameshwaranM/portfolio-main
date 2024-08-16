import { Box,Center,Heading,Input,Button,Flex,Divider,Text,Icon } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Textarea 
  } from '@chakra-ui/react'
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube,FaGithub } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import '../style.css'
import axios from "axios";
import { useState ,useEffect} from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

export default function Contact() {

  // Form
  const initialFormData = {
    name: "",
    email: "",
    mobileNumber: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("", formData,);
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setFormData(initialFormData);
    
    setTimeout(() => {
      setIsFormSubmitted(true);
      setShowSuccessAlert(true); // Display the success alert
    }, 1000); // Simulate a 2-second dela

   
  };


   //Alert 
   const [showSuccessAlert, setShowSuccessAlert] = useState(false);
   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
 
   useEffect(() => {
     if (isFormSubmitted) {
       // Reset the form data
       setFormData(initialFormData);
   
       // Hide the success alert after a delay
       setTimeout(() => {
         setShowSuccessAlert(false);
       }, 5000); // Hide the alert after 5 seconds
     }
   }, [isFormSubmitted]);

   useEffect(() => {
    document.title = 'Contact Us';
  }, []);

  return (

    <Box>
        <Box className='NAV'  display="flex" mt="5%" alignItems="center"  justifyContent="center">
            <Box boxShadow='xl'  rounded='md' bg='white' width={["90%","90%","70%","60%","40%"]} p={["40px","50px"]} >
                <Center><Heading fontSize={['2xl','3xl','3xl','4xl']}>Get In Touch With Me</Heading></Center>
                <form onSubmit={handleSubmit}>

                {showSuccessAlert && (
                <Alert
                status='success'
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                height='200px'
                >
                <AlertIcon boxSize='40px' mr={0} />
                  <AlertTitle mt={4} mb={1} fontSize='lg'>
                    Successfully submitted!
                  </AlertTitle>
                  <AlertDescription maxWidth='sm'>
                    Thanks for submitting your submission.
                  </AlertDescription>
                </Alert>
          )}
               
                <FormControl isRequired mt="20px">  
                      <FormLabel htmlFor='name' fontWeight={400}>Name</FormLabel>
                      <Input
                          size='lg' 
                          type="text"
                          name="name"
                          placeholder='Please enter name'
                          value={formData.name}
                          onChange={handleInputChange}
                          autoComplete="off"
                      />
                </FormControl>

                <FormControl isRequired mt="20px">  
                  <FormLabel htmlFor='email' fontWeight={400}>Email</FormLabel>
                  <Input
                    size='lg' 
                    type="email"
                    name="email"
                    placeholder='Please enter email'
                    value={formData.email}
                    onChange={handleInputChange}
                    autoComplete="off"
                  />
                </FormControl>

                <FormControl isRequired mt="20px">
                  <FormLabel fontWeight={400}>Phone Number</FormLabel>
                  <Input
                    type="tel"  
                    placeholder='Please enter phone number'
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    autoComplete="off"
                  />
                </FormControl>

                <FormControl isRequired mt="20px">  
                  <FormLabel htmlFor='Message' fontWeight={400}>Message</FormLabel>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                   placeholder='Plese enter your message'
                   autoComplete="off"
                   />
                   
                </FormControl>

                <Box mt="20px">
                <Button  _hover={{ bg:'#1da1f2', color: 'black' }}  bg='#1da1f2' w={["100%"]}  type="submit" >Submit</Button>
                </Box>
                </form>
              {/* <Center>
                <Flex gap={14} mt="20px">

                <a href="https://www.linkedin.com/in/rahul-rajj/" target='_blank'><Flex gap={2}>
              <Icon as={FaLinkedin} boxSize={6} color="#bfd45e"/> 
              </Flex></a>

          

              <a href="https://github.com/rahul-raj9367" target='_blank'><Flex gap={2}>
              <Icon as={FaGithub} boxSize={6} color="#bfd45e"/> 
              </Flex></a>

              <a href="https://wa.me/9367747439"  target="_blank"><Flex  gap={[4,4,8,10,20]}>
            <Icon as={BsWhatsapp} boxSize={6} color="#bfd45e"/></Flex> </a>

            <a href="https://www.instagram.com/rahul_raj9367/" target='_blank'><Flex gap={2}>
            <Icon as={GrInstagram} boxSize={6} color="#bfd45e"/> 
          </Flex></a>

              <a href="tel:+919025957223" cursor="pointer" ><Flex   gap={2}>
            <Icon as={LuPhoneCall} boxSize={6} color="#bfd45e"/> 
          </Flex></a>

              <a href="https://www.youtube.com/channel/UC2NvX4WgLdhHCrLAPdUwVLg" mb="100px" target='_blank'><Flex  gap={2}>
              <Icon as={FaYoutube} boxSize={6} color="#bfd45e"/> 
              </Flex></a>

              <a href="mailto: rahulselvan0810@gmail.com" target="_blank"><Flex gap={1}>
              <Icon as={SiGmail} boxSize={6} color="#bfd45e"/> 
            </Flex></a>

                </Flex>

              

              

            


              </Center> */}

            
            </Box>
            <Box>
        </Box>
        </Box>
       
    </Box>
  )
}
