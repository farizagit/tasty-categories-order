import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export const UserProfile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <User className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px]">
        <SheetHeader>
          <SheetTitle>Профиль</SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Личные данные</h3>
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-muted-foreground">Имя</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Введите имя"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Телефон</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="email@example.com"
                />
              </div>
            </div>
          </div>
          <Button className="w-full">Сохранить</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};