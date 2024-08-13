<template>
  <div>
    <div ref="chinaMap" style="width: 100vw; height: 100vh; background: #010111;"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import {ref, onMounted} from 'vue';
import chinaGeoJson from './../other/china.json';

const chinaMap = ref<HTMLElement | null>(null);

onMounted(() => {
  // 获取地图数据，注册地图并初始化echarts图表
  echarts.registerMap('china', chinaGeoJson);

  if (chinaMap.value) {
    const chart = echarts.init(chinaMap.value);
    const option = {
      geo: {
        map: 'china',
        roam: true,
        scaleLimit: {
          min: 1,
          max: 30
        },
        label: {
          show: false,
          color: '#ff0000',
          fontStyle: 'normal',
          fontFamily: 'Microsoft YaHei',
          fontSize: 16,
        },
        itemStyle: {
          normal: {
            show: false,
            areaColor: 'transparent',
            shadowColor: '#ffffff',
            shadowBlur: 20,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            borderColor: '#006dff',
            borderWidth: 2,
          },
        },
        emphasis: {
          focus: 'self',
          itemStyle: {
            areaColor: '#ff0000'
          }
        }
      },
      tooltip: {
        show: true,
        fontStyle: 'normal',
        fontSize: 24,
      }
    };

    chart.setOption(option);

    chart.on('click', params => {
      console.log(params.name);
    });
  }
});
</script>