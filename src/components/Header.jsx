import { Button, HStack} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
   <HStack
      px="4"
      py="2"
      bg="gray.100"
      justifyContent="space-between"
      alignItems="center"
      shadow={"base"} bgColor={"#cc890c"}
    >
      <h1>
      CryptEx
      </h1>
      <div >
      <Button marginRight={"15"} variant={"unstyled"} color={"white"} >
        <Link to="/">Home</Link>
      </Button>
      <Button marginRight={"15"} variant={"unstyled"} color={"white"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button marginRight={"12"} variant={"unstyled"} color={"white"}>
        <Link to="/coins">Coins</Link>
      </Button>
      </div>
    </HStack>
    
    
    {/* <HStack p={"8"} shadow={"base"} bgColor={"#5e60d1"} justifyContent= {"flex-end"}>
    <h1>Cry</h1>
      <Button variant={"unstyled"} color={"white"} >
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/coins">Coins</Link>
      </Button>
      
    </HStack>
     */}
    </>
  );
};

export default Header;