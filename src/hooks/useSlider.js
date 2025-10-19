import {cars} from '@/data.js'

const useSlider = (setFirstCard, firstCard) => {

    function nextCard() {
        if (firstCard+4<cars.length) {
            setFirstCard(firstCard+1)
            console.log(cars.length)
        }
    }

    function prevCard() {
        if (firstCard>0) {
            setFirstCard(firstCard-1)
        }
    }

    return {
        nextCard, prevCard
    }
}

export default useSlider