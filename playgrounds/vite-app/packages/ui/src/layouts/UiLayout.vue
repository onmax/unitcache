<template>
  <div class="layout"><nav><slot name="nav" /></nav><slot /></div>
</template>

<style scoped>
.layout { display: grid; grid-template-columns: 200px 1fr; gap: 16px; }
</style>
