import { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Scene3D } from './components/Scene3D';
import { Cursor } from './components/Cursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <div className="min-h-screen bg-white">
          <Cursor />
          <Scene3D />
          <Navbar />
          <Hero />
          <Services />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
          
        </div>
      )}
    </>
  );
}

export default App;