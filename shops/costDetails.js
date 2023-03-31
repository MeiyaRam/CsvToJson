const data = require('./recursionData.js');
const { reduce } = require('@laufire/utils/collection');

const renderData = (costData) => {
  const innerCost = costData.tasks ? (costData.tasks.map((task) => renderData(task))) : '-';

  return {
    cost: (innerCost == '-') ? costData.cost :  costData.cost + reduce(innerCost,(acc,cur) => 
    acc+cur.cost,0),
    tasks: innerCost
  };
}

const main = () => {
  console.log(JSON.stringify(renderData(data), null, " "));
}

main();