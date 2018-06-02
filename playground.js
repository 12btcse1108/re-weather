import axios from 'axios';

abc = () =>{
  axios.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=bengaluru&types=geocode&language=fr&key=AIzaSyBo6aZUg9mqcQ0EaJCwtpv8zLgh4MbQxaM',(req,res)=>{
    console.log(req);
  })
}

abc()
