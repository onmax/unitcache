<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState10()
useHead({ title: `Inventory 9 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p9">
    <h1>Inventory page 9 ({{ count }})</h1>
    <InventoryWidget117 title="InventoryWidget117" />
    <InventoryWidget57 title="InventoryWidget57" />
    <InventoryWidget6 title="InventoryWidget6" />
  </div>
</template>
