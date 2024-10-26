const getBaseUrl = () => {
    return import.meta.env.VITE_SERVER_KEY;
}

export default getBaseUrl;