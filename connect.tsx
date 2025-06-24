import { Github, Mail, Linkedin } from "lucide-react";

export default function Connect() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/",
      description: "Check out my code and projects",
      hoverColor: "group-hover:bg-blue-600"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:daniel@example.com",
      description: "Let's discuss opportunities",
      hoverColor: "group-hover:bg-emerald-600"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/",
      description: "Connect professionally",
      hoverColor: "group-hover:bg-blue-600"
    }
  ];

  return (
    <section id="connect" className="py-16 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          🔗 Let's Connect & Build Together
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          I'm always excited to collaborate, learn, and grow with fellow tech enthusiasts. 
          Let's connect and create something amazing!
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a 
                key={index}
                href={link.url} 
                className="group bg-slate-800 hover:bg-slate-700 p-8 rounded-2xl transition-all duration-300 transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={`w-16 h-16 bg-slate-700 ${link.hoverColor} rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{link.name}</h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                  {link.description}
                </p>
              </a>
            );
          })}
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-slate-400">
            Ready to start a conversation? I'm always open to new opportunities and collaborations.
          </p>
        </div>
      </div>
    </section>
  );
}
