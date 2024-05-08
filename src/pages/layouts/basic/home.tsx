import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';
import { DrawerCreateCharacter } from '../../playerPages/create/create';

const Home = () => {
    return (
        <>
        <Box textAlign="center" py="20">
            <Heading as="h1" size="xl" mb="6">Bem-vindo à Taberna da Cadela Prenha!</Heading>
            <Text fontSize="lg" mb="8">Aqui você pode se preparar para todos os perigos e aventuras que podem aparecer no vasto mundo de Dungeons & Dragons.</Text>

            <Box display="flex" justifyContent="center">
                <DrawerCreateCharacter />
                <Button as={Link} to="/manage" variant="outline" colorScheme="blue" size="lg">Gerenciar Personagens</Button>
            </Box>
        </Box>
        <footer>
            
        </footer>
        <Outlet />
        </>
    );
}

export default Home;