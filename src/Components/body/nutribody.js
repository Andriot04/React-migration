import React, { Component } from 'react'
import Contact from './Contact.js'

class NutribodyComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <section id="home" className="dtr-section dtr-hero-section-top-padding dtr-pb-100">
                    <div className="container">


                        <div className="row">


                            <div className="col-12 col-md-6">


                                <p className="text-size-xxl font-weight-300 color-dark">Bonjour</p>
                                <p className="text-size-xxl color-dark"><span
                                    className="font-weight-300">Je suis </span><span className="font-weight-500">Aurélie Dupont</span>
                                </p>
                                <div className="spacer-20"></div>


                                <h3 className="dtr-mb-5 color-blue">Nutritionniste à Paris</h3>


                            </div>

                            <div className="col-12 col-md-6">


                                <div className="dtr-slick-slider dtr-img-slider-3col dtr-rounded-img">

                                    <div><img src="../../images/photography_img1.jpg" alt="image1"/></div>

                                    <div><img src="../../images/photography_img2.jpg" alt="image2"/></div>

                                    <div><img src="../../images/photography_img3.jpg" alt="image3"/></div>

                                    <div><img src="../../images/photography_img4.jpg" alt="image4"/></div>

                                    <div><img src="../../images/photography_img5.jpg" alt="image5"/></div>
                                </div>

                                <div className="row dtr-mt-30">
                                    <div className="col-12 col-md-8 offset-md-4">
                                        <div className="dtr-slick-slider dtr-img-slider-2col dtr-rounded-img">

                                            <div><img src="../../images/photography_img6.jpg" alt="image6"/></div>

                                            <div><img src="../../images/photography_img7.jpg" alt="image7"/></div>

                                            <div><img src="../../images/photography_img8.jpg" alt="image8"/></div>

                                            <div><img src="../../images/photography_img9.jpg" alt="image9"/></div>

                                            <div><img src="../../images/photography_img10.jpg" alt="image10"/></div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="row dtr-mt-30">


                            <div className="col-12 col-md-10">

                                <p className="text-size-md">Grande passionnée de nutrition et de son impact sur
                                    notre santé <span className="font-weight-500 color-dark">, mon rôle en tant que nutritionniste est de vous conseiller et de vous guider dans vos choix alimentaires pour répondre aux besoins de votre corps. Je vous accompagne dans votre relation avec l’alimentation pour atteindre vos objectifs, notamment dans le cadre de certaines pathologies ou allergies.</span>
                                </p>

                                <h1 className="follow">Suivez-moi sur</h1>
                                <div className="Social-media">
                                    <a className="cres" href="#"><i className="fab fa-facebook"></i></a>
                                    <a className="cres" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="cres" href="#"><i className="fab fa-whatsapp"></i></a>
                                    <a className="cres" href="#"><i className="fab fa-instagram"></i></a>
                                    <a className="cres" href="#"><i className="fab fa-youtube"></i></a>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
                <section id="about" className="dtr-section dtr-py-100 bg-light-blue">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-12 col-md-6 small-device-space">
                                <div className="dtr-pr-30">
                                    <video autoPlay>
                                        <source src="../../images/video.mp4" type="video/mp4"/>
                                    </video>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="dtr-styled-heading">
                                    <h2>Qui suis-je ?</h2>
                                </div>
                                <p className="font-weight-500 color-dark text-normal">Diplômée depuis 2012 d’un BTS
                                    Diététique, je suis passionnée par la nutrition et l’impact de l’alimentation
                                    sur notre santé et notre énergie au quotidien depuis plus de dix ans. Mon rôle
                                    en tant que nutritionniste est de vous conseiller et de vous guider dans vos
                                    choix alimentaires et votre mode de vie, afin de répondre à vos problématiques
                                    et correspondre à vos besoins personnels.
                                    Je vous accompagne dans votre relation avec l’alimentation, pour une plus grande
                                    énergie ou dans le cadre de certaines pathologies ou allergies.</p>
                                <p className="dtr-mt-20 text-normal">Vous avez besoin d’approfondir vos
                                    connaissances en nutrition pour améliorer votre alimentation et votre mode de
                                    vie ?
                                    Chaque personne et chaque métabolisme étant unique, il est important d’adapter
                                    son alimentation en fonction de vos besoins spécifiques. <a className="rdv"
                                                                                                href="#contact">Prenez
                                        rendez-vous</a>, je vous aiderais à identifier les bonnes pratiques à mettre
                                    en place pour prendre soin de vous. Les suivis étant personnalisés, chaque
                                    compte-rendu de consultation est donc unique et propre à chaque individu.
                                    Établissons une alimentation saine et adaptée ensemble !
                                </p>
                                <div>
                                    <div className="dtr-pricing">
                                        <a href="#contact" className="dtr-btn btn-blue dtr-mt-30">Contactez-moi</a>
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 mt-3'>
                                <div className="dtr-styled-heading">
                                    <h2>Mes Formations</h2>
                                </div>

                                <div className="row">

                                    <div className="col-6 small-device-space row my-3">
                                        <div className="cres"><i className="fas fa-graduation-cap"></i></div>
                                        <p className="font-weight-500 color-dark dtr-mb-0 width-400px">Perturbateurs
                                            endocriniens et risques chimiques liés à l’alimentation – Formation
                                            2019</p>
                                    </div>

                                    <div className="col-6 small-device-space row my-3">
                                        <div className="cres"><i className="fas fa-graduation-cap"></i></div>
                                        <p className="font-weight-500 color-dark dtr-mb-0 width-400px">Nutrition du
                                            sportif – DU 2017</p>
                                    </div>

                                    <div className="col-6 small-device-space row my-3">
                                        <div className="cres"><i className="fas fa-graduation-cap "></i></div>
                                        <p className="font-weight-500 color-dark dtr-mb-0 width-400px">Nutrition de
                                            l’enfant et de l’adolescent – DU 2015</p>
                                    </div>
                                    <div className="col-6 small-device-space row my-3">
                                        <div className="cres" href="#"><i className="fas fa-graduation-cap"></i>
                                        </div>
                                        <p className="font-weight-500 color-dark dtr-mb-0 text-normal width-400px">Nutrition
                                            de l’enfant et de l’adolescent – DU 2015</p>

                                    </div>

                                    <div className="col-6 small-device-space row my-3">
                                        <div className="cres" href="#"><i className="fas fa-graduation-cap"></i>
                                        </div>
                                        <p className="font-weight-500 color-dark dtr-mb-0 text-normal width-400px">Alimentation,
                                            Santé et Micro nutrition – DU 2014</p>
                                    </div>

                                    <div className="col-6 small-device-space row my-3">
                                        <div className="cres" href="#"><i className="fas fa-graduation-cap"></i>
                                        </div>
                                        <p className="font-weight-500 color-dark dtr-mb-0 text-normal width-400px">Psychologie
                                            et Pédagogie du comportement alimentaire – DU 2013</p>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <section id="monApproche" className="dtr-section dtr-py-100">
                    <div className="container">
                        <div className="dtr-styled-heading heading-center">
                            <h2 className='text-center'>Mon approche</h2>
                        </div>

                        <div>
                            <p className='text-normal'>Mon approche est complète et entièrement personnalisée :
                                j’étudie votre alimentation, vos habitudes et votre rythme de vie. Un bon suivi
                                n’implique pas seulement votre alimentation, mais aussi votre comportement, vos
                                émotions, votre activité physique et vos antécédents. Chaque aspect est lié, par
                                exemple votre équilibre émotionnel peut grandement impacter votre équilibre
                                alimentaire et donc votre poids. C’est pourquoi ne prendre en compte que son
                                alimentation ne permettra pas de changements durables sur votre santé. En revanche,
                                une approche globale par un professionnel vous apportera un bien-être au quotidien,
                                en travaillant sur la véritable source de chacune de vos problématiques.</p>
                        </div>
                        <br></br>
                        <div>
                            <p className='text-normal'>Je propose des consultations en physique dans mon cabinet,
                                mais aussi à distance grâce à des outils comme Google Meet ou Skype. Grâce à
                                Internet, vous pouvez prendre rendez-vous sans contrainte géographique ! </p>
                        </div>
                    </div>
                </section>
                <section id="services" className="dtr-section dtr-py-100">
                    <div className="container">


                        <div className="dtr-styled-heading">
                            <h2>Pourquoi consulter</h2>
                        </div>

                        <div className="row d-flex align-items-center dtr-styled-tab">


                            <div className="col-12 col-md-4">
                                <div className="nav flex-column nav-pills" role="tablist"
                                     aria-orientation="vertical">


                                    <a className="nav-link active" id="services-tab-1-tab" data-toggle="pill"
                                       href="#services-tab-1" role="tab" aria-controls="services-tab-1"
                                       aria-selected="false">
                                        <h4>Mon objectif</h4>
                                    </a>

                                    <a className="nav-link" id="services-tab-2-tab" data-toggle="pill"
                                       href="#services-tab-2" role="tab" aria-controls="services-tab-2"
                                       aria-selected="true">
                                        <h4>Pour qui ?</h4>
                                    </a>

                                    <a className="nav-link" id="services-tab-3-tab" data-toggle="pill"
                                       href="#services-tab-3" role="tab" aria-controls="services-tab-3"
                                       aria-selected="false">
                                        <h4>Pourquoi faire appel à un professionnel ?</h4>
                                    </a>

                                </div>
                            </div>

                            <div className="col-12 col-md-7 offset-md-1 small-device-space">
                                <div className="tab-content" id="v-pills-tabContent">


                                    <div className="tab-pane fade show active" id="services-tab-1" role="tabpanel"
                                         aria-labelledby="services-tab-1-tab">


                                        <div className="row">
                                            <div className="col-12 col-md-5 small-device-space"><img
                                                src="../../images/modak_tabs_img1.png" alt="image11"/></div>
                                            <div className="col-12 col-md-7">
                                                <p className='text-normal'>Mon objectif est de vous accompagner dans
                                                    l’adaptation de votre alimentation, par rapport à vos besoins et
                                                    à votre mode de vie ! J’étudie scrupuleusement chaque patient
                                                    pour connaître vos habitudes et dresser un suivi personnalisé
                                                    adapté. Modifier votre alimentation ne doit pas être considéré
                                                    une contrainte, mais comme un cheminement vers une meilleure
                                                    santé.</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="tab-pane fade" id="services-tab-2" role="tabpanel"
                                         aria-labelledby="services-tab-2-tab">

                                        <div className="row">
                                            <div className="col-12 col-md-5 small-device-space"><img
                                                src="../../images/modak_tabs_img2.png" alt="image12"/></div>
                                            <div className="col-12 col-md-7">
                                                <p className='text-normal'>Tout le monde peut consulter un
                                                    nutritionniste : j’accompagne des femmes enceintes, des enfants,
                                                    des grands sportifs ou bien des personnes souffrant de
                                                    pathologies (rémission d’un cancer, endométriose, problèmes de
                                                    thyroïde…). Connaître l’avis d’un professionnel sur votre régime
                                                    alimentaire ne peut être que bénéfique.</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="tab-pane fade" id="services-tab-3" role="tabpanel"
                                         aria-labelledby="services-tab-3-tab">
                                        <div className="row">
                                            <div className="col-12 col-md-5 small-device-space"><img
                                                src="../../images/modak_tabs_img3.png" alt="image13"/></div>
                                            <div className="col-12 col-md-7">
                                                <p className='text-normal'>Vous faire accompagner par un
                                                    professionnel de la nutrition est important pour de multiples
                                                    raisons. Vous souhaitez perdre ou prendre du poids ? Adapter
                                                    votre alimentation à votre mode de vie ou à une maladie/allergie
                                                    ? Préparer un événement sportif important ? Contactez-moi, votre
                                                    santé vous remerciera ! </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section id="avis" className="dtr-section overflow-hidden dtr-py-100 bg-light-blue">
                        <div className="container">
                            <div className="dtr-styled-heading heading-center">
                                <h2>Avis Patients</h2>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="cr color-blue">
                                        <i className="icon fa fa-quote-left"></i>
                                    </div>
                                    <div className="dtr-slick-slider dtr-testimonial-style-center">
                                        <div className="dtr-testimonial">
                                            <div className="dtr-testimonial-content"> Atteint d’une pathologie qui
                                                impacte grandement mon quotidien, j’ai décidé de prendre rendez-vous
                                                avec Aurélie afin de trouver des nouvelles pistes alimentaires pour me
                                                soulager. Je ne la remercierais jamais assez !
                                            </div>
                                            <div className="dtr-client-info"><img
                                                src="/../../images/testimonial-user1.jpg" alt="image14"/>
                                                <h5 className="dtr-client-name">Mathilde</h5>
                                                <span className="dtr-client-job">Strasbourg, France</span></div>
                                        </div>
                                        <div className="dtr-testimonial">
                                            <div className="dtr-testimonial-content"> Aurélie a su m’aider à identifier
                                                mes allergies alimentaires, et m’a accompagnée dans la mise en place de
                                                ma nouvelle alimentation. Je me sens bien mieux depuis que je fais appel
                                                à ses connaissances !
                                            </div>
                                            <div className="dtr-client-info"><img
                                                src="/../../images/testimonial-user2.jpg" alt="image15"/>
                                                <h5 className="dtr-client-name">Malicka</h5>
                                                <span className="dtr-client-job">Toulon, France</span></div>
                                        </div>
                                        <div className="dtr-testimonial">
                                            <div className="dtr-testimonial-content">Pendant ma grossesse, j’ai voulu
                                                consulter une nutritionniste afin de m’aider à sélectionner les bons
                                                aliments et à adapter mes repas. Aurélie m’a gentiment accompagnée, en
                                                me motivant pendant ces neufs mois. Merci mille fois
                                            </div>
                                            <div className="dtr-client-info"><img
                                                src="../../images/testimonial-user3.jpg" alt="image16"/>
                                                <h5 className="dtr-client-name">Lise</h5>
                                                <span className="dtr-client-job">Paris, France</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                <section id="tarifs" className="dtr-section dtr-py-100 bg-light-blue">
                        <div className="container">
                        <div className="dtr-styled-heading">
                            <h2>Tarifs</h2>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-3">
                                <div class="dtr-pricing bg-white align-items-end">
                                    <div class="dtr-pricing-img color-blue"><i class="icon-camera"></i></div>
                                    <h4 class="dtr-pricing-heading">Consultation Bilan</h4>
                                    <p class="dtr-price color-blue">70<sup>€</sup></p>
                                    <a href="#contact" class="dtr-btn btn-blue dtr-mt-30 align-self-end">Contactez-moi</a>
                                </div>
                            </div>
                            <div class="col-12 col-md-3">
                                <div class="dtr-pricing pricing-focused bg-dark-grey align-items-end">
                                    <div class="dtr-focus-border bg-blue"><i class="icon-camera2"></i></div>
                                    <h4 class="dtr-pricing-heading">Consultation de Suivi</h4>
                                    <p class="dtr-price color-blue align-self-end">50<sup>€</sup></p>
                                    <a href="#contact" class="dtr-btn btn-blue dtr-mt-30">Contactez-moi</a> </div>
                            </div>
                            <div class="col-12 col-md-3">
                                <div class="dtr-pricing bg-white align-items-end">
                                    <div class="dtr-pricing-img color-blue"><i class="icon-camera-fill"></i></div>
                                    <h4 class="dtr-pricing-heading">Formule</h4>
                                    <p class="font-weight-500 color-dark">6 consultations :</p>
                                    <p class="dtr-price color-blue">225<sup>€</sup></p>
                                    <p class="font-weight-500 color-dark">10 consultations :</p>
                                    <p class="dtr-price color-blue">350<sup>€</sup></p>
                                    <a href="#contact" class="dtr-btn btn-blue dtr-mt-30 align-self-end">Contactez-moi</a>
                                </div>
                            </div>
                            <div class="col-12 col-md-3">
                                <div class="dtr-pricing pricing-focused bg-dark-grey align-items-end">
                                    <div class="dtr-focus-border bg-blue"></div>
                                    <div class="dtr-pricing-img color-blue"><i class="icon-camera2"></i></div>
                                    <h4 class="dtr-pricing-heading">Intervention en entreprise</h4>
                                    <p class="font-weight-500 color-dark">Sur devis</p>
                                    <a href="#contact" class="dtr-btn btn-blue dtr-mt-30 align-self-end">Contactez-moi</a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </section>
                <section id="contact" className="dtr-section dtr-py-100 bg-light-blue">
                    <div className="container">
                        <div className="dtr-styled-heading">
                            <h2>Contact</h2>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="dtr-form">
                                    <Contact />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="dtr-pl-30">
                                    <p className="d-flex align-items-center"><i className="icon-geo-alt dtr-mr-10 text-size-md color-blue"></i><span
                                        className="font-weight-500 color-dark">Ma Localisation</span></p>
                                    <p>2 rue de la piquetterie 91680 bruyères-le-châtel, France</p>
                                    <div className="spacer-20"></div>
                                    <p className="d-flex align-items-center"><i className="icon-phone-fill dtr-mr-10 text-size-md color-blue"></i><span
                                        className="font-weight-500 color-dark">Numéro</span></p>
                                    <p>01 64 90 43 99</p>
                                    <div className="spacer-20"></div>
                                    <p className="d-flex align-items-center"><i className="icon-envelope-fill dtr-mr-10 text-size-md color-blue"></i><span
                                        className="font-weight-500 color-dark">Email</span></p>
                                    <p>Aureliedupont-nutrition@gmail.com</p>
                                    <div className="Social-media">
                                        <a className="cres" href="#"><i className="fab fa-facebook"></i></a>
                                        <a className="cres" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="cres" href="#"><i className="fab fa-whatsapp"></i></a>
                                        <a className="cres" href="#"><i className="fab fa-instagram"></i></a>
                                        <a className="cres" href="#"><i className="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default NutribodyComponent