export const convertDiscount = (price, discont) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price - (price * (discont / 100)));
}