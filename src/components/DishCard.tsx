import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DishCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const DishCard = ({ id, name, description, price, image, category }: DishCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (quantity > 0) {
      toast({
        title: "Добавлено в корзину",
        description: `${name} (${quantity} шт.) добавлено в вашу корзину`,
      });
      setQuantity(0);
    }
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(0, prev - 1));
  };

  return (
    <div
      className="relative group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
        <div className="absolute top-2 left-2">
          <span className="px-2 py-1 text-xs font-medium bg-accent rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            {price.toLocaleString("ru-RU")} ₽
          </span>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
              <Button
                onClick={decrementQuantity}
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                disabled={quantity === 0}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-8 text-center">{quantity}</span>
              <Button
                onClick={incrementQuantity}
                variant="ghost"
                size="icon"
                className="h-8 w-8"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <Button
              onClick={handleAddToCart}
              className="bg-primary hover:bg-primary/90 text-white"
              size="sm"
              disabled={quantity === 0}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              В корзину
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};