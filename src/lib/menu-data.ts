export type Burger = {
  id: string;
  name: string;
  tag?: string;
  ingredients: string;
  price: number;
  image: string;
};

export const BURGERS: Burger[] = [
  {
    id: "callejera",
    name: "La Callejera",
    tag: "La firma",
    ingredients: "Doble smash, cheddar curado, cebolla caramelizada, salsa de la casa",
    price: 8.9,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "doble-problema",
    name: "Doble Problema",
    tag: "Para valientes",
    ingredients: "Doble carne, doble cheddar, bacon crujiente, pepinillos, mostaza ahumada",
    price: 10.5,
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "picante-rebelde",
    name: "La Picante Rebelde",
    tag: "Con actitud",
    ingredients: "Smash, jalapeños, queso pepper jack, salsa chipotle, cebolla crujiente",
    price: 9.4,
    image:
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "clasica-actitud",
    name: "La Clásica Con Actitud",
    ingredients: "Smash, cheddar, lechuga, tomate, cebolla roja, salsa smash",
    price: 7.9,
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "queso-humo",
    name: "Queso y Humo",
    tag: "Sale poco",
    ingredients: "Smash, queso ahumado fundido, bacon, BBQ casera, crujiente de cebolla",
    price: 10.9,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "veggie-gamberra",
    name: "La Veggie Gamberra",
    tag: "Sin carne",
    ingredients: "Smash de garbanzo y remolacha, cheddar, rúcula, salsa de la casa",
    price: 8.5,
    image:
      "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=80",
  },
];

export type SideItem = {
  id: string;
  name: string;
  price: number;
};

export const SIDES: SideItem[] = [
  { id: "patatas-smash", name: "Patatas smash con especias", price: 3.9 },
  { id: "patatas-queso", name: "Patatas con queso y bacon", price: 5.5 },
  { id: "batido-oreo", name: "Batido de Oreo", price: 4.5 },
  { id: "batido-fresa", name: "Batido de fresa natural", price: 4.5 },
  { id: "refresco", name: "Refresco 33cl", price: 2.5 },
];
