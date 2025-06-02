export default function Clients() {
  const clients = [
    "/images/client1.png",
    "/images/client2.png",
    // Add more client logos
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted by Leading Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((logo, index) => (
            <img key={index} src={logo} alt={`Client ${index + 1}`} className="h-16 mx-auto" />
          ))}
        </div>
      </div>
    </section>
  );
}