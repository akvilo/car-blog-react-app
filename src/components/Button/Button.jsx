import './Button.scss'

const Button = (props) => {
    const {
        className = '',
        width = 'fit-content',
        height = '50px',
        children,
        onClick,
    } = props

    return(
        <button 
        className={`button ${className}`} 
        key={className}
        style={{width: `${width}`, height: `${height}`}}
        onClick={onClick}
        >{children}</button>
    )
}

export default Button