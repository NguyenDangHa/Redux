import * as types from './actionTypes';

export const deleteProduct=(id)=>{
    return {
        type: types.deleteData,
        id        
    }
}
export const addProducts=(product)=>{
    return {
        type: types.addProduct,
        product                
    }
}

export const showDatas=(profiles)=>{
    return {
        type: types.showData,
        profiles               
    }
}
export const deleteProfile=()=>{
    return {
        type: types.deleteProfile      
    }
}