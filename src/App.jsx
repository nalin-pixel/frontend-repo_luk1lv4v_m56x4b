import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Rows from './components/Rows';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black font-inter">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <section className="relative z-10 -mt-10 rounded-t-3xl bg-gradient-to-b from-zinc-950 to-black">
          <div className="mx-auto max-w-7xl px-2 sm:px-4">
            <div className="py-6">
              <h2 className="px-4 text-2xl font-bold text-white">Just for Varun</h2>
              <p className="px-4 text-sm text-white/60">Hand-picked selections showcasing design, engineering, and motion.</p>
            </div>
            <Rows />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
