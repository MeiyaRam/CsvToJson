const data = require('./recursionData.js');

let findCost = 0;

const renderData = (costData) => {
  const innerCost = costData.tasks ? (costData.tasks.map((task) => renderData(task))) : '-';
  findCost += costData.cost;

  return {
    cost: (innerCost == '-') ? costData.cost : findCost,
    tasks: innerCost
  };
}

const main = () => {
  console.log(JSON.stringify(renderData(data), null, " "));
}

main();