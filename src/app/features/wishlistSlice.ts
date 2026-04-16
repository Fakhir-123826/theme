// app/features/wishlistSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface WishlistItem {
    id: string;           // This is the unique ID for the wishlist item
    productId: string;    // This is the product ID
    name: string;
    price: number;
    image: string;
    color?: string;
    size?: string;
    inStock?: boolean;
    addedAt: string;
}

interface WishlistState {
    items: WishlistItem[];
    totalItems: number;
}

// Load initial state from localStorage
const loadState = (): WishlistState => {
    try {
        const serializedState = localStorage.getItem('luma_wishlist');
        if (serializedState === null) {
            return { items: [], totalItems: 0 };
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error('Failed to load wishlist from localStorage:', err);
        return { items: [], totalItems: 0 };
    }
};

// Save state to localStorage
const saveState = (state: WishlistState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('luma_wishlist', serializedState);
    } catch (err) {
        console.error('Failed to save wishlist to localStorage:', err);
    }
};

const initialState: WishlistState = loadState();

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
            // Check if item already exists (same product, size, color)
            const exists = state.items.some(
                item => item.id === action.payload.id && 
                       item.size === action.payload.size && 
                       item.color === action.payload.color
            );
            
            if (!exists) {
                state.items.push(action.payload);
                state.totalItems = state.items.length;
                saveState(state);
                console.log('✅ Added to wishlist:', action.payload.name);
            } else {
                console.log('⚠️ Item already in wishlist:', action.payload.name);
            }
        },
        
        removeFromWishlist: (state, action: PayloadAction<{ id: string; size?: string; color?: string }>) => {
            const beforeCount = state.items.length;
            state.items = state.items.filter(
                item => !(item.id === action.payload.id && 
                         item.size === action.payload.size && 
                         item.color === action.payload.color)
            );
            state.totalItems = state.items.length;
            
            if (beforeCount !== state.items.length) {
                saveState(state);
                console.log('🗑️ Removed from wishlist');
            }
        },
        
        clearWishlist: (state) => {
            state.items = [];
            state.totalItems = 0;
            saveState(state);
            console.log('🧹 Wishlist cleared');
        },
    },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;