<template>
    <div>
        <el-card class="box-card">
            <el-dialog title="Admin info" :visible.sync="dialogTableVisible">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Temporibus hic quibusdam, nulla accusantium incidunt rem
                    placeat modi, cumque eaque qui enim. Molestias asperiores
                    voluptatum minus sint voluptate quasi autem libero!
                </p>
            </el-dialog>

            <div class="title-box-top">
                <div class="title-top-left">
                    <h4 class="title-page">Mahsulotlar</h4>
                </div>

                <div class="title-box-right flex">
                    <div class="search flex">
                        <el-input
                            placeholder="Izlash"
                            v-model="input"
                        ></el-input>
                        <el-button type="success">
                            <i class="el-icon-search"></i>
                        </el-button>
                    </div>
                    <router-link :to="{ name: `products-add` }">
                        <el-button type="success">
                            <i class="el-icon-plus"></i> Mahsulot
                            qo'shish</el-button
                        >
                    </router-link>
                </div>
            </div>

            <div class="filter-box">
                <el-row :gutter="20">
                    <el-col :span="16"
                        ><div class="grid-content bg-purple"></div
                    ></el-col>
                    <el-col :span="8"
                        ><div class="grid-content bg-purple"></div
                    ></el-col>
                </el-row>
            </div>

            <el-table :data="tableData2" style="width: 100%">
                <el-table-column prop="date" label="Date" width="180">
                </el-table-column>
                <el-table-column prop="name" label="Name" width="180">
                </el-table-column>
                <el-table-column prop="address" label="Address">
                </el-table-column>
            </el-table>

            <div class="pagination">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="556"
                    :page-size="limit"
                    :current-page="page"
                    @current-change="changePagination"
                >
                </el-pagination>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: "",
            activeName: "first",
            tableData2: [
                {
                    date: "2016-05-03",
                    name: "Tom",
                    address: "No. 189, Grove St, Los Angeles",
                },
                {
                    date: "2016-05-02",
                    name: "Tom",
                    address: "No. 189, Grove St, Los Angeles",
                },
                {
                    date: "2016-05-04",
                    name: "Tom",
                    address: "No. 189, Grove St, Los Angeles",
                },
                {
                    date: "2016-05-01",
                    name: "Tom",
                    address: "No. 189, Grove St, Los Angeles",
                },
            ],
            dialogTableVisible: false,
            page: 1,
            limit: 10,

            arr: [3, 2, 4, 1, 34, 12, 3],
        };
    },

    mounted() {},

    methods: {
        goBack() {
            this.$router.go(-1);
        },

        handleEdit(index, row) {
            console.log("index -> ", index);
            console.log("row -> ", row);
        },
        openEdit(id) {
            console.log(id);
        },
        confirmDelete(index) {
            this.$message({
                message: "Ma`lumot o'chirildi",
                type: "success",
                showClose: true,
            });
        },
        changePagination(page) {
            this.page = page;
        },
    },
};
</script>

<style lang="scss" scoped>
.flex {
    display: flex;
    align-items: center;
}
</style>
