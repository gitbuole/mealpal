import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grow flex flex-col items-center justify-evenly">
      <section className="space-y-6">
        <div className="container flex flex-col items-center gap-8 text-center">
          <Badge variant="secondary">Meal Planning Made Simple</Badge>
          
          <h1 className="max-w-4xl font-heading font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter">
            Plan your meals, simplify your life.
          </h1>
          
          <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Create weekly meal plans, generate shopping lists, and discover new recipes - all in one place.
          </p>

          <div className="flex gap-4">
            <Link href="/login">
              <Button size="lg">Get Started Free</Button>
            </Link>
            <Link href="#features">
              <Button variant="outline" size="lg">Learn More</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <Card>
              <CardHeader>
                <CardTitle>Plan Meals</CardTitle>
                <CardDescription>
                  Create weekly or monthly meal plans with ease
                </CardDescription>
              </CardHeader>
              <CardContent>
                Drag and drop meals into your calendar, customize portions, and plan ahead for special occasions.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Shopping Lists</CardTitle>
                <CardDescription>
                  Automatic grocery lists from your meal plans
                </CardDescription>
              </CardHeader>
              <CardContent>
                Get organized shopping lists based on your planned meals, sorted by category and quantity.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recipe Collection</CardTitle>
                <CardDescription>
                  Save and organize your favorite recipes
                </CardDescription>
              </CardHeader>
              <CardContent>
                Build your personal recipe collection, add notes, and share with family and friends.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
