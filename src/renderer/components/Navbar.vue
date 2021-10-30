<template>
    <div>
        <div class="left-navbar">
            <div class="nav-logo">
                <h2 class="logo-title">Ushop</h2>
            </div>

            <div class="nav-menu">
                <el-menu default-active="2" class="el-menu-vertical-demo">
                    <el-menu-item index="1">
                        <router-link exact :to="{ name: 'index' }">
                            <span class="icon-menu">
                                <i class="el-icon-s-home"></i>
                            </span>
                            <span>Dashboard</span>
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <router-link exact :to="{ name: 'products' }">
                            <span class="icon-menu">
                                <i class="el-icon-box"></i>
                            </span>
                            <span>Mahsulotlar</span>
                        </router-link>
                    </el-menu-item>

                    <el-submenu index="3">
                        <template slot="title">
                            <span class="icon-menu">
                                <i class="el-icon-user-solid"></i>
                            </span>
                            <span>Users</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">
                                <router-link
                                    router-link-exact-link
                                    :to="{ name: 'users-admin' }"
                                >
                                    Admins
                                </router-link>
                            </el-menu-item>

                            <el-menu-item index="1-3">
                                <router-link
                                    router-link-exact-link
                                    :to="{ name: 'users-client' }"
                                >
                                    Clients
                                </router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-menu-item index="4">
                        <router-link exact :to="{ name: 'category' }">
                            <span class="icon-menu">
                                <i class="el-icon-files"></i>
                            </span>
                            <span>Kategoriya</span>
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <router-link exact :to="{ name: 'statistica' }">
                            <span class="icon-menu">
                                <i class="el-icon-s-help"></i>
                            </span>
                            <span>Statistika</span>
                        </router-link>
                    </el-menu-item>

                    <el-menu-item index="5">
                        <router-link exact :to="{ name: 'settings' }">
                            <span class="icon-menu">
                                <i class="el-icon-s-operation"></i>
                            </span>
                            <span>Settings</span>
                        </router-link>
                    </el-menu-item>
                </el-menu>
            </div>
        </div>
        <header>
            <div class="header-inner">
                <div class="header-left">
                    <router-link to="/moderator">
                        <i class="el-icon-back"></i>
                    </router-link>
                </div>

                <router-link to="/empty/cash">Kassa</router-link>

                <div class="header-right">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            Zafar<i
                                class="el-icon-arrow-down el-icon--right"
                            ></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-user"
                                >Profile</el-dropdown-item
                            >
                            <el-dropdown-item icon="el-icon-s-tools"
                                >Settings</el-dropdown-item
                            >

                            <el-dropdown-item
                                class="danger-text"
                                icon="el-icon-switch-button"
                                divided
                                >Log out</el-dropdown-item
                            >
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isCollapse: true,
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        clickScreen() {
            let elem = document.getElementById("admin-app");
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            }
        },
    },
};
</script>

<style lang="scss">
.header-left {
    a {
        font-size: 28px;
        color: #000;
    }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
