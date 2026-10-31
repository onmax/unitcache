<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState25()
useHead({ title: `Inventory 12 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p12">
    <h1>Inventory page 12 ({{ count }})</h1>
    <InventoryWidget95 title="InventoryWidget95" />
    <InventoryWidget115 title="InventoryWidget115" />
    <InventoryWidget199 title="InventoryWidget199" />
    <InventoryWidget132 title="InventoryWidget132" />
    <InventoryWidget245 title="InventoryWidget245" />
  </div>
</template>
