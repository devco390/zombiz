import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


export default function Document() {
    return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i,900,900i" rel="stylesheet" />

                <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />

                <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet" />

                <link rel="shortcut icon" type="image/icon" href="assets/images/logo/favicon.png" />

                <link rel="stylesheet" href="assets/css/font-awesome.min.css" />

                <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css" />

                <link rel="stylesheet" href="assets/css/animate.css" />

                <link rel="stylesheet" href="assets/css/hover-min.css" />

                <link rel="stylesheet" href="assets/css/magnific-popup.css" />

                <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
                <link href="assets/css/owl.theme.default.min.css" rel="stylesheet" />


                <link rel="stylesheet" href="assets/css/bootstrap.min.css" />

                <link href="assets/css/bootsnav.css" rel="stylesheet" />

                <link rel="stylesheet" href="assets/css/responsive.css" />

               
            </Head>
            <body>
                <Main />
                <NextScript />



            </body>
        </Html>
    )
}