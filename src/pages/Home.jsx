import Hero from "../components/Hero";
import Gridlayanan from "../components/Cardlayanan";
import Advantages from "../components/Advantages";
import Comment from "../components/Comment";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>            
          <Hero />
          <Gridlayanan /> 
          <Advantages />
          <Comment />
          <Footer />
        </div>
  );
}

export default Home;