import { VStack } from "@chakra-ui/react";
import { useState } from "react";
import React from "react";
import CommonInput from "../../components/CommonInput";

const Signup = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
	confirmPassword:""
  });
  return (
    <VStack flexDirection={"column"}>
      <CommonInput
        placeholder="Work Email"
        type="email"
        size={"sm"}
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <CommonInput
        placeholder="Password"
        fontSize={14}
        type="password"
        size={"sm"}
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      <CommonInput
        placeholder="Confirm Password"
        type="password"
        size={"sm"}
        value={inputs.confirmPassword}
        onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
      />
    </VStack>
  );
};

export default Signup;
