<template>
    <div>
        <div class="login-page">
            <div class="login-form">
                <h3>Kirish</h3>

                <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    class="demo-ruleForm"
                >
                    <div class="form">
                        <el-form-item label="Login" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>

                        <el-form-item label="Password" prop="pass">
                            <el-input
                                type="password"
                                v-model="ruleForm.pass"
                                show-password
                            ></el-input>
                        </el-form-item>
                    </div>

                    <el-form-item>
                        <el-button
                            type="primary"
                            @click="submitForm('ruleForm')"
                            >Kirish</el-button
                        >
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: "full",
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("Please input the password"));
            } else {
                if (this.ruleForm.checkPass !== "") {
                    this.$refs.ruleForm.validateField("checkPass");
                }
                callback();
            }
        };
        return {
            ruleForm: {
                name: "",
                pass: ""
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: "Loginni kiriting",
                        trigger: "blur"
                    },
                    {
                        min: 3,
                        max: 20,
                        message: "Length should be 3 to 5",
                        trigger: "blur"
                    }
                ],
                pass: [{ validator: validatePass, trigger: "blur" }]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    alert("submit!");
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.login-page {
    width: 100%;
    height: 100vh;
    background: #d2d6de;
    display: flex;
    align-items: center;
    justify-content: center;

    .login-form {
        width: 360px;
        border-radius: 5px;
        background: #fff;
        padding: 20px;
        .el-form-item {
            margin-bottom: 10px !important;
            button {
                width: 100%;
            }
        }
        h3 {
            text-align: center;
            margin-bottom: 20px;
        }
        .form {
            margin-bottom: 20px;
        }
    }
}
</style>
