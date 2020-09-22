export const ADD = "ADD"
export const MINUS = "MINUS"

export const addCart = () => {
    return {
        type: ADD,
    }
}


export const minusCart = () => {
    return {
        type: MINUS,
    }
}