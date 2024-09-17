<template>
  <div class="tree">
    <!-- 渲染树的根节点 -->
    <TreeNode :node="rootNode" @updateTree="updateTree" />

    <!-- 获取所有节点的按钮 -->
    <button @click="getAllNodes">获取所有节点</button>

    <!-- 显示获取到的节点信息 -->
    <div class="node-list">
      <p v-for="(node, index) in allNodes" :key="index">
        节点 {{ index + 1 }}: {{ node.type }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import TreeNode from './TreeNode.vue';

// 节点类型定义
interface TreeNodeType {
  type: 'button' | 'leftBracket' | 'rightBracket';
  children: TreeNodeType[];
}

export default defineComponent({
  name: 'Tree',
  components: { TreeNode },
  setup() {
    // 初始化根节点
    const rootNode = reactive<TreeNodeType>({
      type: 'button', // 根节点为按钮
      children: [],
    });

    // 用于存储所有节点的列表
    const allNodes = ref<TreeNodeType[]>([]);

    // 遍历整棵树，收集所有节点
    const traverseTree = (node: TreeNodeType, nodes: TreeNodeType[]) => {
      nodes.push(node); // 添加当前节点
      node.children.forEach(child => traverseTree(child, nodes)); // 递归遍历子节点
    };

    // 获取所有节点
    const getAllNodes = () => {
      const nodes: TreeNodeType[] = [];
      traverseTree(rootNode, nodes);
      allNodes.value = nodes; // 更新allNodes
    };

    const updateTree = () => {
      // 树更新时调用，例如添加子节点后
    };

    return {
      rootNode,
      getAllNodes,
      allNodes,
      updateTree,
    };
  },
});
</script>

<style scoped>
.tree {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

button {
  margin-top: 20px;
}

.node-list {
  margin-top: 20px;
}
</style>
