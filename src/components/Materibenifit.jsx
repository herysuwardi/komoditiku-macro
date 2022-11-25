import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./materibenefit.css";
import { TRAINING, KONSULTASI } from "../router";

const Materibenifit = () => {
    return (
        <div>            
              
            <Container>
            <div className="wrapper__benefit">
                <div className="card__benefit">
                <div className="row">
                    <div className="col-6 hijau">       
                        <h1 className="text-center"> Materi</h1>
                        <p><b>Apa saja yang akan dipelajari ?</b></p>
                        <p><i className="bi bi-check-lg me-2"></i> Belajar “Strategi digitalisasi informasi dan pemasaran produk-produk pertanian” </p>
                        <p><i className="bi bi-check-lg me-2"></i> Belajar “Strategi pengembangan bibit unggul” </p>
                        <p><i className="bi bi-check-lg me-2"></i> Belajar “Strategi pengembangan mekanisme dan komputerisasi pertanian”</p>
                        <p><i className="bi bi-check-lg me-2"></i> Belajar “Strategi pengembangan infrastruktur pertanian”</p>          
                    </div>
                    <div className="col-md-4 putih">
                        <h1 className="text-center"> Benefit</h1>
                        <p><b>Anda akan mendapatkan :</b></p>
                        <p><i className="bi bi-check-lg me-2"></i> E-book dan video materi </p>
                        <p><i className="bi bi-check-lg me-2"></i> Sertifikat Penyelesaian</p>
                        <p><i className="bi bi-check-lg me-2"></i> Dapat di akses melalui Hp PC/Laptop</p>
                        <p><i className="bi bi-check-lg me-2"></i> Akses E-book Selamanya</p>
                        <p><i className="bi bi-check-lg me-2"></i> Bantuan costumer service</p>
                    </div>
                </div>
                </div>              
            </div>

            <div className="wrapper__lainnya">
                <h1>KURSUS LAINNYA <br></br><b>Rekomendasi Kursus</b></h1>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card__courses">
                            <div className="card-inkursus text-center">
                            <img src="/assets/kursus7.png" height="230" width="330" alt="..." />
                            <h5 className="container font-weight-bold text-center mt-4 mb-5">Perencanaan Pola Produksi Pertanian</h5>          
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
                    <div className="col-md-4">
                        <div className="card__courses">
                            <div className="card-inkursus text-center">
                            <img src="/assets/kursus2.png" height="230" width="330" alt="..." />
                            <h5 className="container font-weight-bold text-center mt-4 mb-5">Manajemen Pemasaran Industri Perikanan</h5>
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
                                <img src="/assets/kursus3.png" height="230" width="330" alt="..." />
                                <h5 className="container font-weight-bold text-center mt-4 mb-5">Perencanaan Sistem dan Sarana Produksi Pertanian</h5>
                            </div>   
                            <div className="row mt-3 container">
                                <div className="col-2">
                                    <img src="/assets/profil3.png" height="45" widht="45" alt="" />
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
            </div>                
            </Container>
           
        </div>
  );
}

export default Materibenifit;