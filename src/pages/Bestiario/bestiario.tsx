import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Card, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { ObtemArrayMonstros, InfosMonstro } from "./hooks/ObtemMonstros";
import { ReactElement } from "react";

interface IMonstros {
    map(arg0: (monstro: IMonstros) => import("react/jsx-runtime").JSX.Element): unknown;
    name: string;
    index: string;
    url: string;
}



const Bestiario = (): JSX.Element => {
    const { data, error, isLoading } = ObtemArrayMonstros();

    const renderMonstros = (monstros: IMonstros) => {

        return (
            monstros.map((monstro: IMonstros): ReactElement<JSX.Element> => {
                const { data: monstrosInfos } = InfosMonstro(monstro.url);

                if (!monstrosInfos) {
                    console.log('Monstro não encontrado');
                }

                const tamanhosDesejados = ['Huge', 'Large', 'Medium'];

                return (
                    <Accordion allowToggle key={monstro.index}>
                        {tamanhosDesejados.map((tamanho: string) => (
                            <AccordionItem key={tamanho}>
                                {({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton>
                                                <Box as='span' flex='1' textAlign='left'>
                                                    <Heading fontSize={16}>
                                                        {tamanho}
                                                    </Heading>
                                                </Box>
                                                {isExpanded ? 'MENOS' : 'MAIS'}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            {monstrosInfos && monstrosInfos?.size.includes(tamanho) ? (
                                                <Card mb={4} p={4} bgColor={'gray.700'} color={'yellow.400'}>
                                                    <Heading as="h2" size="lg" mb={4}>{monstrosInfos.name}</Heading>
                                                    <Text fontSize="md" mb={2}>Tamanho: {monstrosInfos.size}</Text>
                                                    <Text fontSize="md" mb={2}>Tipo: {monstrosInfos.type}</Text>
                                                    <Text fontSize="md" mb={2}>Alineamento: {monstrosInfos.alignment}</Text>
                                                </Card>
                                            ) : (
                                                'Não há monstros nesse tamanho.'
                                            )}
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>
                        ))}
                    </Accordion>
                );
            })

        );
    };

    return (
        <>
            <Flex flexDir={'column'} textAlign="center" alignItems={'center'} py={8} bgColor={'gray.500'} h={'100vh'} color={'yellow.400'}>
                <Heading as="h1" size="xl" mb="6">Bem-vindo à Taberna da Cadela Prenha!</Heading>
                <Text fontSize="lg" fontWeight={600}>Essa é a base da Guilda do Doguinho Caramelo.</Text>
                <Text fontSize="lg" fontWeight={600} mb="8">Aqui você pode registrar suas aventuras e conseguir informações valiosas.</Text>

                {isLoading && <p>Carregando...</p>}
                {error && <p>Ocorreu um erro ao carregar os monstros</p>}
                {data && renderMonstros(data as IMonstros)}
            </Flex >
        </>
    );
};

export default Bestiario;
