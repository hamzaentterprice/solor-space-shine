
import { Hero } from '@/components/Hero';
import { ProductCard } from '@/components/ProductCard';
import { toast } from '@/hooks/use-toast';

const Shop = () => {
  const allProducts = [
    {
      title: "Tiger Neo Series",
      description: "Next-generation N-type solar cells with industry-leading efficiency",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    },
    {
      title: "Eagle Series",
      description: "Proven PERC technology with excellent performance",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      title: "Swan Series",
      description: "Bifacial solar panels for maximum energy generation",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop"
    },
    {
      title: "Cheetah Series",
      description: "High power output with advanced half-cut cell technology",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
    },
    {
      title: "Smart Inverter",
      description: "Intelligent power conversion with monitoring capabilities",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop"
    },
    {
      title: "Energy Storage System",
      description: "Complete battery solution for residential applications",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop"
    }
  ];

  const handleViewDetails = (productTitle: string) => {
    toast({
      title: "Product Details",
      description: `More information about ${productTitle} coming soon!`
    });
  };

  return (
    <div>
      <Hero
        title="Our Products"
        subtitle="Explore our complete range of solar solutions"
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=400&fit=crop"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product, index) => (
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
    </div>
  );
};

export default Shop;
