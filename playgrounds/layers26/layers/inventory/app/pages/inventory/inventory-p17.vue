<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState4()
useHead({ title: `Inventory 17 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p17">
    <h1>Inventory page 17 ({{ count }})</h1>
    <InventoryWidget111 title="InventoryWidget111" />
    <InventoryWidget18 title="InventoryWidget18" />
    <InventoryWidget1 title="InventoryWidget1" />
  </div>
</template>
