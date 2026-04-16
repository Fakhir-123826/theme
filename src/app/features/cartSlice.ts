import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    color?: string;
    size?: string;
    inStock?: boolean;
}

interface CartState {
    items: CartItem[];
    totalQuantity: number;
    totalAmount: number;
}

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // addToCart: (state, action: PayloadAction<CartItem>) => {
        //     const existingItem = state.items.find(
        //         item => item.id === action.payload.id && 
        //                item.size === action.payload.size && 
        //                item.color === action.payload.color
        //     );

        //     if (existingItem) {
        //         existingItem.quantity += action.payload.quantity;
        //     } else {
        //         state.items.push(action.payload);
        //     }

        //     // Update totals
        //     state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
        //     state.totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        // },
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const { id, size, color, quantity } = action.payload;

            // Find existing item with same id, size, color
            const existingItem = state.items.find(
                item => item.id === id &&
                    item.size === size &&
                    item.color === color
            );

            if (existingItem) {
                // ✅ Product exists - increase quantity by 1
                existingItem.quantity += quantity;
            } else {
                // ✅ Product doesn't exist - add new entry
                state.items.push({ ...action.payload });
            }

            // Update totals
            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
            state.totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        },



        removeFromCart: (state, action: PayloadAction<{ id: string; size?: string; color?: string }>) => {
            state.items = state.items.filter(
                item => !(item.id === action.payload.id &&
                    item.size === action.payload.size &&
                    item.color === action.payload.color)
            );

            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
            state.totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        },

        updateQuantity: (state, action: PayloadAction<{ id: string; size?: string; color?: string; quantity: number }>) => {
            const item = state.items.find(
                item => item.id === action.payload.id &&
                    item.size === action.payload.size &&
                    item.color === action.payload.color
            );

            if (item && action.payload.quantity > 0) {
                item.quantity = action.payload.quantity;
            } else if (item && action.payload.quantity <= 0) {
                state.items = state.items.filter(
                    i => !(i.id === action.payload.id &&
                        i.size === action.payload.size &&
                        i.color === action.payload.color)
                );
            }

            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
            state.totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        },

        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;