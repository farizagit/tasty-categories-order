import { useState } from "react";
import { DishCard } from "@/components/DishCard";
import { Categories } from "@/components/Categories";
import { MainMenu } from "@/components/MainMenu";
import { UserProfile } from "@/components/UserProfile";
import { ShoppingCartDialog } from "@/components/ShoppingCartDialog";
import { PaymentDialog } from "@/components/PaymentDialog";

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
  {
    id: "3",
    name: "Борщ",
    description: "Традиционный борщ со сметаной и чесночными пампушками",
    price: 380,
    image: "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e",
    category: "soups",
  },
  {
    id: "4",
    name: "Тирамису",
    description: "Классический итальянский десерт с кофейным вкусом",
    price: 420,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
    category: "desserts",
  },
  {
    id: "5",
    name: "Свежевыжатый апельсиновый сок",
    description: "Натуральный сок из спелых апельсинов",
    price: 250,
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423",
    category: "drinks",
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredDishes = selectedCategory === "all"
    ? dishes
    : dishes.filter(dish => dish.category === selectedCategory);

  return (
    <div className="min-h-screen bg-muted/30">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <MainMenu />
              <h1 className="text-2xl font-bold text-primary">
                Tasty<span className="text-muted-foreground">Food</span>
              </h1>
            </div>
            
            <div className="flex items-center space-x-2">
              <UserProfile />
              <ShoppingCartDialog />
              <PaymentDialog />
            </div>
          </div>
        </div>
      </nav>

      <div className="container py-8 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">
            Доставка вкусной еды
          </h2>
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
