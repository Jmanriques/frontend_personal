import { logDOM } from "@testing-library/react";
import { Link } from "react-router-dom";
import LogButton from "./LogButton";

function Navbar(props) {
    return (
        <nav
            class="navbar navbar-expand-lg navbar-dark bg-dark"
            aria-label="Offcanvas navbar large"
        >
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    CITMED
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar2"
                    aria-controls="offcanvasNavbar2"
                >
                    <span class="navbar-toggler-icon">Home</span>
                </button>
                <div
                    class="offcanvas offcanvas-end text-bg-dark"
                    tabindex="-1"
                    id="offcanvasNavbar2"
                    aria-labelledby="offcanvasNavbar2Label"
                >
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbar2Label">
                            Offcanvas
                        </h5>
                        <button
                            type="button"
                            class="btn-close btn-close-white"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a
                                    class="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    <Link to={"/"}>Home</Link>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="" href="#">
                                    <Link to={"/Link"} className="nav-link">
                                        Nosotros
                                    </Link>
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Perfil
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="" href="#">
                                            <Link
                                                to={"/Medico"}
                                                className="dropdown-item"
                                            >
                                                Medico
                                            </Link>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="" href="#">
                                            <Link
                                                to={"/Paciente"}
                                                className="dropdown-item"
                                            >
                                                Paciente
                                            </Link>
                                        </a>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a class="" href="#">
                                            <Link
                                                to={"/Administrador"}
                                                className="dropdown-item"
                                            >
                                                Administrador
                                            </Link>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex mt-3 mt-lg-0" role="search">
                            <input
                                class="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />

                            <LogButton logged={props.logged} />
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
