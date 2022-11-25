import { Container } from "react-bootstrap";
import Comment from "../components/Comment";
import Footer from "../components/Footer";
import "./about.css";

const About = () => {
    return (
        <div className="about">
          <img src="/assets/hero-about1.jpg" alt="" className="about-img"/>
          <Container>
          <div className="text-about">
            <h1>Profil Komoditiku</h1>
            <p>Kenali Komoditiku, dan apa yang menjadi fokus utamanya dalam <br></br>memberikan pelayanan terbaik bagi bisnis Anda.​</p>
          </div>  
            <div className="wrapper__about">
              <div className="row">
                <div className="col-6">
                  <img src="/assets/logo-hero.png" alt="" className="logo-hero" />
                </div>
                <div className="col-6">
                  <h1>Tentang <b>Komoditiku</b></h1>
                  <p>Komoditiku merupakan sebuah website yang membantu masyarakat, khususnya masyarakat lokal, daerah atau pelaku usaha 
                  yang memiliki potensi komoditi yang dapat di eksplor kepada buyer yang tentunya lebih
                  bertanggung jawab sehingga barang atau produk yang ditawarkan, budgetnya sesuai yang diharapkan.</p>
                </div>
              </div>
            </div>
            </Container> 
            <div className="visi-misi text-center">
              <div className="container">
              <h1>Visi & Misi <b>Komoditiku</b></h1>
                <div className="row">
                 
                  <div className="col-5 misi">
                  <div className="card__about">
                    <img src="/assets/logo-misi.png" alt="" />
                    <h2>Misi</h2>
                    <p>Membantu mengedukasikan dan memperdayakan Usaha Kecil dan Menengah (UMKM) dan Pemilik Usaha dalam pemanfaatan teknologi dalam digital secara 
                      efektif untuk menghasilkan Keuntungan yang lebih banyak, Meningkatkan Produktivitas, dan Mempercepat Terciptanya Nilai Bisnis.</p>
                  </div>
                  </div>
                  
                  <div className="col-5 visi">
                  <div className="card__about">
                    <img src="/assets/logo-visi.png" alt="" />
                    <h2>Visi</h2>
                    <p>Menyediakan berbagai layanan fasilitas dengan solusi secara teknologi  untuk bisnis pelaku UMKM yang ada di 
                    Indonesia dengan reputasi keunggulan, inovasi dan integritas, serta bisa membantu dalam mewujudkan bisnis impian yang akan dibangun bersama dengan komoditiku.</p>
                  </div>
                  </div>     
                </div>
              </div>             
            </div>
          <Comment />   
          <Footer />
        </div>
  );
}

export default About;