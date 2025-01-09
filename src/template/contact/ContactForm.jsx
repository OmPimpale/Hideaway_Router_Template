let ContactForm = () => {
    return (
        <>
            <section className="row" id="form">
                <div className="col">
                    <section className="row justify-content-center justify-content-lg-evenly justify-content-xxl-center">
                        <div className="col-11 col-lg-3 mb-md-5 mb-lg-0">
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-4 col-lg-12">
                                    <h4 className="formhead">Manitoba Office</h4>
                                    <p className="forminfo">
                                        121 King's Street, <br />
                                        Manitoba 1230, Canada <br />
                                        Cell: +475 3538 3458
                                    </p>
                                </div>
                                <div className="col-12 col-md-4 col-lg-12 my-5 my-md-0 my-lg-4">
                                    <h4 className="formhead">Brooklyn Office</h4>
                                    <p className="forminfo">
                                        62 Collins Street West, <br />
                                        Brooklyn 3030, USA <br />
                                        Cell: +475 2343 3421
                                    </p>
                                </div>
                                <div className="col-12 col-md-4 col-lg-12">
                                    <h4 className="formhead2">Socials</h4>
                                    <a href="#" className="text-decoration-none sociallinks"><i class="fa-brands fa-linkedin"></i></a>
                                    <a href="#" className="text-decoration-none mx-3 sociallinks"><i class="fa-brands fa-square-twitter"></i></a>
                                    <a href="#" className="text-decoration-none sociallinks"><i class="fa-brands fa-square-facebook"></i></a>
                                    <a href="#" className="text-decoration-none mx-3 sociallinks"><i class="fa-brands fa-square-google-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-11 col-lg-8 col-xxl-7">
                            <input type="text" placeholder="Your Name" className="form-control rounded-0 border mt-4 mt-lg-0 contactform" />
                            <input type="email" placeholder="Email" className="form-control rounded-0 border my-4 contactform" />
                            <textarea placeholder="Enter your descriptions here..." className="form-control rounded-0 border contactform" rows={6}></textarea>
                            <button className="btn my-4 rounded-0" id="formbtn" type="submit">Send Now</button>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default ContactForm;