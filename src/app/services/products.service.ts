import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

private products: Product[] = [
    {
        name: "Soy Oil 946ml",
        brand: "NUTRIOLI",
        price: 29.90,
        img:"assets/images/aceite.jpg",
        section: "groceries"
    },
    {
        name: "Rice 900gr",
        brand: "VERDE VALLE",
        price: 28.90,
        img:"assets/images/arroz.jpg",
        section: "groceries"
    },
    {
        name: "Beans 750gr",
        brand: "VERDE VALLE",
        price: 48,
        img:"assets/images/frijoles.jpg",
        section: "groceries"
    },
    {
        name: "Tortillas 1kg",
        brand: "",
        price: 12.90,
        img:"assets/images/tortillas.jpg",
        section: "groceries"
    },
    {
        name: "Strawberry 454gr",
        brand: "",
        price: 52.95,
        img:"assets/images/fresas.jpg",
        section: "fruitsAndVegetables"
    },
    {
        name: "Green Chard",
        brand: "",
        price: 6.95,
        img:"assets/images/espinacas.jpg",
        section: "fruitsAndVegetables"
    },
    {
        name: "Bananas 1kg",
        brand: "",
        price: 22.95,
        img:"assets/images/platanos.png",
        section: "fruitsAndVegetables"
    },
    {
        name: "Grapes 1kg",
        brand: "",
        price: 99.95,
        img:"assets/images/uvas.jpg",
        section: "fruitsAndVegetables"
    },
    {
        name: "Cleaning Bleach 2lt",
        brand: "CLORALEX",
        price: 24.90,
        img:"assets/images/cloro.png",
        section: "cleaningSupplies"
    },
    {
        name: "Powder Detergent 1kg",
        brand: "FOCA",
        price: 37.50,
        img:"assets/images/detergente.jpg",
        section: "cleaningSupplies"
    },
    {
        name: "Toilet Paper 16pz",
        brand: "PETALO",
        price: 58.90,
        img:"assets/images/papel-higienico.jpg",
        section: "cleaningSupplies"
    },
    {
        name: "Liquid Fabric Conditioner",
        brand: "SUAVITEL",
        price: 64.90,
        img:"assets/images/suavitel.png",
        section: "cleaningSupplies"
    }
];


    constructor() {
        
    }

    getProducts(){
        return this.products;
    }

}

export interface Product {
    name: string,
    brand: string,
    price: number,
    img: string,
    section: string
}