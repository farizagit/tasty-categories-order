import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const menuItems = [
  { name: "Главная", href: "/" },
  { name: "О нас", href: "/about" },
  { name: "Доставка", href: "/delivery" },
  { name: "Контакты", href: "/contacts" },
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
          {menuItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className="justify-start text-lg"
              onClick={() => window.location.href = item.href}
            >
              {item.name}
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};