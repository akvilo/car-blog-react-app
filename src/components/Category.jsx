import './Category.scss'

const Category = (props) => {
    return(
        <span className={`${props.className} vehicle-category`}>{props.children}</span>
    )
}

export default Category