import './Category.scss'

export default function Category(props) {
    return(
        <span className={`${props.className} vehicle-category`}>{props.children}</span>
    )
}