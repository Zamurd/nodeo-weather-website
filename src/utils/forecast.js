var req=require('postman-request')


// const url='http://api.weatherstack.com/current?access_key=7c52bca0907e3d0e242b4e56da8bd3d8&query='+lat+','+long+'&units=f'



const forecast=(lat,long,callback)=>{
    // console.log('latitude',lat)
    // console.log(long)
    // lat='33.5651'
    // long='73.0169'
    const url='http://api.weatherstack.com/current?access_key=7c52bca0907e3d0e242b4e56da8bd3d8&query='+lat+','+long+''


    // const url='http://api.weatherstack.com/current?access_key=7c52bca0907e3d0e242b4e56da8bd3d8&query=33.600,73.067'
    // console.log(url)

req({url,json:true},(error,response)=>{

    if(error){
        callback('enable to connect to the services..!',undefined)
    }else if(response.body.error)
    {
        callback('not able able to find location',undefined)
    }
    else{


       



        // data={
        //     temperature:response.body.current.temperature,
        //     feelslike:response.body.current.feelslike,
        //     Weatherdescription:response.body.current.weather_descriptions[0]
        // }
        // console.log(response.body)

        // callback(undefined,'temperature is '+data.temperature+' it feellikes '+data.feelslike +' weather is '+data.Weatherdescription)

        console.log("forecast response",response.body.location.timezone_id)

        // const time=response.body.location.timezone_id;
        // console.log(typeof(time))
        // callback(error,{temperature:response.body.current.temperature,weather:response.body.current.weather_descriptions[0],time})

        callback(error,response)

// console.log('Temperature is ',response.body.current.temperature,' and feels like ',response.body.current.feelslike,' Weather description ',response.body.current.weather_descriptions[0])

}})
}

module.exports=forecast


