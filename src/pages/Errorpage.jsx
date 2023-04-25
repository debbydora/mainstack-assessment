import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="mx-auto flex flex-col items-center h-screen font-serif justify-center font-bold">
      <h1 className="text-9xl  text-sky-600">Oops!</h1>
      <p className="mt-16 text-6xl text-lime-400 ">This Page is coming soon.</p>
      <p className="mt-8 text-red-400 text-sm font-bold">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
