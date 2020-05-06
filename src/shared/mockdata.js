export default {
  restaurantSearcMatches: [
    {
      id: 1001,
      name: "Miyamae Sushi",
      address: "5726 University Blvd, Vancouver, BC",
      tags: ["Japanese", "Comfort"],
      orderType: ["takeout", "dinein", "delivery"],
      priceRange: 1,
      photo: require("../shared/lib/components/restaurant1.png"),
      openTime: 800,
      closeTime: 2200,
      lattitude: 0,
      longitude: 0,
    },
    {
      id: 1002,
      name: "Burgoo Point Grey",
      address: "4434 W 10th Ave, Vancouver, BC",
      tags: ["American", "Comfort"],
      orderType: ["takeout", "dinein"],
      priceRange: 2,
      photo: require("../shared/lib/components/restaurant2.png"),
      openTime: 1100,
      closeTime: 2130,
      lattitude: 0,
      longitude: 0,
    },
  ],

  menu: [
    {
      name: "Favourites",
      items: [
        {
          id: "0003",
          name: "Katsu Don",
          description: "Deep fried pork cutlet and egg on rice",
          price: 7.95,
        },
        {
          id: "0012",
          name: "Unagi Don",
          description: "BBQ eel with sauce on rice",
          price: 8.95,
        },
      ],
    },
    {
      name: "Bento Box",
      items: [
        {
          id: "0021",
          name: "Bento Box 1",
          description: "Beef yakisoba, california roll, salad, miso soup",
          price: 10.95,
        },
        {
          id: "0022",
          name: "Bento box 2",
          description:
            "Teriyaki chicken on rice, 3 pcs sashimi, sald, miso soup",
          price: 11.95,
        },
      ],
    },
    {
      name: "Appetizers",
      items: [],
    },
  ],

  account: {
    userId: "ssa005",
    email: "liuweitao1994@gmail.com",
    name: "David",
    phoneNum: "7785588737",
    currentOrders: [
      {
        invoiceNum: 100000703,
        orderNum: 758,
        restaurantName: "Miyamae Sushi",
        items: ["Katsu Don", "Salmon Nigiri"],
        readyTime: 10,
        orderType: "takeout",
        contact: "(604)563-5888",
      },
      {
        invoiceNum: 100000704,
        orderNum: 296,
        restaurantName: "Burgoo Point Grey",
        items: ["Burgoo"],
        readyTime: 25,
        orderType: "dinein",
        contact: "(604)221-7839",
      },
    ],
    pastOrders: [
      {
        invoiceNum: 100000502,
        restaurantName: "Miyamae Sushi",
        items: ["Oyako Don", "Miso Soup"],
        orderDate: "20171023",
        orderType: "takeout",
      },
      {
        invoiceNum: 100000619,
        restaurantName: "Miyamae Sushi",
        items: ["Bento Box 2", "Bento Box 3", "Bento Box 3"],
        orderDate: "20171101",
        orderType: "takeout",
      },
    ],
  },
};
