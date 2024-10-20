function getUrlImg(img) {
    return new URL(`../assets/books/${img}`,import.meta.url)
}

export default getUrlImg;