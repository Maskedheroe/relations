<template>
  <div class="main">
    <div class="divider"></div>
    <div class="category" v-for="(cate, index) in category" :key="index">
      <li class="cate-item">{{ cate }}</li>
    </div>
    <div class="search">
      <el-input class="w-50 m-2" size="large" placeholder="搜索术语资源" v-model="search_value">
        <template #append
          ><el-button type="primary" :icon="Search">Search</el-button></template
        >
      </el-input>
      <div class="head">
        <span class="title">COVID-19</span>
        <span class="mintitle">MeSH Descriptor Data 2023</span>
      </div>
      <dl class="detail" v-for="(item, index) in detailList" :key="index">
        <dt class="name">{{ item.name }}</dt>
        <dd class="value" v-for="(v, i) in item.value" :key="i">{{ v }}</dd>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts" name="main">
import { reactive, ref } from "vue";
import { detail } from "../utils/static";
const category = reactive([
  "Anatomy [A]",
  "Organisms [B]",
  "Diseases [C]",
  "Chemicals and Drugs [D]",
  "Analytical, Diagnostic and Therapeutic Techniques, and Equipment [E]",
  "Psychiatry and Psychology [F]",
  "Phenomena and Processes [G]",
  "Disciplines and Occupations [H]",
  "Anthropology, Education, Sociology, and Social Phenomena [l]",
  "Technology, Industry, and Agriculture [J]",
  "Humanities [K]",
  "Information Science [L]",
  "Named Groups [M]",
  "Health Care [N]",
  "Publication Characteristics [V]",
  "Geographicals [Z] ",
]);
const detailList = ref(detail);
const search_value = ref('')
</script>

<style scoped>
.main {
  position: relative;
}
.divider {
  margin-bottom: 60px;
}
.category {
  position: relative;
  left: 50px;
  top: 80px;
  width: 340px;
}
.cate-item {
  text-decoration: none;
  list-style: none;
  color: rgb(96, 154, 190);
}
.search {
  width: 700px;
  position: absolute;
  top: 0;
  right: 100px;
}
.head {
  margin-top: 24px;
}
.title {
  font-weight: 600;
  font-size: 30px;
  color: rgb(83, 82, 82);
}
.mintitle {
  margin-left: 10px;
  font-weight: 100;
  color: rgb(83, 82, 82);
}
.name {
  float: left;
  width: 160px;
  clear: left;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 900;
  color: rgb(83, 82, 82);
}
.value {
  display: block;
  margin-inline-start: 40px;
  margin-left: 180px;
  font-weight: 400;
  font-size: 14px;
  color: rgb(83, 82, 82);
}
</style>
