const csvToJson = require('csvtojson');

const findDifference = (population) => 
  Math.round(((Number(population.estimate2022)-Number(population.estimate2011)))*100)/100;

const display = (populations) => {
  const populationDifference = populations.map((population,index,array) => ({
    ...population,
    difference : findDifference(population),
    percentage : Math.round(((findDifference(population)/population.estimate2011)*100)*100)/100,
  }));

  console.log("Maximum Populations in Estimate2022 - "+Math.max(...populations.map(population => population.estimate2022)));
  console.log("Minimum Populations in Estimate2022 - "+Math.min(...populations.map(population => population.estimate2022)));
  console.log(populations.reduce((acc,cur) => ({
    totalPopulation : (acc.totalPopulation+Number(cur.estimate2022))
}),{totalPopulation:0})); 

return populationDifference;
}

const main = async () => {
  const populations = await csvToJson().fromFile('./populationData.csv');
  console.table(display(populations));
}

main();