import './Button.scss'

const buttonStyles = {
    cancel: 'button__cancel',
    primary: 'button__primary',
    secondary: 'button__secondary',
}

function Button({ type, onClick, label, style }) {
    return (
        <button type={type} onClick={onClick} className={`button ${buttonStyles[style]}`}>{label}</button>
    )
}
export default Button;