<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState0()
useHead({ title: `Inventory 15 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p15">
    <h1>Inventory page 15 ({{ count }})</h1>
    <InventoryWidget143 title="InventoryWidget143" />
    <InventoryWidget106 title="InventoryWidget106" />
    <InventoryWidget235 title="InventoryWidget235" />
    <InventoryWidget13 title="InventoryWidget13" />
  </div>
</template>
