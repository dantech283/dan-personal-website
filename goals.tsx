import { Code, Shield, Beaker } from "lucide-react";

export default function Goals() {
  const goals = [
    {
      icon: Code,
      title: "Become a Top Developer",
      description: "Master modern programming languages, frameworks, and development practices to build scalable, efficient, and user-friendly applications.",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Master Cybersecurity",
      description: "Develop expertise in cybersecurity principles, ethical hacking, and digital defense to protect systems and data from evolving threats.",
      borderColor: "border-cyan-500",
      bgColor: "bg-cyan-100",
      iconColor: "text-cyan-600"
    },
    {
      icon: Beaker,
      title: "Build Useful Tech Products",
      description: "Create innovative technology solutions that solve real-world problems and make a meaningful difference in people's lives and communities.",
      borderColor: "border-emerald-500",
      bgColor: "bg-emerald-100",
      iconColor: "text-emerald-600"
    }
  ];

  return (
    <section id="goals" className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            💡 My Goals & Aspirations
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Here's what I'm working toward in my journey as a developer and cybersecurity expert
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {goals.map((goal, index) => {
            const IconComponent = goal.icon;
            return (
              <div key={index} className={`card-hover bg-white p-8 rounded-2xl shadow-lg border-l-4 ${goal.borderColor}`}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${goal.bgColor} rounded-2xl flex items-center justify-center mr-4`}>
                    <IconComponent className={`w-8 h-8 ${goal.iconColor}`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{goal.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {goal.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
