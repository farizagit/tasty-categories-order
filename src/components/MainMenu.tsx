import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Home, Info, Truck, Phone, Book, Gift, Star } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Главная", href: "/", icon: Home },
  { name: "О нас", href: "/about", icon: Info },
  { name: "Доставка", href: "/delivery", icon: Truck },
  { name: "Контакты", href: "/contacts", icon: Phone },
  { name: "Акции", href: "/promotions", icon: Gift },
  { name: "Бронирование", href: "/booking", icon: Book },
  { name: "Избранное", href: "/favorites", icon: Star },
];

export const MainMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px]">
        <SheetHeader>
          <SheetTitle>Меню</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-4 mt-8">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} to={item.href}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-lg"
                >
                  <Icon className="mr-2 h-5 w-5" />
                  {item.name}
                </Button>
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};