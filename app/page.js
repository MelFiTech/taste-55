import Header from './components/Header';
import Hero from './components/Hero';
import Suppliers from './components/Suppliers.jsx';
import Daily from './components/Daily.jsx';
import Why from './components/Why';
import WhyMobile from './components/WhyMobile';
import About from './components/About.jsx';
import Faq from './components/Faq.jsx';
import Subscribe from './components/Subscribe.jsx';

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <div id="home">
        <Hero />
      </div>
      <div id="why" className="md:hidden">
        <WhyMobile />
      </div>
      <div id="why" className="hidden md:block">
        <Why />
      </div><div id="suppliers">
        <Suppliers />
      </div>
      <Daily />
      <div id="about">
        <About />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <div id="subscribe">
        <Subscribe />
      </div>
    </main>
  );
}
