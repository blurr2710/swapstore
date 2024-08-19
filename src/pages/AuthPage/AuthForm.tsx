import { VStack,Image, Text, Box } from "@chakra-ui/react";
import Login from './Login'
import Signup from './Signup'
import React, { useState} from "react";
import { CommonButton } from "../../components/CommonButton";

const AuthForm = () => {
  const [isLogin, setLogin] = useState(false)
  const onLogin = () => {
    setLogin(!isLogin)
  }
   return (
    <VStack className="authform">
      <Box margin={"20px"} marginBottom={"200px"}>
        <Image 
          src="/singularity.png"  // Replace with your logo's path
          alt="Logo"
          maxWidth="200px"         // Set the maximum width
          maxHeight="200px"        // Set the maximum height
          objectFit="contain" 
        />
          <Text className="headings">
            Singularity
          </Text>
      </Box>
      {isLogin ? <Signup/>:<Login/>}
      <CommonButton text="LogIn" onClick={onLogin}/>
    </VStack>
  );
};

export default AuthForm;
