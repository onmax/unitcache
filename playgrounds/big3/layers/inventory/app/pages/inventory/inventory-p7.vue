<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState4()
useHead({ title: `Inventory 7 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p7">
    <h1>Inventory page 7 ({{ count }})</h1>
    <InventoryWidget163 title="InventoryWidget163" />
    <InventoryWidget70 title="InventoryWidget70" />
    <InventoryWidget7 title="InventoryWidget7" />
    <InventoryWidget144 title="InventoryWidget144" />
    <InventoryWidget207 title="InventoryWidget207" />
  </div>
</template>
