import { Button } from "@/components/ui/button";

export function MyButton({ children }: { children: React.ReactNode }) {
  return <Button variant="outline">{children}</Button>;
}
