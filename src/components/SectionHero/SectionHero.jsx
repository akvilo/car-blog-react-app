import BlockHero from "./BlockHero"
import './SectionHero.scss'
import { cars } from '../../data.js'

const SectionHero = () => {
    return(
        <section className="hero">
            <div className="hero__inner">
                <BlockHero 
                width="383"
                height="560"
                carName={cars[0].name}
                carDesc={cars[0].desc}
                carImage={cars[0].image}
                />
                <BlockHero 
                width="370"
                height="265"
                carName={cars[1].name}
                carDesc={cars[1].desc}
                carImage={cars[1].image}
                />
                <BlockHero 
                width="370"
                height="265"
                carName={cars[2].name}
                carDesc={cars[2].desc}
                carImage={cars[2].image}
                />
                <BlockHero 
                width="370"
                height="265"
                carName={cars[3].name}
                carDesc={cars[3].desc}
                carImage={cars[3].image}
                />
                <BlockHero 
                width="370"
                height="265"
                carName={cars[4].name}
                carDesc={cars[4].desc}
                carImage={cars[4].image}
                />
            </div>
        </section>
    )
}

export default SectionHero