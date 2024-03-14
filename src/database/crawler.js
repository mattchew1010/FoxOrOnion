import { PlaywrightCrawler } from 'crawlee';
import { createArticle } from './db.js';
const foxRegex = new RegExp("https?://(?:www\\.)?foxnews\\.com/(?:politics|us|world|opinion|entertainment)/[a-z0-9-\\/]+$")

const FOXcrawler = new PlaywrightCrawler({
   async requestHandler({ request, page, enqueueLinks, pushData, log }) {
      if (foxRegex.test(request.url)) {
          const title = await page.locator('h1.headline.speakable').textContent();
         log.info(`Title of ${request.url} is '${title}'`)

         await createArticle(request.url, title, true)

      }
      await enqueueLinks({regexps: [foxRegex]});
   },
   maxRequestsPerCrawl: 5000,
    maxConcurrency: 5,
})
const onionRegex = new RegExp("https?://(?:www\\.)?theonion\\.com/[^/]+-\\d{10,}")
const ONIONcrawler = new PlaywrightCrawler({
   async requestHandler({ request, page, enqueueLinks, pushData, log }) {
      console.log(request.url, onionRegex.test(request.url))
      if (onionRegex.test(request.url)) {
         const title = await page.title()

         log.info(`Title of ${request.url} is '${title}'`)

         await createArticle(request.url, title, false)

      }
      await enqueueLinks({strategy: 'same-domain'});
   },
   maxConcurrency: 15
})

// Add first URL to the queue and start the crawl.
//await ONIONcrawler.run(['https://theonion.com/sitemap'])
await FOXcrawler.run(['https://foxnews.com/opinion'])


