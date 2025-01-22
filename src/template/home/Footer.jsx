import { Link } from "react-router-dom";

let Footer = () => {
    return (
        <>
            <section className="row justify-content-center" id="footer">
                <div className="col-12">
                    <section className="row text-center justify-content-center pt-5" id="foot">
                        <div className="col-12 mt-4">
                            <h4 id="foothead">Join the <em>Hideaway</em> Newsletters</h4>
                            <p id="foottext">Subscribe to our mailing list to receive updates and promotional offers.</p>
                        </div>
                        <div className="col-11 col-md-10 col-lg-7 col-xxl-5 mt-3 mb-5 d-md-flex" id="footform">
                            <input type="email" placeholder="Enter Email Here" className="form-control rounded-0 me-md-2" />
                            <button type="submit" className="btn rounded-0 mt-3 mt-md-0 ms-md-2" id="footbtn">Submit</button>
                        </div>
                        <div className="col-12 col-xxl-8 mt-5">
                            <div className="row">
                                <div className="col-12 d-lg-none">
                                    <Link to={"/"} className="text-decoration-none mx-2 footlink">Home</Link>
                                    <Link to={"/Packages"} className="text-decoration-none mx-2 footlink">Book&nbsp;Now</Link>
                                    <Link to={"/Contact"} className="text-decoration-none mx-2 footlink">Contact</Link>
                                    <Link to={"/History"} className="text-decoration-none mx-2 footlink">Events</Link>
                                    <br className="d-md-none" />
                                    <a href="#" className="text-decoration-none mx-2 footlink">Policies</a>
                                    <a href="#" className="text-decoration-none mx-2 footlink">Term &amp; Conditions</a>
                                </div>
                                <div className="col-12 col-lg-5 mt-2 m-lg-0">
                                    <p id="copyright">&copy; 2024 | Template Crafted by : <a href="https://ompimpale.github.io/Om_Portfolio/" className="text-decoration-none owner"> <br className="d-md-none" /> Om Pimpale (PP113)</a>.</p>
                                </div>
                                <div className="col-12 col-lg-7 d-none d-lg-inline">
                                    <Link to={"/"} className="text-decoration-none mx-2 footlink">Home</Link>
                                    <Link to={"/Packages"} className="text-decoration-none mx-2 footlink">Book&nbsp;Now</Link>
                                    <Link to={"/Contact"} className="text-decoration-none mx-2 footlink">Contact</Link>
                                    <Link to={"/History"} className="text-decoration-none mx-2 footlink">Events</Link>
                                    <br className="d-md-none" />
                                    <a href="#" className="text-decoration-none mx-2 footlink">Policies</a>
                                    <a href="#" className="text-decoration-none mx-2 footlink">Term &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Footer;