  // create a request and request variable stores an ml http request

  var request=new XMLHttpRequest();   

  // open a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true); 

 // send the request
request.send(); 

 // Event Listener and load the response once its ready
request.onload=function()                                     


{
var countryData=JSON.parse(this.response)
console.log(countryData);

console.log("1.Get all the countries from Asia continent / “region” using Filter function");

let AsianCountries=countryData.filter(country =>country.region=="Asia")
console.log(AsianCountries);
//*****************************************************************************************************************************************************//
console.log("2.Get all the countries with population of less than 2 lacs using Filter function");

let Lessthan2lacPop= countryData.filter(country =>country.population < 200000)
console.log(Lessthan2lacPop);
//*****************************************************************************************************************************************************//
console.log("3.Print the following details name, capital, flag using forEach function");

console.log("1.This is For method");
for(i=0;i<countryData.length;i++)
{
   console.log("Name:", countryData[i].name,"Capital:",countryData[i].capital ,"flag",countryData[i].flag);
    
}

console.log("1.This is Foreach method");

countryData.forEach(country => {
    console.log("Name:", country.name,"Capital:",country.capital ,"flag",country.flag);
    
});
//*****************************************************************************************************************************************************//
console.log("4.Print the total population of countries using reduce function");

let total=countryData.reduce((acc,country)=>{
    return acc + country.population;
},0);
console.log(total);
//*****************************************************************************************************************************************************//
console.log("5.Countries Using USD dollars");

var a=countryData.filter(country =>
    {
    let b=country.currencies;
for(let ele of b)
{
    if(ele.code=="USD")
    return country;
    
}
})
    
console.log(a);


};
