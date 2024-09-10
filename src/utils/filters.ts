
export const filterExpression = (item: { [x: string]: any }, searchExpression: string) => {
    return ( !searchExpression || Object.keys(item).filter(k => `${item[k]}`.toLowerCase().includes(searchExpression.toLowerCase())).length > 0)
}