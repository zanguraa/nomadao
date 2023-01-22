import { MouseEventHandler } from "react";

export interface ItemProps {
    title: string | null;
    description: string;
    price: number;
    previusPrice: number;
    quantity: number;
    setQuantity: any;
    setCartItems: any;
    cartItems: CartItem[]
}

export interface CartItem {
    title: string;
    quantity: number;
    price: number;
    previusPrice: number;
}