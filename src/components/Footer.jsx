import { Container } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
    return (
        <div className="wrapper__footer">             
            <Container> 
                <div className="row">
                    <div className="col-4">
                        <h5>Tentang Komoditiku</h5>
                        <p>Membantu mengurangi  tingkat<br></br> penggangguran, pemberdayakan potensi<br></br> komoditi dan menciptakan 
                            lapangan kerja<br></br> bagi pelaku komoditi</p>
                        <div className="icon-footer"><i className="bi bi-telephone me-2"></i>+62 899 300 10</div>
                        <div className="icon-footer"><i className="bi bi-envelope me-2"></i>komoditiku@gmail.com</div>
                        <div className="icon-footer"><i className="bi bi-geo-alt me-2"></i>Jakarta, Indonesia</div>
                    </div>
                    <div className="col-3">
                        <h5>Tautan Cepat</h5>
                        <a href="#">Beranda</a>
                        <a href="#">Layanan</a>
                        <a href="#">Tentang kami</a>
                        <a href="#">Kontak</a>
                    </div>
                    <div className="col-3">
                        <h5>Layanan Kami</h5>
                        <a href="#">Pelatihan & Konsultasi</a>
                        <a href="#">Belajar Online</a>
                        <a href="#">Digital Pemasaran</a>
                        <a href="#">Explore Produk</a>
                    </div>
                    <div className="col-2">
                        <h5>Ikuti kami</h5>
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-twitter ms-4"></i>
                        <i className="bi bi-instagram ms-4"></i>
                    </div>
                </div>
                <div className="line"></div>
                <div className="wrapper_copyright">Copyright &copy; 2022. <b>KomoditiKu</b> | All Rights Reserved.</div>
            </Container>

        </div>
  );
}

export default Footer;