<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState6()
useHead({ title: `Inventory 19 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p19">
    <h1>Inventory page 19 ({{ count }})</h1>
    <InventoryWidget149 title="InventoryWidget149" />
    <InventoryWidget76 title="InventoryWidget76" />
    <InventoryWidget238 title="InventoryWidget238" />
    <InventoryWidget115 title="InventoryWidget115" />
  </div>
</template>
