const BASE_URL = process.env.REACT_APP_BASE_ENDPOINT;
export const endpoints = {
    public:{
        createEstablishmentUser: `${BASE_URL}/public/establishment/`,
        getEstablishment: `${BASE_URL}/public/user/getestablishment`,
        userLogin: `${BASE_URL}/public/user/login`,
        userDeconnection: `${BASE_URL}/public/user/deconnection`,
        createUser: `${BASE_URL}/public/user/createuser`,
        userEstablishment: `${BASE_URL}/public/user/userestablishment`,
        fileDownload: `${BASE_URL}/public/download-file`,
        setUserState: `${BASE_URL}/public/user/setuserstate`,
        getCategoryByID: `${BASE_URL}/public/user/getcategorybyid`,
        getArticleById: `${BASE_URL}/public/user/getarticlebyid`,
        getAllArticlesByEstablishment: `${BASE_URL}/public/user/getallarticlesbyestablishment`,
        upadateCategory: `${BASE_URL}/public/user/updatecategory`,
        setCategoryState: `${BASE_URL}/public/user/setcategorystate`,
        setMenuState: `${BASE_URL}/public/user/setmenustate`,
        deleteCategory: `${BASE_URL}/public/user/deletecategory`,
        deleteArticle: `${BASE_URL}/public/user/deletearticle`,
        createCategory: `${BASE_URL}/public/user/createcategory`,
        getAllCategory: `${BASE_URL}/public/user/getallcategory`,
        createArticle: `${BASE_URL}/public/user/createarticle`,
        updateArticle: `${BASE_URL}/public/user/updatearticle`,
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

