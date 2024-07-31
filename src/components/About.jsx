import React from 'react';
import { Box, Container, Flex, Image, Heading, Text, SimpleGrid, Divider, Icon, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaFigma, FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import abtpic from "../assets/profilepic.jpg";

// Motion.div for animations
const MotionBox = motion(Box);

const About = () => {
  return (
    <Box id='about' bg='gray.900' color='white' py={12}>
      <Container maxW='container.xl'>
        <Flex direction={{ base: 'column', md: 'row' }} align='center' justify='center' spacing={10}>
          
          <Box flex='1' mb={{ base: 8, md: 0 }} textAlign='center'>
            <Image 
              src={abtpic} 
              alt="Profile" 
              borderRadius='full' 
              boxSize='250px' 
              mx='auto'
              borderWidth='4px'
              borderColor='blue.500'
              boxShadow='lg'
            />
          </Box>
          
          <Box flex='2' px={{ base: 4, md: 10 }}>
            <Heading as='h1' size='2xl' mb={4} textAlign={{ base: 'center', md: 'left' }}>About Me</Heading>
            <Text fontSize='lg' mb={4} textAlign={{ base: 'center', md: 'left' }}>
              My name is <strong>Usha Nandhini</strong>, and I am a B.E. Final Year Student at S.A.E.C pursuing Computer Science Engineering.
            </Text>
            <Text fontSize='lg' mb={4} textAlign={{ base: 'center', md: 'left' }}>
              I have a keen interest in problem solving and building web applications. As a Full Stack Developer, I strive to write clean and maintainable code.
            </Text>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={6}>
              <MotionBox className="bg-white text-black rounded-full"
                p={5} 
                bg='gray.800' 
                borderRadius='md' 
                boxShadow='md' 
                textAlign='center'
                whileHover={{ scale: 1.05, boxShadow: 'lg' }} 
                transition={{ duration: 0.3 }}
              >
                <Icon as={FaCode} w={12} h={12} color='blue.400' mb={3} />
                <Heading as='h3' size='md' mb={2}>Problem Solving</Heading>
                <Text>Analytical thinking and troubleshooting to solve complex problems efficiently.</Text>
              </MotionBox>
              <MotionBox className="bg-white text-black rounded-full"
                p={5} 
                bg='gray.800' 
                borderRadius='md' 
                boxShadow='md' 
                textAlign='center'
                whileHover={{ scale: 1.05, boxShadow: 'lg' }} 
                transition={{ duration: 0.3 }}
              >
                <Icon as={FaReact} w={12} h={12} color='cyan.400' mb={3} />
                <Heading as='h3' size='md' mb={2}>Frontend Development</Heading>
                <Text>Creating intuitive and responsive user interfaces with modern technologies.</Text>
              </MotionBox>
              <MotionBox className="bg-white text-black rounded-full"
                p={5} 
                bg='gray.800' 
                borderRadius='md' 
                boxShadow='md' 
                textAlign='center'
                whileHover={{ scale: 1.05, boxShadow: 'lg' }} 
                transition={{ duration: 0.3 }}
              >
                <Icon as={FaDatabase} w={12} h={12} color='green.400' mb={3} />
                <Heading as='h3' size='md' mb={2}>Backend Development</Heading>
                <Text>Building robust server-side applications and managing databases.</Text>
              </MotionBox>
              <MotionBox className="bg-white text-black rounded-full"
                p={5} 
                bg='gray.800' 
                borderRadius='md' 
                boxShadow='md' 
                textAlign='center'
                whileHover={{ scale: 1.05, boxShadow: 'lg' }} 
                transition={{ duration: 0.3 }}
              >
                <Icon as={FaFigma} w={12} h={12} color='pink.400' mb={3} />
                <Heading as='h3' size='md' mb={2}>Figma</Heading>
                <Text>Designing user interfaces and prototypes with precision.</Text>
              </MotionBox>
            </SimpleGrid>
            
            <Divider borderColor='gray.700' mb={6} />
            
            <Stack spacing={6} textAlign='center'>
              <Heading as='h2' size='lg' color='red.400'>Technologies I Use</Heading>
              <SimpleGrid columns={{ base: 2, md: 3 }} spacing={6}>
                <MotionBox className="bg-white text-black rounded-full"
                  p={4} 
                  bg='gray.800' 
                  borderRadius='md' 
                  boxShadow='md' 
                  textAlign='center'
                  whileHover={{ scale: 1.05, boxShadow: 'lg' }} 
                  transition={{ duration: 0.3 }}
                >
                  <Icon as={FaHtml5} w={10} h={10} color='orange.500' mb={2} />
                  <Text>HTML</Text>
                </MotionBox>
                <MotionBox className="bg-white text-black rounded-full"
                  p={4} 
                  bg='gray.800' 
                  borderRadius='md' 
                  boxShadow='md' 
                  textAlign='center'
                  whileHover={{ scale: 1.05, boxShadow: 'lg' }} 
                  transition={{ duration: 0.3 }}
                >
                  <Icon as={FaCss3Alt} w={10} h={10} color='blue.500' mb={2} />
                  <Text>CSS</Text>
                </MotionBox>
                <MotionBox className="bg-white text-black rounded-full"
                  p={4} 
                  bg='gray.800' 
                  borderRadius='md' 
                  boxShadow='md' 
                  textAlign='center'
                  whileHover={{ scale: 1.05, boxShadow: 'lg' }} 
                  transition={{ duration: 0.3 }}
                >
                  <Icon as={FaJs} w={10} h={10} color='yellow.500' mb={2} />
                  <Text>JavaScript</Text>
                </MotionBox>
                <MotionBox className="bg-white text-black rounded-full"
                  p={4} 
                  bg='gray.800' 
                  borderRadius='md' 
                  boxShadow='md' 
                  textAlign='center'
                  whileHover={{ scale: 1.05, boxShadow: 'lg' }} 
                  transition={{ duration: 0.3 }}
                >
                  <Icon as={FaGitAlt} w={10} h={10} color='orange.600' mb={2} />
                  <Text>Git</Text>
                </MotionBox>
                <MotionBox  className="bg-white text-black rounded-full"
                  p={4} 
                  bg='gray.800' 
                  borderRadius='md' 
                  boxShadow='md' 
                  textAlign='center'
                  whileHover={{ scale: 1.05, boxShadow: 'lg' }} 
                  transition={{ duration: 0.3 }}
                >
                  <Icon as={FaReact} w={10} h={10} color='cyan.400' mb={2} />
                  <Text>React.js</Text>
                </MotionBox>
                <MotionBox className="bg-white text-black rounded-full"
                  p={4} 
                  bg='gray.800' 
                  borderRadius='md' 
                  boxShadow='md' 
                  textAlign='center'
                  whileHover={{ scale: 1.05, boxShadow: 'lg' }} 
                  transition={{ duration: 0.3 }}
                >
                  <Icon as={FaNodeJs} w={10} h={10} color='green.600' mb={2} />
                  <Text>Next.js</Text>
                </MotionBox>
                <MotionBox className="bg-white text-black rounded-full"
                  p={4} 
                  bg='gray.800' 
                  borderRadius='md' 
                  boxShadow='md' 
                  textAlign='center'
                  whileHover={{ scale: 1.05, boxShadow: 'lg' }} 
                  transition={{ duration: 0.3 }}
                >
                  <Icon as={FaCss3Alt} w={10} h={10} color='blue.500' mb={2} />
                  <Text>Tailwind CSS</Text>
                </MotionBox>
                <MotionBox className="bg-white text-black rounded-full"
                  p={4} 
                  bg='gray.800' 
                  borderRadius='md' 
                  boxShadow='md' 
                  textAlign='center'
                  whileHover={{ scale: 1.05, boxShadow: 'lg' }} 
                  transition={{ duration: 0.3 }}
                >
                  <Icon as={FaBootstrap} w={10} h={10} color='purple.500' mb={2} />
                  <Text>Bootstrap</Text>
                </MotionBox>
              </SimpleGrid>
            </Stack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
