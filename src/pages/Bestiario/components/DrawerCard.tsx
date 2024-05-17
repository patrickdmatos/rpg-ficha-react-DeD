import { Button, Card, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Heading, Text, useColorMode, useDisclosure } from "@chakra-ui/react"
import React from "react";

export const DrawerCard = (key: string, nome: string, tipo: string, alinhamento: string, idiomas: string) => {
    const { colorMode } = useColorMode();
    const btnRef = React.useRef()
    const {isOpen , onOpen, onClose} = useDisclosure();
    return (
        <>
            <Card key={key} mb={4} p={4} bgColor={colorMode === 'light' ? 'grey.400' : 'grey.700'} color={'whiteAlpha.200'}>
                <Heading as="h2" size="lg" mb={4}>{nome}</Heading>
                <Divider mb={2} />
                <Text fontSize="md" mb={2}>Tipo: {tipo}</Text>
                <Text fontSize="md" mb={2}>Alinhamento: {alinhamento}</Text>
                {idiomas ? <Text fontSize="md" mb={2}>Idiomas: {idiomas}</Text> : ''}
                <Button ref={btnRef} onClick={onOpen} >Ver mais</Button>
            </Card>

            <Drawer
                bg={colorMode === 'light' ? 'gray.300' : 'gray.800'}
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={'full'}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Header </DrawerHeader>

                    <DrawerBody>
                        <Heading as="h2" size="lg" mb={4}>{nome}</Heading>
                        <Divider mb={2} />
                        <Text fontSize="md" mb={2}>Tipo: {tipo}</Text>
                        <Text fontSize="md" mb={2}>Alinhamento: {alinhamento}</Text>
                        {idiomas ? <Text fontSize="md" mb={2}>Idiomas: {idiomas}</Text> : ''}
                    </DrawerBody>

                    <DrawerFooter >
                        <Button type='button' variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            type='submit'
                            colorScheme='whatsapp'
                        >Salvar</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
