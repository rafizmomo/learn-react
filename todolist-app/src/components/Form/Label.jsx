const Label = ({ htmlFor, isFocused, children }) => {

    return (
        <>
            <label className={
                `
                ${isFocused ? 'text-base text-slate-900' : 'text-sm text-slate-700'}
                transform duration-300
                `
            }
                htmlFor={htmlFor}>{children ?? 'Label'}</label>
        </>
    )
}

export default Label