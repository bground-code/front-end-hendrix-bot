const addTokenToHeaders = (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
};

export default addTokenToHeaders;
