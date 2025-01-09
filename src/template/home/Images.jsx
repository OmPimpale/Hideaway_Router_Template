let Images = () => {

    return (
        <>
            <section className="row justify-content-center" id="images">
                <div className="col col-xxl-10">
                    <section className="row justify-content-center">
                        <a href="#" className="col-11 col-lg-4 text-decoration-none my-3">
                            <div id="img1">
                                <h4 className="text-center imgtext">Gallery</h4>
                            </div>
                        </a>
                        <a href="#" className="col-11 col-lg-4 text-decoration-none my-3">
                            <div id="img2">
                                <h4 className="text-center imgtext">Packages</h4>
                            </div>
                        </a>
                        <a href="#" className="col-11 col-lg-4 text-decoration-none my-3">
                            <div id="img3">
                                <h4 className="text-center imgtext">Contact</h4>
                            </div>
                        </a>
                        <div className="col mt-5">
                            <div className="row justify-content-center text-center text-lg-start">
                                <div className="col-11 col-lg-4 mb-2">
                                    <h3 id="historyhead">An <em>inviting</em> escape</h3>
                                </div>
                                <div className="col-11 col-lg-8">
                                    <p id="historytext">
                                        Crafted with Bootstrap 4, Hideaway is perfectly responsive to every devices available. Thousands of CSS helper classes let you customize this template in any way you want, without writing any code. This is a dummy text that you can change customize as you like with your description.
                                    </p>
                                    <a href="#" id="historybtn" className="btn border rounded-0 border-dark mt-3 mt-lg-4">Our History</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Images;