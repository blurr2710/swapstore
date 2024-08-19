import { Input, InputProps } from "@chakra-ui/react";
import React from "react";

// Specify the type of ref as HTMLInputElement
const CommonInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return (
      <Input
        ref={ref} // Forward the ref to the Input element
        placeholder="Input"
        _placeholder={{ opacity: 0.2, color: "white" }}  // Default placeholder styling            
        borderWidth={0}                        // Remove all borders
        borderBottomWidth={1}                           // Default bottom border width
        borderBottomColor="#03d47c"                        // Default bottom border color
        fontSize={14}                                    // Default font size
        color="white"                                    // Default text color
        _focus={{ borderBottomColor: "white", boxShadow: "none" }} // No highlight on focus
        {...props}                                       // Spread any additional props
      />
    );
  }
);

export default CommonInput;
