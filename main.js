// DOM
const india = document.getElementById('india');
const world = document.getElementById('world');


const tcases= document.getElementById('tcases');
const ncases= document.getElementById('ncases');
const death= document.getElementById('death');
const cured= document.getElementById('cured');
const acases = document.getElementById('acases');

const tcasesC= document.getElementById('tcasesC');
const ncasesC= document.getElementById('ncasesC');
const deathC= document.getElementById('deathC');
const curedC= document.getElementById('curedC');
const acasesC = document.getElementById('acasesC');

const tcasesI= document.getElementById('tcasesI');
const ncasesI= document.getElementById('ncasesI');
const deathI= document.getElementById('deathI');
const curedI= document.getElementById('curedI');
const acasesI = document.getElementById('acasesI');

const tcasesU= document.getElementById('tcasesU');
const ncasesU= document.getElementById('ncasesU');
const deathU= document.getElementById('deathU');
const curedU= document.getElementById('curedU');
const acasesU = document.getElementById('acasesU');

const tcasesS= document.getElementById('tcasesS');
const ncasesS= document.getElementById('ncasesS');
const deathS= document.getElementById('deathS');
const curedS= document.getElementById('curedS');
const acasesS = document.getElementById('acasesS');

const tcasesG= document.getElementById('tcasesG');
const ncasesG= document.getElementById('ncasesG');
const deathG= document.getElementById('deathG');
const curedG= document.getElementById('curedG');
const acasesG = document.getElementById('acasesG');

const currentYear = document.getElementById('year');
currentYear.innerText = new Date().getFullYear();

const updateUI = (data) => {  
    tcases.innerText = data.total_cases;
    ncases.innerText = data.new_cases;
    death.innerText = data.total_deaths;
    cured.innerText = data.total_recovered;
    acases.innerText = data.active_cases;  
}

const updateWorld = (data) => {  
    tcasesC.innerText = data[203].cases;
    ncasesC.innerText = data[203].new_cases;
    deathC.innerText = data[203].deaths;
    curedC.innerText = data[203].total_recovered;
    acasesC.innerText = data[203].active_cases;   
    
    tcasesI.innerText = data[1].cases;
    ncasesI.innerText = data[1].new_cases;
    deathI.innerText = data[1].deaths;
    curedI.innerText = data[1].total_recovered;
    acasesI.innerText = data[1].active_cases;  

    tcasesU.innerText = data[0].cases;
    ncasesU.innerText = data[0].new_cases;
    deathU.innerText = data[0].deaths;
    curedU.innerText = data[0].total_recovered;
    acasesU.innerText = data[0].active_cases;  

    tcasesS.innerText = data[2].cases;
    ncasesS.innerText = data[2].new_cases;
    deathS.innerText = data[2].deaths;
    curedS.innerText = data[2].total_recovered;
    acasesS.innerText = data[2].active_cases;  

    tcasesG.innerText = data[3].cases;
    ncasesG.innerText = data[3].new_cases;
    deathG.innerText = data[3].deaths;
    curedG.innerText = data[3].total_recovered;
    acasesG.innerText = data[3].active_cases;  


}

let indiaData;
const getIndiaData = async () => {
    const response = await fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=India", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "ac02902b76msh91aad61f042a4b7p1febcdjsnca61d3f86042"
        }
    })
    const data = await response.json(); 
    indiaData = data.latest_stat_by_country[0];
    return (indiaData);
}  

    getIndiaData().then((data) =>{
        // console.log(data);
        updateUI(data);
    } 
); 

const getCountryData = async () => {
    const response = await fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "ac02902b76msh91aad61f042a4b7p1febcdjsnca61d3f86042"
        }
    }) 
    const data = await response.json(); 
    return(data.countries_stat)
} 

getCountryData().then((data) => {
    console.log(data); 
    updateWorld(data);
});



