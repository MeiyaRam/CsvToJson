const data = require('./data.js');

const getMinimumStatus = (prices, currentPrice) => {
   const minPrice = prices.reduce((acc, cur) =>
      (!Number(cur) || (acc < cur)) ? acc : cur);
   const minStatus = (minPrice == currentPrice) ? true : false;

   return minStatus;
}

const getMaximumStatus = (prices, currentPrice) => {
   const maxPrice = prices.reduce((acc, cur) =>
      (!Number(cur) || (acc > cur)) ? acc : cur, 0);
   const maxStatus = (maxPrice == currentPrice) ? true : false;

   return maxStatus;
}

const getShopPriceDetails = (price, index, prices) => ({
      price: price,
      minimum: getMinimumStatus(prices, price),
      maximum: getMaximumStatus(prices, price),
});

const getItemDetails = (shopItems) => shopItems.map((item) => item.name);

const getItemPrice = (shopItems, name) => (shopItems.find((item) => item.name === name) || { price: "-" })?.price;

const getShopPrices = (name) => data.map((shopItems) =>
   getItemPrice(shopItems.items, name));

const getShopList = (name) => getShopPrices(name).map(getShopPriceDetails);

const getShopItems = (shops) => [... new Set(shops.map((shop) =>
   getItemDetails(shop.items)).flat())];

const display = (shops) => {
   const shopNames = shops.map((shop) => shop.shopName);
   const items = getShopItems(shops).map((name) => ({
      name: name,
      shopPrices: getShopList(name),
   }));

   return { shopNames, items };
}

const main = () => {
   console.log(JSON.stringify(display(data), null, " "));
}

main();