import { useState } from "react";
import { DishCard } from "@/components/DishCard";
import { Categories } from "@/components/Categories";

const categories = [
  { id: "all", name: "Все блюда", icon: "🍽️" },
  { id: "main", name: "Основные блюда", icon: "🍖" },
  { id: "salads", name: "Салаты", icon: "🥗" },
  { id: "soups", name: "Супы", icon: "🥣" },
  { id: "desserts", name: "Десерты", icon: "🍰" },
  { id: "drinks", name: "Напитки", icon: "🥤" },
];

const dishes = [
  {
    id: "1",
    name: "Стейк из говядины",
    description: "Сочный стейк из мраморной говядины с овощами гриль и соусом",
    price: 1290,
    image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef",
    category: "main",
  },
  {
    id: "2",
    name: "Греческий салат",
    description: "Свежие овощи, оливки, сыр фета и оливковое масло",
    price: 450,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    category: "salads",
  },
  // Добавьте больше блюд по необходимости
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredDishes = selectedCategory === "all"
    ? dishes
    : dishes.filter(dish => dish.category === selectedCategory);

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container py-8 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Доставка вкусной еды
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Выберите из нашего разнообразного меню и наслаждайтесь быстрой доставкой
          </p>
        </div>
        
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDishes.map((dish) => (
            <DishCard key={dish.id} {...dish} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;