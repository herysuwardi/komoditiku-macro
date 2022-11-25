import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./eksploreproduk.css";
import { TRAINING, KONSULTASI } from "../router";

const Eksploreproduk = () => {
    return (
        <div>            
            <img src="/assets/explore-produk.jpg" alt="home" className="explore__img"></img>  
            <Container>
                <div className="text-explore">
                <h1>Explore Produk</h1>
                </div>           
                <Link className="btn-explore" href="#">Temukan Produk<i className="bi bi-arrow-right-circle-fill ms-2"></i></Link>
                <div className="text-pelakuusaha text-center">
                    <h1> Informasi <b>Pelaku Usaha</b> di Berbagai Provinsi <b>Indonesia</b></h1>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="card__explore text-center">
                            <img src="/assets/susi.png" height="225" width="230" className="mt-2" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold text-center mt-3 mb-4">Susi Anggraini</h5>
                                <p className="text-center container mb-1">Produk : Cumi Sambal</p>
                                <p className="text-center container">Provinsi : Bandar Lampung</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card__explore text-center">
                            <img src="/assets/budiman.png" height="225" width="230" className="mt-2" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold text-center mt-3 mb-4">Budiman</h5>
                                <p className="text-center container mb-1">Produk : Kopi Bubuk Hitam</p>
                                <p className="text-center container ">Provinsi : Jawa Barat, Bandung</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card__explore text-center">
                            <img src="/assets/suwardi.png" height="225" width="230" className="mt-2" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold text-center mt-3 mb-4">Suwardi</h5>
                                <p className="text-center container mb-1">Produk : Bahan Baku Karet</p>
                                <p className="text-center container ">Provinsi : Sumatera Selatan, Palembang</p>

                            </div>
                        </div>
                    </div>
                </div>      
                <div className="row">
                    <div className="col-md-4">
                        <div className="card__explore text-center">
                            <img src="/assets/supriyadi.png" height="225" width="230" className="mt-2" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold text-center mt-3 mb-4">Supriyandi</h5>
                                <p className="text-center container mb-1">Produk : Teh Merah</p>
                                <p className="text-center container">Provinsi : Jawa Barat, Bandung</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card__explore text-center">
                            <img src="/assets/dian.png" height="225" width="230" className="mt-2" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold text-center mt-3 mb-4">Dian Suriyanti</h5>
                                <p className="text-center container mb-1">Produk : Abon Lele</p>
                                <p className="text-center container ">Provinsi : Yogyakarta</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card__explore text-center">
                            <img src="/assets/ayulia.png" height="225" width="230" className="mt-2" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold text-center mt-3 mb-4">Ayulia</h5>
                                <p className="text-center container mb-1">Produk : Stik Tulang Ikan</p>
                                <p className="text-center container ">Provinsi : Jawa Timur, Surabaya</p>

                            </div>
                        </div>
                    </div>
                </div>      
                <div className="row">
                    <div className="col-md-4">
                        <div className="card__explore text-center">
                            <img src="/assets/jupri.png" height="225" width="230" className="mt-2" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold text-center mt-3 mb-4">Jupriyadi</h5>
                                <p className="text-center container mb-1">Produk : Kerupuk Ikan Tenggiri</p>
                                <p className="text-center container">Provinsi : Jawa Tengah, Cilacap</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card__explore text-center">
                            <img src="/assets/rizky.jpg" height="225" width="230" className="mt-2" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold text-center mt-3 mb-4">Rizky Aditya</h5>
                                <p className="text-center container mb-1">Produk : Nugget Ikan Kakap</p>
                                <p className="text-center container ">Provinsi : Kepulauan Riau</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card__explore text-center">
                            <img src="/assets/johan.jpg" height="225" width="230" className="mt-2" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold text-center mt-3 mb-4">Johan Caknan</h5>
                                <p className="text-center container mb-1">Produk : Siomay Ikan</p>
                                <p className="text-center container ">Provinsi : Jawa Barat, Bandung</p>

                            </div>
                        </div>
                    </div>
                </div> 
                <a href="#" className="btn btn-outline-success w-100 mb-5">Tampilkan Lebih Banyak</a>                              
            </Container>
           
        </div>
  );
}

export default Eksploreproduk;