const express = require ('express')
const app = express ()
const port = 3000; 
const cors = require('cors')

app.use(cors())

const pizza = [
    {title: "Pizza Delivery & Takeaway Near You | Pizza Hut UK",
     url: "https://www.pizzahut.co.uk/",},
    {title: "Pizza Pilgrims | Eat in, delivery and takeaway in London ...",
     url: "https://www.pizzapilgrims.co.uk/",},
    {title: "The best pizza in London: 16 restaurants to try in 2022 ...",
     url: "https://www.cntraveller.com/gallery/best-pizza-london",},
    {title: "Pizza - Wikipedia",
     url: "https://en.wikipedia.org/wiki/Pizza",},
     {title: "Pizza Express",
     url: "https://www.pizzaexpress.com/",},
     {title: "Domino's Pizza: Pizza for Delivery or Takeaway Near You",
     url: "https://www.dominos.co.uk/",},
     {title: "Best pizza London 2020: From sourdough to by-the-slice, the ...",
     url: "https://www.standard.co.uk/reveller/restaurants/the-best-pizza-in-london-from-sourdough-to-bytheslice-a2945776.html",},
     {title: "Pizza East | Home",
     url: "https://www.pizzaunion.com/",},
     {title: "PIZZA UNION - London",
     url: "https://www.pizzahut.co.uk/",},
     {title: "THE 10 BEST Pizza Places in London, Updated March 2022",
     url: "https://www.tripadvisor.co.uk/Restaurants-g186338-c31-London_England.html",},
]

const pie = [
    {title: "Pie recipes | BBC Good Food",
     url: "https://www.bbcgoodfood.com/recipes/collection/pie-recipes"},
    {title: "Pie - Wikipedia",
     url: "https://en.wikipedia.org/wiki/Pie"},
    {title: "90 Pie recipes - delicious. magazine",
     url: "https://www.deliciousmagazine.co.uk/collections/pie-recipes/"},
    {title: "Apple Pie Recipe | Food Network Kitchen",
     url: "https://foodnetwork.co.uk/recipes/apple-pie/?utm_source=foodnetwork.com&utm_medium=domestic"},
     {title: "Best easy pie recipes - Olive Magazine",
     url: "https://www.olivemagazine.com/recipes/collection/best-ever-pie-recipes/"},
     {title: "Pie Recipes | Allrecipes",
     url: "https://www.allrecipes.com/recipes/367/desserts/pies/",},
     {title: "Luxury Handcrafted Pies - Safely Delivered To Your Door",
     url: "https://mudfoods.com/?gclid=CjwKCAjwlcaRBhBYEiwAK341jTDbHfbbYoGyM04RMUgI_87txuc0YRA7qLbY9Vna3itUR4nGU98lPRoCOSMQAvD_BwE",},
     {title: "Pies, made in Bristol - Field & Flower",
     url: "https://www.fieldandflower.co.uk/deli/handmade-pies?gclid=CjwKCAjwlcaRBhBYEiwAK341jSz2xWG4rzcmhZR9pUs_2OHxx_jsmO4GWeP-7IoAKY1aFJrbSPJpbBoC_cEQAvD_BwE#show=9",},
     {title: "Best-ever pie recipes | Sainsbury's Recipes",
     url: "https://recipes.sainsburys.co.uk/scrapbooks/best-ever-pie-recipes?src=ppc&&cmpid=cpc&utm_source=Google&utm_medium=cpc&utm_campaign=13371227177&utm_content=text&utm_term=&utm_custom1=121749317183&utm_custom2=127-581-3848&gclid=CjwKCAjwlcaRBhBYEiwAK341jWiMN5fYp6-Z5l5Wj5Zb6l6h_CmDK-hTK7Bn7L0dB3Y3AK5qaIX-FRoCImoQAvD_BwE&gclsrc=aw.ds",},
     {title: "Apple Pie Recipe: How to Make It - Taste of Home",
     url: "https://www.tasteofhome.com/recipes/apple-pie/",},
]

const bumbershoot = [
    {title: "Bumbershoot", url: "http://bumbershoot.org/" },
    {title: 'bumbershoot - Wiktionary', url: `https://en.wiktionary.org/wiki/bumbershoot` },
    {title: 'Word of the Day: Bumbershoot | Merriam-Webster', url: `https://www.merriam-webster.com/word-of-the-day/bumbershoot-2021-05-25` },
    {title: `Bumbershoot: It means umbrella, but it's not British for umbrella`, url: `https://slate.com/human-interest/2011/11/bumbershoot-it-means-umbrella-but-its-not-british-for-umbrella.html` },
    {title: 'Bumbershoot definition and meaning - English - Collins ...', url: `https://www.collinsdictionary.com/dictionary/english/bumbershoot` },
    {title: 'Bumbershoot Definition & Meaning | Dictionary.com', url: `https://www.dictionary.com/browse/bumbershoot` },
    {title: 'Bumbershoot - Wikipedia', url: `https://en.wikipedia.org/wiki/Bumbershoot` },
    {title: 'Bumbershoot - World Wide Words', url: `https://www.worldwidewords.org/qa/qa-bum2.htm` },
    {title: 'BUMBERSHOOT | meaning in the Cambridge English Dictionar', url: `https://dictionary.cambridge.org/dictionary/english/bumbershoot` },
    {title: 'Bumbershoot Policy Definition - Investopedia', url: `https://www.investopedia.com/terms/b/bumbershoot-policy.asp` },
]

const widdershins = [
    {title:"Widdershins - Wikipedia", url: "https://en.wikipedia.org/wiki/Widdershins"},
    {title: "Widdershins - March 11th, 2022", url: "https://widdershinscomic.com/"},
    {title: "Widdershins Definition & Meaning - Merriam-Webster", url: "https://www.merriam-webster.com/dictionary/widdershins"},
    {title: "widdershins - Wiktionary", url: "https://en.wiktionary.org/wiki/widdershins"},
    {title: "Puppetry and storytelling | Theatre of Widdershins | England", url: "https://www.widdershins.co.uk/"},
    {title: "Etymology, origin and meaning of widdershins by etymonline", url: "https://www.etymonline.com/word/widdershins"},
    {title: "Mermade/widdershins: OpenAPI / Swagger, AsyncAPI ...", url: "https://github.com/Mermade/widdershins"},
    {title: "WIDDERSHINS | meaning in the Cambridge English Dictionary", url: "https://dictionary.cambridge.org/dictionary/english/widdershins"},
    {title: "Whyborne & Griffin #1 - Widdershins - Goodreads", url: "https://www.goodreads.com/book/show/16128152-widdershins"},
    {title: "What does widdershins mean? - Definitions.net", url: "https://www.definitions.net/definition/widdershins"},
]

// app.get('/', (req, res)=>res.send('Hello World!'))

app.get('/pies', (req, res)=>{
    res.send(pie)
})
app.get('/pizza', (req, res)=>{
    res.send(pizza)
})
app.get('/bumbershoot', (req, res)=>{
    res.send(bumbershoot)
})
app.get('/widdershins', (req, res)=>{
    res.send(widdershins)
})

app.listen (port, ()=>{
    console.log(`Example app listening on ${port}`)
})