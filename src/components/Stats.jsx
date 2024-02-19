// ScrollReveal
import ScrollReveal from 'scrollreveal';

export default function Stats() {

    ScrollReveal().reveal(".stats", {
        origin: "bottom",
        distance: "60px",
        duration: 3000,
        delay: 600,
    })

    ScrollReveal().reveal(".stats__item", {
        origin: "bottom",
        distance: "100px",
        duration: 3000,
        delay: 600,
        interval: 100
    })

    return (
        <section className="stats mt-[80px] xl:mt-[150px] relative z-20 bg-accent-secondary py-[80px] xl:py-[100px]">
            <div className="container mx-auto">
                {/* grid */}
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
                    {/* item */}
                    <div className="stats__item text-center xl:border-r xl:border-accent">
                        <h3 className="h1 font-primary text-accent">12</h3>
                        <p>Years of experience</p>
                    </div>
                    {/* item */}
                    <div className="stats__item text-center xl:border-r xl:border-accent">
                        <h3 className="h1 font-primary text-accent">85</h3>
                        <p>Projects Completed</p>
                    </div>
                    {/* item */}
                    <div className="stats__item text-center xl:border-r xl:border-accent">
                        <h3 className="h1 font-primary text-accent">15</h3>
                        <p>Active Projects</p>
                    </div>
                    {/* item */}
                    <div className="stats__item text-center">
                        <h3 className="h1 font-primary text-accent">95</h3>
                        <p>Happy Customers</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
