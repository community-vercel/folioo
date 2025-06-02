import Image from "next/image";

const categories = [
  {
    title: "Enterprise Organizations",
    description: "Looking for the right partner to augment your teams.",
  },
  {
    title: "Small & Medium Enterprise",
    description: "Looking for the right partner to scale and grow your business.",
  },
  {
    title: "Startups",
    description: "Looking for the right tech partner to help you build.",
  },
];

export default function WhoWeWorkWith() {
  const backgroundImage = "/Enterprise-CTA-bg-img-4-2.jpg"; // Single image for the background

  return (
    <section className="w-full">
      <h1 className="text-[42px] ml-40 font-bold text-black px-10 mb-4">
        Who we work with
      </h1>
      <div className="relative grid grid-cols-1 md:grid-cols-3 h-[380px] md:h-[420px]">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover"
        />
        {categories.map((item, idx) => (
          <div
            key={idx}
            className="relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white px-4 text-center z-10">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm mb-4">{item.description}</p>
              <button className="border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
                Discover More
              </button>
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-medium group-hover:opacity-0 transition-opacity duration-300 z-10">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}