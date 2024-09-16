<template>
  <div class="tree">
    <TreeNode :node="rootNode" @updateTree="updateTree" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import TreeNode from './TreeNode.vue';

// 根节点类型
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

    // 更新树的逻辑
    const updateTree = () => {
      // 这里可以处理任何需要在树更新时执行的逻辑
    };

    return {
      rootNode,
      updateTree,
    };
  },
});
</script>

<style scoped>
.tree {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
