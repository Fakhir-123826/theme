// import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// export interface CartItem {
//     id: string;
//     name: string;
//     price: number;
//     quantity: number;
//     image: string;
//     color?: string;
//     size?: string;
//     inStock?: boolean;
// }

// interface CartState {
//     items: CartItem[];
//     totalQuantity: number;
//     totalAmount: number;
// }

// const initialState: CartState = {
//     items: [],
//     totalQuantity: 0,
//     totalAmount: 0,
// };

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         // addToCart: (state, action: PayloadAction<CartItem>) => {
//         //     const existingItem = state.items.find(
//         //         item => item.id === action.payload.id && 
//         //                item.size === action.payload.size && 
//         //                item.color === action.payload.color
//         //     );

//         //     if (existingItem) {
//         //         existingItem.quantity += action.payload.quantity;
//         //     } else {
//         //         state.items.push(action.payload);
//         //     }

//         //     // Update totals
//         //     state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
//         //     state.totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
//         // },
//         addToCart: (state, action: PayloadAction<CartItem>) => {
//             const { id, size, color, quantity } = action.payload;

//             // Find existing item with same id, size, color
//             const existingItem = state.items.find(
//                 item => item.id === id &&
//                     item.size === size &&
//                     item.color === color
//             );

//             if (existingItem) {
//                 // ✅ Product exists - increase quantity by 1
//                 existingItem.quantity += quantity;
//             } else {
//                 // ✅ Product doesn't exist - add new entry
//                 state.items.push({ ...action.payload });
//             }

//             // Update totals
//             state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
//             state.totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
//         },



//         removeFromCart: (state, action: PayloadAction<{ id: string; size?: string; color?: string }>) => {
//             state.items = state.items.filter(
//                 item => !(item.id === action.payload.id &&
//                     item.size === action.payload.size &&
//                     item.color === action.payload.color)
//             );

//             state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
//             state.totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
//         },

//         updateQuantity: (state, action: PayloadAction<{ id: string; size?: string; color?: string; quantity: number }>) => {
//             const item = state.items.find(
//                 item => item.id === action.payload.id &&
//                     item.size === action.payload.size &&
//                     item.color === action.payload.color
//             );

//             if (item && action.payload.quantity > 0) {
//                 item.quantity = action.payload.quantity;
//             } else if (item && action.payload.quantity <= 0) {
//                 state.items = state.items.filter(
//                     i => !(i.id === action.payload.id &&
//                         i.size === action.payload.size &&
//                         i.color === action.payload.color)
//                 );
//             }

//             state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
//             state.totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
//         },

//         clearCart: (state) => {
//             state.items = [];
//             state.totalQuantity = 0;
//             state.totalAmount = 0;
//         },
//     },
// });

// export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;


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

// Load cart from localStorage
const loadCartFromLocalStorage = (): CartState => {
    try {
        const serializedCart = localStorage.getItem('luma_cart');
        if (serializedCart === null) {
            return { items: [], totalQuantity: 0, totalAmount: 0 };
        }
        const parsedCart = JSON.parse(serializedCart);
        // Recalculate totals to ensure data consistency
        return {
            items: parsedCart.items || [],
            totalQuantity: parsedCart.items?.reduce((total: number, item: CartItem) => total + item.quantity, 0) || 0,
            totalAmount: parsedCart.items?.reduce((total: number, item: CartItem) => total + (item.price * item.quantity), 0) || 0,
        };
    } catch (err) {
        console.error('Failed to load cart from localStorage:', err);
        return { items: [], totalQuantity: 0, totalAmount: 0 };
    }
};

// Save cart to localStorage
const saveCartToLocalStorage = (state: CartState) => {
    try {
        const serializedCart = JSON.stringify({ items: state.items });
        localStorage.setItem('luma_cart', serializedCart);
    } catch (err) {
        console.error('Failed to save cart to localStorage:', err);
    }
};

// Calculate totals helper
const calculateTotals = (items: CartItem[]) => {
    return {
        totalQuantity: items.reduce((total, item) => total + item.quantity, 0),
        totalAmount: items.reduce((total, item) => total + (item.price * item.quantity), 0),
    };
};

const initialState: CartState = loadCartFromLocalStorage();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const { id, size, color, quantity } = action.payload;

            // Find existing item with same id, size, color
            const existingItem = state.items.find(
                item => item.id === id &&
                    item.size === size &&
                    item.color === color
            );

            if (existingItem) {
                // Product exists - increase quantity
                existingItem.quantity += quantity;
            } else {
                // Product doesn't exist - add new entry
                state.items.push({ ...action.payload });
            }

            // Update totals
            const totals = calculateTotals(state.items);
            state.totalQuantity = totals.totalQuantity;
            state.totalAmount = totals.totalAmount;

            // Save to localStorage
            saveCartToLocalStorage(state);
        },

        removeFromCart: (state, action: PayloadAction<{ id: string; size?: string; color?: string }>) => {
            state.items = state.items.filter(
                item => !(item.id === action.payload.id &&
                    item.size === action.payload.size &&
                    item.color === action.payload.color)
            );

            // Update totals
            const totals = calculateTotals(state.items);
            state.totalQuantity = totals.totalQuantity;
            state.totalAmount = totals.totalAmount;

            // Save to localStorage
            saveCartToLocalStorage(state);
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

            // Update totals
            const totals = calculateTotals(state.items);
            state.totalQuantity = totals.totalQuantity;
            state.totalAmount = totals.totalAmount;

            // Save to localStorage
            saveCartToLocalStorage(state);
        },

        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;

            // Save to localStorage
            saveCartToLocalStorage(state);
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;



