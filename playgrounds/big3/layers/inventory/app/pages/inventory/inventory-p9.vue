<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState3()
useHead({ title: `Inventory 9 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p9">
    <h1>Inventory page 9 ({{ count }})</h1>
    <InventoryWidget191 title="InventoryWidget191" />
    <InventoryWidget189 title="InventoryWidget189" />
    <InventoryWidget209 title="InventoryWidget209" />
  </div>
</template>
