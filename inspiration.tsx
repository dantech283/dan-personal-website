import { Quote } from "lucide-react";

export default function Inspiration() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center text-white">
          <div className="mb-8">
            <Quote className="w-16 h-16 mx-auto mb-6 animate-bounce-gentle" />
          </div>
          <blockquote className="text-2xl md:text-3xl font-medium mb-6 italic">
            "I can do all things through Christ who strengthens me."
          </blockquote>
          <cite className="text-xl opacity-90">Philippians 4:13</cite>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-lg">
              <strong>Fun Fact:</strong> I love tech, growth, and God! 🚀✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
