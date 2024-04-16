const BASE_URL = process.env.REACT_APP_BASE_ENDPOINT;
export const endpoints = {
    public:{
        createEstablishmentUser: `${BASE_URL}/public/establishment/`,
        userLogin: `${BASE_URL}/public/user/login`,
        userDeconnection: `${BASE_URL}/public/user/deconnection`,
        createUser: `${BASE_URL}/public/user/createuser`,
        userEstablishment: `${BASE_URL}/public/user/userestablishment`,
        setUserState: `${BASE_URL}/public/user/setuserstate`,
        product: (id) => `/product/${id}`,
        register: "/auth/register",
        login: "/auth/login",
        me: "/auth/me",
        logout: "/auth/logout",
        order: "/order",
    },
    private:{
        productList: "/product",
        product: (id) => `/product/${id}`,
        register: "/auth/register",
        login: "/auth/login",
        me: "/auth/me",
        logout: "/auth/logout",
        order: "/order",
    }

};

