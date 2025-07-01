import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FiLock,
  FiUsers,
  FiUserPlus,
} from 'react-icons/fi';

export default function PricingLeadershipSection() {
  // Animation variants for pricing cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
    hover: { scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' },
  };

  // Animation variants for leadership cards
  const leaderVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
    hover: { scale: 1.05 },
  };

  // Animation for button
  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <div className="w-full">
      {/* Pricing Section */}
      <div className="bg-gradient-to-r from-[#446f70] to-blue-900 text-white py-20 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold mb-6 tracking-tight sm:text-5xl"
        >
          Choose the Perfect eCommerce Development Model
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-3xl mx-auto mb-12 text-lg text-gray-200 leading-relaxed"
        >
          Partner with us to unlock tailored eCommerce solutions that align with your goals, budget, and vision, ensuring seamless growth and success.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {models.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
              className="bg-white text-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-[#446f70] text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-xl mb-3 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-[#446f70] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300"
        >
          Get Your Free Quote Now
        </motion.button>
      </div>

      {/* Leadership Section */}
      {/* <div className="bg-gradient-to-b from-[#446f70] to-[#1c2526] text-white py-20 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold mb-6 tracking-tight sm:text-5xl"
        >
          Our Visionary Leadership Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-300 mb-12 text-lg max-w-3xl mx-auto leading-relaxed"
        >
          Meet the experts driving innovation and excellence in eCommerce, delivering transformative solutions for global businesses.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={leaderVariants}
              className="flex flex-col items-center"
            >
              <div className="relative w-36 h-36 rounded-full overflow-hidden mb-4 border-4 border-blue-500">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h4 className="font-semibold text-lg text-gray-100">{leader.name}</h4>
              <p className="text-sm text-gray-400">{leader.role}</p>
            </motion.div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

// Updated Pricing Models with Fi Icons
const models = [
  {
    title: 'Fixed Price Model',
    desc: 'Ideal for projects with defined scope and budget, offering transparent pricing and predictable timelines.',
    icon: <FiLock />,
  },
  {
    title: 'Dedicated Team',
    desc: 'Access a committed team of specialists for ongoing support, ensuring flexibility and consistent quality.',
    icon: <FiUsers />,
  },
  {
    title: 'Custom Team Builder',
    desc: 'Build a tailored team of experts to scale your project with full control, transparency, and agility.',
    icon: <FiUserPlus />,
  },
];

// Updated Leadership Members
const leaders = [
  { name: 'Adeel Ishfaq', role: 'Chief Executive Officer', image: '/salesforce/Adeel_Ishfq_-_Sharplogicians_CEO.webp' },
  { name: 'Umair Akhter', role: 'Executive Chairman', image: '/salesforce/Umer_Akhter_Sharplogicians.webp' },
  { name: 'Muhammad Inam', role: 'Head of Global Sales', image: '/salesforce/Umer_Akhter_Sharplogicians_1.webp' },
  { name: 'Zuhoor Uddin', role: 'Chief Growth Strategist', image: '/salesforce/Zahur_Next_JS_Sharplogicians.webp' },
  { name: 'Faisal Arshad', role: 'VP of Technology', image: '/salesforce/Sana_React_JS_Sharplogicians.webp' },
  { name: 'Gareth Potter', role: 'Head of Design & UX', image: '/salesforce/Anis_React_JS_Sharplogicians.webp' },
];