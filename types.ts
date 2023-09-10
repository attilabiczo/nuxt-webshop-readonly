export interface ProductType {
    availableAmount: number,
    id: string,
    img: string,
    minOrderAmount: number,
    name: string,
    price: number
}

export interface CartItemType {
    id: string,
    price: number,
    amount: number,
    img: string,
    name: string
}