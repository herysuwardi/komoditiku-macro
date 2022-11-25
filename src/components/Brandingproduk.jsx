import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Reviewkursus from "./Reviewkursus";
import Footer from "./Footer";
import "./kursusonline.css";
import { COURSES, KURSUSDETAIL, BRANDING, RISETPASAR, MARKETINGFOUR } from "../router";

const Brandingproduk = () => {
    return (
        <div>            
            <img src="/assets/kursus-online.jpg" alt="home" className="kursus__img"></img>  
            <Container>
                <div className="text-kursus">
                <h1>Kursus Online</h1>
                </div>           
                <Link className="btn-courses" href="#">Dapatkan Kursus<i className="bi bi-arrow-right-circle-fill ms-2"></i></Link>

                <div className="text-courses text-center">
                    <h1>Topik <b>Kursus Online</b></h1>
                    <p>Temukan Kursus yang dapat menunjang pertumbuhan bisnis kamu</p>
                    <Link className="btn-outk" to={COURSES}>Management Pruduksi</Link>
                    <Link className="btn-ink ms-5" to={BRANDING}>Branding Product</Link>
                    <Link className="btn-outk ms-5" to={RISETPASAR}>Riset Pasar</Link>
                    <Link className="btn-outk ms-5" to={MARKETINGFOUR}>4P Marketing</Link>   
                </div>
                <div className="wrapper__kursusonline">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card__courses">
                                <div className="card-inkursus text-center">
                                    <img src="/assets/kursus11.png" height="230" width="330" alt="..." />
                                    <h5 className="container font-weight-bold text-center mt-4 mb-5">Elemen penting untuk menentukan branding produk</h5>          
                                </div>   
                                <div className="row mt-3 container">
                                    <div className="col-2">
                                    <img src="/assets/profil3.png" height="45" widht="45" alt="" />
                                    </div>
                                    <div className="col-7 mt-2 ms-2">
                                    <h5 className="name">By Resky Amalia</h5> 
                                    </div>
                                    <div className="col-2 ms-1">
                                    <Link to={KURSUSDETAIL} type="button" className="btn">Detail</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card__courses">
                                <div className="card-inkursus text-center">
                                    <img src="/assets/kursus8.png" height="230" width="330" alt="..." />
                                    <h5 className="container font-weight-bold text-center mt-4 mb-5">5 Hal yang harus dihindari dalam proses branding produk </h5>   
                                </div>   
                                <div className="row mt-3 container">
                                    <div className="col-2">
                                    <img src="/assets/profil2.png" height="45" widht="45" alt="" />
                                    </div>
                                    <div className="col-7 mt-2 ms-2">
                                    <h5 className="name">By Fatmawati</h5> 
                                    </div>
                                    <div className="col-2 ms-1">
                                    <a type="button" className="btn">Detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card__courses">
                                <div className="card-inkursus text-center">
                                    <img src="/assets/kursus9.png" height="230" width="330" alt="..." />
                                    <h5 className="container font-weight-bold text-center mt-4 mb-5">Beberapa tips untuk meningkatkan branding produk</h5>   
                                </div>   
                                <div className="row mt-3 container">
                                    <div className="col-2">
                                    <img src="/assets/profil8.png" height="45" widht="45" alt="" />
                                    </div>
                                    <div className="col-7 mt-2 ms-2">
                                    <h5 className="name">By Annisa Nur</h5> 
                                    </div>
                                    <div className="col-2 ms-1">
                                    <a type="button" className="btn">Detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card__courses">
                                <div className="card-inkursus text-center">
                                    <img src="/assets/kursus18.png" height="230" width="330" alt="..." />
                                    <h5 className="container font-weight-bold text-center mt-4 mb-5">Strategi dalam membangun branding produk</h5>          
                                </div>   
                                <div className="row mt-3 container">
                                    <div className="col-2">
                                    <img src="/assets/profil1.png" height="45" widht="45" alt="" />
                                    </div>
                                    <div className="col-7 mt-2 ms-2">
                                    <h5 className="name">By Ridho Dwi</h5> 
                                    </div>
                                    <div className="col-2 ms-1">
                                    <a type="button" className="btn">Detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card__courses">
                                <div className="card-inkursus text-center">
                                    <img src="/assets/kursus20.png" height="230" width="330" alt="..." />
                                    <h5 className="container font-weight-bold text-center mt-4 mb-5">Cara membangun reputasi produk branding yang baik</h5>   
                                </div>   
                                <div className="row mt-3 container">
                                    <div className="col-2">
                                    <img src="/assets/profil7.png" height="45" widht="45" alt="" />
                                    </div>
                                    <div className="col-7 mt-2 ms-2">
                                    <h5 className="name">By Annie Lill</h5> 
                                    </div>
                                    <div className="col-2 ms-1">
                                    <a type="button" className="btn">Detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card__courses">
                                <div className="card-inkursus text-center">
                                    <img src="/assets/kursus6.png" height="230" width="330" alt="..." />
                                    <h5 className="container font-weight-bold text-center mt-4 mb-5">4 Cara branding produk sehingga dikenal konsumen</h5>                                  
                                </div>   
                                <div className="row mt-3 container">
                                    <div className="col-2">
                                    <img src="/assets/profil4.png" height="45" widht="45" alt="" />
                                    </div>
                                    <div className="col-7 mt-2 ms-2">
                                    <h5 className="name">By Agus Wijaya</h5> 
                                    </div>
                                    <div className="col-2 ms-1">
                                    <a type="button" className="btn">Detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <Link className="btn-outk" href="#">Lihat Semua Kursus</Link> 
                    </div>                   
                </div>              
            </Container> 
            <Reviewkursus />            
            <Footer />
           
        </div>
  );
}

export default Brandingproduk;