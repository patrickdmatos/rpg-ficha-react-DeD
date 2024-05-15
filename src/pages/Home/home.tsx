import { Box, Heading, Text } from '@chakra-ui/react';
const Home = () => {
    return (
        <>
            <Box textAlign="center" py="20" bgColor={'gray.300'} h={'100vh'} color={'yellow.600'}>
                <Heading as="h1" size="xl" mb="6">Bem-vindo à Taberna da Cadela Prenha!</Heading>
                <Text fontSize="lg" fontWeight={600}>Essa é a base da Guilda do Doguinho Caramelo.</Text>
                <Text fontSize="lg" fontWeight={600} mb="8">Aqui você pode registrar suas aventuras e conseguir informações valiosas.</Text>

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
        </>
    );
}

export default Home;