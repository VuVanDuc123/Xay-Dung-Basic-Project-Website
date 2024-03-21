import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import NotFound from "../pages/NotFound"
import ProfilePage from "../pages/ProfilePage"
import { ROUTERS } from "../utils/router"

const renderUserRouter = () => {
    // đây là phần viết đường dẫn
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: HomePage
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: ProfilePage
        }]

    return (
        <Routes>
            {userRouters.map((item, i) => (
                <Route key={i} path={item.path} element={<item.component />} />
            ))}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

const RouterCustom = () => {
    return renderUserRouter()
}

export default RouterCustom