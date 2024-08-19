import { Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import CommonInput from "../../components/CommonInput";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  
  const handleAuth = () => {
    console.log(inputs)
    navigate("/")
  }

  return (
    <VStack flexDirection={"column"}>
      <CommonInput
        placeholder="Work email"
        type="email"
        size={"sm"}
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <CommonInput
        placeholder="Password"
        type="password"
        size={"sm"}
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
    </VStack>
  );
};

export default Login;
