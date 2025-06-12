// components/MagentoProjects.js

const projects = [
  {
    image: "https://ecommerce.folio3.com/wp-content/uploads/2019/07/tjm-portfolio-600x400-new.webp",
    title: "TJM",
    subtitle: "B2B B2C Customization, Dynamics Integration",
    description:
      "Design & implementation of a Magento 2-based web store integrated with the Dynamics AX ERP and Magento customization, helps boost sales & enhances operational efficiency",
  },
  {
    image: "https://ecommerce.folio3.com/wp-content/uploads/2021/11/thumbnail.png",
    title: "PureLife Dental",
    subtitle: "Magento 2 website design and development",
    description:
      "Magento 2 website design for PureLife Dental helped with the seamless customer experience and increased product sales.",
  },
  {
    image: "https://ecommerce.folio3.com/wp-content/uploads/2019/07/maraval-portfolio-600x400-new.webp",
    title: "Maravai Life Science",
    subtitle:
      "Customization, Migration, NetSuite Integration, Website Creation",
    description:
      "Magento 2 Migration from OSCommerce and Magento customization helps enhance eCommerce revenue and streamline shopping experience.",
  },
  {
    image: "https://ecommerce.folio3.com/wp-content/uploads/2019/07/agribeef-600x400-new.webp",
    title: "Agri Beef",
    subtitle: "Customization, Dynamics Integration",
    description:
      "Magento 2 Migration and Magento customization helps streamline ecommerce operations and reduce order turnaround time.",
  },
  {
    image: "https://ecommerce.folio3.com/wp-content/uploads/2022/02/trilink_featured-1.png",
    title: "TriLink",
    subtitle: "Custom B2B Magento Integration",
    description:
      "Nova Bloom enhanced TriLink’s customer satisfaction via Magento integration with group pricing for personalized rates.",
  },
  {
    image: "https://ecommerce.folio3.com/wp-content/uploads/2021/12/Bermuda.png",
    title: "BermudaSands",
    subtitle: "B2B Magento Integration and Customization",
    description:
      "Nova Bloom enabled BermudaSands to improve operational workflows with the help of Magento-based B2B platform integration with NetSuite.",
  },
];

export default function MagentoProjects() {
  return (
    <section className="px-4 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[22px] md:text-2xl font-bold text-gray-900 mb-3">
            Check out our Magento Projects
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-6xl mx-auto">
            Nova Bloom has more than fifteen years of experience in designing and developing B2C and B2B ecommerce solutions and services to companies of different sizes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[180px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900">{project.title}</h3>
                <p className="text-[13px] text-gray-600 font-bold leading-tight mt-1">
                  {project.subtitle}
                </p>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <button className="text-sm font-semibold text-[#446f70] border border-[#446f70] px-6 py-2 rounded hover:bg-orange-500 hover:text-white transition-colors">
            See Our Work
          </button>
        </div>
      </div>
    </section>
  );
}
