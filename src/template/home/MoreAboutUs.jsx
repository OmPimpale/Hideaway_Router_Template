let MoreAboutUs = () => {
    return (
        <>
            <section className="row justify-content-center" id="aboutus">
                <div className="col col-xxl-11">
                    <section className="row text-center justify-content-evenly">
                        <div className="col-11 col-md-12 col-xxl-6 mb-4 p-0">
                            <p className="mb-4 abouttext">123 Fake Street, Stone Ridge, NY 12345</p>
                            <iframe className="mt-2 w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26997.521732068573!2d77.16652016291825!3d32.23950667848006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39048708163fd03f%3A0x8129a80ebe5076cd!2sManali%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1734775483178!5m2!1sen!2sin" loading="lazy"></iframe>
                        </div>
                        <div className="col-12 col-xxl-5 mt-5 m-xxl-0">
                            <div className="row">
                                <div className="mb-4">
                                    <a href="#" className="text-decoration-none aboutlink mx-1 abouttext aboutanchor">Instagram</a> <span className="aboutspan">&#8725;</span>
                                    <a href="#" className="text-decoration-none aboutlink mx-1 abouttext aboutanchor">Facebook</a> <span className="aboutspan">&#8725;</span>
                                    <a href="#" className="text-decoration-none aboutlink mx-1 abouttext aboutanchor">Twitter</a>
                                </div>

                                <a href="#" className="text-decoration-none col-md-6 col-lg-4"><img src="./3.jpg" alt="gallery" className="img-fluid my-1 my-md-3" /></a>
                                <a href="#" className="text-decoration-none col-md-6 col-lg-4"><img src="./8.jpg" alt="gallery" className="img-fluid my-1 my-md-3" /></a>
                                <a href="#" className="text-decoration-none col-md-6 col-lg-4"><img src="./5.jpg" alt="gallery" className="img-fluid my-1 my-md-3" /></a>
                                <a href="#" className="text-decoration-none col-md-6 col-lg-4"><img src="./1.jpg" alt="gallery" className="img-fluid my-1 my-md-3" /></a>
                                <a href="#" className="text-decoration-none col-md-6 col-lg-4"><img src="./6.jpg" alt="gallery" className="img-fluid my-1 my-md-3" /></a>
                                <a href="#" className="text-decoration-none col-md-6 col-lg-4"><img src="./12.jpg" alt="gallery" className="img-fluid my-1 my-md-3" /></a>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default MoreAboutUs;