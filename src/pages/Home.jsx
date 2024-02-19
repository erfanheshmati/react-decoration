import About from "../components/About";
import Banner from "../components/Banner";
import Brands from "../components/Brands";
import Contact from "../components/Contact";
import News from "../components/News";
import Stats from "../components/Stats";
import Steps from "../components/Steps";
import Testimonial from "../components/Testimonial";
import Works from "../components/Works";

export default function Home() {
    return (
        <main>
            <Banner />
            <Steps />
            <About />
            <Testimonial />
            <Brands />
            <Works />
            <Stats />
            <News />
            <Contact />
        </main>
    )
}
