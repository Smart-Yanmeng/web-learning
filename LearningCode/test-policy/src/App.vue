<template>
  <div id="app">
    <!-- 渲染树形组件 -->
    <TreeNode :node="rootNode" />

    <!-- 获取所有叶子节点按钮 -->
    <button @click="getLeafNodes">获取所有叶子节点</button>

    <!-- 显示所有叶子节点 -->
    <div v-if="leafNodes.length > 0">
      <h3>所有叶子节点:</h3>
      <ul>
        <li v-for="(node, index) in leafNodes" :key="index">
          {{ node }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TreeNode from './components/TreeNode.vue';

interface TreeNodeType {
  type: 'button' | 'leftBracket' | 'rightBracket';
  children: TreeNodeType[];
}

export default defineComponent({
  name: 'App',
  components: {
    TreeNode,
  },
  setup() {
    // 树的根节点
    const rootNode = ref<TreeNodeType>({
      type: 'button',
      children: [],
    });

    // 存储所有叶子节点
    const leafNodes = ref<TreeNodeType[]>([]);

    // 获取所有叶子节点
    const getLeafNodes = () => {
      const findLeafNodes = (node: TreeNodeType) => {
        if (node.children.length === 0) {
          leafNodes.value.push(node);
        } else {
          node.children.forEach(findLeafNodes);
        }
      };

      leafNodes.value = []; // 清空之前的叶子节点
      findLeafNodes(rootNode.value);
    };

    return {
      rootNode,
      leafNodes,
      getLeafNodes,
    };
  },
});
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
