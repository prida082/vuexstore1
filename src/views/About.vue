<template>
  <div>
    <user :Total="Total" :Data="Data" />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Orders</th>
          <th scope="col">Price</th>
          <th scope="col">Amount</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(mi, index) in Data" :key="index">
          <td>{{ mi.NameProduct }}</td>
          <td>{{ mi.Price }}</td>
          <td>{{ mi.Amount }}</td>
          <td>{{ mi.Total }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import User from "@/components/User.vue";

export default {
  name: "Home",
  components: {
    User
  },
  props: {
    Total: Number,
    Data: Array
  },
  data() {
    return {};
  }
};
</script>
