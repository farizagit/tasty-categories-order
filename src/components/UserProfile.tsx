import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, LogIn, LogOut, UserPlus } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const UserProfile = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика аутентификации
    setIsAuthenticated(true);
    toast({
      title: "Успешно!",
      description: showLoginForm ? "Вы вошли в систему" : "Регистрация выполнена успешно",
    });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    toast({
      title: "Выход из системы",
      description: "Вы успешно вышли из системы",
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <User className="h-5 w-5" />
          {isAuthenticated && (
            <span className="absolute -top-1 -right-1 bg-green-500 rounded-full w-2 h-2" />
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px]">
        <SheetHeader>
          <SheetTitle>
            {isAuthenticated ? "Профиль" : (showLoginForm ? "Вход" : "Регистрация")}
          </SheetTitle>
          {!isAuthenticated && (
            <SheetDescription>
              {showLoginForm ? "Войдите в свой аккаунт" : "Создайте новый аккаунт"}
            </SheetDescription>
          )}
        </SheetHeader>
        
        <div className="mt-8 space-y-6">
          {isAuthenticated ? (
            <>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Личные данные</h3>
                <div className="grid gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground">Имя</label>
                    <Input
                      type="text"
                      placeholder="Введите имя"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Email</label>
                    <Input
                      type="email"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
              </div>
              <Button className="w-full" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Выйти
              </Button>
            </>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                {!showLoginForm && (
                  <div>
                    <label className="text-sm text-muted-foreground">Имя</label>
                    <Input
                      type="text"
                      placeholder="Введите имя"
                      required
                    />
                  </div>
                )}
                <div>
                  <label className="text-sm text-muted-foreground">Email</label>
                  <Input
                    type="email"
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Пароль</label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">
                {showLoginForm ? (
                  <>
                    <LogIn className="mr-2 h-4 w-4" />
                    Войти
                  </>
                ) : (
                  <>
                    <UserPlus className="mr-2 h-4 w-4" />
                    Зарегистрироваться
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="w-full"
                onClick={() => setShowLoginForm(!showLoginForm)}
              >
                {showLoginForm ? "Создать аккаунт" : "Уже есть аккаунт?"}
              </Button>
            </form>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};