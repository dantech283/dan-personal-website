export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="pt-24 pb-16 px-6 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img 
              src="https://lh3.googleusercontent.com/pw/AP1GczMAGcXYKkZu1kjhg5U_BCvB5YBh484JZqyTj7jldlbBgfqxaF_bEUMTu-kIOFwCQdKwZ03JTSfBXgXiG0nsE_DGktDJZB89VhJAvTAmZwNHNO1fUVUVc2MBfQE2efHw4J_XlsL_zunNbPK3ogB6EUbl=w720-h1083-s-no-gm?authuser=0" 
              alt="Daniel-Iyade Emmanuel - Professional Photo" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-xl ring-4 ring-white object-cover"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Hello, I'm <span className="gradient-text">Daniel-Iyade Emmanuel</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            I'm an aspiring <span className="font-semibold text-blue-600">software developer</span> and{' '}
            <span className="font-semibold text-cyan-600">cybersecurity expert</span>.{' '}
            I will be studying Computer Science at Covenant University.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('goals')}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore My Goals
            </button>
            <button 
              onClick={() => scrollToSection('connect')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
