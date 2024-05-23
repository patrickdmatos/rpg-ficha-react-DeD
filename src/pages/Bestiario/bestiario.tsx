import { Button, Flex, Heading, Menu, MenuButton, MenuItem, MenuList, Text, useColorMode } from "@chakra-ui/react";
import { useObtemArrayMonstros } from "./hooks/ObtemMonstros";
import { SlArrowDown } from "react-icons/sl";

const Bestiario = (): JSX.Element => {
    const { colorMode } = useColorMode();
    const { data, error, isLoading } = useObtemArrayMonstros();
    const arrayTamanhosMonstros = ['Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Gargantuan'];
    console.log(data);

    return (
        <>
            <Flex flexDir={'column'} textAlign="center" alignItems={'center'} py={8} bgColor={colorMode === 'light' ? 'gray.400' : 'gray.700'} h={'100vh'} color={colorMode === 'light' ? 'gray.800' : 'yellow.400'}>
                <Heading as="h1" size="xl" mb="6">Bem-vindo à Taberna da Cadela Prenha!</Heading>
                <Text fontSize="lg" fontWeight={600}>Essa é a base da Guilda do Doguinho Caramelo.</Text>
                <Text fontSize="lg" fontWeight={600} mb="8">Aqui você pode registrar suas aventuras e conseguir informações valiosas.</Text>

                <Menu>
                    <MenuButton as={'button'}>
                        <Button gap={4} alignItems={'center'} textTransform={'uppercase'}>
                            <SlArrowDown />
                            Tamanhos de Monstros
                        </Button>
                    </MenuButton>
                    <MenuList>
                        {isLoading && <MenuItem>Carregando...</MenuItem>}
                        {(error as React.ReactNode) && <MenuItem>Erro ao carregar</MenuItem>}
                        {arrayTamanhosMonstros.map((tamanho, index) => (
                            <MenuItem key={index}>
                                {tamanho}
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </Flex >
        </>
    );
};

export default Bestiario;
