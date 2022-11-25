import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Materibenifit from "./Materibenifit";
import "./kursusdetail.css";
import { TRAINING, KONSULTASI } from "../router";

const Kursusdetail = () => {
    return (
        <div>                       
            <Container>
            <div className="hero__detail">
                <div className="row">
                    <div className="col-md-8">
                        <img src="/assets/strategi-konten.jpg" width="700" alt="..." className="konten-img"></img> 
                        <div className="text-detailkursus">
                            <a className="btn btn-success px-4" type="button" href="#">All Level</a>
                            <h1>Strategi Perencanaan Produksi <br></br>Pertanian</h1>
                            <p>By Resky Amalia</p>
                        </div>
                        <img src="/assets/bisnis-konten.png" width="700" alt="..." className="we"></img>
                    </div>

                    <div className="col-md-4">
                        <div className="card__buyer">
                            <div className="card-body">
                                <div className="card-buyer1">
                                    <div className="row container">
                                        <div className="col-md-4">
                                            <img src="/assets/books.png" alt="" />
                                        </div>
                                        <div className="col ps-3">
                                            <strong> MANAJEMEN STRATEGI BISNIS</strong>
                                            <p>By <a href="#">Ir.Karyana</a><br></br><b>Language</b> Indonesia</p>                                        
                                            <img src="/assets/bintang.png" alt="" />
                                            <p>4.39</p>
                                        </div>
                                        <p>Buku ini membahas tentang konsep strategi pengelolaan industri agribisnis yang meliputi
                                            strategi formulasi, strategi perencanaan, strategi impelementasi, dan strategi evaluasi dari industri
                                            agribisnis sehingga dapat dijadikan acuan dalam pengembangan industri agribisnis tersebut.</p>  
                                    </div> 
                                </div><div className="garis"></div>  
                                <div className="container">                
                                <div className="my-3">Rp.230.000,00 <a className="btn btn-success ms-5" type="button" href="">
                                <i className="bi bi-cart3 me-2"></i>Beli Sekarang</a><div className="garis mt-3"></div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-2">
                                       <img src="/assets/level.png" alt=""/>
                                    </div>
                                    <div className="col-4">
                                    <p>Level </p>
                                    </div>
                                    <div className="col-6">
                                    <p>All Level</p>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-2">
                                       <img src="/assets/icon-update.png" alt=""/>
                                    </div>
                                    <div className="col-4">
                                    <p>Last Update</p>
                                    </div>
                                    <div className="col-6">
                                    <p>5 November 2022</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2">
                                       <img src="/assets/sertifikat.png" alt=""/>
                                    </div>
                                    <div className="col-4">
                                    <p>Sertifikat</p>
                                    </div>
                                    <div className="col-6">
                                    <p>Sertifikat Kelulusan</p>
                                    </div>
                                </div>
                                </div>    
                            </div>
                        </div>
                        <div className="text-center">
                        <a className="btn btn-success px-3" type="button" href=""><i className="bi bi-share me-2"></i>Bagikan</a>
                        </div>         
                    </div>
                </div>
            </div>   
            </Container>  
            <Materibenifit />    
            <Footer />
           
        </div>
  );
}

export default Kursusdetail;