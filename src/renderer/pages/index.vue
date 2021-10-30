<template>
    <div>
        <div class="admin">
            <div class="cards flex">
                <div class="card c1">
                    <div class="top flex">
                        <div class="stat">
                            <h1>50</h1>
                            <span>New Orders</span>
                        </div>
                        <div class="icon"></div>
                    </div>
                </div>
                <div class="card c2">
                    <div class="top flex">
                        <div class="stat">
                            <h1>50</h1>
                            <span>New Orders</span>
                        </div>
                        <div class="icon"></div>
                    </div>
                </div>
                <div class="card c3">
                    <div class="top flex">
                        <div class="stat">
                            <h1>50</h1>
                            <span>New Orders</span>
                        </div>
                        <div class="icon"></div>
                    </div>
                </div>
                <div class="card c4">
                    <div class="top flex">
                        <div class="stat">
                            <h1>50</h1>
                            <span>New Orders</span>
                        </div>
                        <div class="icon"></div>
                    </div>
                </div>
            </div>
        </div>
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
                    <router-link :to="{ path: '/users/admin/add' }">
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

            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="id" label="ID"> </el-table-column>
                <el-table-column prop="name" label="Nomi"> </el-table-column>

                <el-table-column prop="perprice" label="Kirish narxi">
                    <template slot-scope="scope">
                        {{ beautySum(scope.row.price) }} so'm
                    </template>
                </el-table-column>
                <el-table-column prop="price" label="Sotish narxi">
                    <template slot-scope="scope">
                        {{ beautySum(scope.row.perprice) }} so'm
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
                <el-table-column>
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
    layout: "admin",
    data() {
        return {
            tableData: [
                {
                    id: "234",
                    name: "Jon Smith",
                    perprice: 10000,
                    price: 14000,
                    status: false,
                },
                {
                    id: "234",
                    name: "Jon Smith",
                    perprice: 10000,
                    price: 14000,
                    status: true,
                },
                {
                    id: "234",
                    name: "Jon Smith",
                    perprice: 10000,
                    price: 14000,
                    status: false,
                },
                {
                    id: "234",
                    name: "Jon Smith",
                    perprice: 10000,
                    price: 14000,
                    status: true,
                },
                {
                    id: "234",
                    name: "Jon Smith",
                    perprice: 10000,
                    price: 14000,
                    status: false,
                },
                {
                    id: "234",
                    name: "Jon Smith",
                    perprice: 10000,
                    price: 14000,
                    status: true,
                },
                {
                    id: "234",
                    name: "Jon Smith",
                    perprice: 10000,
                    price: 14000,
                    status: false,
                },
                {
                    id: "234",
                    name: "Jon Smith",
                    perprice: 10000,
                    price: 14000,
                    status: true,
                },
            ],
            dialogTableVisible: false,
            page: 1,
            limit: 10,
        };
    },
};
</script>

<style lang="scss">
.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.admin {
    margin-top: 10px;
    margin-bottom: 20px;
    .info {
        margin-bottom: 20px;
    }
    .card {
        border-radius: 5px;
        padding: 15px;
        width: calc((100% - 80px) / 4);
        .top {
            .stat {
                h1 {
                    margin: 0 !important;
                    color: #fff;
                    font-size: 38px;
                }
                span {
                    color: #fff;
                }
            }
        }
    }
    .c1 {
        background-color: #00c0ef !important;
    }
    .c2 {
        background-color: #00a65a !important;
    }
    .c3 {
        background-color: #f39c12 !important;
    }
    .c4 {
        background-color: #dd4b39 !important;
    }
}
</style>
