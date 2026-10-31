<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState14()
useHead({ title: `Inventory 14 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p14">
    <h1>Inventory page 14 ({{ count }})</h1>
    <InventoryWidget37 title="InventoryWidget37" />
    <InventoryWidget54 title="InventoryWidget54" />
    <InventoryWidget9 title="InventoryWidget9" />
    <InventoryWidget230 title="InventoryWidget230" />
  </div>
</template>
