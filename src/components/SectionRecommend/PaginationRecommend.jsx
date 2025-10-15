import './PaginationRecommend.scss'
import Page from './Page'
import { cars } from '@/data'
import usePagination from '@/hooks/usePagination'

const PaginationRecommend = ({ active, setActive, userTags }) => {
    let countBlock = counterCarsOffer()

    const pages = []
    let page = 1
    let totalPages = Math.ceil(countBlock / 5)
    
    const { goToPage, nextPage, prevPage } = usePagination(active, setActive, totalPages)

    function counterCarsOffer() {
        if (userTags != '') {
            const countPages = cars
            .filter((car) => userTags.some(cars => Object.values(cars).includes(car.carTag)))
            return countPages
        }
        else {
            return cars.length
        }
    }

    pages.push(
        <Page 
        isActive = {active === `${page}`}
        key = {page}
        page = {page}
        onClick = {goToPage}
        style = {{display: 'flex'}}
    />)
    
    page++
    
    for(countBlock; countBlock>5; countBlock -= 5) {
         pages.push(
            <Page
            isActive = {active === `${page}`}
            key = {page}
            page = {page}
            onClick = {goToPage}
            style = {page < 4 || page === totalPages ? {display: 'flex'} : {display: 'none'}}
        />)
        page++
        
        if(page>3 && page <5) {
            pages.push(<button key = {'dots'} className="section-recommend__pagination-page">...</button>)  
        }
    }

     return(
        <div className="section-recommend__pagination">
            <button className="section-recommend__pagination-back" onClick={prevPage}>{`<`}</button>
            {pages}
            <button className="section-recommend__pagination-next" onClick={nextPage}>{`>`}</button>
        </div>
        )
    }
export default PaginationRecommend