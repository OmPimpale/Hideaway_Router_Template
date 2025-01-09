import { Link } from "react-router-dom";

let Navbar = () => {

    let clickBtn = () => {
        let btn = document.getElementById("navdiv");
        if (btn.style.marginTop < "420px") {
            btn.style.marginTop = "420px";
            btn.style.backgroundColor = "rgb(12, 21, 26)";
        } else {
            btn.style.marginTop = "100px";
            btn.style.backgroundColor = "transparent";
        }
    }

    return (
        <>
            <section className="row justify-content-center" id="navbar">
                <div className="col-11 col-lg-12 col-xxl-10">
                    <section className="row">
                        <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
                            <div className="container-fluid z-3 mx-auto" id="navdiv">
                                <Link className="navbar-brand m-0 ms-1 px-2 px-md-3" to={"/"}>Hideaway <span className="d-none d-lg-inline">Resort</span></Link>
                                <button className="navbar-toggler me-1 pt-3 border-0" onClick={clickBtn} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <i className="fa-solid fa-bars-staggered" id="hidebtn"></i>
                                </button>
                                <div className="collapse navbar-collapse justify-content-lg-between m-4 m-lg-0" id="navbarSupportedContent">
                                    <ul className="navbar-nav mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={"/Gallery"}>Gallery</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={"/Packages"}>Packeges</Link>
                                        </li>
                                        <li className="">
                                            <Link className="nav-link" to={"/History"}>Our History</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={"/Contact"}>Contact</Link>
                                        </li>
                                    </ul>
                                    <div className="d-inline d-lg-flex align-items-center">
                                        <div className="d-flex d-lg-block justify-content-center mt-5 mb-2 m-lg-0">
                                            <a href="#" className="mx-2 navicon">
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </a>
                                            <a href="#" className="mx-2 navicon">
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>
                                            <a href="#" className="mx-2 navicon">
                                                <i className="fa-brands fa-google-plus-g"></i>
                                            </a>
                                        </div>
                                        <div className="text-center">
                                            <button type="button" className="btn rounded-0 mx-lg-3" id="bookingbtn">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </section>
                </div>
            </section>
        </>
    );
}

export default Navbar;