import { MouseEventHandler } from "react";

export interface ItemProps {
    title: string | null;
    description: string;
    price: number;
    previusPrice: number;
    setCartItems: any;
    cartItems: CartItem[]
    image: string;
}

export interface CartItem {
    title: string;
    quantity: number;
    price: number;
    previusPrice: number;
    image: string;
}