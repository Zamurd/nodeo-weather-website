console.log('client site javascript is loaded')

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{

// response.json().then((data)=>{

//     console.log(data)
// })


// })







const Weatherform=document.querySelector('form')
const search=document.querySelector('input')
const message1=document.querySelector('#message-1')
const message2=document.querySelector('#message-2')

message1.textContent=''
message2.textContent=''
Weatherform.addEventListener('submit',(e)=>{
message1.textContent='Loading....!'
message2.textContent=''

    e.preventDefault()
    const location=search.value
    fetch('http://localhost:3000/weather?address='+location+'').then((response)=>{
        response.json().then((data)=>{
          if(data.error){
              console.log(data.Error)
              message1.textContent=data.error
            //   message1.innerHTML=data.error
          }
          else{
              message1.textContent="Location "+data.location
              message2.textContent="temperature "+data.temperature
              console.log(data)
            //   message2.innerHTML=JSON.stringify(data)
          }
        })
    })

})
