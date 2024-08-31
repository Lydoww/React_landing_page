import Description from "./components/Description";
import Footer from "./components/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header";

function App() {
  return (
    <div
      className="
        min-h-screen bg-cover bg-center bg-no-repeat bg-fixed
        bg-[url('/assets/bg_mobile.jpg')] 
        md:bg-[url('/assets/bg.jpg')]"
    >
      <Header />
      <Description />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
