const data = {
  shopNames:[
      "shop1",
      "shop2",
      "shop3",
  ],
  items:[
      {
          name: "Carrot",
          shopPrices: [
              {
                  price:30,
                  minimum: false,
                  maximum: true,
              },
{
                  price:20,
                  minimum: true,
                  maximum: false,
              },
              {
                  price:"-",
                  minimum: false,
                  maximum: false,
              },
          ],
      },
{
          name: "Apple",
          shopPrices: [
              {
                  price:40,
                  minimum: false,
                  maximum: true,
              },
              {
                  price:35,
                  minimum: false,
                  maximum: false,
              },
              {
                  price:30,
                  minimum: true,
                  maximum: false,
              },
          ],
      },

{
          name: "Guava",
          shopPrices: [
              {
                  price:"-",
                  minimum: false,
                  maximum: false,
              },
              {
                  price:50,
                  minimum: false,
                  maximum: true,
              },
              {
                  price:10,
                  minimum: true,
                  maximum: false,
              },
          ],
      },
{
          name: "Papaya",
          shopPrices: [
              {
                  price:"-",
                  minimum: false,
                  maximum: false,
              },
              {
                  price:"-",
                  minimum: false,
                  maximum: false,
              },
              {
                  price:40,
                  minimum: true,
                  maximum: true,
              },
          ],
      },
]
}