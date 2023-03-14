<template>
  <div>
    <el-input class="input" placeholder="搜索" v-model="search_value">
      <template #append>
        <el-button icon="Search"></el-button>
      </template>
    </el-input>
    <span class="tags">
      <el-button class="t-btn" type="primary" plain>EntryTerm </el-button>
      <el-button class="t-btn" type="primary" plain>Qualifiers </el-button>
      <el-button class="t-btn" type="primary" plain>Symptom </el-button>
      <el-button class="t-btn" type="primary" plain>CheckMethod </el-button>
    </span>
  </div>
  <div id="visi"></div>
</template>

<script setup name='visibility'>
import { data_nodes } from "../utils/static";
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, GraphChart } from "echarts/charts";
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from "echarts/components";
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from "echarts/features";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";
import { onMounted, ref } from "vue";

const search_value = ref('')

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  GraphChart,
]);
// 接下来的使用就跟之前一样，初始化图表，设置配置项
onMounted(() => {
  var myChart = echarts.init(document.getElementById("visi"));
  myChart.setOption({
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: "quinticInOut",
    series: [
      {
        type: "graph",
        layout: "none",
        symbolSize: 50,
        roam: true,
        label: {
          show: true,
          fontStyle: "normal",
          fontWeight: "100",
          color: "#111",
        },
        edgeSymbol: ["circle", "arrow"],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
          fontSize: 10,
        },
        data: data_nodes,
        // links: [],
        links: [
          // ======== anal
          {
            source: "COVID-19",
            target: "anal swab",
            label: {
              show: true,
              formatter: "hasCheckMethod",
            },
          },
          {
            source: "COVID-19",
            target: "nasopharyngeal swab",
            label: {
              show: true,
              formatter: "hasCheckMethod",
            },
          },
          {
            source: "COVID-19",
            target: "oropharyngeal swab",
            label: {
              show: true,
              formatter: "hasCheckMethod",
            },
          },
          // ======== anal
          // ======== hasSymptom
          {
            source: "COVID-19",
            target: "General",
            label: {
              show: true,
              formatter: "hasSymptom",
            },
            // lineStyle: {
            //   width: 5,
            //   curveness: 0.2,
            // },
          },
          {
            source: "General",
            target: "chills",
          },
          {
            source: "General",
            target: "cough",
          },
          {
            source: "General",
            target: "dyspnea",
          },
          {
            source: "General",
            target: "headache",
          },
          { source: "General", target: "loss of taste or smell" },
          { source: "General", target: "muscle pain" },
          { source: "General", target: "persistent tremor" },
          { source: "General", target: "sore throat" },
          // { source: 'General', target: "muscle pain" },
          // { source: 'General', target: "persistent tremor" },
          // { source: 'General', target: "sore throat" },
          {
            source: "COVID-19",
            target: "Severe",
            label: {
              show: true,
              formatter: "hasSymptom",
            },
            // lineStyle: {
            //   width: 5,
            //   curveness: 0.2,
            // },
          },
          { source: "Severe", target: "acute respiratory distress syndrome" },
          { source: "Severe", target: "heart attack" },
          { source: "Severe", target: "coagulation disorders" },
          { source: "Severe", target: "multiple cerebral infarctions" },
          { source: "Severe", target: "seizures" },
          { source: "Severe", target: "stroke" },
          { source: "Severe", target: "thrombosis" },

          {
            source: "COVID-19",
            target: "2019 Novel Coronavirus Disease",
            label: {
              show: true,
              formatter: "hasEntryTerm",
            },
          },
          {
            source: "COVID-19",
            target: "2019 Novel Coronavirus Infection",
            label: {
              show: true,
              formatter: "hasEntryTerm",
            },
          },
          {
            source: "COVID-19",
            target: "2019-nCoV Disease",
            label: {
              show: true,
              formatter: "hasEntryTerm",
            },
          },
          {
            source: "COVID-19",
            target: "congenital (CN)",
            label: {
              show: true,
              formatter: "hasQualifier",
            },
            // lineStyle: {
            //   width: 5,
            //   curveness: 0.2,
            // },
          },
          {
            source: "COVID-19",
            target: "blood (BL)",
            label: {
              show: true,
              formatter: "hasQualifier",
            },
            // lineStyle: {
            //   width: 5,
            //   curveness: 0.2,
            // },
          },
          {
            source: "COVID-19",
            target: "cerebrospinal fluid (CF)",
            label: {
              show: true,
              formatter: "hasQualifier",
            },
            // lineStyle: {
            //   width: 5,
            //   curveness: 0.2,
            // },
          },
          {
            source: "COVID-19",
            target: "chemically induced (CI)",
            label: {
              show: true,
              formatter: "hasQualifier",
            },
            // lineStyle: {
            //   width: 5,
            //   curveness: 0.2,
            // },
          },
        ],
        lineStyle: {
          opacity: 0.9,
          width: 2,
          curveness: 0,
        },
      },
    ],
  });
});
</script>

<style scoped>
#visi {
  width: 2000px;
  height: 2000px;
  background: none;
  z-index: 10;
}
.input {
  width: 200px;
  height: 30px;
  text-align: center;
}
.btn {
  width: 30px;
  height: 30px;
  margin-left: 10px;
}
.tags {
  width: 200px;
  height: 300px;
  background: none;
  box-shadow: none;
  margin-top: 10px;
  margin-left: 10px;
}
</style>