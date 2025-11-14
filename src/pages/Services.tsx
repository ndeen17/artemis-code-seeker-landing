import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Code, UserCheck, Users, User, Target } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-400" />,
      title: "Product & App Development",
      headline: "Build Products That Matter",
      description: "We design and develop digital products that are scalable, intuitive, and aligned with your business goals. From web platforms to mobile apps and internal tools, we turn your ideas into reliable, user-focused software.",
      cta: "Start a Project"
    },
    {
      icon: <UserCheck className="w-12 h-12 text-cyan-400" />,
      title: "Artemis (Talent Vetting Tool)",
      headline: "Hire With Confidence",
      description: "Artemis is our in-house platform that evaluates technical skills objectively. It helps you avoid bad hires, speed up recruitment, and ensure every candidate meets your standards.",
      cta: "Learn More About Artemis"
    },
    {
      icon: <Users className="w-12 h-12 text-green-400" />,
      title: "Team Extension",
      headline: "Dedicated Teams for Faster Execution",
      description: "Add engineers, designers, or product managers who integrate seamlessly with your internal team. Perfect for scaling new features, accelerating delivery, or taking on larger initiatives.",
      cta: "Extend Your Team"
    },
    {
      icon: <User className="w-12 h-12 text-purple-400" />,
      title: "Single Specialist Staffing",
      headline: "Specialists On Demand",
      description: "When you need a single expert—an engineer, UX designer, or product lead—we provide top-level professionals ready to contribute from day one.",
      cta: "Hire a Specialist"
    },
    {
      icon: <Target className="w-12 h-12 text-orange-400" />,
      title: "In-House Product Support",
      headline: "Founder-Level Product Direction",
      description: "We provide hands-on product strategy, roadmap planning, and ongoing support usually reserved for in-house startup teams. Ideal for founders and lean teams that need senior product leadership.",
      cta: "Get Product Support"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Product development, team building, and technical staffing—designed for businesses that want to grow intelligently.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`mb-16 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} lg:flex lg:items-center lg:gap-12`}
            >
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="bg-slate-900 p-8 rounded-lg">
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {service.headline}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    {service.cta}
                  </button>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="bg-slate-800 rounded-lg p-8 h-full flex flex-col justify-center">
                  {index === 0 && (
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-4">What You Get:</h3>
                      <ul className="text-gray-300 space-y-2 text-left">
                        <li>• Custom web and mobile applications</li>
                        <li>• Scalable architecture and clean code</li>
                        <li>• User-focused design and UX</li>
                        <li>• Ongoing maintenance and support</li>
                        <li>• Integration with existing systems</li>
                      </ul>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-4">Artemis Features:</h3>
                      <ul className="text-gray-300 space-y-2 text-left">
                        <li>• AI-powered code analysis</li>
                        <li>• GitHub/GitLab integration</li>
                        <li>• Skill level assessment</li>
                        <li>• Portfolio evaluation</li>
                        <li>• Detailed candidate reports</li>
                      </ul>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-4">Team Roles Available:</h3>
                      <ul className="text-gray-300 space-y-2 text-left">
                        <li>• Senior Software Engineers</li>
                        <li>• UI/UX Designers</li>
                        <li>• Product Managers</li>
                        <li>• DevOps Engineers</li>
                        <li>• Technical Leads</li>
                      </ul>
                    </div>
                  )}
                  {index === 3 && (
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-4">Specialist Areas:</h3>
                      <ul className="text-gray-300 space-y-2 text-left">
                        <li>• Frontend Development (React, Vue, Angular)</li>
                        <li>• Backend Development (Node.js, Python, .NET)</li>
                        <li>• Mobile Development (iOS, Android, React Native)</li>
                        <li>• Data Engineering & Analytics</li>
                        <li>• Cloud Architecture (AWS, Azure, GCP)</li>
                      </ul>
                    </div>
                  )}
                  {index === 4 && (
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-4">Support Includes:</h3>
                      <ul className="text-gray-300 space-y-2 text-left">
                        <li>• Product strategy and roadmap planning</li>
                        <li>• Technical architecture guidance</li>
                        <li>• Team leadership and mentoring</li>
                        <li>• Agile process implementation</li>
                        <li>• Long-term growth planning</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;