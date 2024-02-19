// ScrollReveal
import ScrollReveal from 'scrollreveal';

export default function Contact() {

    ScrollReveal().reveal(".contact__container", {
        origin: "bottom",
        distance: "60px",
        duration: 3000,
        delay: 600,
    })

    ScrollReveal().reveal(".contact__text", {
        origin: "bottom",
        distance: "60px",
        duration: 3000,
        delay: 800,
    })

    return (
        <section className="contact mt-[80px] xl:my-[150px] relative z-20" id="contact">
            <div className="contact__container container mx-auto bg-primary sm:rounded-[70px] py-[80px]">
                <div className="container__text max-w-[640px] mx-auto text-center">
                    <h2 className="h2 text-white mb-4">Do you want to join Interno?</h2>
                    <p className="text-white mb-8 max-w-sm xl:max-w-none mx-auto">
                        It is a long established fact will be distracted.
                    </p>
                    <button className="btn btn-accent mx-auto">
                        Connect with us <i className="ri-arrow-right-line text-primary"></i>
                    </button>
                </div>
            </div>
        </section>
    )
}
