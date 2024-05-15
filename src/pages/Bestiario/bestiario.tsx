import { Card, Flex, Heading, Text } from "@chakra-ui/react";
import { ObtemMonstros } from "./hooks/ObtemMonstros";

interface IMonstros {
    count: number
    results: IArrayMosntros[]
}

interface IArrayMosntros {
    name: string;
    index: string;
    url: string;
}

const Bestiario = () => {
    const { data, error, isLoading } = ObtemMonstros();

    const renderMonstros = (monstros: IMonstros) => {
        console.log(monstros.results[0]);

        return (
            <Flex flexDir={'column'} textAlign="center" alignItems={'center'} py="20" bgColor={'gray.300'} h={'100vh'} color={'yellow.600'}>
                <Heading as="h1" size="xl" mb="6">Bem-vindo à Taberna da Cadela Prenha!</Heading>
                <Text fontSize="lg" fontWeight={600}>Essa é a base da Guilda do Doguinho Caramelo.</Text>
                <Text fontSize="lg" fontWeight={600} mb="8">Aqui você pode registrar suas aventuras e conseguir informações valiosas.</Text>
                {
                    monstros.results.map((monstro: IArrayMosntros, index: number) => (
                        <>
                            <Card w={'30%'} maxH={'30px'} key={index}>
                                <Text >{monstro.name}</Text>
                            </Card>
                        </>
                    ))
                }
            </Flex>
        );
    };

    return (
        <div>
            <h1>Bestiário</h1>
            {isLoading && <p>Carregando...</p>}
            {error && <p>Ocorreu um erro ao carregar os monstros</p>}
            {data && renderMonstros(data as IMonstros)}
        </div>
    );
};

export default Bestiario;
