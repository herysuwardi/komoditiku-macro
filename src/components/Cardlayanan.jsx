import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./cardlayanan.css";
import { TRAINING, COURSES, DIGITAL, EXPLORE, MITRA } from "../router";

function Gridlayanan () {
    return (
        <div>
          <Container>
              {/* components layanan */}
            <div className="wrapper__layanan">
              <h1>Layanan yang kami <br></br>sediakan</h1>
              <div className="row mt-3">
                  <div className="col-md-3">
                    <div className="card__wrapper text-center">
                      <img src="/assets/pelatihan-icon.png" height="90" width="90" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold text-center mt-4 mb-3">Pelatihan & Konsultasi</h5>
                        <p className="text-center container mt-4">Melatih dan membantu anda dalam mencapai target bisnis Anda.</p> 
                          <Link to={TRAINING} className="btn btn-sm">Detail</Link>           
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card__wrapper text-center">
                      <img src="/assets/kursus-icon.png" height="90" width="90" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold text-center mt-4 mb-3">Kursus Online</h5>
                        <p className="text-center container mt-4">Tempat untuk pelaku UMKM dalam mempelajari penjualan yang tepat dan sasaran.</p> 
                          <Link to={COURSES} className="btn btn-sm">Detail</Link>           
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card__wrapper text-center">
                      <img src="/assets/digital-icon.png" height="90" width="90" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold text-center mt-4 mb-3">Digital Pemasaran</h5>
                        <p className="text-center container mt-4">Menyediakan media seperti website dan desain media promosi.</p> 
                          <Link to={DIGITAL} className="btn btn-sm">Detail</Link>           
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card__wrapper text-center">
                      <img src="/assets/explore-icon.png" height="90" width="90" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title font-weight-bold text-center mt-4 mb-3">Explore Produk</h5>
                        <p className="text-center container mt-4">Menyediakan produk-produk unggulan bidang pertanian dan perikanan dari mitra.</p> 
                          <Link to={EXPLORE} className="btn btn-sm">Detail</Link>           
                      </div>
                    </div>
                  </div>
              </div>   
              </div>

              {/* components mitra */}
              <div className="wrapper__mitra">
                  <div className="row">
                      <div className="col-7">
                          <img src="/assets/perikanan.png" alt="..." className="mitra1__icon" />
                          <img src="/assets/tani-sawit.png" alt="..." className="mitra2__icon" />
                          <img src="/assets/pertani.png" alt="..." className="mitra1__icon" />
                          <img src="/assets/favagri.png" alt="..." className="mitra2__icon" />
                          <img src="/assets/dsfi.png" alt="..." className="mitra1__icon" />
                          <img src="/assets/pt-triputra.png" alt="..." className="mitra2__icon" />              
                      </div>
                      <div className="col-5">
                          <h1>Mitra <b>Komoditiku</b><br></br>Digital</h1>
                          <p>Kami menyediakan beberapa mitra yang dapat membantu para pelaku UMKM untuk mengexplore barang</p>
                          <Link to={MITRA}className="btn-mitra">Detail</Link>
                      </div>
                  </div>
            </div>
                              
          </Container>
        </div>
             
  );
}

export default Gridlayanan;