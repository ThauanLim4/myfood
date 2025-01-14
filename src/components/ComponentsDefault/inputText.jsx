export const InputText = ({ value, setValue = () => { }, Icon, placeholder }) => {
    return (
        <div className="flex items-center border border-verdeescuro text-verdeescuro gap-2 p-2 rounded-lg w-full">
            {Icon ? <Icon/> : Icon}
            <input className="outline-none bg-transparent hover:bg-transparent focus:bg-transparent placeholder:text-verdeescuro w-full" type="text" placeholder={placeholder} name="input" id="input"
            onChange={e => {
                setValue(e.target.value)
            }}
            value={value}/>
        </div>
    )
}