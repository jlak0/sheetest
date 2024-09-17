"use client";

import { SheetDemo } from "./sheetdemo";
import { MyButton } from "./my_button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SheetDemo>
        <MyButton>Can't open</MyButton>
      </SheetDemo>
      <SheetDemo>
        <Button variant="outline">Can open</Button>
      </SheetDemo>
    </div>
  );
}
