<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState17()
useHead({ title: `Inventory 5 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p5">
    <h1>Inventory page 5 ({{ count }})</h1>
    <InventoryWidget80 title="InventoryWidget80" />
    <InventoryWidget173 title="InventoryWidget173" />
    <InventoryWidget214 title="InventoryWidget214" />
    <InventoryWidget104 title="InventoryWidget104" />
  </div>
</template>
