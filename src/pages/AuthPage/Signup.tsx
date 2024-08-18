import { Alert, AlertIcon, Button, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import React from "react";

const Signup = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
	confirmPassword:""
  });
  return (
    <VStack flexDirection={"column"}>
      <Input
        placeholder="Work Email"
        _placeholder={{ opacity: 0.2, color: "#4e4b52" }}
        borderColor={"#4e4b52"}
        fontSize={14}
        type="email"
        size={"sm"}
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder="Password"
        _placeholder={{ opacity: 0.2, color: "#4e4b52" }}
        borderColor={"#4e4b52"}
        fontSize={14}
        type="password"
        size={"sm"}
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        width={"100%"}
      />
      <Input
        placeholder="Confirm Password"
        _placeholder={{ opacity: 0.2, color: "#4e4b52" }}
        borderColor={"#4e4b52"}
        fontSize={14}
        type="password"
        size={"sm"}
        value={inputs.confirmPassword}
        onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
      />
      <Button
        w={"full"}
        _hover={{ opacity: "0.5" }}
        backgroundColor="#4e4b52"
        size={"sm"}
        fontSize={14}
      >
        Sign up
      </Button>
    </VStack>
  );
};

export default Signup;
