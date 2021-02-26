<template>
  <div>
    <div class="card bg-1 mb-3" style="max-width: 120rem">
      <h3><div class="card-header">UserOrder</div></h3>
      <div class="card-body">
        <form>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                v-model="Name"
              />
            </div><br/>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Address/Telephone"
                v-model="Tel"
              />
            </div>
        </form><br/>

        <div class="row justify-content-end">
          <h4 class="col-lg-4">Total : {{ Total }} Bath</h4>
          <button type="button " class="btn btn-success mr-4" @click="sum()">
            BUY
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Total: Number,
    Data: Array
  },
  data() {
    return {
      Name: "",
      Tel: ""
    };
  },
  methods: {
    //ออกบิล
    sum() {
      alert(
        "Name : " +
          this.Name +
          " Tel. : " +
          this.Tel +
          " Total : " +
          this.Total +
          " ฿"
      );
    }
  }
};
</script>

<style scoped>
.bg-1 {
  background-color: rgb(109, 0, 64);
  color: rgb(255, 255, 255);
}
.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.5rem;
}
</style>