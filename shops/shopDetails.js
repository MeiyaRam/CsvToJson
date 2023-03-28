const data = require('./data.js');
const { pick } = require('@laufire/utils/collection');

const getItemPrice = (shopItems, name) => {
   const item = (shopItems.find((items) => (items.name === name)));
   const prices = pick(data, "items").flat();
   const uniqueItems = prices.filter((item) => item.name == name);
   const priceDetails = item
      ? {
         price: item.price,
         minimum: item.price == Math.min(...pick(uniqueItems, "price")),
         maximum: item.price == Math.max(...pick(uniqueItems, "price")),
      }
      : {
         price: "-",
         minimum: false,
         maximum: false
      }

   return priceDetails;
};

const getShopPrices = (name) => data.map((shopItems) =>
   getItemPrice(shopItems.items, name));

const getItemDetails = (shopItems) => shopItems.map((item) => item.name);

const getItemNames = (shops) => [...new Set(shops.map((shop) => 
   getItemDetails(shop.items)).flat())];

const renderData = (shops) => {
   const shopNames = pick(data,"shopName");
   const items = getItemNames(shops).map((name) => ({
      name: name,
      shopPrices: getShopPrices(name),
   }));

   return { shopNames, items };
}

const main = () => {
   console.log(JSON.stringify(renderData(data), null, " "));
}

main();