import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-500 text-slate-100">
      <h1 className="text-6xl font-bold mb-4">Oops!</h1>
      <p className="text-xl mb-6">Desculpe, ocorreu um erro inesperado.</p>
      <Link to={"/"} className="px-4 py-2 bg-amber-600 text-slate-100 rounded-md hover:bg-amber-500">Voltar à página inicial</Link>
    </div>
  );
};