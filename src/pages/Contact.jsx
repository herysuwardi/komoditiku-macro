import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import "./contact.css";

const Contact = () => {
    return (
        <div>   
          <img src="/assets/herokontak.svg" alt="..." className="herokontak__img" />
          <Container>
            <div className="wrapper__contact">  
              <h1>Kontak Kami</h1>
                <div className="row mt-3">
                  <div className="col-md-3">
                    <div className="card__contact text-center">
                      <img src="/assets/icon1kontak.png" height="90" width="90" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold text-center mt-4 mb-3">Buka Pada Jam</h5>
                        <p className="text-center container mt-4">10:00 AM - 08:00 PM</p>         
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card__contact text-center">
                      <img src="/assets/icon2kontak.png" height="90" width="90" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold text-center mt-4 mb-3">Telepon</h5>
                        <p className="text-center container mt-4">+62 899 300 10</p>         
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card__contact text-center">
                      <img src="/assets/icon3kontak.png" height="90" width="90" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold text-center mt-4 mb-3">E-mail</h5>
                        <p className="text-center container mt-4">komoditiku@gmail.com</p>         
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card__contact text-center">
                      <img src="/assets/icon4kontak.png" height="90" width="90" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold text-center mt-4 mb-3">Lokasi</h5>
                        <p className="text-center container mt-4">Jakarta, Indonesia</p>         
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

export default Contact;