let data = JSON.parse(sessionStorage.getItem('data'))

let list = document.querySelector('#serp');

data.forEach(item => {
    console.log(item)
    const li = document.createElement('li')
    li.innerHTML= `<a href="${item.url}">${item.title}</a>`
    list.append(li)
})








// let data1 = JSON.parse(sessionStorage.getItem('data'))


// data.forEach(item => {
//     console.log(item)
//     const li = document.createElement('li')
//     li.innerHTML= `<a href="${item.url}">${item.title}</a>`
//     list.append(li)
// })