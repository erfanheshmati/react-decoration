// ScrollReveal
import ScrollReveal from 'scrollreveal';

export default function Banner() {

    ScrollReveal().reveal(".hero__text", {
        origin: "top",
        distance: "60px",
        duration: 3000,
        delay: 600,
    })

    return (
        <section
            className="hero h-[640px] xl:h-[840px] bg-hero bg-center lg:bg-cover bg-no-repeat bg-fixed xl:rounded-bl-[290px] relative z-20">
            <div class="container mx-auto h-full flex items-center justify-center xl:justify-start">
                {/* text */}
                <div className="hero__text w-[567px] flex flex-col items-center text-center xl:text-left lg:items-start">
                    <h1 className="h1 mb-8">Let Your Home Be Unique</h1>
                    <p className="mb-8">
                        There are many variations of the passages of lorem Ipsum from available,variations of the
                        passages.
                    </p>
                    <button className="btn btn-primary mx-auto xl:mx-0">
                        Get free estimation <i className="ri-arrow-right-line text-accent"></i>
                    </button>
                </div>
            </div>
        </section>
    )
}
