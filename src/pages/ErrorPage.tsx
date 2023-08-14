export const ErrorPage = () => {
    return (
        <div className="flex w-screen h-screen bg-gray-400 font-medievalsharp">
          <div className="m-auto text-center">
            <h1 className="font-extrabold mb-4 text-red-800 text-[6rem]">404</h1>
            <p className="text-[2rem] text-amber-950">Oops! you might be lost.</p>
            <p className="text-[1rem] text-amber-950">the page you looking for is not founded.</p>
          </div>
        </div>
      );
}
