export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"

export const addCounter = () => {
    return {
        type: INCREMENT,
    }
}


export const minusCounter = () => {
    return {
        type: DECREMENT,
    }
}