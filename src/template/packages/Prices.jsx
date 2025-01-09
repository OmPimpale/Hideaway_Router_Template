let Prices = () => {

    let show1 = () => {
        let btn = document.getElementById("btn1");
        let padding = document.getElementById("price1");
        btn.style.display = "inline-block";
        padding.style.paddingTop = "48px";
        padding.style.paddingBottom = "14.5px";
    }

    let hide1 = () => {
        let btn = document.getElementById("btn1");
        let padding = document.getElementById("price1");
        btn.style.display = "none";
        padding.style.padding = "48px 20px";
    }

    let show2 = () => {
        let btn = document.getElementById("btn2");
        let padding = document.getElementById("price2");
        btn.style.display = "inline-block";
        padding.style.paddingTop = "48px";
        padding.style.paddingBottom = "14.5px";
    }

    let hide2 = () => {
        let btn = document.getElementById("btn2");
        let padding = document.getElementById("price2");
        btn.style.display = "none";
        padding.style.padding = "48px 20px";
    }

    let show3 = () => {
        let btn = document.getElementById("btn3");
        let padding = document.getElementById("price3");
        btn.style.display = "inline-block";
        padding.style.paddingTop = "48px";
        padding.style.paddingBottom = "14.5px";
    }

    let hide3 = () => {
        let btn = document.getElementById("btn3");
        let padding = document.getElementById("price3");
        btn.style.display = "none";
        padding.style.padding = "48px 20px";
    }

    let show4 = () => {
        let btn = document.getElementById("btn4");
        let padding = document.getElementById("price4");
        btn.style.display = "inline-block";
        padding.style.paddingTop = "48px";
        padding.style.paddingBottom = "14.5px";
    }

    let hide4 = () => {
        let btn = document.getElementById("btn4");
        let padding = document.getElementById("price4");
        btn.style.display = "none";
        padding.style.padding = "48px 20px";
    }

    let show5 = () => {
        let btn = document.getElementById("btn5");
        let padding = document.getElementById("price5");
        btn.style.display = "inline-block";
        padding.style.paddingTop = "48px";
        padding.style.paddingBottom = "14.5px";
    }

    let hide5 = () => {
        let btn = document.getElementById("btn5");
        let padding = document.getElementById("price5");
        btn.style.display = "none";
        padding.style.padding = "48px 20px";
    }

    let show6 = () => {
        let btn = document.getElementById("btn6");
        let padding = document.getElementById("price6");
        btn.style.display = "inline-block";
        padding.style.paddingTop = "48px";
        padding.style.paddingBottom = "14.5px";
    }

    let hide6 = () => {
        let btn = document.getElementById("btn6");
        let padding = document.getElementById("price6");
        btn.style.display = "none";
        padding.style.padding = "48px 20px";
    }

    return (
        <>
            <section className="row" id="price">
                <div className="col">
                    <section className="row justify-content-center">
                        <div className="col-10 col-lg-11">
                            <div className="row justify-content-evenly">
                                <div className="col-12 col-lg-5 my-3" id="priceparent1" onMouseOver={show1} onMouseOut={hide1}>
                                    <div className="innerprice text-center" id="price1">
                                        <h4 className="pricehead mx-auto">EAT,DRINK & BE MERRY</h4>
                                        <p className="pricing">FROM $279</p>
                                        <button className="btn rounded-0" id="btn1">Book Now</button>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-5 my-3" id="priceparent2" onMouseOver={show2} onMouseOut={hide2}>
                                    <div className="innerprice text-center" id="price2">
                                        <h4 className="pricehead mx-auto">HOLIDAY HISTORY</h4>
                                        <p className="pricing">FROM $299</p>
                                        <button className="btn rounded-0" id="btn2">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 col-lg-11">
                            <div className="row justify-content-evenly">
                                <div className="col-12 col-lg-5 my-3" id="priceparent3" onMouseOver={show3} onMouseOut={hide3}>
                                    <div className="innerprice text-center" id="price3">
                                        <h4 className="pricehead mx-auto">CHRISTMAS CHEERS</h4>
                                        <p className="pricing">FROM $849</p>
                                        <button className="btn rounded-0" id="btn3">Book Now</button>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-5 my-3" id="priceparent4" onMouseOver={show4} onMouseOut={hide4}>
                                    <div className="innerprice text-center" id="price4">
                                        <h4 className="pricehead mx-auto">TIS THE SEASON</h4>
                                        <p className="pricing">FROM $309</p>
                                        <button className="btn rounded-0" id="btn4">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 col-lg-11">
                            <div className="row justify-content-evenly">
                                <div className="col-12 col-lg-5 my-3" id="priceparent5" onMouseOver={show5} onMouseOut={hide5}>
                                    <div className="innerprice text-center" id="price5">
                                        <h4 className="pricehead mx-auto">MISTLETOE MAGIC</h4>
                                        <p className="pricing">FROM &copy; $969</p>
                                        <button className="btn rounded-0" id="btn5">Book Now</button>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-5 my-3" id="priceparent6" onMouseOver={show6} onMouseOut={hide6}>
                                    <div className="innerprice text-center" id="price6">
                                        <h4 className="pricehead mx-auto">ROYALTEA PACKAGE</h4>
                                        <p className="pricing">FROM &dollar; $269</p>
                                        <button className="btn rounded-0" id="btn6">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Prices;