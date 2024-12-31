import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
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
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Добавлено в корзину",
      description: `${name} добавлено в вашу корзину`,
    });
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
          <Button
            onClick={handleAddToCart}
            className="bg-primary hover:bg-primary/90 text-white"
            size="sm"
          >
            <Plus className="w-4 h-4 mr-2" />
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};