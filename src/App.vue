<template>
  <div id="app" class="bgbb">
    <nav class="navbar navbar-dark bgaa">
      <div id="nav">
        <router-link to="/">
          <b-icon
            icon="bag-check"
            style="width: 36px; height: 36px"
          ></b-icon>
        </router-link>
        |
        <h3><router-link to="/">CatStore</router-link></h3>
      </div>
      <div>
        <router-link to="/about">
          <b-button variant="primary"
            @click="submit()"
          >
           confirm
           </b-button>&nbsp; 
          <b-button variant="success"
            @click="cleardata()"
          >
            Clear
          </b-button>
        </router-link>
      </div>
    </nav>
    <router-view
      :Total="Total"
      :User="User"
      :Menuitem="Menuitem"
      :Data="Data"
      @Order="menuorder"
      @OrderAdmin="AddMenu"
    />
  </div>
</template>
<script>
export default {
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
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0076ec;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #f74bcc;
}
.addnav {
  color: rgb(44, 0, 94);
}
.bgaa {
    background-color: #07021f !important;
}
.bgbb {
    background-color: #f3aef0 !important;
}
.bgcc {
    background-color: #000000 !important;
}
.bgdd {
    background-color: #c20088 !important;
}
.bgee {
    background-color: #520658 !important;
}
</style>
