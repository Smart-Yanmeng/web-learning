<template>
  <div class="tree">
    <!-- 渲染树的根节点 -->
    <TreeNode :node="rootNode" @updateTree="updateTree" />

    <!-- 获取叶子节点的按钮 -->
    <button @click="getLeafNodes">获取叶子节点</button>

    <!-- 显示获取到的叶子节点信息 -->
    <div class="node-list">
      <p v-for="(node, index) in leafNodes" :key="index">
        叶子节点 {{ index + 1 }}: {{ node.type }}
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

    // 用于存储所有叶子节点的列表
    const leafNodes = ref<TreeNodeType[]>([]);

    // 遍历整棵树，收集叶子节点
    const traverseTreeForLeaves = (node: TreeNodeType, leaves: TreeNodeType[]) => {
      if (node.children.length === 0) {
        // 如果没有子节点，则是叶子节点
        leaves.push(node);
      } else {
        // 递归遍历子节点
        node.children.forEach(child => traverseTreeForLeaves(child, leaves));
      }
    };

    // 获取叶子节点
    const getLeafNodes = () => {
      const leaves: TreeNodeType[] = [];
      traverseTreeForLeaves(rootNode, leaves);
      leafNodes.value = leaves; // 更新叶子节点列表
    };

    const updateTree = () => {
      // 树更新时调用，例如添加子节点后
    };

    return {
      rootNode,
      getLeafNodes,
      leafNodes,
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
