<template>
  <div class="tree-node">
    <!-- 根据节点状态展示相应的内容 -->
    <span v-if="node.type === 'leftBracket'">(</span>
    <span v-if="node.type === 'rightBracket'">)</span>
    <button v-if="node.type === 'button'" @click="handleButtonClick">按钮</button>

    <!-- 子节点列表 -->
    <div v-if="node.children.length > 0" class="children">
      <TreeNode
          v-for="(child, index) in node.children"
          :key="index"
          :node="child"
          @updateTree="emitUpdateTree"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

// 定义节点的类型
interface TreeNodeType {
  type: 'button' | 'leftBracket' | 'rightBracket'; // 节点类型
  children: TreeNodeType[];
}

export default defineComponent({
  name: 'TreeNode',
  props: {
    node: {
      type: Object as PropType<TreeNodeType>,
      required: true,
    },
  },
  methods: {
    // 按钮点击事件，生成五个子节点
    handleButtonClick() {
      if (this.node.type === 'button' && this.node.children.length === 0) {
        this.node.children.push(
            { type: 'button', children: [] },
            { type: 'leftBracket', children: [] },
            { type: 'button', children: [] },
            { type: 'rightBracket', children: [] },
            { type: 'button', children: [] }
        );
        this.emitUpdateTree(); // 通知父组件更新树结构
      }
    },
    emitUpdateTree() {
      this.$emit('updateTree');
    }
  }
});
</script>

<style scoped>
.tree-node {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.children {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}
</style>
