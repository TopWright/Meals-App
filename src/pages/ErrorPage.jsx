import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="flex flex-col align-center justify-center h-fullVh ">
            <h1 className="">Oops!</h1>
            <p className="mt-2 text-lg">Sorry, an unexpected error has occurred.</p>
            <p className="mt-2 text-lg">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

export default ErrorPage