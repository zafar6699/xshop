<template>
    <div>
        <el-card class="box-card">
            <div class="title-box-top">
                <div class="title-top-left">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ name: 'index' }"
                            >Dashboard</el-breadcrumb-item
                        >
                        <el-breadcrumb-item :to="{ name: 'users-admin' }"
                            >Admins</el-breadcrumb-item
                        >

                        <el-breadcrumb-item>Zafarbek</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </div>
            <el-page-header @back="goBack" title="Ortga" content="Edit admin">
            </el-page-header>

            <div class="form-box">
                <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="200px"
                    class="demo-ruleForm"
                    label-position="top"
                >
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <div class="grid-content ">
                                <el-form-item label="Activity name" prop="name">
                                    <el-input
                                        v-model="ruleForm.name"
                                    ></el-input>
                                </el-form-item>
                                <el-form-item
                                    label="Activity zone"
                                    prop="region"
                                >
                                    <el-select
                                        v-model="ruleForm.region"
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
                                <el-form-item label="Activity time" required>
                                    <el-col :span="11">
                                        <el-form-item prop="date1">
                                            <el-date-picker
                                                type="date"
                                                placeholder="Pick a date"
                                                v-model="ruleForm.date1"
                                                style="width: 100%;"
                                            ></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                    <el-col class="line" :span="2">-</el-col>
                                    <el-col :span="11">
                                        <el-form-item prop="date2">
                                            <el-time-picker
                                                placeholder="Pick a time"
                                                v-model="ruleForm.date2"
                                                style="width: 100%;"
                                            ></el-time-picker>
                                        </el-form-item>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="Activity type" prop="type">
                                    <el-checkbox-group v-model="ruleForm.type">
                                        <el-checkbox
                                            label="Online activities"
                                            name="type"
                                        ></el-checkbox>
                                        <el-checkbox
                                            label="Promotion activities"
                                            name="type"
                                        ></el-checkbox>
                                        <el-checkbox
                                            label="Offline activities"
                                            name="type"
                                        ></el-checkbox>
                                        <el-checkbox
                                            label="Simple brand exposure"
                                            name="type"
                                        ></el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <div class="grid-content">
                                <el-form-item
                                    label="Instant delivery"
                                    prop="delivery"
                                >
                                    <el-switch
                                        v-model="ruleForm.delivery"
                                    ></el-switch>
                                </el-form-item>

                                <el-form-item label="Resources" prop="resource">
                                    <el-radio-group v-model="ruleForm.resource">
                                        <el-radio
                                            label="Sponsorship"
                                        ></el-radio>
                                        <el-radio label="Venue"></el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="Activity form" prop="desc">
                                    <el-input
                                        type="textarea"
                                        v-model="ruleForm.desc"
                                    ></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button @click="goBack"
                                        >Bekor qilish</el-button
                                    >
                                    <el-button
                                        type="success"
                                        @click="submitForm('ruleForm')"
                                        >O'zgartirish</el-button
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
            ruleForm: {
                name: "",
                region: "",
                date1: "",
                date2: "",
                delivery: false,
                type: [],
                resource: "",
                desc: ""
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: "Please input Activity name",
                        trigger: "blur"
                    },
                    {
                        min: 3,
                        max: 5,
                        message: "Length should be 3 to 5",
                        trigger: "blur"
                    }
                ],
                region: [
                    {
                        required: true,
                        message: "Please select Activity zone",
                        trigger: "change"
                    }
                ],
                date1: [
                    {
                        type: "date",
                        required: true,
                        message: "Please pick a date",
                        trigger: "change"
                    }
                ],
                date2: [
                    {
                        type: "date",
                        required: true,
                        message: "Please pick a time",
                        trigger: "change"
                    }
                ],
                type: [
                    {
                        type: "array",
                        required: true,
                        message: "Please select at least one activity type",
                        trigger: "change"
                    }
                ],
                resource: [
                    {
                        required: true,
                        message: "Please select activity resource",
                        trigger: "change"
                    }
                ],
                desc: [
                    {
                        required: true,
                        message: "Please input activity form",
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
                    alert("submit!");
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
