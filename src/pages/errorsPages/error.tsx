import { Button, Text, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function NaoLocalizado404() {
    const navigate = useNavigate()

    const goBackOneStep = () => {navigate('/')}

    return (
        <VStack mt={20}>
            <Text fontSize={20}>
                Poxa! <strong>Nós não encontramos</strong> o caminho para essa página.
            </Text>
            <Button onClick={goBackOneStep} mt={3}>
                Voltar Para Tela Inicial
            </Button>
        </VStack>
    )
}