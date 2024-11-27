export type MoviePage = {
    page: PageInfo
}

export type PageInfo = {
    title: string
    "total-content-items": number
    "page-num-requested": number
    "page-size-requested": number
    "page-size-returned": number
    "content-items": Content
}

export type Content = {
    content: ContentInfo[]
}
export type ContentInfo = {
    name: string
    "poster-image": string
}
