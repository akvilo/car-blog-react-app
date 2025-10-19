export default function usePagination(active, setActive, pagesCount) {
        
        const scroll = () => {
            window.scrollTo({
                top: 400,
                behavior: 'smooth',
            })
        }

        const goToPage = (page) => {
            setActive(page)
            scroll()
            console.log(active)
        }

        function nextPage() {
            if(active<pagesCount) {
                setActive((Number(active) + 1).toString())
                scroll()
            }
        }
        function prevPage() {
            if(active>1) {
                setActive((Number(active) - 1).toString())
                scroll()
            }
        }


    return {
        goToPage, nextPage, prevPage
    }
}