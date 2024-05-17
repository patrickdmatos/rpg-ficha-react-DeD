import { Button, useColorMode } from "@chakra-ui/react";
import { IoMdSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";

const BtnColorMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Button onClick={toggleColorMode} bgColor={colorMode === 'light' ? 'yellow.400' : 'yellow.700'}>
            {colorMode === "light" ? <IoMoon /> : <IoMdSunny />}
        </Button>
    );
};

export default BtnColorMode;