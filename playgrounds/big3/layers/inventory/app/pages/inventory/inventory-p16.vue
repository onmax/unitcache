<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState18()
useHead({ title: `Inventory 16 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p16">
    <h1>Inventory page 16 ({{ count }})</h1>
    <InventoryWidget115 title="InventoryWidget115" />
    <InventoryWidget223 title="InventoryWidget223" />
    <InventoryWidget47 title="InventoryWidget47" />
    <InventoryWidget121 title="InventoryWidget121" />
    <InventoryWidget232 title="InventoryWidget232" />
  </div>
</template>
