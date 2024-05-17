import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Grid, Heading, Text, useColorMode } from "@chakra-ui/react";
import { useObtemArrayMonstros } from "./hooks/ObtemMonstros";
import { DrawerCard } from "./components/DrawerCard";

const Bestiario = (): JSX.Element => {
    const { colorMode } = useColorMode();
    const { data, error, isLoading } = useObtemArrayMonstros();
    const arrayTamanhosMonstros = ['Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Gargantuan'];

    return (
        <>
            <Flex flexDir={'column'} textAlign="center" alignItems={'center'} py={8} bgColor={colorMode === 'light' ? 'gray.400' : 'gray.700'} h={'100vh'} color={colorMode === 'light' ? 'gray.800' : 'yellow.400'}>
                <Heading as="h1" size="xl" mb="6">Bem-vindo à Taberna da Cadela Prenha!</Heading>
                <Text fontSize="lg" fontWeight={600}>Essa é a base da Guilda do Doguinho Caramelo.</Text>
                <Text fontSize="lg" fontWeight={600} mb="8">Aqui você pode registrar suas aventuras e conseguir informações valiosas.</Text>

                <Accordion w={'74%'} allowToggle>
                    {arrayTamanhosMonstros.map((tamanho) => (
                        <AccordionItem bg={'gray.600'} key={tamanho}>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton fontSize={26}>
                                            <Box as='span' flex='1' textAlign='left'>
                                                <Heading fontSize={20}>
                                                    Tamanho: {tamanho}
                                                </Heading>
                                            </Box>
                                            {isExpanded ? '-' : '+'}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel bgColor={colorMode === 'light' ? 'gray.400' : 'gray.700'} pb={4}>
                                        <Grid templateColumns="repeat(4, 1fr)" maxH={'20rem'} overflowY={'auto'} gap={4}>
                                            {isLoading && <p>Carregando...</p>}
                                            {error && <p>Ocorreu um erro ao carregar os monstros</p>}
                                            {data && data[tamanho].map(monstro => DrawerCard(monstro.index, monstro.name, monstro.type, monstro.alignment, monstro.languages))}
                                        </Grid>
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                    ))}
                </Accordion>
            </Flex >
        </>
    );
};

export default Bestiario;
