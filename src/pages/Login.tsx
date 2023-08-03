import { Link } from "react-router-dom";

export function Cadastro() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-100 dark:bg-slate-800">
            <div className="max-w-2xl w-full px-8 py-6 text-slate-100 dark:text-slate-800 bg-slate-800 dark:bg-slate-100 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-2">Cadastro</h2>
                <p className="mb-8">Já possui uma conta? <Link to={'/login'} className="hover:font-semibold hover:text-amber-500">Fazer login!</Link></p>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block dark:text-slate-700 font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="border-2 rounded-lg px-3 py-2 w-full outline-none border-amber-600"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block dark:text-slate-700 font-bold mb-2">
                            Nome de Usuario
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="border-2 rounded-lg px-3 py-2 w-full outline-none border-amber-600"
                        />
                    </div>
                    <div className="mb-4 flex h-10">
                        <label htmlFor="password" className="block dark:text-slate-700 font-bold mr-3">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="border-2 rounded-lg px-3 py-2 outline-none border-amber-600 w-[40%] mr-2"
                        />
                        <label htmlFor="password" className="block text-center dark:text-slate-700 font-bold mr-3">
                            Confirmar <br/> senha
                        </label>
                        <input
                            type="conf-password"
                            id="conf-password"
                            name="conf-password"
                            className="border-2 rounded-lg px-3 py-2 outline-none border-amber-600 w-[40%]"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-amber-600 text-slate-100 font-semibold rounded-lg px-4 py-2 w-full hover:bg-amber-500"
                    >
                        Criar conta
                    </button>
                </form>
            </div>
        </div>
    );
}

export function Login() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-100 dark:bg-slate-800">
            <div className="max-w-2xl w-full px-8 py-6 text-slate-100 dark:text-slate-800 bg-slate-800 dark:bg-slate-100 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-2">Login</h2>
                <p className="mb-8">Não possui uma conta ainda? <Link to={'/cadastro'} className="hover:font-semibold hover:text-amber-500">Crie uma!</Link></p>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block dark:text-slate-700 font-bold mb-2">
                            Email ou Nome de Usuario
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="border-2 rounded-lg px-3 py-2 w-full outline-none border-amber-600"
                        />
                    </div>
                   
                    <div className="mb-4">
                        <label htmlFor="password" className="block dark:text-slate-700 font-bold">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="border-2 rounded-lg px-3 py-2 outline-none border-amber-600 w-full"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-amber-600 text-slate-100 font-semibold rounded-lg px-4 py-2 w-full hover:bg-amber-500"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
