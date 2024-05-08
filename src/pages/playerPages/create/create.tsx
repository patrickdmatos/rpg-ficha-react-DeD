import { Box, Button, Checkbox, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Input, InputGroup, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, PinInput, PinInputField, Select, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, Text, useDisclosure, useSteps } from "@chakra-ui/react"
import { useRef, useState } from "react"

export const DrawerCreateCharacter = () => {
    const [selectedSubrace, setSelectedSubrace] = useState();
    const [selectedRace, setSelectedRace] = useState();
    const [selectedClass, setSelectedClass] = useState();
    const [nome, setNome] = useState();
    const [antecedente, setAntecedente] = useState();
    const [alinhamento, setAlinhamento] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [altura, setAltura] = useState();
    const [idade, setIdade] = useState();
    const [peso, setPeso] = useState();
    const btnRef = useRef()
    const characterData = {
        Infos: {
            Nivel: 1,
            nome,
            antecedente,
            alinhamento,
            altura,
            idade,
            peso
        },
        Classe: '',
        Raça: '',
        SubRaça: '',
        Atributos: {},
        Pericias: {},
        Inventario: {},
    }


    const steps = [
        { title: 'Primeiro', description: 'Informações básicas' },
        { title: 'Segundo', description: 'Atributos e perícias' },
        { title: 'Terceiro', description: 'Características únicas e habilidades' },
        { title: 'Quarto', description: 'Este é você?' },
    ]

    const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: steps.length,
    });

    const handleIdadeChange = (event: Event) => {
        const formattedValue = event.target.value.replace(/\D/g, '');
        setIdade(formattedValue);
    };

    const handleAlturaChange = (event: Event) => {
        let formattedValue = event.target.value.replace(/[^0-9.]/g, '');

        const decimalCount = formattedValue.split('.').length - 1;
        if (decimalCount > 1) {
            formattedValue = formattedValue.slice(0, -1);
        }

        setAltura(formattedValue);
    };

    const handlePesoChange = (event: Event) => {
        let formattedValue = event.target.value.replace(/[^0-9.]/g, '');

        const decimalCount = formattedValue.split('.').length - 1;
        if (decimalCount > 1) {
            formattedValue = formattedValue.slice(0, -1);
        }

        setPeso(formattedValue);
    };

    const subracesByRace = {
        'anao': ['Anão da Montanha', 'Anão da Colina'],
        'elfo': ['Alto Elfo', 'Elfo da Floresta', 'Elfo Negro (Drow)'],
        'halfling': ['Halfling Leve Pé', 'Halfling Robusto'],
        'humano': [],
        'draconato': ['Azul', 'Branco', 'Bronze', 'Cobre', 'Latão', 'Ouro', 'Prata', 'Preto', 'Verde', 'Vermelho'],
        'gnomo': ['Gnomo das Profundezas', 'Gnomo das Rochas'],
        'meio-elfo': [],
        'meio-orc': [],
        'tiefling': [],
        'elfo-drow': [],
    };

    const [atributos, setAtributos] = useState({
        Força: { value: 0, proficiencia: false },
        Destreza: { value: 0, proficiencia: false },
        Constituição: { value: 0, proficiencia: false },
        Inteligência: { value: 0, proficiencia: false },
        Sabedoria: { value: 0, proficiencia: false },
        Carisma: { value: 0, proficiencia: false },
    });

    const [pericias, setPericias] = useState({
        'Acrobacia(Des)': { proeficiencia: atributos.Destreza.proficiencia, value: atributos.Destreza.value },
        'Arcanismo(Int)': { proeficiencia: atributos.Inteligência.proficiencia, value: atributos.Inteligência.value },
        'Atletismo(For)': { proeficiencia: atributos.Força.proficiencia, value: atributos.Força.value },
        'Atuação(Car)': { proeficiencia: atributos.Carisma.proficiencia, value: atributos.Carisma.value },
        'Blefar(Car)': { proeficiencia: atributos.Carisma.proficiencia, value: atributos.Carisma.value },
        'Furtividade(Des)': { proeficiencia: atributos.Destreza.proficiencia, value: atributos.Destreza.value },
        'História(Int)': { proeficiencia: atributos.Inteligência.proficiencia, value: atributos.Inteligência.value },
        'Intimidação(Car)': { proeficiencia: atributos.Carisma.proficiencia, value: atributos.Carisma.value },
        'Intuição(Sab)': { proeficiencia: atributos.Sabedoria.proficiencia, value: atributos.Sabedoria.value },
        'Investigação(Int)': { proeficiencia: atributos.Inteligência.proficiencia, value: atributos.Inteligência.value },
        'Lidar com Animais(Sab)': { proeficiencia: atributos.Sabedoria.proficiencia, value: atributos.Sabedoria.value },
        'Medicina(Sab)': { proeficiencia: atributos.Sabedoria.proficiencia, value: atributos.Sabedoria.value },
        'Natureza(Int)': { proeficiencia: atributos.Inteligência.proficiencia, value: atributos.Inteligência.value },
        'Percepção(Sab)': { proeficiencia: atributos.Sabedoria.proficiencia, value: atributos.Sabedoria.value },
        'Persuasão(Car)': { proeficiencia: atributos.Carisma.proficiencia, value: atributos.Carisma.value },
        'Prestidigitação(Des)': { proeficiencia: atributos.Destreza.proficiencia, value: atributos.Destreza.value },
        'Religião(Int)': { proeficiencia: atributos.Inteligência.proficiencia, value: atributos.Inteligência.value },
        'Sobrevivência(Sab)': { proeficiencia: atributos.Sabedoria.proficiencia, value: atributos.Sabedoria.value },
    })

    return (
        <>
            <Button ref={btnRef} onClick={onOpen} variant="solid" colorScheme="blue" size="lg" mr="4">Criar Personagem</Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={'full'}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Dungeons & Dragons | 5°Edição</DrawerHeader>

                    <DrawerBody display={'Flex'}>
                        <Stepper index={activeStep} orientation='vertical' height='400px' gap='0'>
                            {steps.map((step, index) => (
                                <Step key={index}>
                                    <StepIndicator>
                                        <StepStatus
                                            complete={<StepIcon />}
                                            incomplete={<StepNumber />}
                                            active={<StepNumber />}
                                        />
                                    </StepIndicator>

                                    <Box flexShrink='0'>
                                        <StepTitle>{step.title}</StepTitle>
                                        <StepDescription>{step.description}</StepDescription>
                                    </Box>

                                    <StepSeparator />
                                </Step>
                            ))}
                        </Stepper>

                        <Flex flexDir={'column'} ml={4} w={'90vw'} borderLeft={'rgba(255, 255, 255, 0.16) 2px solid'} p={4}>
                            {activeStep === 0 && (
                                <>
                                    <InputGroup display={'block'}>
                                        <Text mt={2} mb={2} fontWeight={'bold'}>
                                            Nome
                                        </Text>
                                        <Input value={nome} onChange={(event: Event) => setNome(event.target.value)} />
                                    </InputGroup>

                                    <Flex justifyContent={'space-between'} gap={4}>
                                        <InputGroup display="block">
                                            <Text mt={2} mb={2} fontWeight="bold">
                                                Raça
                                            </Text>
                                            <Select placeholder="Selecione a Raça" value={selectedRace} onChange={(event: Event) => {
                                                setSelectedRace(event.target.value)
                                                setSelectedSubrace('')
                                            }}>
                                                <option value="anao">Anão</option>
                                                <option value="elfo">Elfo</option>
                                                <option value="halfling">Halfling</option>
                                                <option value="humano">Humano</option>
                                                <option value="draconato">Draconato</option>
                                                <option value="gnomo">Gnomo</option>
                                                <option value="meio-elfo">Meio-Elfo</option>
                                                <option value="meio-orc">Meio-Orc</option>
                                                <option value="tiefling">Tiefling</option>
                                                <option value="elfo-drow">Elfo Drow</option>
                                            </Select>
                                        </InputGroup>

                                        {selectedRace && subracesByRace[selectedRace].length > 0 && (
                                            <InputGroup display="block">
                                                <Text mt={2} mb={2} fontWeight="bold">
                                                    Subraça
                                                </Text>
                                                <Select placeholder="Selecione a Subraça" value={selectedSubrace} onChange={(event: Event) => { setSelectedSubrace(event.target.value) }}>
                                                    {subracesByRace[selectedRace].map((subrace, index) => (
                                                        <option key={index} value={subrace}>
                                                            {subrace}
                                                        </option>
                                                    ))}
                                                </Select>
                                            </InputGroup>
                                        )}

                                        <InputGroup display={'block'}>
                                            <Text mt={2} mb={2} fontWeight={'bold'}>
                                                Classe
                                            </Text>
                                            <Select placeholder="Selecione a Classe" value={selectedClass} onChange={(event: Event) => setSelectedClass(event.target.value)}>
                                                <option value="artifice">Artífice</option>
                                                <option value="barbaro">Bárbaro</option>
                                                <option value="bardo">Bardo</option>
                                                <option value="bruxo">Bruxo</option>
                                                <option value="clerigo">Clérigo</option>
                                                <option value="druida">Druida</option>
                                                <option value="feiticeiro">Feiticeiro</option>
                                                <option value="guardiao">Guardião</option>
                                                <option value="guerreiro">Guerreiro</option>
                                                <option value="ladino">Ladino</option>
                                                <option value="mago">Mago</option>
                                                <option value="monge">Monge</option>
                                            </Select>
                                        </InputGroup>
                                    </Flex>
                                    <InputGroup display={'block'}>
                                        <Text mt={2} mb={2} fontWeight={'bold'}>
                                            Antecedente
                                        </Text>
                                        <Input value={antecedente} onChange={(event: Event) => setAntecedente(event.target.value)} />
                                    </InputGroup>
                                    <InputGroup display={'block'}>
                                        <Text mt={2} mb={2} fontWeight={'bold'}>
                                            Alinhamento
                                        </Text>
                                        <Select placeholder="Selecione o Alinhamento" onChange={(e) => setAlinhamento(e.target.value)} value={alinhamento}>
                                            <option value="LB">Leal e Bom</option>
                                            <option value="NB">Neutro e Bom</option>
                                            <option value="CB">Caótico e Bom</option>
                                            <option value="LN">Leal e Neutro</option>
                                            <option value="N">Neutro</option>
                                            <option value="CN">Caótico e Neutro</option>
                                            <option value="LM">Leal e Mal</option>
                                            <option value="NM">Neutro e Mal</option>
                                            <option value="CM">Caótico e Mal</option>
                                        </Select>
                                    </InputGroup>

                                    <InputGroup mt={2} mb={2} gap={2} w={'100%'}>
                                        <Box>
                                            <Text mt={2} mb={2} fontWeight={'bold'}>
                                                Idade
                                            </Text>
                                            <NumberInput maxW='100px' mr='2rem' min={15} max={500} value={idade} onChange={() => handleIdadeChange}>
                                                <NumberInputField />
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper />
                                                    <NumberDecrementStepper />
                                                </NumberInputStepper>
                                            </NumberInput>
                                        </Box>
                                        <Box>
                                            <Text mt={2} mb={2} fontWeight={'bold'}>
                                                Altura
                                            </Text>
                                            <NumberInput maxW='100px' mr='2rem' min={1} max={10} value={altura} onChange={() => handleAlturaChange}>
                                                <NumberInputField />
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper />
                                                    <NumberDecrementStepper />
                                                </NumberInputStepper>
                                            </NumberInput>
                                        </Box>
                                        <Box>
                                            <Text mt={2} mb={2} fontWeight={'bold'}>
                                                Peso
                                            </Text>
                                            <NumberInput maxW='100px' mr='2rem' min={30} max={300} value={peso} onChange={() => handlePesoChange}>
                                                <NumberInputField />
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper />
                                                    <NumberDecrementStepper />
                                                </NumberInputStepper>
                                            </NumberInput>
                                        </Box>
                                    </InputGroup>
                                </>
                            )}

                            {activeStep === 1 && (
                                <>
                                    <Flex justifyContent={'space-between'} gap={6} w={'100%'}>
                                        {Object.entries(atributos).map(([atributo, { value, proficiencia }]) => (
                                            <InputGroup key={atributo} display={'block'} textAlign={'center'}>
                                                <Text mt={2} mb={2} fontWeight={'bold'}>
                                                    {atributo}
                                                </Text>
                                                <Input
                                                    type="number"
                                                    value={value}
                                                    textAlign={'center'}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                        if (e.target.value.length <= 2) {
                                                            setAtributos((prevatributos) => ({
                                                                ...prevatributos,
                                                                [atributo]: { ...prevatributos[atributo], value: Number(e.target.value) },
                                                            }));
                                                        }
                                                    }}
                                                    w={'4rem'}
                                                    h={'4rem'}
                                                />
                                                <Checkbox
                                                    isChecked={proficiencia}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                        setAtributos((prevatributos) => ({
                                                            ...prevatributos,
                                                            [atributo]: { ...prevatributos[atributo], proficiencia: e.target.checked },
                                                        }))
                                                    }}
                                                >
                                                    Proficiência
                                                </Checkbox>
                                            </InputGroup>
                                        ))}
                                    </Flex>

                                    <Text mt={4} mb={2} fontWeight={'bold'}>
                                        Perícias
                                    </Text>
                                    <Flex flexDirection="column">
                                        {[...Array(Math.ceil(Object.keys(pericias).length / 6)).keys()].map((rowIndex) => (
                                            <Flex key={rowIndex} justifyContent="space-between">
                                                {Object.entries(pericias).slice(rowIndex * 6, (rowIndex + 1) * 6).map(([pericia, { proficiencia, value }]) => (
                                                    <InputGroup p={2} m={2} key={pericia} display="block" textAlign="center">
                                                        <Text mb={2} fontWeight={'bold'}>{pericia}</Text>
                                                        <Input
                                                            type="number"
                                                            value={value}
                                                            textAlign="center"
                                                            onChange={(e) => {
                                                                if (e.target.value.length <= 2) {
                                                                    setPericias((prevpericias) => ({
                                                                        ...prevpericias,
                                                                        [pericia]: { ...prevpericias[pericia], value: Number(e.target.value) },
                                                                    }));
                                                                }
                                                            }}
                                                            w="5rem"
                                                            h="2rem"
                                                            border="none"
                                                            borderBottom="rgba(255, 255, 255, 0.16) 1px solid"
                                                        />
                                                        <Checkbox
                                                            isChecked={proficiencia}
                                                            onChange={(e) => {
                                                                setPericias((prevpericias) => ({
                                                                    ...prevpericias,
                                                                    [pericia]: { ...prevpericias[pericia], proficiencia: e.target.checked },
                                                                }));
                                                            }}
                                                        />
                                                    </InputGroup>
                                                ))}
                                            </Flex>
                                        ))}
                                    </Flex>

                                </>
                            )}


                            {activeStep === 2 && (
                                <>
                                    {/* Características únicas e habilidades */}
                                </>
                            )}
                        </Flex>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button colorScheme="blue" mr={3} onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))} isDisabled={activeStep === 0}>
                            Anterior
                        </Button>
                        <Button colorScheme="blue" onClick={() => {
                            setActiveStep((prev) => Math.min(prev + 1, steps.length - 1))
                            if (activeStep === 1) {
                                characterData.Infos['nome'] = nome
                                characterData.Infos['idade'] = idade
                                characterData.Infos['altura'] = altura
                                characterData.Infos['peso'] = peso
                                characterData.Infos['alinhamento'] = alinhamento
                                characterData.Infos['antecedente'] = antecedente
                                characterData.Raça = selectedRace
                                characterData.SubRaça = selectedSubrace
                                characterData.Classe = selectedClass

                            sessionStorage.setItem(`${nome}`, JSON.stringify(characterData))
                            sessionStorage.setItem(`${nome} Raça`, characterData.Raça)
                            sessionStorage.setItem(`${nome} SubRaça`, characterData.SubRaça)
                            sessionStorage.setItem(`${nome} Classe`, characterData.Classe)
                        } else if (activeStep === 2) {

                        }
                        }} isDisabled={activeStep === steps.length - 1}>
                        Próximo
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer >


        </>
    )
}