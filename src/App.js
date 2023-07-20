
import Footer from "./Components/Footer";
import ImgFundo from "./Components/ImgFundo";
import Links from "./Components/Links";
import Name from "./Components/Name";

function App() {
  return (
    <div>
      <div className="App d-flex justify-content-center align-itens-center">

        <div className="div-links">
          <Name />
          <ImgFundo />
          <Links />
          
          
        </div>

        <div className="img-desktop">
        </div>
      </div>
      
      <Footer />



    </div>
  );
}

export default App;
