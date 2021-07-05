import { IRoute } from "../types";
import Home from "../views/Home";

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        exact: true,
    }
]

export default routes;