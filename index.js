async function apiCall(){
    const res=await fetch('https://restcountries.com/v3.1/all')
    const countryDetails=await res.json()
    console.log(countryDetails.filter(data=>(data.continents.includes('Asia')&&data.region==='Asia')))
    console.log(countryDetails.filter(data=>(data.population<200000)))
    countryDetails.forEach(data=>{
        console.log('name :', data.name.common,'captial:', data.capital, 'flag:',data.flag)
    })
    const totalPopulationCountrys= countryDetails.reduce((prev,curr)=>{
        return prev+curr.population
    },0)
    console.log('Total Population of Countries :',totalPopulationCountrys)
    console.log('Country using USD :')
    countryDetails.forEach(data=>{
        if(data.currencies?.hasOwnProperty('USD')){
            console.log(data.name.common)
        }
    })

    
}

apiCall()