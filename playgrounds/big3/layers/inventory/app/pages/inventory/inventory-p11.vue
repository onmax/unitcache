<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState20()
useHead({ title: `Inventory 11 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p11">
    <h1>Inventory page 11 ({{ count }})</h1>
    <InventoryWidget96 title="InventoryWidget96" />
    <InventoryWidget59 title="InventoryWidget59" />
    <InventoryWidget147 title="InventoryWidget147" />
    <InventoryWidget114 title="InventoryWidget114" />
  </div>
</template>
