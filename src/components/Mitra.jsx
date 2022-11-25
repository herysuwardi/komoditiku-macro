import { Container } from "react-bootstrap";
import Footer from "./Footer";
import "./mitra.css";

const Mitra = () => {
    return (
        <div>            
            <Container>
                <div className="text-mitra text-center">
                <h1>Beberapa mitra perusahaan yang telah menjalin<br></br> kerja sama dengan <b>Komoditiku</b></h1>
                </div>           
                <div className="row">
                    <div className="col-md-4">
                        <div className="mitra-img">
                            <img src="/assets/perikanan.png" className="perikanan-mitra"/>
                        </div>
                    </div>
            
                    <div className="col-md-4">
                        <div className="mitra-img">
                            <img src="/assets/tani-sawit.png" />
                        </div>
                    </div>
            
                    <div className="col-md-4">
                        <div className="mitra-img">
                            <img src="/assets/mitrasmart.png" />
                        </div>
                    </div>
                </div>
    
                <div className="row">
                    <div className="col-md-4">
                        <div className="mitra-img">
                            <img src="/assets/pertani.png"/>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="mitra-img">
                            <img src="/assets/favagri.png" />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="mitra-img">
                            <img src="/assets/mitraagrindo.png" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="mitra-img">
                            <img src="/assets/dsfi.png"/>
                        </div>
                    </div>
            
                    <div className="col-md-4">
                        <div className="mitra-img">
                            <img src="/assets/pt-triputra.png" />
                        </div>
                    </div>
            
                    <div className="col-md-4">
                        <div className="mitra-img">
                            <img src="/assets/mitralonsum.png" className="lonsum-mitra"/>
                        </div>
                    </div>
                </div>
   
                <div className="card__mitra">
                    <div className="row">
                        <div className="col-6">
                            <h5>Mentor Bisnis Dari Beberapa <br></br>Perusahaan</h5>
                        </div>
                        <div className="col-3">
                            <img src="/assets/mitraaction.png" alt="..." />
                        </div>
                        <div className="col-3">
                            <img src="/assets/mentorkuliner.png" alt="..." />
                        </div>
                    </div>
                </div>          
            </Container>
            <Footer />
        </div>
  );
}

export default Mitra;