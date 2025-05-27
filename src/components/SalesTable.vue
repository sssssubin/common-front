<template>
  <div class="table-wrapper">
    <table class="sales-table" :data-type="tableType">
      <thead>
        <tr v-for="(row, rowIndex) in headers" :key="'header-' + rowIndex">
          <template v-if="row.label">
            <th :colspan="row.colspan">{{ row.label }}</th>
          </template>
          <template v-else>
            <th
              v-for="(col, colIndex) in row.columns"
              :key="'col-' + colIndex"
              :rowspan="col.rowspan"
              :colspan="col.colspan"
            >
              {{ col.label }}
            </th>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in data" :key="'row-' + rowIndex">
          <template v-for="(value, key) in row">
            <td
              :key="key"
              v-if="key"
              @click="handleCellClick(row, key, value)"
              class="clickable-cell"
            >
              {{ value }}
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  headers: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
  tableType: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['cell-click'])

const handleCellClick = (row, key, value) => {
  emit('cell-click', { row, key, value })
}
</script>

<style scoped lang="scss">
.table-wrapper {
  overflow-x: auto;
  max-height: 600px;
}
.sales-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
  th,
  td {
    border: 1px solid #ccc;
    padding: 4px 8px;
    text-align: center;
    white-space: nowrap;
  }
  thead {
    background-color: #f0f0f0;
    position: sticky;
    top: 0;
    z-index: 1;
  }
}

.clickable-cell {
  cursor: pointer;
  background-color: #fefefe;
  transition: background 0.2s ease;
  &:hover {
    background-color: #e6f7ff;
  }
}
</style>
