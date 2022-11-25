import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Gridkonsultasi from "./Cardkonsultasi";
import Footer from "./Footer";
import "./pelatihan.css";
import { TRAINING, KONSULTASI } from "../router";

const Konsultasi = () => {
    return (
        <div>            
            <img src="/assets/hero-pelatihan.jpg" alt="home" className="pelatihan__img"></img>  
            <Container>
                <div className="text-pelatihan">
                <h1>Pelatihan & Konsultasi</h1>
                </div>           
                <Link className="btn-training" href="#">Temukan Solusimu<i className="bi bi-arrow-right-circle-fill ms-2"></i></Link>

                <div className="text-layanan text-center">
                    <h1>Kami menawarkan 2 layanan utama untuk membantu bisnis anda</h1>
                    <Link className="btn-out" to={TRAINING}>Pelatihan</Link>
                    <Link className="btn-in ms-5" to={KONSULTASI}>Konsultasi</Link>
                </div>              
            </Container>
            <Gridkonsultasi /> 
            <Footer />
           
        </div>
  );
}

export default Konsultasi;