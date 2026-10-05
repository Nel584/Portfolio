import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Projects from '@/pages/Projects';
import Certificates from '@/pages/Certificates';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';

function getRoute() {
  const hash = window.location.hash.replace('#', '') || '/';
  return hash;
}

export default function App() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
  };

  const renderPage = () => {
    switch (route) {
      case '/about':
        return <About onNavigate={navigate} />;
      case '/projects':
        return <Projects onNavigate={navigate} />;
      case '/certificates':
        return <Certificates onNavigate={navigate} />;
      case '/services':
        return <Services onNavigate={navigate} />;
      case '/contact':
        return <Contact onNavigate={navigate} />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar currentPath={route} onNavigate={navigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
