export const addCart = (sequence) => {
    return {
        type: "ADDITEM",
        payload: sequence
    };
};
export const deleteProduct = (sequence) => {
    return {
        type: "DELITEM",
        payload: sequence
    };
};