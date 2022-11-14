import { Link } from "react-router-dom";

function LogButton(props) {
    let LogButton = undefined;
    if (props.logged) {
        LogButton = <button className="btn btn-outline-danger">LogOut</button>;
    } else {
        LogButton = (
            <Link to={"/login"}>
                <button className="btn btn-outline-success">Login</button>
            </Link>
        );
    }

    return <div className="me-5 ms-10">{LogButton}</div>;
}

export default LogButton;
