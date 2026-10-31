<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState27()
useHead({ title: `Inventory 1 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p1">
    <h1>Inventory page 1 ({{ count }})</h1>
    <InventoryWidget213 title="InventoryWidget213" />
    <InventoryWidget189 title="InventoryWidget189" />
    <InventoryWidget125 title="InventoryWidget125" />
    <InventoryWidget86 title="InventoryWidget86" />
  </div>
</template>
