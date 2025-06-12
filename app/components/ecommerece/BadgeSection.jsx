// components/BadgeSection.js
import Image from 'next/image';

const badges = [
  {
    title: "Adobe Certified Expert–",
    subtitle: "Adobe Commerce Developer",
    label: "EXPERT",
    img: "/logos/adobe-expert.png", // Save extracted image and place in /public
  },
  {
    title: "Adobe Certified Master –",
    subtitle: "Adobe Commerce Architect",
    label: "MASTER",
    img: "/logos/Adobe_Certified_Master_Experience_Cloud_products_Digital_Badge-300x300.png",
  },
  {
    title: "Adobe Certified Expert–",
    subtitle: "Adobe Commerce Business Practitioner",
    label: "EXPERT",
    img: "/logos/adobe-expert.png",
  },
];

export default function BadgeSection() {
  return (
    <div className="text-center py-12 ">
                      <div className="max-w-6xl mx-auto">

      <div className="flex flex-col md:flex-row justify-center gap-12">
        {badges.map((badge, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image src={badge.img} alt={badge.label} width={100} height={100} />
            <p className="text-lg  font-bold">{badge.title}</p>
            <p className="text-sm max-w-40 font-bold">{badge.subtitle}</p>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <h1 className="text-3xl font-bold mb-4">
          One Stop Solution For All Magento Development Requirements
        </h1>
        <p className="max-w-6xl text-xl mx-auto text-gray-600">
          Nova Bloom provides a wide range of Magento 2 development services tailored to meet the
          distinctive demands of every business. Our team excels in crafting bespoke eCommerce
          solutions that elevate your Magento’s store capabilities, performance, and dependability.
        </p>
      </div>
      </div>
    </div>
  );
}
