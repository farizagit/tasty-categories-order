import { Button } from "@/components/ui/button";

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface CategoriesProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export const Categories = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoriesProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
      {categories.map((category) => (
        <Button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          variant={selectedCategory === category.id ? "default" : "outline"}
          className="whitespace-nowrap transition-all duration-300"
        >
          <span className="mr-2">{category.icon}</span>
          {category.name}
        </Button>
      ))}
    </div>
  );
};