const Menu = () => {
    return (
        <section id="menu">
            <div className="container">
                <div className="menubar">
                    <nav className="navbar navbar-default">


                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="index.html">
                                <img src="assets/images/logo/logo.png" alt="logo" />
                            </a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="smooth-menu">
                                    <a href="#home">Home</a>
                                </li>
                                <li className="smooth-menu"><a href="#about">About</a></li>
                                <li className="smooth-menu"><a href="#service">Service</a></li>
                                <li className="smooth-menu"><a href="#project">Project</a></li>
                                <li className="smooth-menu"><a href="#team">Team</a></li>
                                <li className="smooth-menu"><a href="#blog">Blog</a></li>
                                <li className="smooth-menu"><a href="#contact">Contact</a></li>
                                <li>
                                    <a href="#">
                                        <span className="lnr lnr-cart"></span>
                                    </a>
                                </li>
                                <li className="search">
                                    <form action="">
                                        <input type="text" name="search" placeholder="Search...." />
                                        <a href="#">
                                            <span className="lnr lnr-magnifier"></span>
                                        </a>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="call-to-actions">
                <a className="call-to-action" href="#">
                    <div className="call-to-action__circle call-to-action__call">

                    </div>
                    <p>313 472 69 63</p>
                </a>
                <a className="call-to-action" href="#">
                    <div className="call-to-action__circle call-to-action__whatsapp">

                    </div>
                    <p>Atención en Línea</p>
                </a>
            </div>

        </section>
    )
}

export default Menu