let HeroSection = () => {

    return (
        <>
            <section className="row">
                <div className="col">
                    <section className="row">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade">
                            <div className="carousel-inner">
                                <div className="carousel-item active text-center" id="slide1">
                                    <div className="px-2">
                                        <h6 className="herohead1 m-0">WEST VIRGINIA / UNITATE STATES</h6>
                                        <h1 className="herohead2">The <span className="empword">Hideaway</span> Inn</h1>
                                        <a href="#images" className="herodownbtn">
                                            <i className="fa-solid fa-angle-down fs-1 herodownbtn"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-item text-center" id="slide2">
                                    <div className="px-2">
                                        <h6 className="herohead1 m-0">WEST VIRGINIA / UNITATE STATES</h6>
                                        <h1 className="herohead2">Live  <span className="empword">Wonderful</span> Life</h1>
                                        <a href="#images" className="herodownbtn">
                                            <i className="fa-solid fa-angle-down fs-1 herodownbtn"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-item text-center" id="slide3">
                                    <div className="px-2">
                                        <h6 className="herohead1 m-0">WEST VIRGINIA / UNITATE STATES</h6>
                                        <h1 className="herohead2">Perfect <span className="empword">Vacation</span> Place</h1>
                                        <a href="#images" className="herodownbtn">
                                            <i className="fa-solid fa-angle-down fs-1 herodownbtn"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <i className="fa-solid fa-chevron-left fs-1"></i>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <i className="fa-solid fa-chevron-right fs-1"></i>
                            </button>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default HeroSection;