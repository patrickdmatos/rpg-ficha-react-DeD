import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Card, Divider, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { useObtemArrayMonstros } from "./hooks/ObtemMonstros";
import { ReactElement } from "react";

const Bestiario = (): JSX.Element => {
    const { data, error, isLoading } = JSON.parse(localStorage.getItem('arrayMonstros'))  | useObtemArrayMonstros();
    const arrayTamanhosMonstros = ['Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Gargantuan'];

    const renderMonstroCard = (monstroInfo: any): ReactElement<JSX.Element> => (
        <Card key={monstroInfo.index} mb={4} p={4} bgColor={'gray.700'} color={'yellow.400'}>
            <Heading as="h2" size="lg" mb={4}>{monstroInfo.name}</Heading>
            <Divider mb={2} />
            <Text fontSize="md" mb={2}>Tipo: {monstroInfo.type}</Text>
            <Text fontSize="md" mb={2}>Alinhamento: {monstroInfo.alignment}</Text>
            {monstroInfo.languages ? <Text fontSize="md" mb={2}>Idiomas: {monstroInfo.languages}</Text> : ''}
        </Card>
    );

    return (
        <>
            <Flex flexDir={'column'} textAlign="center" alignItems={'center'} py={8} bgColor={'gray.500'} h={'100vh'} color={'yellow.400'}>
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
                                    <AccordionPanel bg={'gray.600'} pb={4}>
                                        <Grid templateColumns="repeat(5, 1fr)" maxH={'20rem'} overflowY={'auto'} gap={4}>
                                            {isLoading && <p>Carregando...</p>}
                                            {error && <p>Ocorreu um erro ao carregar os monstros</p>}
                                            {data && data[tamanho].map(monstro => renderMonstroCard(monstro))}
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
