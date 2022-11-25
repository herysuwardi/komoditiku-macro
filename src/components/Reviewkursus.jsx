import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./reviewkursus.css";

const Reviewkursus = () => {
    return (
        <div>            
            <Container>
                <div className="wrapper__review">
                    <div className="row">
                        <div className="col-6">
                            <h5>Mengapa <b>Komoditiku</b></h5>
                            <h1>Pilihan Para Pemilik Pebisnis Online dan Bisnis UMKM</h1>
                        </div>
                        <div className="col-6">
                            <img src="/assets/review-kursus.png" alt="..." />
                        </div>
                    </div>
                    <div className="review-button text-center">
                        <Link className="btn-review" href="#">Lihat Ulasan Lainnya</Link> 
                    </div>  
                </div>                    
            </Container>
           
        </div>
  );
}

export default Reviewkursus;