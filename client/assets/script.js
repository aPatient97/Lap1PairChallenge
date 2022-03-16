const text=document.querySelector('#searchBar');

text.addEventListener('keyup', searchResultPizza);

function searchResultPizza(e){
    console.log(document.querySelector('#searchBar').value)
    sessionStorage.clear()
    if (document.querySelector('#searchBar').value ==='pizza'){
        console.log('found value')
        fetch('http://localhost:3000/pizza')
        .then(resp=> resp.json())
        .then(data => {
            console.log(data)
            sessionStorage.setItem('data', JSON.stringify(data))
        })
    } else if(document.querySelector('#searchBar').value ==='pies'){
        console.log('found value')
        fetch('http://localhost:3000/pies')
        .then(resp=> resp.json())
        .then(data => {
            console.log(data)
            sessionStorage.setItem('data', JSON.stringify(data))
        })
    } else if(document.querySelector('#searchBar').value ==='bumbershoot'){
        console.log('found value')
        fetch('http://localhost:3000/bumbershoot')
        .then(resp=> resp.json())
        .then(data => {
            console.log(data)
            sessionStorage.setItem('data', JSON.stringify(data))
        })
    } else if(document.querySelector('#searchBar').value ==='widdershins'){
        console.log('found value')
        fetch('http://localhost:3000/widdershins')
        .then(resp=> resp.json())
        .then(data => {
            console.log(data)
            sessionStorage.setItem('data', JSON.stringify(data))
        })
    } else {
        console.log('not found')
    }
}

function clean() {
    if (document.querySelector('#searchBar').value.length == 0 ){
        sessionStorage.clear();
    }
}

function lucky(){
    if (document.querySelector('#searchBar').value ==='pizza'){
        fetch('http://localhost:3000/pizza')
        .then(resp=> resp.json())
        .then(data => {
            location.href = data[0].url
        })
    } else if (document.querySelector('#searchBar').value ==='pies'){
        fetch('http://localhost:3000/pies')
        .then(resp=> resp.json())
        .then(data => {
            location.href = data[0].url
    })
    } else if (document.querySelector('#searchBar').value ==='bumbershoot'){
        fetch('http://localhost:3000/bumbershoot')
        .then(resp=> resp.json())
        .then(data => {
            location.href = data[0].url
    })
    }else if (document.querySelector('#searchBar').value ==='widdershins'){
        fetch('http://localhost:3000/widdershins')
        .then(resp=> resp.json())
        .then(data => {
            location.href = data[0].url
    })
    }
}