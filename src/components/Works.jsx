// ScrollReveal
import ScrollReveal from 'scrollreveal';

export default function Works() {

    ScrollReveal().reveal(".work__title", {
        origin: "bottom",
        distance: "60px",
        duration: 3000,
        delay: 600,
    })

    ScrollReveal().reveal(".work__subtitle", {
        origin: "bottom",
        distance: "60px",
        duration: 3000,
        delay: 800,
    })

    ScrollReveal().reveal(".work__grid", {
        origin: "bottom",
        distance: "60px",
        duration: 3000,
        delay: 1000,
    })

    return (
        <section className="work mt-[80px] xl:mt-[150px] relative z-20" id="works">
            <div className="container mx-auto xl:px-0">
                {/* text */}
                <div className="text-center mb-24">
                    <h2 className="work__title h2 mb-4">Follow Our Projects</h2>
                    <p className="work__subtitle max-w-3xl mx-auto">
                        It is a long established fact that a reader will be distracted by the of readable content of
                        page lookings at its layouts points.
                    </p>
                </div>
                {/* grid */}
                <div className="work__grid grid grid-cols-1 xl:grid-cols-2 gap-x-[104px] gap-y-[56px]">
                    {/* item */}
                    <div className="w-full max-w-[548px] h-full mx-auto">
                        <img src="./src/assets/work/01.png" alt="" className="mb-6" />
                        <div className="flex justify-between items-center w-full">
                            <div>
                                <h3>Modern Kitchen</h3>
                                <p>Decor/Architecture</p>
                            </div>
                            <button className="bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full">
                                <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
                            </button>
                        </div>
                    </div>
                    {/* item */}
                    <div className="w-full max-w-[548px] h-full mx-auto">
                        <img src="./src/assets/work/02.png" alt="" className="mb-6" />
                        <div className="flex justify-between items-center w-full">
                            <div>
                                <h3>Modern Kitchen</h3>
                                <p>Decor/Architecture</p>
                            </div>
                            <button className="bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full">
                                <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
                            </button>
                        </div>
                    </div>
                    {/* item */}
                    <div className="w-full max-w-[548px] h-full mx-auto">
                        <img src="./src/assets/work/03.png" alt="" className="mb-6" />
                        <div className="flex justify-between items-center w-full">
                            <div>
                                <h3>Modern Kitchen</h3>
                                <p>Decor/Architecture</p>
                            </div>
                            <button className="bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full">
                                <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
                            </button>
                        </div>
                    </div>
                    {/* item */}
                    <div className="w-full max-w-[548px] h-full mx-auto">
                        <img src="./src/assets/work/04.png" alt="" className="mb-6" />
                        <div className="flex justify-between items-center w-full">
                            <div>
                                <h3>Modern Kitchen</h3>
                                <p>Decor/Architecture</p>
                            </div>
                            <button className="bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full">
                                <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
