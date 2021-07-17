const path=require('path')
const express=require('express')

//weather app

const geo=require('./utils/geocode')
const forcast=require('./utils/forecast')

//PARITALS INCLUDING NAVBARS FOOTERS

const hbs=require('hbs')
const { title } = require('process')
const forecast = require('./utils/forecast')



// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))

//define path for express config
const templatesPath=path.join(__dirname,'../templates/views')
const publicDirectoryPath=path.join(__dirname,'../public')
const partialsPath=path.join(__dirname,'../templates/partials')

hbs.registerPartials(partialsPath)


const app=express()
//setup handle bars engine and views location
app.set('views',templatesPath)
app.set('view engine','hbs') 

// const viewPath=path.join(__dirname,'../templates')
// app.set('views',viewPath)

//to handle bar setup navigation bars dynnamic page part included in all pages

//setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('',(re,res)=>{
    res.render('index',{
        title:'weather',
        createdBy:'Zeeshan Zamurd'
    })
})


app.get('/about',(req,res)=>{

    res.render('about',({
        title:'About',
        createdBy:'Zeeshan Zamurd'
    }))

})


app.get('/weather',(req,res)=>{
address=req.query.address

    if(!req.query.address){

        return res.send({
            error:'Address field cant be empty',
        })

    }



    geo(req.query.address,(error,{latitude,longitude,location}={ })=>{

        if(error){
            return res.send({'error':error})
        }

       
            // res.send({
            //     latitude:data.lat,
            //     longitude:data.long,
            //     location:data.lname
            // })
            // console.log(data)

            forecast(latitude,longitude,(error,{temperature,weather})=>{

                if(error){
                   return res.send({'error':error})
                }
               
                    res.send({
                        location:location,
                        temperature,temperature,
                        weather_description:weather,
                        address:req.query.address,

                    })
                

            })
        

    })



        // res.send({
        //     forecast:'Fogy',
        //     Location:'Rawalpindi',
        //     address:req.query.address
        // })


    

   
    // res.send(
    //     {forecast:'28C',
    //     location:'Rawalpindi punjab pakistan'})
})




// app.get('/products',(req,res)=>{

//     // console.log(req.query.name)

//     if(!req.query.search){

//         return res.send({
//             error:'You must provide search term'
//         })
//     }
//     console.log(req.query)
//     res.send({
//         products:[]
//     })
// })


app.get('/help',(req,res)=>{

    res.render('help',({
        message:'This is some helpfull text',
        title:'Help',
        createdBy:'Zeeshan Zamurd'
    }))
})

app.get('/help/*',(req,res)=>{
    res.render('_404',{
        title:'404',
        error:'Help artticale not found',
        createdBy:'Zeeshan Zamurd'
    })
})

app.get('*',(req,res)=>{
res.render('_404',{
    title:'404',
    error:'Page not found',
    createdBy:'Zeeshan Zamurd'
    
})
})

app.listen(3000,()=>{
    console.log('server is up on port 3000cd')
})
//take two arguemtn route and function 
// request that functoion recieve and response is what will be sent back in response


// app.get('/help',(req,res)=>{

//     // console.log('Hello i am helper')
// //     res.send({name:'Zeeshan Zamurd',
// // Father_Name:'Zamurd Khan',
// // age:'22'})

// res.send([{name:'Zeeshan Zamurd'},
// {name:'Nouman Zamurd'}])

// })

// const aboutPage=path.join(__dirname,'../public/about.html')
// app.use(express.static(aboutPage))

// app.get('/about',(req,res)=>{

//     // console.log('Hello i am helper')
//     res.send('<h1>About</h1>')
// })



//app.com
//app.com/help
//app.com/about


//to start server
