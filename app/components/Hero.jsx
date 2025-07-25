'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const slides = [
   
  {
  label: 'Nova Bloom',
  title: 'Accelerate Your Digital Growth',
  subtitle: 'Innovative Solutions for a Smarter Tomorrow',
  description: 'Partner with us to transform your ideas into powerful digital products. From strategy to execution, we deliver scalable and impactful software solutions.',
  image: '/Digital Services.jpg',
  ctaPrimary: 'Get Started Today',
  ctaSecondary: 'Explore Our Services',
},

  {
    label: 'Nova Bloom',
    title: 'Scale with Confidence',
    subtitle: 'Empowering Your Digital Future',
    description: 'Your trusted partner for comprehensive digital & software solutions tailored to your business needs.',
    image: '/309.jpg',
    ctaPrimary: 'Discover Solutions',
    ctaSecondary: 'Learn More',
  },
  {
    label: 'Build',
    title: 'Craft Your Vision',
    subtitle: 'Innovate with Precision',
    description: 'Custom digital solutions and innovative software to bring your boldest ideas to life.',
    image: '/AI.jpg',
    ctaPrimary: 'Start Building',
    ctaSecondary: 'View Case Studies',
  },
  {
    label: 'Sell',
    title: 'Boost Your Sales',
    subtitle: 'Maximize Revenue Potential',
    description: 'High-performance ecommerce platforms designed to skyrocket your revenue and customer engagement.',
    image: '/E Comerce.jpg',
    ctaPrimary: 'Explore Ecommerce',
    ctaSecondary: 'See Success Stories',
  },
  {
    label: 'Scale',
    title: 'Grow Smarter',
    subtitle: 'Future-Proof Your Business',
    description: 'Leverage AI, automation, and enterprise-grade solutions to scale efficiently and stay ahead.',
    image: '/ai-technology-microchip-background-digital-transformation-concept.jpg',
    ctaPrimary: 'Scale Now',
    ctaSecondary: 'Get a Demo',
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <section className="relative  h-[80vh]  min-h-[500px] overflow-hidden bg-gray-900">
      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="absolute inset-0 flex items-center justify-center "
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0 ">
            <Image
              src={slides[activeIndex].image}
              alt={slides[activeIndex].label}
              fill
              className="object-cover opacity-70 "
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
          </div>

          {/* Text Content */}
          <div className="relative z-10 text-center max-w-4xl px-4 sm:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl sm:text-5xl font-bold text-white tracking-tight"
            >
              {slides[activeIndex].title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto"
            >
              {slides[activeIndex].description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6 flex justify-center gap-4"
            >
              <Link href='/contact'>
              <button className="bg-[#446f70] text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition duration-300 shadow-md">
                {slides[activeIndex].ctaPrimary}
              </button>
               </Link>
                             <Link href='/portfolio'>

              <button className="bg-[#446f70]  text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 hover:text-white transition duration-300">
                {slides[activeIndex].ctaSecondary}
              </button>
              </Link>
             
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={clsx(
              'w-3 h-3 rounded-full transition-all duration-300',
              activeIndex === index ? 'bg-[#446f70] scale-125' : 'bg-gray-400'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      

</section>
  )}
// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';
// import clsx from 'clsx';

// const slides = [
//   {
//     label: 'Nova Bloom',
//     title: 'Nova Bloom is your trusted,\nfull-service digital &\nsoftware company.',
//     description: 'From infancy to growth, we are your growth partners',
//     image: '/home-slide-1-bg.webp',
//   },
//   {
//     label: 'Build',
//     title: 'Helping you build',
//     description: 'We build cutting-edge custom digital solutions and software products to bring your vision to life.',
//     image: '/help-build-iterate-img-updated.webp',
//   },
//   {
//     label: 'Sell',
//     title: 'Helping you sell',
//     description: 'Empowering your ecommerce with scalable and high-performance platforms to boost sales.',
//     image: '/Bigcommerce-logo-added.webp',
//   },
//   {
//     label: 'Scale',
//     title: 'Helping you scale',
//     description: 'Accelerate growth through automation, AI, and enterprise integrations built for the future.',
//     image: '/unlock-growth-potential-img.webp',
//   },
// ];

// export default function HeroSlider() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="w-full min-h-screen relative overflow-hidden antialiased">
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/60 z-10"></div>

//       {/* First slide full-width image */}
//       {activeIndex === 0 && (
//         <div className="absolute inset-0 z-15">
//           <Image
//             src={slides[0].image}
//             alt={slides[0].label}
//             fill
//             className="w-full h-full object-cover transition-opacity duration-500"
//             priority
//           />
//         </div>
//       )}

//       {/* Main content */}
//       <div
//         className={clsx(
//           'relative z-20 max-w-screen-xl mx-auto px-4 sm:px-10 py-4 xs:py-6 sm:py-0', // Added top padding for small screens
//           'flex flex-col justify-start sm:grid sm:grid-cols-2 sm:items-center min-h-[80vh] sm:min-h-screen' // Changed to justify-start and min-h-[80vh]
//         )}
//       >
//         {/* Left text */}
//         <div
//           className={clsx(
//             'text-white flex flex-col justify-start', // Align text to top
//             activeIndex === 0 ? 'h-full sm:h-auto' : 'h-auto mt-0' // No top margin for slides 2–4
//           )}
//         >
//           <h1
//             className={clsx(
//               'text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight whitespace-pre-line',
//                activeIndex !== 0 ? 'text-gray-800' : 'mt-0 xs:mt-10',
//               'px-4 sm:px-0'
//             )}
//           >
//             {slides[activeIndex].title}
//           </h1>
//           <p
//             className={clsx(
//               'mt-1 xs:mt-2 sm:mt-6 text-sm xs:text-base sm:text-lg font-semibold px-4 sm:px-0',
//               activeIndex !== 0 && 'sm:text-gray-700'
//             )}
//           >
//             {slides[activeIndex].description}
//           </p>
//         </div>

//         {/* Right image (for slides 2–4) */}
//         {activeIndex !== 0 && (
//           <div
//             className={clsx(
//               'relative w-full flex justify-center items-center z-20 mt-2 xs:mt-4 sm:mt-0', // Reduced margin significantly
//               'h-[150px] xs:h-[180px] sm:h-[500px]' // Reduced height for small screens
//             )}
//           >
//             <div className="relative w-full h-full max-w-[80%] xs:max-w-[70%] sm:max-w-full">
//               <Image
//                 src={slides[activeIndex].image}
//                 alt={slides[activeIndex].label}
//                 fill
//                 className={clsx(
//                   'object-contain transition-opacity duration-500',
//                   'px-6 xs:px-8 sm:px-0'
//                 )}
//                 priority
//               />
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Navigation dots with labels */}
//       <div
//         className={clsx(
//           'absolute left-1/2 -translate-x-1/2 z-20 flex flex-wrap justify-center gap-x-2 xs:gap-x-3 sm:gap-x-6 gap-y-2',
//           'bottom-6 xs:bottom-8 sm:bottom-12' // Adjusted to avoid overlap with content
//         )}
//       >
//         {slides.map((slide, index) => (
//           <button
//             key={slide.label}
//             onClick={() => setActiveIndex(index)}
//             className="flex items-center space-x-1 text-xs xs:text-sm sm:text-base"
//             aria-label={`Slide ${index + 1}: ${slide.label}`}
//           >
//             <span
//               className={clsx(
//                 'h-2 w-2 xs:h-2.5 xs:w-2.5 sm:h-3 sm:w-3 rounded-full',
//                 index === 0 && index === activeIndex
//                   ? 'bg-red-600'
//                   : index === 1 && index === activeIndex
//                   ? 'bg-yellow-600'
//                   : index === 2 && index === activeIndex
//                   ? 'bg-[#446f70]'
//                   : index === 3 && index === activeIndex
//                   ? 'bg-green-600'
//                   : 'bg-gray-400'
//               )}
//             />
//             <span
//               className={clsx(
//                 'ml-1 font-extrabold text-xs xs:text-sm sm:text-base',
//                 index === activeIndex ? 'text-black' : 'text-gray-300'
//               )}
//             >
//               {slide.label}
//             </span>
//           </button>
//         ))}
//       </div>

//       {/* Bottom wave graphic */}
//       <div className="absolute bottom-0 w-full z-10">
//         <Image
//           src="/homepage-bg.jpg"
//           alt="Wave Overlay"
//           width={1920}
//           height={200}
//           className="w-full h-auto object-cover object-bottom"
//         />
//       </div>
//     </section>
//   );
// }