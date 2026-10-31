<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState4()
useHead({ title: `Inventory 8 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p8">
    <h1>Inventory page 8 ({{ count }})</h1>
    <InventoryWidget159 title="InventoryWidget159" />
    <InventoryWidget132 title="InventoryWidget132" />
    <InventoryWidget153 title="InventoryWidget153" />
    <InventoryWidget60 title="InventoryWidget60" />
    <InventoryWidget1 title="InventoryWidget1" />
  </div>
</template>
