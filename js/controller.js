'use strict'

function onInit(){
    renderData()  
}

async function renderData(){
 const data= await getDateHistory()
 console.log(data.data.Events);
 const dataSection = document.querySelector('.data-section')
 const dataRender='<ul>'+ data.data.Events.map(date=>`<li><img src="https://picsum.photos/200/300?random=${date.year}" alt="">
 <h4>${date.year}</h4><p>${date.text}</p></li>`).join('')+'</ul>'
 dataSection.innerHTML=dataRender
    
}
