// Sidebar.js

import { useState } from 'react';
import { Box, VStack, Button, Text, Icon, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaStore } from 'react-icons/fa';
import { TbDog } from 'react-icons/tb';
import BtnColorMode from './btnColorMode';

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const { colorMode } = useColorMode();

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Box
            as="nav"
            pos="absolute"
            left="0"
            top="0"
            h="100vh"
            w={isExpanded ? "250px" : "80px"}
            bg={colorMode === 'light' ? 'brand.light_bgColor' : 'yellow.500'}
            color="white"
            p="4"
            transition="width 0.3s ease"
            mr={2}
        >
            <VStack spacing="4" align="stretch">
                <Button w={'100%'} p={2} gap={2} bgColor={"background_color"} variant="ghost" onClick={toggleSidebar}><Icon fontSize={26}><TbDog /></Icon>{isExpanded ? 'Guilda do dog caramelo' : ''}</Button>
                {isExpanded ? (
                    <>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button w={'100%'} gap={2} bgColor={"background_color"} variant="ghost">
                                <Icon fontSize={22}><FaHome /></Icon>
                                <Text color={"background_color"}>Home</Text>
                            </Button>
                        </Link>
                       <Link to="/character" style={{ textDecoration: 'none' }}>
                            <Button w={'100%'} gap={2} bgColor={"background_color"} variant="ghost">
                                <Icon fontSize={22}><FaUser /></Icon>
                                <Text>Personagens</Text>
                            </Button>
                        </Link>
                        <Link to="/combat" style={{ textDecoration: 'none' }}>
                            <Button w={'100%'} gap={2} bgColor={"background_color"} variant="ghost">
                                <Icon fontSize={22}><FaStore /></Icon>
                                <Text color={"title_color"}>Combate</Text>
                            </Button>
                        </Link>
                        <BtnColorMode />
                    </>
                ) : (
                    <>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button w={'100%'} _hover={{ backgroundColor: 'yellow.500' }} bgColor={"background_color"} variant="ghost" >
                                <Icon fontSize={22}><FaHome /></Icon>
                            </Button>
                        </Link>
                            <Link to="/character" style={{ textDecoration: 'none' }}>
                            <Button w={'100%'} _hover={{ backgroundColor: 'yellow.500' }} bgColor={"background_color"} variant="ghost" >
                                    <Icon fontSize={22}><FaUser /></Icon>
                            </Button>
                        </Link>
                        <Link to="/combat" style={{ textDecoration: 'none' }}>
                            <Button w={'100%'} _hover={{ backgroundColor: 'yellow.500' }} bgColor={"background_color"} variant="ghost" >
                                    <Icon fontSize={22}><FaStore /></Icon>
                            </Button>
                        </Link>
                        <BtnColorMode />
                    </>
                )}
            </VStack>
        </Box>
    );
};

export default Sidebar;