import React, { useEffect, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Breadcrumb } from "./ui/breadcrumb.jsx";
import { Badge } from "./ui/badge.jsx";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardImage,
} from "./ui/card.jsx";
import axios from "axios";
import { Decimal128 } from "mongodb";
import { cn } from "../lib/utils";
import Link from "next/link.js";
import { useRouter } from "next/router";
import { Button } from "./ui/button.jsx";

//import { Icons } from "@/components/icons";
//import Link from "next/link";
interface Apartment {
  _id: string;
  name: string;
  description: string;
  image: string;
  location: string;
  price: Decimal128;
  compound: boolean;
  developer: string;
}
type CardProps = React.ComponentProps<typeof Card>;
interface ApartmentsDetailsProps extends CardProps {
  id: string;
  goBack: () => void;
}

const ApartmentsDetails = ({
  id,
  goBack,
  className,
  ...props
}: ApartmentsDetailsProps) => {
  // const router = useRouter();
  // const { id } = router.query;

  const [item, setItem] = useState<Apartment | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post<Apartment>(
          `http://localhost:3100/apartments/apartmentDetails?id=${id}`
        );
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
    return () => {
      setItem(null);
    };
  }, [id]);

  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Appartments Menu
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Just a place holder for looks
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Apartments</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Appartments categories
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Just a place holder for looks
                    </p>
                  </a>
                </NavigationMenuLink>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Add new apartment
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Breadcrumb />
      <Button onClick={goBack} style={{ marginLeft: "15%" }}>
        Go Back
      </Button>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {item ? (
          <Card
            key={item._id}
            //onClick={() => handleCardClick(item._id)}
            className={cn("w-[880px]", className)}
            {...props}
            style={{ margin: "20px" }}
          >
            <CardImage src={item.image} />
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.location}</CardDescription>
            </CardHeader>
            <CardContent>
              {item.description}
              <br />
              <br />
              {
                //@ts-ignore
                item.compound === "true" && <Badge>Compound</Badge>
              }
              <br />
              {item.developer}
            </CardContent>
            <CardFooter style={{ marginBottom: "15px" }}>
              {
                //@ts-ignore
                item.price.$numberDecimal
              }
            </CardFooter>
          </Card>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default ApartmentsDetails;
