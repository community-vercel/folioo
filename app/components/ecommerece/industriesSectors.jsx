import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsFillTabletLandscapeFill } from 'react-icons/bs';
import { FaChessBishop } from 'react-icons/fa';
import {
  FiShoppingBag,
  FiShoppingCart,

  FiPackage,
  FiHome,
  FiTool,
  FiHotel,
  FiHeart,
  FiRadio,
  FiDollarSign,
  FiBriefcase,
  FiTruck,
} from 'react-icons/fi';

export default function IndustriesSectors() {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
    hover: { scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' },
  };

  // Animation for the button
  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  // Updated industries list with Fi icons
  const industries = [
    { name: 'Fashion & Apparel', icon: <FiShoppingBag />, bg: true },
    { name: 'Food & Grocery', icon: <FiShoppingCart />, bg: false },
    { name: 'Retail', icon: <FaChessBishop />, bg: false },
    { name: 'FMCG', icon: <FiPackage />, bg: false },
    { name: 'Real Estate', icon: <FiHome />, bg: true },
    { name: 'Construction', icon: <FiTool />, bg: true },
    { name: 'Hotel', icon: <BsFillTabletLandscapeFill />, bg: false },
    { name: 'Healthcare', icon: <FiHeart />, bg: true },
    { name: 'Telecom', icon: <FiRadio />, bg: true },
    { name: 'Fintech', icon: <FiDollarSign />, bg: false },
    { name: 'Manufacturing', icon: <FiBriefcase />, bg: false },
    { name: 'Automotive', icon: <FiTruck />, bg: false },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight sm:text-5xl"
        >
          Driving eCommerce Growth Across Industries & Sectors
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          We specialize in eCommerce development services, leveraging our extensive experience across various industries to create customized solutions that drive success for our clients.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {industries.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
              className={`p-8 rounded-xl border ${
                item.bg ? 'bg-gray-50' : 'bg-white'
              } flex flex-col items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer`}
            >
              <div className="text-[#446f70] text-4xl mb-4">{item.icon}</div>
              <div className="font-semibold text-lg text-gray-800">{item.name}</div>
            </motion.div>
          ))}
        </div>

        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-gradient-to-r from-[#446f70] to-[#446f70] hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Discuss your eCommerce needs"
        >
          <Link href='/contact'>
          Discuss Your Need
          </Link>
        </motion.button>
      </div>
    </div>
  );
}