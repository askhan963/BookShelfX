const getBaseUrl = () => {
    return import.meta.env.VITE_API_KEY;
}

export default getBaseUrl;