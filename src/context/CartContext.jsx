import React, {createContext,  useReducer, useEffect, useContext} from 'react';

const initialState = {
    items: [],
    total: 0,
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            {
                // verificar se o item existe
                const existingItemIndex = state.items.findIndex(
                    item => item.id === action.payload.id
                )
                // se sim, adicionar ou incrementar quantidade
                if (existingItemIndex > -1){
                    const updatedItems = [...state.items];
                    const existingItem = updatedItems[existingItemIndex];
                    const updatedItem = {
                        ...existingItem,
                        quantity: existingItem.quantity + 1 // incremento
                    };
                    updatedItems[existingItemIndex] = updatedItem;
                    return {
                        ...state,
                        items: updatedItems,
                        total: state.total + action.payload.price,
                    };
                } else{
                    // adicionar novo item na lista de compras
                    const newItem = { ...action.payload, quantity: 1};
                    return {
                        ...state,
                        items: [...state.items, newItem],
                        total: state.total + newItem.price
                    };
                }
            }
        case 'REMOVE_ITEM':
            {
                // verificar se existe o item na lista de compras
                const existingItemIndex = state.items.findIndex(
                    item => item.id === action.payload.id
                )
                // não existe, devolve a lista atual
                if (existingItemIndex === -1){
                    return state;
                }
                // existe 1 item, remove o item, devolve lista sem o produto selecionado
                const existingItem = state.items[existingItemIndex];
                const updatedTotal = state.total - existingItem.price;

                if (existingItem.quantity === 1){
                    const updatedItems = state.items.filter(
                        item => item.id !== action.payload.id
                    );
                    return {
                        ...state,
                        items: updatedItems,
                        total: updatedTotal,
                    };
                } else {
                    // existe mais do item, decrementa quantidade e deduz do valor total
                    const updatedItems = [...state.items]
                    const updatedItem = {
                        ...existingItem,
                        quantity: existingItem.quantity - 1,
                    };
                    updatedItems[existingItemIndex] = updatedItem;
                    return {
                        ...state,
                        items: updatedItems,
                        total: updatedTotal,
                    };
                }
            }
        case 'CLEAR_CART':
            return initialState; 
        default:
            return state;
    }
};

export const CartContext = createContext(initialState);

export const CartProvider = ({children}) => {
    // localStorage 
    const storedCart = JSON.parse(localStorage.getItem('cart')) || initialState;
    const [cartState, dispatch] = useReducer(cartReducer, storedCart);

    useEffect(()=>{

        localStorage.setItem('cart', JSON.stringify(cartState))
    }, [cartState]);

    return (
        <CartContext.Provider value={{cartState, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}