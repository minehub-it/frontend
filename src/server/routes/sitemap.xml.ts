import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
    const serverCategories = await serverQueryContent(event, 'server/categories').findOne()

    const pathServerListJava = '/lista-server-java-edition'
    const pathServerListBedrock = '/lista-server-bedrock-edition'

    // add main pages
    const docs = [
        {
            _path: '/',
        },
        {
            _path: '/about',
        },
        {
            _path: '/featured',
        },
        {
            _path: pathServerListJava,
        },
        {
            _path: pathServerListBedrock,
        },
    ]

    // add server category pages
    if (serverCategories.body && serverCategories.body.length > 0) {
        for (let serverCategory of serverCategories.body) {
            docs.push({
                _path: `${pathServerListJava}/${serverCategory.slug}`
            })
            docs.push({
                _path: `${pathServerListBedrock}/${serverCategory.slug}`
            })
        }
    }

    const sitemap = new SitemapStream({
        hostname: 'https://minecraft-italia.it'
    })

    for (const doc of docs) {
        sitemap.write({
            url: doc._path,
            changefreq: 'monthly'
        })
    }
    sitemap.end()

    return streamToPromise(sitemap)
})