import {
    Center,
    Box,
    Heading,
    VStack,
    HStack,
    Link,
    Text,
    FormControl,
    FormControlLabel,
    
    Input,
    Button,
    useColorMode,
    useTheme,       
    useThemeColor,

} from 'native-base'
import React from 'react';



const Home = () => {
    return <Center w="100%">
        <Box safeArea p="1" py="20" w="90%" maxW="290">
          <Heading size="lg" p= "1" fontWeight="600" color="coolGray.800" _dark={{
          color: "warmGray.50" 
        }}>
            Welcome
          </Heading>
          <Heading mt="1" _dark={{
          color: "warmGray.200"
        }} color="coolGray.600" fontWeight="medium" size="xs">
            Sign in to continue!
          </Heading>
  
          <VStack space={3} mt="2">
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" />
              <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.500"
            }} alignSelf="flex-start" mt="1">
                Forget Password?
              </Link>
            </FormControl>
            <Button mt="2" colorScheme="indigo">
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
                I'm a new user.{" "}
              </Text>
              <Link _text={{
              color: "indigo.500",
              fontWeight: "medium",
              fontSize: "sm"
            }} href="#">
                Sign Up
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>;
  };

  export default Home;