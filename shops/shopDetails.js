const renderData = require('./data.js');

const getItemDetails = (shopItems) => shopItems.map((item) => item.name);

const getItemPrice = (shopItems, uniqueName) => {
   const price = (shopItems.find((item) => item.name === uniqueName) || {price:'-'})?.price;

   return {
      price,
      minimum: true,
      maximum: false
   };
}

const display = (renderData) => {
   const shopNames = renderData.map((shop) =>shop.shopName);
   
   const shopItems = renderData.map((shop) =>
      getItemDetails(shop.items)
   ).flat();

   const uniqueItem = [...new Set(shopItems)];

   const items = uniqueItem.map((uniqueName) => ({
      name: uniqueName,
      shopPrices: renderData.map((shopItems) =>
         getItemPrice(shopItems.items, uniqueName))
   }));
   
   return { shopNames, items };
}

const main = () => {
   console.log(JSON.stringify(display(renderData), null, " "));
}

main();