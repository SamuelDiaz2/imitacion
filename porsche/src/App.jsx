import Footer from "./Footer";
import PorscheMiniconfig from "./componentes/PorscheMiniconfig";
import PorscheSection from "./componentes/PorscheSection";
import PorscheDiscovery from "./Components/PorscheDiscovery";
import Porscheheader from "./componentes/PorscheHeader";
import ImagenSection from "./Componente/ImagenSection"

function App() {
  return (
    <>
      <Porscheheader />
      <ImagenSection />
      <PorscheSection />
      <PorscheMiniconfig />
      <PorscheDiscovery />
      <Footer />
    </>
  );
}

export default App;