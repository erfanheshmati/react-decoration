// ScrollReveal
import ScrollReveal from 'scrollreveal';

export default function Brands() {

    ScrollReveal().reveal(".brands__img", {
        origin: "bottom",
        distance: "100px",
        duration: 3000,
        delay: 600,
        interval: 100,
    })

    return (
        <section className="brands mt-[80px] xl:mt-[150px] relative z-20">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row justify-between items-center gap-12">
                    <img src="./brands/01.svg" alt="" className="brands__img" />
                    <img src="./brands/02.svg" alt="" className="brands__img" />
                    <img src="./brands/03.svg" alt="" className="brands__img" />
                    <img src="./brands/04.svg" alt="" className="brands__img" />
                    <img src="./brands/05.svg" alt="" className="brands__img" />
                </div>
            </div>
        </section>
    )
}
