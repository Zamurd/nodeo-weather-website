const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')
const prompt = require('prompt-sync')();




// const name = prompt('Enter location whose temperature you want to know?=');
// console.log(`Hey there ${name}`);


// console.log(process.argv)

const name=process.argv[2]

if(!name){
    console.log('please enter location')
}
else{


geocode(name,(error,{long:longitude,lat:latitude,lname:location})=>{




    if(error){
       return ('Error', error)
    }
    // console.log('Data',data)

    // const {}=data
    forecast(longitude,latitude, (error, foreCastdata) => {
    
    if(error){
        return console.log('Error', error)
    }     
    console.log(location)
    console.log(foreCastdata)

    })


    

})


}
//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)









// //by name
// // const url='http://api.weatherstack.com/current?access_key=7c52bca0907e3d0e242b4e56da8bd3d8&query=rawalpindi'
// // by latitude longitude
// const url='http://api.weatherstack.com/current?access_key=7c52bca0907e3d0e242b4e56da8bd3d8&query=33.600,73.067&units=f'
// req({url:url,json:true},(error,response)=>{
//     // const data=JSON.parse(response.body)
//     // console.log(response.body.current)
//     // challenge feels like 

//     if(error){
//         console.log('enable to connect to the services..!')
//     }else if(response.body.error)
//     {
//         console.log('to able to find location')
//     }
//     else{
// console.log('Temperature is ',response.body.current.temperature,' and feels like ',response.body.current.feelslike,' Weather description ',response.body.current.weather_descriptions[0])

// }})
// // console.log('Starting')
// // setTimeout(()=>{
// // console.log(' hi i am between but run at end')
// // },1000)
// // setTimeout(()=>{
// // console.log('hi iam function with 0 secs waiting')},0)
// // console.log('ending')

// //geoCode


// //address-> lt/long ->weather

// //error url
// // const geo='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%1234.json?access_token=pk.eyJ1IjoiemVlc2hhbnphbXVyZCIsImEiOiJja2xieG9rMjAwZWxvMnBtbDI2cGV6c2V4In0.ab9ufVHvAoNC6Jmv2tc7Lg&limit=1'

// const geo='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiemVlc2hhbnphbXVyZCIsImEiOiJja2xieG9rMjAwZWxvMnBtbDI2cGV6c2V4In0.ab9ufVHvAoNC6Jmv2tc7Lg&limit=1'



// req({url:geo,json:true},(error,response)=>{
    

   


//     if(error)
//     {
//         console.log('Unable to connect to services...!')
//     }

// else if(response.body.error){
//     console.log('Unable to find location')
// }

// else if(response.body.features.length==0){
//     console.log('No such location exist on globe')
// }

//     else{
//         const latitude=response.body.features[0].center[1]
//         const longitude=response.body.features[0].center[0]
// console.log('longitude is ',longitude,' \nlatitude is ',latitude)
//     }
// })


// const geo='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiemVlc2hhbnphbXVyZCIsImEiOiJja2xieG9rMjAwZWxvMnBtbDI2cGV6c2V4In0.ab9ufVHvAoNC6Jmv2tc7Lg&limit=1'

