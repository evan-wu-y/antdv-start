<template>
    <a-table sticky :columns="columns" :data-source="data" :scroll="{ x: 1500 }">
        <template #bodyCell="{ column }">
            <template v-if="column.key === 'operation'"><a>action</a></template>
        </template>
        <template #customFilterDropdown="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }">
            <div style="padding: 8px">
                <a-input ref="searchInput" :placeholder="`Search ${column.dataIndex}`" :value="selectedKeys[0]"
                    style="width: 188px; margin-bottom: 8px; display: block"
                    @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
                    @pressEnter="handleSearch(selectedKeys, confirm, column.dataIndex)" />
                <a-button type="primary" size="small" style="width: 90px; margin-right: 8px"
                    @click="handleSearch(selectedKeys, confirm, column.dataIndex)">
                    <template #icon>
                        <SearchOutlined />
                    </template>
                    Search
                </a-button>
                <a-button size="small" style="width: 90px" @click="handleReset(clearFilters)">
                    Reset
                </a-button>
            </div>
        </template>
        <template #customFilterIcon="{ filtered }">
            <search-outlined :style="{ color: filtered ? '#108ee9' : undefined }" />
        </template>
        <template #summary>
            <a-table-summary :fixed="fixedTop ? 'top' : 'bottom'">
                <a-table-summary-row>
                    <a-table-summary-cell :index="0" :col-span="2">
                        <a-switch v-model:checked="fixedTop" checked-children="Fixed Top"
                            un-checked-children="Fixed Top"></a-switch>
                    </a-table-summary-cell>
                    <a-table-summary-cell :index="2" :col-span="8">Scroll Context</a-table-summary-cell>
                    <a-table-summary-cell :index="10">Fix Right</a-table-summary-cell>
                </a-table-summary-row>
            </a-table-summary>
        </template>
    </a-table>
</template>
<script setup>
import { ref, reactive } from 'vue';

const searchInput = ref();
const state = reactive({
    searchText: '',
    searchedColumn: '',
});
const columns = ref([
    {
        title: 'Full Name',
        width: 150,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
        // defaultSortOrder: 'descend',
        sorter: {
            compare: (a, b) => a.name.toLowerCase() < b.name.toLowerCase(),
            // compare: (a, b) => a.name.localeCompare(b.name),
            multiple: 2,
        },
        customFilterDropdown: true,
        onFilter: (value, record) => record.name.toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: visible => {
            if (visible) {
                setTimeout(() => {
                    searchInput.value.focus();
                }, 100);
            }
        },
    },
    {
        title: 'Age',
        width: 100,
        dataIndex: 'age',
        key: 'age',
        fixed: 'left',
        // defaultSortOrder: 'ascending',
        sorter: {
            compare: (a, b) => a.age - b.age,
            multiple: 1,
        },
    },
    {
        title: 'Column 1',
        dataIndex: 'address',
        key: '1',
        // width: 150,
        customFilterDropdown: true,
        onFilter: (value, record) => record.name.toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: visible => {
            if (visible) {
                setTimeout(() => {
                    searchInput.value.focus();
                }, 100);
            }
        },
    },
    {
        title: 'Column 2',
        dataIndex: 'address',
        key: '2',
        // width: 150,
    },
    {
        title: 'Column 3',
        dataIndex: 'address',
        key: '3',
        // width: 150,
    },
    {
        title: 'Column 4',
        dataIndex: 'address',
        key: '4',
        // width: 150,
    },
    {
        title: 'Column 5',
        dataIndex: 'address',
        key: '5',
        // width: 150,
    },
    {
        title: 'Column 6',
        dataIndex: 'address',
        key: '6',
        // width: 150,
    },
    {
        title: 'Column 7',
        dataIndex: 'address',
        key: '7',
        // width: 150,
    },
    { title: 'Column 8', dataIndex: 'address', key: '8' },
    {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
    },
]);

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `Edrward ${i}`,
        age: i + 1,
        address: `London Park no. ${i}`,
    });
}
const fixedTop = ref(false);

const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    state.searchText = selectedKeys[0];
    state.searchedColumn = dataIndex;
};

const handleReset = clearFilters => {
    clearFilters({ confirm: true });
    state.searchText = '';
};

</script>

<style lang="scss" scoped>
// tfoot th,
// tfoot td {
//     background: #fafafa;
// }

[data-theme='dark'] tfoot th,
[data-theme='dark'] tfoot td {
    background: #1d1d1d;
}
</style>
  