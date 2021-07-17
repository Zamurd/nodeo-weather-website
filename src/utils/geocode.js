var req=require('postman-request')
const geocode=(address,callback)=>{

    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiemVlc2hhbnphbXVyZCIsImEiOiJja2xieG9rMjAwZWxvMnBtbDI2cGV6c2V4In0.ab9ufVHvAoNC6Jmv2tc7Lg&limit=1'
    
    req({url:url,json:true},(error,response)=>{
    
    if(error){
        callback('Unable to connect to the services',undefined)
    }
    
    else if(response.body.features.length===0){
        callback('unable to find location',undefined)
    
    
    }
    
    else{


        

    
        // data={
        //     lat:response.body.features[0].center[1],
        //     long:response.body.features[0].center[0],
        //     lname:response.body.features[0].place_name,
    
        // }
    
        callback(undefined,{latitude:response.body.features[0].center[1],longitude:response.body.features[0].center[0],location:response.body.features[0].place_name})
    
    }
    
    
    })
    
    }
    

    module.exports=geocode