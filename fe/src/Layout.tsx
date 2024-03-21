import Footer from "./components/Footer"
import Header from "./components/Header"
import RouterCustom from "./routes/RouterCustom"

const Layout = () => {
    return (
        <>
            <Header />
            <RouterCustom />
            <Footer />
        </>
    )
}

export default Layout