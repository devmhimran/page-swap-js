

console.log(window.location.href)


const firsPage = () =>{
    if(window.location.href.includes('home')){
        window.location.href = '/index.html'
    }else{
        window.location.href = '/home.html'
    }
    
}

setTimeout(firsPage, 3000);