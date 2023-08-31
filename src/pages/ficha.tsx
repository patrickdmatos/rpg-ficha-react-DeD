import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Button,
    Typography,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Select,
    Option,
    Textarea,
} from "@material-tailwind/react";
import React from "react";


const DndRaces = [
    'Dragonborn',
    'Anão',
    'Elfo',
    'Gnomo',
    'Meio-Elfo',
    'Meio-Orc',
    'Pequenino',
    'Humano',
    'Tiefling',
    // Adicione mais raças conforme necessário
];

const DndClasses = [
    'Bárbaro',
    'Bardo',
    'Clérigo',
    'Druida',
    'Guerreiro',
    'Monge',
    'Paladino',
    'Patrulheiro',
    'Ladino',
    'Feiticeiro',
    'Bruxo',
    'Mago',
    // Adicione mais classes conforme necessário
];

const DndAlignments = [
    'Leal e Bom - LB',
    'Neutro e Bom - NB',
    'Caótico e Bom - CB',
    'Leal e Neutro - LN',
    'Neutro - N',
    'Caótico e Neutro - CN',
    'Leal e Mal - LM',
    'Neutro e Mal - NM',
    'Caótico e Mal - CM',
    // Adicione mais alinhamentos conforme necessário
];

export const HomeSheet = () => {
    return (
        <div className="h-screen w-screen text-white bg-sky-800 font-medievalsharp">
            <NavBar />
            <div className="h-full w-full p-2">
                <Link to={'/sheet/NewCharacter-sheet'}>
                    <button className="w-64 h-12 rounded-xl bg-sky-600 hover:bg-sky-500 hover:text-amber-600 hover:text-lg duration-200">
                        Novo Personagem
                    </button>
                </Link>
            </div >
        </div >
    )
}

export const CharacterSheet = () => {
    const [type, setType] = React.useState("pessoal");
    return (
        <div className="h-screen w-screen text-white bg-sky-800 font-medievalsharp">
            <NavBar />
            <Card className="w-full max-w-[72rem] mx-auto">
                <CardBody className="h-max">
                    <Tabs value={type} className="overflow-visible">
                        <TabsHeader className="relative z-0 ">
                            <Tab value="pessoal" onClick={() => setType("pessoal")}>
                                Pessoais
                            </Tab>
                            <Tab value="caracteres" onClick={() => setType("caracteres")}>
                                Carcteristicas
                            </Tab>
                            <Tab value="invetario" onClick={() => setType("invetario")}>
                                Inventario
                            </Tab>
                        </TabsHeader>
                        <TabsBody className="!overflow-x-hidden !overflow-y-hidden h-max"
                            animate={{
                                initial: {
                                    x: type === "pessoal" ? 400 : -400,
                                },
                                mount: {
                                    x: 0,
                                },
                                unmount: {
                                    x: type === "pessoal" ? 400 : -400,
                                },
                            }}
                        >
                            <TabPanel value="pessoal" className="p-0 w-[99%] !overflow-y-visible">
                                <form className="mt-12 flex flex-col gap-4">
                                    <div className="w-full flex gap-4">
                                        <Select variant="standard" label="Select Version" className="!overflow-y-visible">
                                            {DndClasses.map((dndClass, index) => (
                                                <Option key={index} value={dndClass}>
                                                    {dndClass}
                                                </Option>))}
                                        </Select>
                                    </div>
                                    <div className="w-full flex gap-4">
                                        <Input label="Nome" variant="standard" />
                                        <Input label="Level" variant="standard" type="number" className="w-[6rem]"/>
                                        <Input label="Idade" variant="standard" type="number" className="w-[6rem]"/>
                                        <Input label="Altura" variant="standard" type="number" className="w-[6rem]"/>
                                    </div>
                                    <div className="w-full flex gap-4">
                                        <Select variant="standard" label="Select Version" className="!overflow-y-visible">
                                            {DndRaces.map((dndRace, index) => (
                                                <Option key={index} value={dndRace}>
                                                    {dndRace}
                                                </Option>))}
                                        </Select>
                                    </div>
                                    <div className="w-full flex gap-4">
                                        <Select variant="standard" label="Select Version" className="!overflow-y-visible">
                                            {DndAlignments.map((alinhamentos, index) => (
                                                <Option key={index} value={alinhamentos}>
                                                    {alinhamentos}
                                                </Option>))}
                                        </Select>
                                    </div>
                                    <div className="w-full flex gap-4">
                                       <Textarea label="Historia"/>
                                    </div>
                                </form>
                            </TabPanel>
                            <TabPanel value="caracteres" className="p-0">
                                <form className="mt-12 flex flex-col gap-4">
                                    <Input label="abacate" variant="standard" />

                                </form>
                            </TabPanel>
                            <TabPanel value="invetario" className="p-0">
                                <form className="mt-12 flex flex-col gap-4">
                                    <Input label="abacate" variant="standard" />

                                </form>
                            </TabPanel>
                        </TabsBody>
                    </Tabs>
                </CardBody>
            </Card>
        </div>
    )
}