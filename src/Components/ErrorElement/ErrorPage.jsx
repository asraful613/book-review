import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
             <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>Please try again later.</p>
            <Link to={"/"} className="btn btn-secondary">back to home</Link>

        </div>
    );
};

export default ErrorPage;