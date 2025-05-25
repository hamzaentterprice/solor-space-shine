
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  onViewDetails: () => void;
}

export const ProductCard = ({ title, description, image, onViewDetails }: ProductCardProps) => {
  return (
    <Card className="h-full transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          variant="outline" 
          className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors"
          onClick={onViewDetails}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};
