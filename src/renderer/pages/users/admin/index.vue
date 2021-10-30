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
                    <h4 class="title-page">Admins</h4>
                </div>

                <div class="title-box-right">
                    <router-link :to="{ path: '/users/admin/add' }">
                        <el-button type="success">
                            <i class="el-icon-plus"></i> Add admin</el-button
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

            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="name" label="Name"> </el-table-column>
                <el-table-column prop="address" label="Address">
                </el-table-column>
                <el-table-column prop="phone" label="Phone"> </el-table-column>
                <el-table-column prop="price" label="Price">
                    <template slot-scope="scope">
                        {{ scope.row.price }} so'm
                    </template>
                </el-table-column>
                <el-table-column prop="status" label="Status">
                    <template slot-scope="scope">
                        <el-tag
                            v-if="scope.row.status"
                            effect="dark"
                            size="mini"
                            type="success"
                            >Faol</el-tag
                        >
                        <el-tag v-else effect="dark" size="mini" type="danger"
                            >Faol emas</el-tag
                        >
                    </template>
                </el-table-column>
                <el-table-column prop="price" label="Price">
                    <template slot-scope="scope">
                        <div class="table-actions">
                            <router-link :to="{ name: 'users-admin-edit-id' }">
                                <el-button
                                    type="primary"
                                    icon="el-icon-edit"
                                    size="mini"
                                    plain
                                ></el-button>
                            </router-link>
                            <el-button
                                @click="dialogTableVisible = true"
                                type="info"
                                icon="el-icon-view"
                                size="mini"
                                plain
                            ></el-button>

                            <el-popconfirm
                                title="Ma`lumotni o'chirmoqchimisiz?"
                                confirm-button-text="Ha"
                                cancel-button-text="Yo'q"
                                cancel-button-type="danger"
                                @confirm="confirmDelete(scope.$index)"
                            >
                                <el-button
                                    slot="reference"
                                    type="danger"
                                    icon="el-icon-delete"
                                    size="mini"
                                    plain
                                ></el-button>
                            </el-popconfirm>
                        </div>
                    </template>
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
            tableData: [
                {
                    name: "Jon Smith",
                    address: "No. 189, Grove St, Los Angeles",
                    phone: "+998901166699",
                    status: false,
                    price: "300000",
                },
                {
                    name: "Jon Smith",
                    address: "No. 189, Grove St, Los Angeles",
                    phone: "+998901166699",
                    status: true,
                    price: "300000",
                },
            ],
            dialogTableVisible: false,
            page: 1,
            limit: 10,
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

<style lang="scss" scoped></style>
