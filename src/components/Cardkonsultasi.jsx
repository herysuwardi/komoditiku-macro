import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./cardpelatihankonsultasi.css";
import { HOME } from "../router";

const Gridkonsultasi = () => {
    return (
        <div>             
            <Container>
                <div className="wrapper__konsultasi">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="card__pelatihan text-center">
                        <img src="/assets/konsultasi1.png" height="205" width="330" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold text-center mt-4 mb-3">Konsultasi On Demand</h5>
                            <p className="text-center container mt-4 mb-5">Konsultasi on demand menawarkan layanan konsultasi yang fleksibel dengan kebutuhan 
                            bisnis Anda saat ini. Anda dapat berkonsultasi bahkan untuk topik yang sangat spesifik sekalipun, dan tentunya kami akan memberikan
                             solusi yang tepat sasaran terhadap setiap permasalahan bisnis yang Anda hadapi.</p>
                            <a href="#" className="btn px-5 py-2">Detail</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card__pelatihan text-center">
                        <img src="/assets/konsultasi2.png" height="205" width="330" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold text-center mt-4 mb-3">Konsultasi Full Package</h5>
                            <p className="text-center container mt-4 mb-5">Konsultasi full package menawarkan <br></br>layanan penuh terhadap kebutuhan strategi digital 
                            marketing yang sedang atau <br></br>yang akan Anda jalankan dalam bisnis. Semuanya akan diamati secara detail mulai dari audit, penyusunan 
                            strategi, pendampingan dan monitoring. Kami juga memberikan bonus training.</p>
                            <a href="#" className="btn px-5 py-2">Detail</a>
                        </div>
                        </div>
                    </div>   
                </div>  
                </div>

                <div className="wrapper__dokumentasi text-center">
                    <h1>Dokumentasi Layanan <b>Komoditiku</b></h1>
                    <p>Berikut beberapa dokumentasi seputar layanan digital marketing Komoditiku</p>
                    <div className="dokumentasi">
                    <img src="/assets/arrow-left.png" width="50px" className="arrow me-4"/>
                    <img src="/assets/dokumentasi-layanan4.png" className="img me-4" height="220" width="300" />
                    <img src="/assets/dokumentasi-layanan2.png" className="img me-4" height="220" width="300" />
                    <img src="/assets/dokumentasi-layanan1.png" className="img" height="220" width="300" />
                    <img src="/assets/arrow-right.png" width="50px" className="arrow ms-4" />
                    </div>
                </div>   
                   
            </Container>
            
        </div>
  );
}

export default Gridkonsultasi;