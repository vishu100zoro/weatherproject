const submitbtn=document.getElementById('submitbtn');
const cityName = document.getElementById('cityname')
const city_name=document.getElementById('city_name')

const temp_status= document.getElementById('temp_status')
const temp= document.getElementById('temp');
const datahide=document.querySelector('.middle_layer')
        


const getInfo= async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    // alert(hi);
    if(cityVal==="")
    {      
       city_name.innerHTML=`Pls write Name of city`;
       datahide.classList.add('data_hide');
    }
    else{
        
        try{

            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=e41cc9e105f342d0b3ae0b919e1f7531`;
            
            const response= await fetch(url)  ;
            const data = await response.json();
            const arrData=[data];
            console.log(arrData[0].weather[0].main);
            
            city_name.innerHTML=`${arrData[0].name},${arrData[0].sys.country}`;
            let t=arrData[0].main.temp-273;
            t=t.toFixed(2);
            temp.innerHTML=t;

            const tempmood=arrData[0].weather[0].main;
            if(tempmood==="Clear")
            {
               temp_status.innerHTML= '<i class="fa fa-sun" style="color:#eccc68" aria-hidden="true"></i>'
            }
            else
            if(tempmood==="Clouds")
            {
               temp_status.innerHTML= '<i class="fa fa-cloud" style="color:#f1f2f6" aria-hidden="true"></i>'
            }
            else
            if(tempmood==="Rain")
            {
               temp_status.innerHTML= '<i class="fa fa-cloud-rain" style="color:#a4b0be" aria-hidden="true"></i>'
            }
            else
            if(tempmood==="Haze")
            {
               temp_status.innerHTML= '<i class="fa-solid fa-smog"></i>'
            }
            else
            {
                temp_status.innerHTML= '<i class="fa fa-sun" style="color:#eccc68" aria-hidden="true"></i>'
             }

             datahide.classList.remove('data_hide');
        }

        catch{
                city_name.innerHTML=`city name error`;
                datahide.classList.add('data_hide');
        }
    }
}
submitbtn.addEventListener('click',getInfo);