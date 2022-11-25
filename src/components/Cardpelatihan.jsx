import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./cardpelatihankonsultasi.css";
import { HOME } from "../router";

const Gridpelatihan = () => {
    return (
        <div>             
            <Container>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card__pelatihan text-center">
                        <img src="/assets/pelatihan-detail1.png" height="205" width="330" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold text-center mt-4 mb-3">Inhouse Training</h5>
                            <p className="text-center container mt-4 mb-5">Program ini bertujuan untuk meningkatan kualitas sumber daya
                            manusia di bisnis / perusahaan Anda. Segala kebutuhan seperti materi, waktu, serta tempat
                            pelatihan disesuaikan dengan permintaan tim yang akan di-training.</p>
                            <a href="#" className="btn px-5 py-2">Detail</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card__pelatihan text-center">
                        <img src="/assets/pelatihan-detail2.png" height="205" width="330" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold text-center mt-4 mb-3">Public Training</h5>
                            <p className="text-center container mt-4 mb-5">Anda juga dapat mengadakan kerjasama dengan Komoditiku untuk
                            mengadakan pelatihan dengan berbagai macam topik. Pelatihannya dapat berupa Seminar, Workshop,
                            ataupun Kursus Online yang dapat diakses.</p>
                            <a href="#" className="btn px-5 py-2">Detail</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card__pelatihan text-center">
                        <img src="/assets/pelatihan-detail3.png" height="205" width="330" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold text-center mt-4 mb-3">Pelatihan Online</h5>
                            <p className="text-center container mt-4 mb-5">Komoditiku menyediakan program Pelatihan Online bernama, khusus bagi
                            Anda yang lebih suka belajar melalui video materi yang lengkap dan komprehensif. Anda hanya perlu
                            melakukan pembelian kursus sebanyak 1x untuk mendapatkan akses selamanya.</p>
                            <a href="#" className="btn px-5 py-2">Detail</a>
                        </div>
                        </div>
                    </div>       
                </div>

                <div className="wrapper__dokumentasi text-center">
                    <h1>Dokumentasi Layanan <b>Komoditiku</b></h1>
                    <p>Berikut beberapa dokumentasi seputar layanan digital marketing Komoditiku</p>
                    <div className="dokumentasi">
                    <img src="/assets/arrow-left.png" width="50px" className="arrow me-4"/>
                    <img src="/assets/dokumentasi-layanan1.png" className="img me-4" height="220" width="300" />
                    <img src="/assets/dokumentasi-layanan2.png" className="img me-4" height="220" width="300" />
                    <img src="/assets/dokumentasi-layanan3.png" className="img" height="220" width="300" />
                    <img src="/assets/arrow-right.png" width="50px" className="arrow ms-4" />
                    </div>
                </div>     
            </Container>
            
        </div>
  );
}

export default Gridpelatihan;