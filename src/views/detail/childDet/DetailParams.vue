<template>
  <div v-if="Object.keys(detailParams).length !== 0" class="detailparams">
    <div class="params-rule">
      <h3>{{ detailParams.rule.key }}</h3>
      <p>{{ detailParams.rule.disclaimer }}</p>
      <table>
        <tr v-for="(item, index) in detailParams.rule.tables[0]" :key="index">
          <td v-for="(v, i) in item" :key="i+'v'">{{ v }}</td>
        </tr>
      </table>
    </div>
    <div class="params-info">
      <h3>{{ detailParams.info.key }}</h3>
      <table>
        <tr v-for="(item, index) in detailParams.info.set" :key="index">
          <td>{{ item.key }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </table>
    </div>
    <div class="params-img" v-if="detailParams.image">
      <img :src="detailParams.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  props: {
    detailParams: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      paramsList: []
    };
  }
};
</script>
<style scoped>
.detailparams {
  font-size: 14px;
  border-top: 5px solid #f2f5f8;
}
.params-rule h3 {
  padding: 10px 0;
  text-align: center;
}
.params-rule p {
  color: var(--color-high-text);
  border-bottom: 1px solid #f2f5f8;
  padding: 10px;
}
.params-rule td {
  /* text-align: center; */
  padding: 10px 0;
  border-bottom: 1px solid #f3f5f8;
}
.params-info h3 {
  padding: 10px 0;
  text-align: center;
  border-bottom: 1px solid #f2f5f8;
}
.detailparams table {
  width: 100%;
  padding: 0 10px;
  margin: 0;
}
.params-info td {
  padding: 10px 0;
  border-bottom: 1px solid #f3f5f8;
}
.params-info td:last-child {
  color: var(--color-high-text);
  padding-left: 40px;
}
.params-img img {
  width: 100%;
}
</style>
