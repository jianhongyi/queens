<template>
  <demo-section>
    <demo-block title="基础用法">
      <queens-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
      />
    </demo-block>
    <demo-block title="使用插槽">
      <queens-nav-bar title="标题" left-text="返回" left-arrow>
        <template #right>
          <em>button</em>
        </template>
      </queens-nav-bar>
    </demo-block>
  </demo-section>
</template>

