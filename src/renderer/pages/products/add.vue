<template>
    <div>
        <el-card class="box-card">
            <div class="title-box-top">
                <div class="title-top-left">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ name: 'index' }"
                            >Dashboard</el-breadcrumb-item
                        >
                        <el-breadcrumb-item :to="{ name: 'products' }"
                            >Mahsulotlar</el-breadcrumb-item
                        >

                        <el-breadcrumb-item
                            >Mahsulot qo'shish</el-breadcrumb-item
                        >
                    </el-breadcrumb>
                </div>
            </div>
            <el-page-header
                @back="goBack"
                title="Ortga"
                content="Yangi mahsulot"
            >
            </el-page-header>

            <div class="form-box">
                <el-form
                    :model="product"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="200px"
                    class="demo-ruleForm"
                    label-position="top"
                >
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <div class="grid-content ">
                                <el-form-item label="Mahsulot nomi" prop="name">
                                    <el-input v-model="product.name"></el-input>
                                </el-form-item>
                                <el-form-item
                                    label="Mahsulot kategoriyasi"
                                    prop="category"
                                >
                                    <el-select
                                        v-model="product.cateogry"
                                        placeholder="Activity zone"
                                    >
                                        <el-option
                                            label="Zone one"
                                            value="shanghai"
                                        ></el-option>
                                        <el-option
                                            label="Zone two"
                                            value="beijing"
                                        ></el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="Status" prop="status">
                                    <el-switch
                                        v-model="product.status"
                                    ></el-switch>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <el-form-item label="Mahsulot raqami" prop="name">
                                <el-input v-model="product.code"></el-input>
                            </el-form-item>
                            <el-row :gutter="20">
                                <el-col :span="12">
                                    <el-form-item
                                        label="Olish narxi"
                                        prop="perprice"
                                    >
                                        <el-input
                                            v-mask="'### ### ### ### ###'"
                                            v-model="product.perprice"
                                        ></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item
                                        label="Sotish narxi"
                                        prop="price"
                                    >
                                        <el-input
                                            v-mask="'### ### ### ### ###'"
                                            v-model="product.price"
                                        ></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <div class="grid-content">
                                <el-form-item>
                                    <el-button @click="goBack"
                                        >Bekor qilish</el-button
                                    >
                                    <el-button
                                        type="success"
                                        @click="submitForm('ruleForm')"
                                        >Saqlash</el-button
                                    >
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            product: {
                name: "",
                code: "",
                category: "",
                perprice: "",
                price: "",
                status: true
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: "To'ldirilishi shart",
                        trigger: "blur"
                    }
                ],
                code: [
                    {
                        required: true,
                        message: "To'ldirilishi shart",
                        trigger: "blur"
                    }
                ]
            }
        };
    },

    mounted() {},

    methods: {
        goBack() {
            this.$router.go(-1);
        },
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.$message({
                        message: "Ma`lumot qo'shildi",
                        type: "success",
                        showClose: true
                    });

                    this.$router.push({ name: "users-admin" });
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },

        // reset form validation
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
};
</script>

<style lang="scss" scoped></style>
