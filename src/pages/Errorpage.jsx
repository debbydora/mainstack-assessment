import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="mx-auto flex flex-col items-center h-screen font-serif justify-center font-bold">
      <h1 className="text-3xl  text-sky-600 lg:text-9xl">Oops!</h1>
      <p className="mt-16 text-2xl text-lime-400 lg:text-6xl">
        This Page is coming soon.
      </p>
      <p className="mt-8 text-red-400 text-sm font-bold">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
