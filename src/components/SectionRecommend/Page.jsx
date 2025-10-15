const Page = ({page, onClick, isActive, style}) => {
    return(
        <button 
            key = {page} 
            onClick={onClick}
            className={isActive ? "section-recommend__pagination-page active" : "section-recommend__pagination-page"}
            style={style}>
            {page}
        </button>
    )
}

export default Page