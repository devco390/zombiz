const HeaderSliderArea = () => {
    return (
        <section className="header-slider-area">
            <div id="carousel-example-generic" className="carousel slide carousel-fade" data-ride="carousel">


                <ol className="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                </ol>


                <div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <div className="single-slide-item slide-1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="single-slide-item-content">
                                            <h2>Consult Your <br /> Business With Us</h2>
                                            <p>
                                                We are the unique Consultancy Farm for your business solution, That is ready to take challenge and knockout your business problems.
                                            </p>
                                            <button type="button" className="slide-btn">
                                                get started
                                            </button>
                                            <button type="button" className="slide-btn">
                                                explore more
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="single-slide-item slide-2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="single-slide-item-content">
                                            <h2>
                                                Consult Your <br /> Business
                                            </h2>
                                            <p>
                                                We are the unique Consultancy Farm for your business solution, That is ready to take challenge and knockout your business problems.
                                            </p>
                                            <button type="button" className="slide-btn">
                                                get started
                                            </button>
                                            <button type="button" className="slide-btn
											">
                                                explore more
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                    <span className="lnr lnr-chevron-left"></span>
                </a>
                <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                    <span className="lnr lnr-chevron-right"></span>
                </a>
            </div>

        </section>

    )
}

export default HeaderSliderArea