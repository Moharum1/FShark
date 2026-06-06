const varients = {
    Basic: "bg-primary text-secondary",
    secondary: "bg-white text-black"
}

const Button = ({ text, type = "Basic", onClick }) => {
    return <button
        className={`${varients[type]} font-medium rounded-md m-1 h-full tracking-wide flex-1`}
        onClick={onClick}
        type="submit">
        {text}
    </button>
}

export default Button