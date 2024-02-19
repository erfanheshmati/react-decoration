// ScrollReveal
import ScrollReveal from 'scrollreveal';

export default function Steps() {

    ScrollReveal().reveal(".steps__step", {
        origin: "bottom",
        distance: "100px",
        duration: 3000,
        delay: 600,
        interval: 100,
    })

    return (
        <section className="steps mt-[80px] xl:mt-[200px] relative z-20">
            <div className="container mx-auto">
                {/* grid item */}
                <div className="grid grid-cols-1 gap-12 xl:grid-cols-3">
                    {/* step 1 */}
                    <div className="steps__step text-center">
                        <div className="mb-4">
                            <i className="ri-compasses-2-line text-5xl text-accent"></i>
                        </div>
                        <h3 className="h3 mb-5">Project Planning</h3>
                        <p className="mb-5 max-w-md mx-auto">
                            There are many variations of the passages of lorem Ipsum from available, majority.
                        </p>
                        <a href="#" className="font-medium flex justify-center gap-2">
                            Read more <i className="ri-arrow-right-line text-accent"></i>
                        </a>
                    </div>
                    {/* step 2 */}
                    <div className="steps__step text-center">
                        <div className="mb-4">
                            <i className="ri-magic-line text-5xl text-accent"></i>
                        </div>
                        <h3 className="h3 mb-5">Gaining Materials</h3>
                        <p className="mb-5 max-w-md mx-auto">
                            There are many variations of the passages of lorem Ipsum from available, majority.
                        </p>
                        <a href="#" className="font-medium flex justify-center gap-2">
                            Read more <i className="ri-arrow-right-line text-accent"></i>
                        </a>
                    </div>
                    {/* step 3 */}
                    <div className="steps__step text-center">
                        <div className="mb-4">
                            <i className="ri-tools-line text-5xl text-accent"></i>
                        </div>
                        <h3 className="h3 mb-5">Project Execution</h3>
                        <p className="mb-5 max-w-md mx-auto">
                            There are many variations of the passages of lorem Ipsum from available, majority.
                        </p>
                        <a href="#" className="font-medium flex justify-center gap-2">
                            Read more <i className="ri-arrow-right-line text-accent"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
