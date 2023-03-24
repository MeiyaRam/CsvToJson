const renderData = require('./data.js');

const getMinimumStatus = (array, currentPrice) => {
   const minPrice = array.reduce((acc, cur) =>
      !Number(cur.price) || (acc < cur.price) ? acc : cur.price);
   const minStatus = (minPrice == currentPrice) ? true : false;
   
   return minStatus;
}

const getMaximumStatus = (array, currentPrice) => {
   const maxPrice = array.reduce((acc, cur) =>
      !Number(cur.price) || (acc > cur.price) ? acc : cur.price, 0);
   const maxStatus = (maxPrice == currentPrice) ? true : false;

   return maxStatus;
}

const getShopPriceDetails = ({ price }, index, array) => {
   return {
      price: price,
      minimum: getMinimumStatus(array, price),
      maximum: getMaximumStatus(array, price),
      
   };
}

const getItemDetails = (shopItems) => shopItems.map((item) => item.name);

const getItemPrice = (shopItems, uniqueName) => {
   const price = (shopItems.find((item) => item.name === uniqueName) || { price: "-" })?.price;

   return { price };
}

const getShopPrices = (uniqueName) => renderData.map((shopItems) =>
   getItemPrice(shopItems.items, uniqueName));

const display = (renderData) => {
   const shopNames = renderData.map((shop) => shop.shopName);

   const shopItems = renderData.map((shop) =>
      getItemDetails(shop.items)
   ).flat();

   const uniqueItem = [...new Set(shopItems)];

   const items = uniqueItem.map((uniqueName) => ({
      name: uniqueName,
      shopPrices: getShopPrices(uniqueName).map(getShopPriceDetails),

   }));

   return { shopNames, items };
}

const main = () => {
   console.log(JSON.stringify(display(renderData), null, " "));
}

main();