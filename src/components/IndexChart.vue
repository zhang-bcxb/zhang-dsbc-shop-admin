<template>
  <el-card shadow="never">
    <template #header>
      <div class="flex justify-between">
        <span class="text-sm">订单统计</span>
        <div>
          <el-check-tag v-for="(item,index) in options" :key="index"
                        :checked="current == item.value"
                        style="margin-right: 8px"
                        @click="handleChoose(item.value)">
            {{ item.text }}
          </el-check-tag>
        </div>
      </div>
    </template>
    <div ref="el" id="chart" style="width: 100%;height: 300px;"></div>
  </el-card>
</template>
<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue';
import * as echarts from 'echarts';
import {useResizeObserver} from '@vueuse/core'

import {
  getStatistics3
} from "@api/index.js"

// 当前选中的类型
const current = ref("week")

// 三个类型参数
const options = [{
  text: "近1个月",
  value: "month"
}, {
  text: "近1周",
  value: "week"
}, {
  text: "近24小时",
  value: "hour"
}]

// 改变选中的类型
const handleChoose = (type) => {
  current.value = type
  getData()
}

// 创建图表
let myChart = null
// 页面渲染完之后，去创建
onMounted(() => {
  let chartDom = document.getElementById('chart');
  if (chartDom) {
    myChart = echarts.init(chartDom);
    // 获取数据
    getData()
  }
})

// 获取数据
function getData() {
  let option = {
    xAxis: {
      type: 'category',
      data: []
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  };

  // option && myChart.setOption(option);
  // 加载动画【显示】
  myChart.showLoading()
  getStatistics3(current.value).then(res => {
    // console.log(res)
    option.xAxis.data = res.x
    option.series[0].data = res.y
    myChart.setOption(option)
  }).finally(() => {
    // 加载动画【隐藏】
    myChart.hideLoading()
  })
}

// 页面被销毁之前【防止白屏】
onBeforeUnmount(() => {
  // 销毁实例
  if (myChart) echarts.dispose(myChart)
})

// 解决等比例缩放问题
const el = ref(null)
useResizeObserver(el, (entries) => myChart.resize())
</script>
