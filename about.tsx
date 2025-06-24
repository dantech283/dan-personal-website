import { Lightbulb, BookOpen } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="card-hover bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">My Passion</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              I'm passionate about technology, personal growth, and my faith. 
              My journey in tech is driven by a desire to create meaningful solutions 
              that make a positive impact on people's lives.
            </p>
          </div>
          
          <div className="card-hover bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4">
                <BookOpen className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Education</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Currently preparing to study Computer Science at Covenant University, 
              where I plan to deepen my knowledge in software development and 
              cybersecurity while building a strong foundation for my tech career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
