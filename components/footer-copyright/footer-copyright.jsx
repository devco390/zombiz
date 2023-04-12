const FooterCopyright = () => {
    return (
        <footer className="footer-copyright">
            <div className="container">
                <div className="row">
                    <div className="col-sm-7">
                        <div className="foot-copyright pull-left">
                            <p>
                                &copy; All Rights Reserve
                                <a href="https://www.themesine.com">ThemeSINE</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="foot-menu pull-right
						">
                            <ul>
                                <li ><a href="#">legal</a></li>
                                <li ><a href="#">sitemap</a></li>
                                <li ><a href="#">privacy policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="scroll-Top">
                    <i className="fa fa-angle-double-up return-to-top" id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
                </div>
            </div>

        </footer>
    )
}

export default FooterCopyright