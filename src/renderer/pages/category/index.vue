<template>
    <div class="category" v-if="tableData != null">
        <el-card class="box-card">
            <el-dialog
                title="
                        Kategoriya qo'shish
                "
                :visible.sync="dialogTableVisible"
            >
                <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="200px"
                    class="demo-ruleForm"
                    label-position="top"
                >
                    <el-form-item label="Kategoriya nomi" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                </el-form>
                <div class="title-box-top">
                    <div class="title-top-left"></div>

                    <div class="title-box-right flex">
                        <el-button type="success" @click="create">
                            Saqlash</el-button
                        >
                    </div>
                </div>
            </el-dialog>
            <el-dialog
                title="
                    Kategoriyani o'zgartirish
                "
                :visible.sync="isEditmodal"
            >
                <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="200px"
                    class="demo-ruleForm"
                    label-position="top"
                >
                    <el-form-item label="Kategoriya nomi" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                </el-form>
                <div class="title-box-top">
                    <div class="title-top-left"></div>

                    <div class="title-box-right flex">
                        <el-button type="success" @click="edit">
                            Saqlash</el-button
                        >
                    </div>
                </div>
            </el-dialog>
            <div class="title-box-top">
                <div class="title-top-left">
                    <h4 class="title-page">Kategoriya</h4>
                </div>

                <div class="title-box-right flex">
                    <el-button type="success" @click="openModalAdd">
                        <i class="el-icon-plus"></i> Kategoriya
                        qo'shish</el-button
                    >
                </div>
            </div>

            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="name" label="Nomi"> </el-table-column>

                <el-table-column>
                    <template slot-scope="scope">
                        <div class="table-actions">
                            <el-button
                                @click="openModalEdit(scope.row._id)"
                                type="primary"
                                icon="el-icon-edit"
                                size="mini"
                                plain
                            ></el-button>

                            <el-popconfirm
                                title="Ma`lumotni o'chirmoqchimisiz?"
                                confirm-button-text="Ha"
                                cancel-button-text="Yo'q"
                                cancel-button-type="danger"
                                @confirm="confirmDelete(scope.row._id)"
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
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ruleForm: {
                name: "",
            },
            name: "",
            rules: {
                name: [
                    {
                        required: true,
                        message: "Kategoriya nomini kiriting",
                        trigger: "blur",
                    },
                ],
            },
            editId: null,
            dialogTableVisible: false,
            isEditmodal: false,
            tableData: null,
        };
    },

    async mounted() {
        this.getData();
    },

    methods: {
        openModalAdd() {
            this.dialogTableVisible = true;
        },
        async openModalEdit(id) {
            console.log(id);
            let editData = await this.$axios.get("category/" + id);
            console.log("galdi ed", editData);
            this.editId = id;
            this.ruleForm.name = editData.data[0].name;
            this.isEditmodal = true;
        },
        async getData() {
            let category = await this.$axios.get("category/all");
            this.tableData = category.data.data;
        },
        async create() {
            this.name = this.ruleForm.name;
            let name = await this.$axios
                .post("category/create", { name: this.name })
                .then((res) => {
                    this.dialogTableVisible = false;
                    this.getData();
                    this.ruleForm.name = "";
                    this.$message({
                        message: "Kategoriya qo'shildi",
                        type: "success",
                    });
                    console.log("ok");
                });
        },
        async edit() {
            console.log("id", this.editId);
            this.name = this.ruleForm.name;
            console.log("id", this.name);
            let name = await this.$axios
                .put("category/" + this.editId, { name: this.name })
                .then((res) => {
                    this.isEditmodal = false;
                    this.getData();
                    this.ruleForm.name = "";
                    this.$message({
                        message: "Kategoriya o'zgartirildi",
                        type: "success",
                    });
                });
        },
        async confirmDelete(id) {
            let name = await this.$axios
                .$delete("category/" + id)
                .then((res) => {
                    this.getData();
                    this.name = "";
                    this.$message({
                        message: "Kategoriya o'chirildi",
                        type: "success",
                    });
                });
        },
    },
};
</script>

<style lang="scss" scoped>
.category {
    .cell {
        .table-actions {
            padding-right: 10px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            button:first-child {
                margin-right: 5px;
            }
        }
    }
}
</style>
