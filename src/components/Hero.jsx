import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./hero.css";

const Hero = () => {
    return (
        <div>            
            <img src="/assets/hero-home.jpg" alt="home" className="home__img"></img>  
            <Container>
                <div className="text-hero">
                <h1>Mengatasi Solusi Pada Bisnis <br></br>Anda Dengan Komoditiku</h1>
                <p>Komoditiku memberikan edukasi tentang bagaimana<br></br>
                cara mengeksplor potensi komoditi kepada masyarakat<br></br>
                lokal atau daerah dengan  berbagai macam kegiatan<br></br> 
                keterampilan dan pengerjaan potensi komoditi tersebut.</p> 
                </div>           
                <Link className="btn-hero" href="#">Temukan Solusimu<i className="bi bi-arrow-right-circle-fill ms-2"></i></Link>                     
            </Container>
           
            <div className="vektor">
                <img src="/assets/vektorhero.svg" alt="vektor" className="vektor__img"></img>           
            </div>
        </div>
  );
}

export default Hero;