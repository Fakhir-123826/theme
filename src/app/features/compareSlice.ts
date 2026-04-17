// import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// export interface CompareItem {
//     id: string;
//     productId: string;
//     name: string;
//     price: number;
//     image: string;
//     sku?: string;
//     description?: string;
//     features?: string[];
//     rating?: number;
//     reviewCount?: number;
//     color?: string;
//     size?: string;
//     addedAt: string;
// }

// interface CompareState {
//     items: CompareItem[];
//     totalItems: number;
// }

// // Load from localStorage
// const loadState = (): CompareState => {
//     try {
//         const serializedState = localStorage.getItem('luma_compare');
//         if (serializedState === null) {
//             return { items: [], totalItems: 0 };
//         }
//         return JSON.parse(serializedState);
//     } catch (err) {
//         console.error('Failed to load compare from localStorage:', err);
//         return { items: [], totalItems: 0 };
//     }
// };

// // Save to localStorage
// const saveState = (state: CompareState) => {
//     try {
//         const serializedState = JSON.stringify({ items: state.items, totalItems: state.items.length });
//         localStorage.setItem('luma_compare', serializedState);
//     } catch (err) {
//         console.error('Failed to save compare to localStorage:', err);
//     }
// };

// const initialState: CompareState = loadState();

// const compareSlice = createSlice({
//     name: 'compare',
//     initialState,
//     reducers: {
//         addToCompare: (state, action: PayloadAction<CompareItem>) => {
//             // Check if already in compare list
//             const exists = state.items.some(item => item.id === action.payload.id);

//             // Max 4 items to compare
//             if (!exists && state.items.length < 4) {
//                 state.items.push(action.payload);
//                 state.totalItems = state.items.length;
//                 saveState(state);
//                 console.log('✅ Added to compare:', action.payload.name);
//             } else if (state.items.length >= 4) {
//                 console.log('⚠️ Max 4 items can be compared');
//                 alert('You can compare up to 4 products only!');
//             } else if (exists) {
//                 console.log('⚠️ Item already in compare list');
//                 alert('This item is already in your compare list!');
//             }
//         },

//         removeFromCompare: (state, action: PayloadAction<{ id: string }>) => {
//             state.items = state.items.filter(item => item.id !== action.payload.id);
//             state.totalItems = state.items.length;
//             saveState(state);
//             console.log('🗑️ Removed from compare');
//         },

//         clearCompare: (state) => {
//             state.items = [];
//             state.totalItems = 0;
//             saveState(state);
//             console.log('🧹 Compare list cleared');
//         },
//     },
// });

// export const { addToCompare, removeFromCompare, clearCompare } = compareSlice.actions;
// export default compareSlice.reducer;



import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface CompareItem {
    id: string;
    productId: string;
    name: string;
    price: number;
    image: string;
    sku?: string;
    description?: string;
    features?: string[];
    rating?: number;
    reviewCount?: number;
    color?: string;
    size?: string;
    addedAt: string;
}

interface CompareState {
    items: CompareItem[];
    totalItems: number;
}

// Helper to show custom alert
const showCustomAlert = (message: string, type: 'info' | 'warning' | 'error' | 'success' = 'info') => {
    const event = new CustomEvent('showAlert', { detail: { message, type, duration: 3000 } });
    window.dispatchEvent(event);
};

// Load from localStorage
const loadState = (): CompareState => {
    try {
        const serializedState = localStorage.getItem('luma_compare');
        if (serializedState === null) {
            return { items: [], totalItems: 0 };
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error('Failed to load compare from localStorage:', err);
        return { items: [], totalItems: 0 };
    }
};

// Save to localStorage
const saveState = (state: CompareState) => {
    try {
        const serializedState = JSON.stringify({ items: state.items, totalItems: state.items.length });
        localStorage.setItem('luma_compare', serializedState);
    } catch (err) {
        console.error('Failed to save compare to localStorage:', err);
    }
};

const initialState: CompareState = loadState();

const compareSlice = createSlice({
    name: 'compare',
    initialState,
    reducers: {
        addToCompare: (state, action: PayloadAction<CompareItem>) => {
            // Check if already in compare list
            const exists = state.items.some(item => item.id === action.payload.id);

            // Max 4 items to compare
            if (!exists && state.items.length < 4) {
                state.items.push(action.payload);
                state.totalItems = state.items.length;
                saveState(state);
                console.log('✅ Added to compare:', action.payload.name);
                showCustomAlert(`${action.payload.name} added to compare!`, 'success');
            } else if (state.items.length >= 4) {
                console.log('⚠️ Max 4 items can be compared');
                showCustomAlert('You can compare up to 4 products only!', 'warning');
            } else if (exists) {
                console.log('⚠️ Item already in compare list');
                showCustomAlert(`${action.payload.name} is already in your compare list!`, 'info');
            }
        },

        removeFromCompare: (state, action: PayloadAction<{ id: string }>) => {
            const removedItem = state.items.find(item => item.id === action.payload.id);
            state.items = state.items.filter(item => item.id !== action.payload.id);
            state.totalItems = state.items.length;
            saveState(state);
            console.log('🗑️ Removed from compare');
            if (removedItem) {
                showCustomAlert(`${removedItem.name} removed from compare`, 'info');
            }
        },

        clearCompare: (state) => {
            state.items = [];
            state.totalItems = 0;
            saveState(state);
            console.log('🧹 Compare list cleared');
            showCustomAlert('Compare list cleared!', 'success');
        },
    },
});

export const { addToCompare, removeFromCompare, clearCompare } = compareSlice.actions;
export default compareSlice.reducer;