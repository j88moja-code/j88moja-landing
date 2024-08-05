"use client";

import Image from "next/image";
import Balancer from "react-wrap-balancer";

// UI Components
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section, Container } from "@/components/craft";

// Assets
import CMOOSLogo from "@/public/products/logo-no-background.png";
import Link from "next/link";
import { HeartHandshake } from "lucide-react";

type Product = {
  id: number;
  name: string;
  description: string;
  image: any;
  buttonLink: string;
  buttonText: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "CMOOS",
    description:
      "A state-of-the-art system designed to centralise and streamline data capturing, analysis, and reporting for operations. CMOOS provides a comprehensive view of operational data, enabling efficient and effective decision-making.",
    image: CMOOSLogo,
    buttonLink: "/products/cmoos",
    buttonText: "Learn More",
  },
];

export default function Products() {
  return (
    <Section className="border-b dark:border-b-0" id="products">
      <Container>
        <h3 className="text-lg font-semibold mb-2">
          <Balancer>Our Product</Balancer>
        </h3>
        <h4 className="text-2xl font-light opacity-70">
          <Balancer>
            Explore our product that can be tailored to meet your unique needs.
          </Balancer>
        </h4>
        <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
          {products.map((product, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold opacity-70 md:text-3xl flex items-center gap-2">
                  <HeartHandshake
                    size={24}
                    className="text-accent-foreground"
                  />
                  {product.name}&#8482;
                </CardTitle>
                <CardDescription className="text-gray-700 mb-4 dark:text-gray-400">
                  <Balancer>{product.description}</Balancer>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-48 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant="default">
                  <Link href={product.buttonLink}>{product.buttonText}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
