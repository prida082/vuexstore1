import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {}
// });

export default new Vuex.Store({
  data() {
    return {
      Total: 0,
      Menuitem: [
        {
          NameProduct: "coffee",
          img:
            "https://images.wallpaperscraft.com/image/coffee_book_glasses_140830_720x1280.jpg",
          Price: 30
        },
        {
          NameProduct: "candy",
          img:
            "https://images.wallpaperscraft.com/image/chocolate_candy_sweets_106254_720x1280.jpg",
          Price: 5
        },
        {
          NameProduct: "apple",
          img:
            "https://images.wallpaperscraft.com/image/apples_branch_leaves_background_85594_720x1280.jpg",
          Price: 6
        },
        {
          NameProduct: "dessert",
          img:
            "https://images.wallpaperscraft.com/image/dessert_cake_cake_raspberries_sweet_fruit_blueberry_black_currant_food_cream_93481_720x1280.jpg",
          Price: 55
        },
        {
          NameProduct: "marshmallow",
          img:
            "https://images.wallpaperscraft.com/image/marshmallow_spiral_pastel_123683_720x1280.jpg",
          Price: 50
        },
        {
          NameProduct: "macaroons",
          img:
            "https://images.wallpaperscraft.com/image/macaroons_almond_biscuits_pastries_colorful_119226_720x1280.jpg",
          Price: 40
        },
        {
          NameProduct: "lemons",
          img:
            "https://images.wallpaperscraft.com/image/lemons_fruit_citrus_197300_720x1280.jpg",
          Price: 5
        },
        {
          NameProduct: "pineapple",
          img:
            "https://images.wallpaperscraft.com/image/pineapple_fruit_shade_113937_720x1280.jpg",
          Price: 0
        }
      ],
      select: [],
      Data: []
    };
  },
  methods: {
    //คิดยอดทั้งหมด
    submit() {
      this.Data = this.select;
      this.Total = 0;
      for (var i = 0; i < this.Data.length; i++) {
        this.Total = this.Total + this.Data[i].Total;
      }
    },
    cleardata() {
      this.Total = 0;
      this.Data = [{}];
      this.select = [{}];
    },
    menuorder(value) {
      this.select = value;
    },
    AddMenu(value) {
      this.Menuitem.push(value);
    }
  }
});
