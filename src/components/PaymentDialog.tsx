import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

export const PaymentDialog = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <CreditCard className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px]">
        <SheetHeader>
          <SheetTitle>Способ оплаты</SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="border rounded-lg p-4 cursor-pointer hover:bg-accent">
              <div className="flex items-center space-x-3">
                <div className="h-5 w-5 rounded-full border-2 border-primary flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h3 className="font-medium">Банковская карта</h3>
                  <p className="text-sm text-muted-foreground">Visa, Mastercard, МИР</p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-4 cursor-pointer hover:bg-accent">
              <div className="flex items-center space-x-3">
                <div className="h-5 w-5 rounded-full border-2 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-medium">Наличными</h3>
                  <p className="text-sm text-muted-foreground">При получении заказа</p>
                </div>
              </div>
            </div>
          </div>
          <Button className="w-full">Сохранить</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};