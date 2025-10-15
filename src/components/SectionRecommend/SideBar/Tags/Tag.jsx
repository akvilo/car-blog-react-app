import Button from "@/components/Button/Button"

const Tag = (props) => {
    const {
        tag,
        className = tag,
        onClick
    } = props
    return (
        <Button 
        className = {`sidebar__tags-item sidebar__tags-item-${className.toString().toLowerCase()}`}
        onClick = {onClick}
        >{tag}</Button>
    )
}

export default Tag