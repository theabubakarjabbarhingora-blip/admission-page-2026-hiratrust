import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import heroImage from "@/assets/hira-promo-2.webp";
import aboutImage from "@/assets/about-image.png";

const GallerySection = () => {
  const images = [
    { src: gallery1, alt: "Campus Life", title: "Campus Life" },
    { src: gallery2, alt: "Student Activities", title: "Student Activities" },
    { src: heroImage, alt: "Modern Facilities", title: "Modern Facilities" },
    { src: aboutImage, alt: "Learning Environment", title: "Learning Environment" },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Campus Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">
            Experience <span className="text-secondary">Campus Life</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Take a visual tour of our modern campus, facilities, and vibrant student community.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-white font-semibold text-lg">{image.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
