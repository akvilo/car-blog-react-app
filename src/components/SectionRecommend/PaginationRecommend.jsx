    import './PaginationRecommend.scss'
    import Page from './Page'

    import { cars } from '../../data.js'

    export default function PaginationRecommend({ active, setActive }) {
        let countBlock = cars.length
        const pages = []
        let page = 1
        let dotsAdded = false

        function handleClickPage(onClick) {
            setActive(onClick.target.textContent)
        }

        const totalPages = Math.ceil(countBlock / 5)

        pages.push(
            <Page 
            isActive = {active === `${page}`}
            key = {page}
            page = {page}
            onClick = {handleClickPage}
            style = {{display: 'flex'}}
        />)
        page++

        for(countBlock; countBlock>5; countBlock -= 5) {
             pages.push(
                <Page
                isActive = {active === `${page}`}
                key = {page}
                page = {page}
                onClick = {handleClickPage}
                style = {page < 4 || page === totalPages ? {display: 'flex'} : {display: 'none'}}
            />)
            page++
            if(page>3 && !dotsAdded) {
                dotsAdded = true
                pages.push(<button key = {'dots'} className="section-recommend__pagination-page">...</button>)
            }
        }

        function handleClickRight() {
            if(active<pages.length) {
                let newActive = Number(active)+1
                setActive(newActive.toString()) 
            }
        }
            function handleClickLeft() {
            if(active>1) {
                let newActive = Number(active)-1
                setActive(newActive.toString())
            }
        }

         return(
            <div className="section-recommend__pagination">
                <button className="section-recommend__pagination-back" onClick={handleClickLeft}>{`<`}</button>
                {pages}
                <button className="section-recommend__pagination-next" onClick={handleClickRight}>{`>`}</button>
            </div>
        )
    }