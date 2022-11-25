import { Container } from "react-bootstrap";
import Footer from "./Footer";
import "./videomarketing.css";

const Videomarketing = () => {
    return (
        <div>
            <Container>
               <div className="wrapper__marketing">    
                <h1>Digital <b>Pemasaran</b> </h1>  
                <img src="/assets/pengenalan.png" width="950" height="550" alt="..." className="v-marketing" />               
                <h2 className="mt-5 mb-5"><b>Pengenalan Tentang Digital Marketing</b></h2>
                <a className="btn btn-success px-3 me-4" type="button" href=""><i className="bi bi-hand-thumbs-up me-2"></i>Suka</a>
                <a className="btn btn-success px-3" type="button" href=""><i className="bi bi-share me-2"></i>Bagikan</a>
               </div>              
            </Container>
            <Footer />
            
        </div>
    );
}

export default Videomarketing;