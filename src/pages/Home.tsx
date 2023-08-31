import { NavBar } from "../components/NavBar";

export const Home = () => {
  return (
    <div className="bg-sky-900 text-white min-h-screen w-screen flex flex-col justify-start items-center font-medievalsharp">
        <NavBar />
      <h1 className="text-4xl font-semibold mb-4">Welcome to D&D Game Control</h1>
      <p className="text-lg mb-8">A fan page make to Players and Masters. to Play and know the Dungeosn and Dragons Wolrd.</p>
    </div>
  );
};