import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Brands from './components/Brands'
import Feature1 from './components/Feature1'
import Feature2 from './components/Feature2'
import Feature3 from './components/Feature3'
import Product from './components/Product'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

const App = () => {
    AOS.init({
        duration: 1800,
        offset: 100,
    })

    return (
        <div className="overflow-hidden">
            <Header />
            <Hero />
            <Overview />
            <Brands />
            <Feature1 />
            <Feature2 />
            <Feature3 />
            <Product />
            <Pricing />
            <Testimonials />
            <CTA />
            <Footer />
        </div>
    )
}

export default App
