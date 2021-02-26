<template>
  <div class="col-lg-3 xxmm">
    <b-card
      class="bgee cdxe"
      border-variant=""
      :header="NameProduct"
      header-bg-variant="success"
      header-text-variant="white"
      align="center"
      style="height: 36rem"
    >
      <b-col md="auto">
        <b-card-img
          :src="img"
          alt="Image"
          class="rounded-0 photo1"
        ></b-card-img>
      </b-col>
      <b-card-text>Price : {{ Price }} Bath</b-card-text>
      Amount
      <b-form-spinbutton
        id="sb-small"
        size="sm"
        v-model="Amount"
        class="mb-2"
      ></b-form-spinbutton>
      <b-button variant="primary" @click="Order()">
        <b-icon icon="bag-check"></b-icon> Add to cart
      </b-button> </b-card
    ><br />
  </div>
</template>
<script>

export default {
  props: {
    NameProduct: String,
    img: String,
    Price: Number
  },
  data() {
    return {
      Amount: 1
    };
  },
  methods: {
    Order() {
      alert("AddComplete");
      this.$emit("Order", {
        NameProduct: this.NameProduct,
        Price: this.Price,
        Amount: this.Amount,
        Total: this.Price * this.Amount
      });
    }
  }
};

</script>
<style>
.photo1 {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 2.2rem;
}
.xxmm {
  height: 38rem;
}
.cdxe {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0.5rem;
}
</style>
