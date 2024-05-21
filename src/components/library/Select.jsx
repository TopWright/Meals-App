
const Select = ({ name, title, children, value, handleChange, options, others }) => {
    return (
        <div className="">
            <div className="my-custom-select border-2 rounded-2xl p-5 border-[#fec330]">
                <select
                    name={name}
                    value={value}
                    onChange={handleChange}
                    {...others}
                    className="text-3xl"
                >
                    <option value="" label={title} />
                    {options?.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            {children}
        </div>
    )
}

export default Select
