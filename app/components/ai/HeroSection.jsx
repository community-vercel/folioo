import Image from 'next/image';

export default function HeroSection() {
  const logos = [
    { src: '/logos/kingdom-gray_1.webp', alt: 'Kinship' },
    { src: '/logos/techgrow-gray_1.webp', alt: 'LUDEX' },
    { src: '/logos/teamtables-gray_1.webp', alt: 'University of New Mexico' },
    { src: '/logos/symbphony-gray_1.webp', alt: 'Opsis' },
    { src: '/logos/genucel-gray_1.webp', alt: 'Romwola' },
    { src: '/logos/shoot-gray_1.webp', alt: 'Schlumberger' },
    { src: '/logos/satechi-gray_1.webp', alt: 'Square Trade' },
    
  ];

  const stats = [
    { value: '200+', label: 'AI Solutions Delivered' },
    { value: '50+', label: 'Global Clients Empowered' },
    { value: '40+', label: 'AI & ML Experts' },
    { value: '20+', label: 'Years of Innovation' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1e3b] to-[#2a4b8c] text-white py-20 px-6 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="max-w-lg space-y-8">
            <h4 className="text-base uppercase text-cyan-300 font-semibold tracking-widest animate-fade-in">
              Leading AI Innovation
            </h4>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 animate-slide-in">
              Empowering the Future with Cutting-Edge AI
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed animate-fade-in delay-100">
              Transform your business with bespoke AI solutions tailored for startups and global enterprises.
            </p>
            <div className="flex space-x-6 animate-fade-in delay-200">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Explore AI Solutions
              </button>
              <button className="bg-transparent border-2 border-cyan-300 text-cyan-300 font-semibold px-8 py-3 rounded-full hover:bg-cyan-300 hover:text-white transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
          <div className="mt-12 md:mt-0 md:ml-12 animate-slide-in delay-300">
            <Image
              src="/salesforce/ai.gif"
              alt="AI Innovation"
              width={500}
              height={350}
              className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section with Logo Slider */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 animate-fade-in">
            Trusted by Industry Leaders
          </h2>

          {/* Logo Slider */}
          <div className="relative overflow-hidden py-8">
            <div className="flex animate-slide-logos">
              {[...logos, ...logos].map((logo, index) => ( // Duplicate logos for seamless looping
                <div key={index} className="flex-shrink-0 w-40 h-16 mx-4 relative">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 text-gray-800">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in delay-100"
              >
                <p className="text-3xl font-extrabold text-cyan-600">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-gray-600 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}