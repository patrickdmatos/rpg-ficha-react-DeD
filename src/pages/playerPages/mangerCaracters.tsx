import { Box, Card, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const BibliotecaPersonagens = () => {
    return (
        <>
            <Box textAlign="center" py="20">
                <Heading>Biblioteca de personagens</Heading>
            </Box>
            <Divider></Divider>
            <Flex justifyContent={'flex-start'} gap={4} p={6} bg={'gray.700'}>
                <Card maxW={'35rem'} minW={'30rem'} maxH={'12rem'} p={2}>
                    <Heading as="h2" size="lg">Personagem 1 <Image></Image></Heading>
                    <Flex justifyContent={'space-between'}>
                        <Box>
                            <Text>Raça</Text>
                            <Text>Classe</Text>
                        </Box>
                        <Flex gap={2} alignItems={'center'}>
                            <Text>Nível</Text>
                            <Flex w={'10rem'} h={'1rem'} border={'black 1px solid'} rounded={'md'} bg={'gray.600'}>
                                <Flex justifyContent={'center'} alignItems={'center'} w={'80%'} h={'100%'} rounded={'md'} bg={'blue.600'} color={'white'}>
                                    <Text>
                                        80/300
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex justifyContent={'space-between'} gap={2}>
                            <Text>CA</Text>
                            <Text>Ouro</Text>
                        </Flex>
                    </Flex>
                </Card>
                <Card maxW={'120rem'} minW={'30rem'} maxH={'12rem'} p={2}>
                    <Heading as="h2" size="lg">Personagem 2 <Image></Image></Heading>
                    <Flex justifyContent={'space-between'}>
                        <Box>
                            <Text>Raça</Text>
                            <Text>Classe</Text>
                        </Box>
                        <Flex gap={2}>
                            <Text>Nível</Text>
                            <Text>Experiência</Text>
                        </Flex>
                        <Flex justifyContent={'space-between'} gap={2}>
                            <Text>CA</Text>
                            <Text>Ouro</Text>
                        </Flex>
                    </Flex>
                </Card>
            </Flex>
        </>
    )
}
