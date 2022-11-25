import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./digitalpemasaran.css";
import { MARKETING } from "../router";

const Digitalpemasaran = () => {
    return (
        <div>            
            <img src="/assets/digital-pemasaran.jpg" alt="home" className="digital__img"></img>  
            <Container>
                <div className="text-pemasaran">
                <h1>Digital  Pemasaran</h1>
                </div>           
                <Link className="btn-pemasaran" href="#">Cari Marketingmu<i className="bi bi-arrow-right-circle-fill ms-2"></i></Link>

                <div className="text-digital text-center">
                    <h1>Digital <b>Pemasaran</b></h1>
                    <p>Pahami digital marketing untuk menunjang pertumbuhan bisnis kamu</p>           
                </div>
                <div className="wrapper__digitalpemasaran">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card__digital">
                                <div className="card-deskripsi text-center">
                                    <img src="/assets/digital1.png" height="170px" width="265px" alt="..." />
                                    <h5 className="container font-weight-bold text-center mt-4">Pengenalan Tentang Digital Marketing</h5>
                                    <p className="text-center container my-4">Komoditiku menyediakan perkenalan tentang digitalmarketing dengan fitur video
                                    yang dapat memahami digital marketing dari awal, serta mencari tau produk trending sekarang.</p>
                                </div>   
                                <div className="row mt-3 container">
                                    <div className="col-2">
                                    <img src="/assets/profil1.png" height="45" widht="45" alt="" />
                                    </div>
                                    <div className="col-7 mt-2 ms-2">
                                    <h5 className="name">By David Hill</h5> 
                                    </div>
                                    <div className="col-2 ms-1">
                                    <Link to={MARKETING} type="button" className="btn">Detail</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card__digital">
                                <div className="card-deskripsi text-center">
                                    <img src="/assets/digital2.png" height="170px" width="265px" alt="..." />
                                    <h5 className="container font-weight-bold text-center mt-4">Penyedia Konten Digital Marketing</h5>
                                    <p className="text-center container my-4">Komoditiku menyediakan sebuah konten marketing dari tentang cara 
                                    menulis, berkomunikasi, berbicara didepan video atau podcast, dan peka terhadap tren<br></br> yang semakin berkembang.</p>
                                </div>   
                                <div className="row mt-3 container">
                                    <div className="col-2">
                                    <img src="/assets/profil2.png" height="45" widht="45" alt="" />
                                    </div>
                                    <div className="col-7 mt-2 ms-2">
                                    <h5 className="name">By Maria Angel</h5> 
                                    </div>
                                    <div className="col-2 ms-1">
                                    <a type="button" className="btn">Detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card__digital">
                                <div className="card-deskripsi text-center">
                                    <img src="/assets/digital3.png" height="170px" width="265px" alt="..." />
                                    <h5 className="container font-weight-bold text-center mt-4">Strategi Bisnis Sosial Media Marketing</h5>
                                    <p className="text-center container my-4">Komoditiku menyediakan sebuah strategi bisnis anda lewat promosi sosial 
                                    media untuk membantu produk anda, serta membantu dalam pembuatan akun untuk mempromosikan produk anda sendiri.</p>
                                </div>   
                                <div className="row mt-3 container">
                                    <div className="col-2">
                                    <img src="/assets/profil3.png" height="45" widht="45" alt="" />
                                    </div>
                                    <div className="col-7 mt-2 ms-2">
                                    <h5 className="name">By Helena</h5> 
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
                            <div className="card__digital">
                                <div className="card-deskripsi text-center">
                                    <img src="/assets/digital4.png" height="170px" width="265px" alt="..." />
                                    <h5 className="container font-weight-bold text-center mt-4">Menyediakan Pelayanan <br></br>Sosial Media ADS</h5>
                                    <p className="text-center container my-4">Komoditiku menyediakan pelayanan tentang bagaimana cara mengiklankan 
                                    produk anda menggunakan ADS di sosial media serta membantu membangun dan meningkatkan penjualan.</p>
                                </div>   
                                <div className="row mt-3 container">
                                    <div className="col-2">
                                    <img src="/assets/profil4.png" height="45" widht="45" alt="" />
                                    </div>
                                    <div className="col-7 mt-2 ms-2">
                                    <h5 className="name">By Jackson Wan</h5> 
                                    </div>
                                    <div className="col-2 ms-1">
                                    <a type="button" className="btn">Detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card__digital">
                                <div className="card-deskripsi text-center">
                                    <img src="/assets/digital5.png" height="170px" width="265px" alt="..." />
                                    <h5 className="container font-weight-bold text-center mt-4">Menyediakan Pelayanan <br></br>SEO atau SEM</h5>
                                    <p className="text-center container my-4">Komoditiku menyediakan layanan <br></br>ini untuk meningkatkan website anda<br></br> 
                                    agar muncul di mesin pencarian dengan menfaatkan iklan, serta memberi keleluasaan untuk memilih target.</p>
                                </div>   
                                <div className="row mt-3 container">
                                    <div className="col-2">
                                    <img src="/assets/profil5.png" height="45" widht="45" alt="" />
                                    </div>
                                    <div className="col-7 mt-2 ms-2">
                                    <h5 className="name">By Jhoson</h5> 
                                    </div>
                                    <div className="col-2 ms-1">
                                    <a type="button" className="btn">Detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card__digital">
                                <div className="card-deskripsi text-center">
                                    <img src="/assets/digital6.png" height="170px" width="265px" alt="..." />
                                    <h5 className="container font-weight-bold text-center mt-4">Pelayanan Untuk Persiapan <br></br>Karir</h5>
                                    <p className="text-center container my-4">Komoditiku menyediakan layanan <br></br>untuk anda dalam mempersiapkan karir dengan tepat, membantu
                                    dalam mencari relasi di bisnis anda serta meyiapkan dan menjalankan bisnis anda dengan siap.</p>
                                </div>   
                                <div className="row mt-3 container">
                                    <div className="col-2">
                                    <img src="/assets/profil6.png" height="45" widht="45" alt="" />
                                    </div>
                                    <div className="col-7 mt-2 ms-2">
                                    <h5 className="name">By Jack Ripper</h5> 
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
            <Footer />
           
        </div>
  );
}

export default Digitalpemasaran;