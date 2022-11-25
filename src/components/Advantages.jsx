import { Container } from "react-bootstrap";
import "./advantages.css";

const Advantages = () => {
    return (
        <div className="wrapper__advantages">             
            <Container>
                <div className="row">
                    <div className="col-7">
                        <h1>Kelebihan pada <br></br>website <b>Komoditiku</b></h1>
                        <p><img src="/assets/titik1.png" alt="..." className="me-3"/>Membantu masyarakat lokal atau daerah memahami dan mengetahui pentingnya eksplor potensi 
                        suatu komoditi yang dimiliki agar membantu pertumbuhan dan perkembangan ekonomi baik secara individu maupun kelompok atau daerah.</p>       
                        <p><img src="/assets/titik1.png" alt="..." className="me-3" />Membantu para pelaku komoditi untuk dapat menentukan buyer yang dapat bertanggung jawab.</p>
                        <p><img src="/assets/titik1.png" alt="..." className="me-3" />Membantu  masyarakat untuk menciptakan lapangan kerja dengan potensi komoditi yang dimiliki.</p>
                    </div>
                    <div className="col-5">
                        <img src="/assets/kelebihan.png" alt="..." />     
                    </div>
                </div>                          
            </Container>
        </div>
  );
}

export default Advantages;