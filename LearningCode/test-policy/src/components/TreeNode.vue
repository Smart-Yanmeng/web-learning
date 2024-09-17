<template>
  <div class="tree-layer">
    <!-- 当前层节点 -->
    <div class="tree-node">
      <!-- 下拉选择框 -->
      <select v-if="node.type === 'button'" v-model="selectedAction">
        <option value="">请选择操作</option>
        <option value="and">AND</option>
        <option value="or">OR</option>
        <option value="clear">清空子节点</option>
      </select>

      <!-- 左括号 -->
      <span v-else-if="node.type === 'leftBracket'">(</span>

      <!-- 右括号 -->
      <span v-else-if="node.type === 'rightBracket'">)</span>

      <!-- 添加按钮 -->
<!--      <button v-if="node.type === 'button'" @click="generateChildren('button')">添加</button>-->
    </div>

    <!-- 递归渲染子节点 -->
    <div v-if="node.children.length > 0" class="children-layer">
      <TreeNode
          v-for="(child, index) in node.children"
          :key="index"
          :node="child"
          @removeChildNode="removeChildNode(index)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

interface TreeNodeType {
  type: 'button' | 'leftBracket' | 'rightBracket';
  children: TreeNodeType[];
}

export default defineComponent({
  name: 'TreeNode',
  props: {
    node: {
      type: Object as () => TreeNodeType,
      required: true,
    },
  },
  emits: ['removeChildNode'],
  setup(props, { emit }) {
    const selectedAction = ref('');

    // 监听选项的变化
    watch(selectedAction, (newValue) => {
      if (newValue === 'and') {
        generateChildren('AND');
        selectedAction.value = ''; // 清空选择框
      } else if (newValue === 'or') {
        generateChildren('OR');
        selectedAction.value = ''; // 清空选择框
      } else if (newValue === 'clear') {
        clearChildren();
        selectedAction.value = ''; // 清空选择框
      }
    });

    // 生成子节点（树枝）
    const generateChildren = (operation: string) => {
      if (props.node.children.length === 0) {
        if (operation === 'AND' || operation === 'OR') {
          // 生成: 操作选择框 ( 属性选择框 / 操作选择框 ) 操作选择框
          props.node.children.push(
              { type: 'button', children: [] }, // 第一个操作框
              { type: 'leftBracket', children: [] }, // 左括号
              { type: 'button', children: [] }, // 属性选择框/操作框
              { type: 'rightBracket', children: [] }, // 右括号
              { type: 'button', children: [] }  // 第二个操作框
          );
        }
      }
    };

    // 清空当前节点下的所有子节点
    const clearChildren = () => {
      props.node.children = [];
    };

    // 删除子节点
    const removeChildNode = (index: number) => {
      props.node.children.splice(index, 1);
    };

    return {
      selectedAction,
      generateChildren,
      clearChildren,
      removeChildNode,
    };
  },
});
</script>

<style scoped>
.tree-layer {
  display: flex;
  flex-direction: column;
  align-items: center; /* 居中对齐 */
}

.tree-node {
  display: flex;
  align-items: center;
  justify-content: center; /* 居中对齐 */
}

.children-layer {
  display: flex;
  flex-direction: row;
  justify-content: center; /* 子节点居中 */
  margin-top: 10px;
}

button {
  margin: 5px;
}
</style>
