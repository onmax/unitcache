<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState7()
useHead({ title: `Inventory 5 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p5">
    <h1>Inventory page 5 ({{ count }})</h1>
    <InventoryWidget175 title="InventoryWidget175" />
    <InventoryWidget49 title="InventoryWidget49" />
    <InventoryWidget66 title="InventoryWidget66" />
  </div>
</template>
