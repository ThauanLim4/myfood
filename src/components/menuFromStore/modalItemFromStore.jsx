import { SlArrowDown } from "react-icons/sl";

export const ModalItemStore = ({ variableName }) => {
    return (
        variableName.map((it, ind) => {
            return (
                <div className="fixed top-0 left-0 w-full h-full bg-verdeclaro z-50 p-3" >
                <button onClick={e => setModalItem(!modalItem)} className="font-semibold">
                    <SlArrowDown />
                </button>
                <div className="flex items-center justify-center mb-5">
                    <img className="w-full max-w-48 max-h-48 object-contain" src={it.images} alt={`foto de ${it.category}, ${it.food}`} />
                </div>
                <div className="flex flex-col gap-5 border-b-2 border-gray-500/25 pb-5">
                    <h2 className="text-xl font-semibold">{it.food}</h2>
                    <p className="">{it.description}</p>
                    <span className="text-xl font-semibold">R$ {it.price.toFixed(2).replace('.', ',')}</span>
                </div>
    
                <div className="fixed bottom-0 w-full p-3 flex flex-col items-center gap-5 mx-auto left-0 right-0">
                    <div className="mx-auto flex items-center gap-2">
                        <button onClick={addItem} className="btnDefault1"> + </button>
                        <label htmlFor="quantity">Quant. {itensQuantity}</label>
                        <button onClick={removeItem} className={itensQuantity === 1 ? "btnDefault1-desabled" : "btnDefault1"}> - </button>
                    </div>
                    <button className="btnDefault1" onClick={addItensToCart} >
                        Adicionar ao carrinho R$
                        {(it.price * itensQuantity).toFixed(2).replace('.', ',')}
                    </button>
                </div>
    
            </div >
    
            )
        })
    )
}