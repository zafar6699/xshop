<template>
    <div>
        <div class="admin-card">
            <div class="card">
                <router-link to="/cash" class="card-box">
                    <span class="icon-menu flex-center">
                        <i class="el-icon-s-grid"></i>
                    </span>
                    <div class="card-text flex-center">
                        <span>Kassa</span>
                    </div>
                </router-link>
            </div>
            <div class="card">
                <router-link to="/" class="card-box">
                    <span class="icon-menu flex-center">
                        <i class="el-icon-s-tools"></i>
                    </span>
                    <div class="card-text flex-center">
                        <span>Boshqaruv</span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: "full",
};
</script>

<style lang="scss" scoped>
.admin-card {
    margin: 200px auto;
    padding: 0px 20px;
    display: flex;
    width: 900px;
    justify-content: space-between;
    align-items: center;
    .flex-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .card {
        width: calc((100% - 40px) / 2);
        padding: 30px;
        background: #fff;
        border-radius: 5px;
        transition: 0.2s;
        box-shadow: 0 0 10px #c5c5c5;
        .card-box {
            text-decoration: none;
            color: #333;
            .icon-menu {
                i {
                    font-size: 50px;
                }
            }
            .card-text {
                padding-top: 20px;
                font-size: 20px;
                font-weight: 500;
            }
            &:hover {
                box-shadow: 0 0 5px #c5c5c5;
            }
        }
    }
}
</style>
