
import { Hero } from '@/components/Hero';
import { ProductCard } from '@/components/ProductCard';
import { TipsSection } from '@/components/TipsSection';
import { toast } from '@/hooks/use-toast';

const Home = () => {
  const products = [
    {
      title: "Solar Panel Pro",
      description: "High-efficiency solar panels with 25-year warranty",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    },
    {
      title: "Solar Inverter",
      description: "Advanced inverter technology for maximum energy conversion",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      title: "Solar Battery Storage",
      description: "Store your solar energy for use anytime, day or night",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop"
    }
  ];

  const tips = [
    "Position panels facing south for optimal sun exposure",
    "Keep panels clean for maximum efficiency",
    "Monitor energy production regularly",
    "Consider battery storage for energy independence",
    "Schedule professional maintenance annually",
    "Check for shading issues that reduce output"
  ];

  const handleShopNow = () => {
    toast({
      title: "Coming Soon",
      description: "Our online shop will be available soon!"
    });
  };

  const handleViewDetails = (productTitle: string) => {
    toast({
      title: "Product Details",
      description: `More information about ${productTitle} coming soon!`
    });
  };

  return (
    <div>
      <Hero
        title="Illuminate Your Space"
        subtitle="Harness the power of the sun with our premium solar solutions"
        buttonText="Shop Now"
        onButtonClick={handleShopNow}
      />

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600">Discover our premium solar solutions</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
                onViewDetails={() => handleViewDetails(product.title)}
              />
            ))}
          </div>
        </div>
      </section>

      <TipsSection
        title="Solar Energy Tips"
        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=300&fit=crop"
        tips={tips}
      />
    </div>
  );
};

export default Home;
