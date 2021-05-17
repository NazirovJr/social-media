export const stateArrayChange = (items, userId,objectElement, newObj) => {
    return items.map(el => {
        if (el[objectElement] === userId) {
            return {...el, ...newObj}
        }
        return el
    })
}