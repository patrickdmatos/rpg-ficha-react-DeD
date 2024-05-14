import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';
import { DrawerCreateCharacter } from '../../playerPages/create';

const Home = () => {
    return (
        <>
        <Box textAlign="center" py="20">
            <Heading as="h1" size="xl" mb="6">Bem-vindo à Taberna da Cadela Prenha!</Heading>
            <Text fontSize="lg" mb="8">Aqui você pode se preparar para todos os perigos e aventuras que podem aparecer no vasto mundo de Dungeons & Dragons.</Text>

            <Box display="flex" justifyContent="center">
                <DrawerCreateCharacter />
                <Button as={Link} to="/biblioteca-personagem" variant="outline" colorScheme="blue" size="lg">Gerenciar Personagens</Button>
            </Box>
        </Box>
            {/* <footer>
                <div className="footer-container">
                    <div className="footer-section">
                        <h4>About Us</h4>
                        <p>Your company description here.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Links</h4>
                        <ul>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/terms">Terms of Service</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <p>Email: info@yourcompany.com</p>
                        <p>Phone: 123-456-7890</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2022 Your Company. All rights reserved.</p>
                </div>
            </footer> */}
        <Outlet />
        </>
    );
}

export default Home;