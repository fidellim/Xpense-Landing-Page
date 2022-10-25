import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
    AOS.init({
        duration: 1800,
        offset: 100,
    })
    return <div>App</div>
}

export default App
