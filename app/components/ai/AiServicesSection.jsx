import { FiSettings, FiEye, FiZap, FiMessageCircle, FiCpu, FiActivity, FiTrendingUp, FiUserCheck } from 'react-icons/fi';
import { MdAutoAwesome } from 'react-icons/md';

const services = [
  {
    icon: <FiSettings size={32} className="text-white mb-4" />,
    title: "AI & ML Strategy Consulting",
    desc: "Transform your vision into reality with tailored AI/ML strategies that boost efficiency and maximize ROI.",
    btn: "Discover Solutions",
  },
  {
    icon: <FiEye size={32} className="text-white mb-4" />,
    title: "Advanced Computer Vision",
    desc: "Harness cutting-edge computer vision to power intelligent image and video analytics for industries like healthcare and retail.",
    btn: "Explore Now",
  },
  {
    icon: <MdAutoAwesome size={32} className="text-white mb-4" />,
    title: "Generative AI Innovation",
    desc: "Revolutionize content creation and customer experiences with generative AI tailored to your business needs.",
    btn: "Learn More",
  },
  {
    icon: <FiCpu size={32} className="text-white mb-4" />,
    title: "Custom Language Models",
    desc: "Streamline operations and enhance user experiences with bespoke large language models (LLMs).",
    btn: "Get Started",
  },
  {
    icon: <FiMessageCircle size={32} className="text-white mb-4" />,
    title: "NLP-Powered Solutions",
    desc: "Build smart applications with advanced NLP for sentiment analysis, chatbots, and more.",
    btn: "Discover More",
  },
  {
    icon: <FiActivity size={32} className="text-white mb-4" />,
    title: "AI Rapid Prototyping",
    desc: "Validate your AI ideas quickly with agile prototyping for startups and enterprises.",
    btn: "Prototype Now",
  },
  {
    icon: <FiTrendingUp size={32} className="text-white mb-4" />,
    title: "Predictive AI Analytics",
    desc: "Unlock actionable insights with predictive analytics to drive smarter decisions and growth.",
    btn: "Explore Insights",
  },
  {
    icon: <FiUserCheck size={32} className="text-white mb-4" />,
    title: "Dedicated AI Talent",
    desc: "Scale your team with expert AI developers to accelerate your projects and innovation.",
    btn: "Hire Experts",
  },
];

export default function AiServicesSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#446f70] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-6 animate-fade-in">
          Unleash Your Potential with AI-Powered Innovation
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 text-center leading-relaxed animate-fade-in delay-100">
          Partner with us to harness over 20 years of AI expertise. From startups to global enterprises, our cutting-edge solutions in computer vision, generative AI, and more drive transformative growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-6 text-left shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1   rounded-t-2xl"></div>
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{service.desc}</p>
              <button className="  text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                {service.btn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}