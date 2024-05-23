// Sidebar.js

import { useState } from 'react';
import { Box, VStack, Button, Text, Icon, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBook, FaStore, FaDragon } from 'react-icons/fa';
import { TbDog } from 'react-icons/tb';
import BtnColorMode from './btnColorMode';

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
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
            bg={colorMode === 'light' ? 'yellow.800' : 'yellow.500'}
            color="white"
            p="4"
            transition="width 0.3s ease"
            mr={2}
        >
            <VStack spacing="4" align="stretch">
                <Button w={'100%'} p={2} gap={2} bgColor={colorMode === 'light' ? 'yellow.400' : 'yellow.700'} variant="ghost" onClick={toggleSidebar}><Icon fontSize={26}><TbDog /></Icon>{isExpanded ? 'Guilda do dog caramelo' : ''}</Button>
                {isExpanded ? (
                    <>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button w={'100%'} gap={2} bgColor={colorMode === 'light' ? 'yellow.400' : 'yellow.700'} variant="ghost">
                                <Icon fontSize={22}><FaHome /></Icon>
                                <Text>Home</Text>
                            </Button>
                        </Link>
                        <Link to="/warriors" style={{ textDecoration: 'none' }}>
                            <Button w={'100%'} gap={2} bgColor={colorMode === 'light' ? 'yellow.400' : 'yellow.700'} variant="ghost">
                                <Icon fontSize={22}><FaUser /></Icon>
                                <Text>Livro dos Guerreiros</Text>
                            </Button>
                        </Link>
                        <Link to="/shop" style={{ textDecoration: 'none' }}>
                            <Button w={'100%'} gap={2} bgColor={colorMode === 'light' ? 'yellow.400' : 'yellow.700'} variant="ghost">
                                <Icon fontSize={22}><FaStore /></Icon>
                                <Text>Loja do Anão Astuto</Text>
                            </Button>
                        </Link>
                        <Link to="/dictionary" style={{ textDecoration: 'none' }}>
                            <Button w={'100%'} gap={2} bgColor={colorMode === 'light' ? 'yellow.400' : 'yellow.700'} variant="ghost">
                                <Icon fontSize={22}><FaBook /></Icon>
                                <Text>Dicionário do Herói</Text>
                            </Button>
                        </Link>
                        <Link to="/bestiary" style={{ textDecoration: 'none' }}>
                            <Button w={'100%'} gap={2} bgColor={colorMode === 'light' ? 'yellow.400' : 'yellow.700'} variant="ghost">
                                <Icon fontSize={22}><FaDragon /></Icon>
                                <Text>Bestiário</Text>
                            </Button>
                        </Link>
                        <BtnColorMode />
                    </>
                ) : (
                    <>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button w={'100%'} _hover={{ backgroundColor: 'yellow.500' }} bgColor={colorMode === 'light' ? 'yellow.400' : 'yellow.700'} variant="ghost" >
                                <Icon fontSize={22}><FaHome /></Icon>
                            </Button>
                        </Link>
                        <Link to="/warriors" style={{ textDecoration: 'none' }}>
                            <Button w={'100%'} _hover={{ backgroundColor: 'yellow.500' }} bgColor={colorMode === 'light' ? 'yellow.400' : 'yellow.700'} variant="ghost" >
                                <Icon fontSize={22}><FaUser /></Icon>
                            </Button>
                        </Link>
                        <Link to="/shop" style={{ textDecoration: 'none' }}>
                            <Button w={'100%'} _hover={{ backgroundColor: 'yellow.500' }} bgColor={colorMode === 'light' ? 'yellow.400' : 'yellow.700'} variant="ghost" >
                                <Icon fontSize={22}><FaStore /></Icon>
                            </Button>
                        </Link>
                        <Link to="/dictionary" style={{ textDecoration: 'none' }}>
                            <Button w={'100%'} _hover={{ backgroundColor: 'yellow.500' }} bgColor={colorMode === 'light' ? 'yellow.400' : 'yellow.700'} variant="ghost" >
                                <Icon fontSize={22}><FaBook /></Icon>
                            </Button>
                        </Link>
                        <Link to="/bestiary" style={{ textDecoration: 'none' }}>
                            <Button w={'100%'} _hover={{ backgroundColor: 'yellow.500' }} bgColor={colorMode === 'light' ? 'yellow.400' : 'yellow.700'} variant="ghost" >
                                <Icon fontSize={22}><FaDragon /></Icon>
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
