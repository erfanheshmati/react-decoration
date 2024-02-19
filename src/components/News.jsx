// ScrollReveal
import ScrollReveal from 'scrollreveal';

export default function News() {

    ScrollReveal().reveal(".news__title", {
        origin: "bottom",
        distance: "60px",
        duration: 3000,
        delay: 600,
    })

    ScrollReveal().reveal(".news__subtitle", {
        origin: "bottom",
        distance: "60px",
        duration: 3000,
        delay: 800,
    })

    ScrollReveal().reveal(".news__grid", {
        origin: "bottom",
        distance: "100px",
        duration: 3000,
        delay: 1000,
        interval: 100
    })

    return (
        <section className="news mt-[80px] xl:mt-[150px] relative z-20" id="news">
            <div className="container mx-auto px-0">
                {/* text */}
                <div className="max-w-[810px] mx-auto text-center mb-[52px]">
                    <h2 className="news__title h2 mb-3">Articles & News</h2>
                    <p className="news__subtitle">
                        It is a long established fact that a reader will be distracted by the of readable content of a
                        page when lookings at its layouts the points of using.
                    </p>
                </div>
                {/* grid */}
                <div className="news__grid grid grid-cols-1 xl:grid-cols-3 gap-[27px]">
                    {/* item */}
                    <div
                        className="news__item w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0">
                        <img src="./src/assets/news/01.png" alt="" className="mb-5" />
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="h3">Let's Get Solution For Building Construction Work</h3>
                            <div className="flex items-center justify-between">
                                <p className="text-base">Date: 22 June,2024</p>
                                <button
                                    className="bg-accent-secondary w-[52px] h-[52px] rounded-full group-hover:bg-white transition-all duration-300">
                                    <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* item */}
                    <div
                        className="news__item w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0">
                        <img src="./src/assets/news/02.png" alt="" className="mb-5" />
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="h3">Low Cost Latest Invented Interior Designing Ideas</h3>
                            <div className="flex items-center justify-between">
                                <p className="text-base">Date: 24 June,2024</p>
                                <button
                                    className="bg-accent-secondary w-[52px] h-[52px] rounded-full group-hover:bg-white transition-all duration-300">
                                    <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* item */}
                    <div
                        className="news__item w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0">
                        <img src="./src/assets/news/03.png" alt="" className="mb-5" />
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="h3">Best For Any Office & Business Interior Solution</h3>
                            <div className="flex items-center justify-between">
                                <p className="text-base">Date: 28 June,2024</p>
                                <button
                                    className="bg-accent-secondary w-[52px] h-[52px] rounded-full group-hover:bg-white transition-all duration-300">
                                    <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
