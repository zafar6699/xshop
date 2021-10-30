<template>
    <div class="cash">
        <div class="container-full">
            <div class="cash-box">
                <div class="cash-left">
                    <div class="cash-top-title">
                        <form @submit.prevent="searchProduct">
                            <div class="cash-search">
                                <input
                                    placeholder="Maxsulot nomi"
                                    type="text"
                                    id="searchInput"
                                    onblur="this.focus()"
                                    v-model="code"
                                    autofocus
                                />
                                <button class="but but-primary">Izlash</button>
                            </div>
                        </form>
                        <div class="time">
                            <h6>{{ clock }}</h6>
                            <h5>{{ date }}</h5>
                        </div>
                    </div>

                    <div class="table-products">
                        <table cellspacing="0">
                            <thead>
                                <tr>
                                    <th>№</th>
                                    <th>Nomi</th>
                                    <th>Soni</th>
                                    <th>Summasi</th>
                                    <th>Umumiy</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(item, index) in payProduct"
                                    :key="index"
                                >
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ item.name }}</td>
                                    <td>
                                        <el-input-number
                                            :min="1"
                                            size="small"
                                            v-model="item.count"
                                        ></el-input-number>
                                    </td>
                                    <td>{{ beautySum(item.price) }}</td>
                                    <td>
                                        {{ beautySum(item.price * item.count) }}
                                    </td>
                                    <td>
                                        <el-button
                                            @click="deleteProduct(index)"
                                            size="small"
                                            type="danger"
                                            icon="el-icon-delete"
                                            circle
                                        ></el-button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="cash-right">
                    <div class="ul-products">
                        <div class="ul-item"><button>Tuxum</button></div>
                        <div class="ul-item"><button>Yog'li non</button></div>
                        <div class="ul-item"><button>Tuxum</button></div>
                        <div class="ul-item"><button>Yog'li non</button></div>
                        <div class="ul-item"><button>Tuxum</button></div>
                        <div class="ul-item"><button>Yog'li non</button></div>
                        <div class="ul-item"><button>Tuxum</button></div>
                        <div class="ul-item"><button>Yog'li non</button></div>
                        <div class="ul-item"><button>Tuxum</button></div>
                        <div class="ul-item"><button>Yog'li non</button></div>
                        <div class="ul-item"><button>Tuxum</button></div>
                        <div class="ul-item"><button>Yog'li non</button></div>
                    </div>

                    <el-dialog
                        width="550px"
                        title="Tasdiqlash"
                        :visible.sync="dialogTableVisible"
                    >
                        <div class="flex-center">
                            <el-radio-group v-model="payType">
                                <el-radio-button label="1">
                                    Naqd
                                </el-radio-button>
                                <el-radio-button label="2">
                                    Plastik karta
                                </el-radio-button>
                            </el-radio-group>
                        </div>

                        <div slot="footer" class="dialog-footer">
                            <div class="modal-price">
                                <h5>Jami:</h5>
                                <h4>{{ beautySum(allSum) }}</h4>
                            </div>

                            <div>
                                <el-button @click="dialogTableVisible = false"
                                    >Bekor qilish</el-button
                                >
                                <el-button
                                    id="confirmOrder"
                                    type="success"
                                    @click="confirmOrder"
                                    >Tasdiqlash</el-button
                                >
                            </div>
                        </div>
                    </el-dialog>
                </div>
            </div>
        </div>

        <div class="fixed-bottom">
            <div class="container-full">
                <div class="bottom-inner">
                    <div class="bottom-inner-left">
                        <h6>Jami:</h6>
                        <h4>{{ beautySum(allSum) }}</h4>
                    </div>
                    <div class="bottom-inner-right">
                        <el-button
                            @click="clickPay"
                            type="primary"
                            id="confirmButton"
                            >Sotish</el-button
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    layout: "full",
    data() {
        return {
            clock: "",
            date: "",
            code: "",
            products: [
                {
                    name: "Vlajniy salvetka",
                    price: 6000,
                    code: 4780058880415,
                },
                {
                    name: "Cola 1.5l",
                    price: 11000,
                    code: 4780069000154,
                },
                {
                    name: "Parasetamol",
                    price: 1000,
                    code: 4810201008196,
                },
                {
                    name: "Gugurt",
                    price: 2000,
                    code: 4780039700015,
                },
            ],
            payType: 1,
            dialogTableVisible: false,
            gridData: [
                {
                    date: "2016-05-02",
                    name: "John Smith",
                    address: "No.1518,  Jinshajiang Road, Putuo District",
                },
                {
                    date: "2016-05-04",
                    name: "John Smith",
                    address: "No.1518,  Jinshajiang Road, Putuo District",
                },
                {
                    date: "2016-05-01",
                    name: "John Smith",
                    address: "No.1518,  Jinshajiang Road, Putuo District",
                },
                {
                    date: "2016-05-03",
                    name: "John Smith",
                    address: "No.1518,  Jinshajiang Road, Putuo District",
                },
            ],

            payProduct: [],
        };
    },

    async mounted() {
        let input = document.getElementById("searchInput");
        input.focus();
        setInterval(() => {
            let date = new Date();

            let hour, minute, second, day, month, year;

            hour = date.getHours();
            minute = date.getMinutes();
            second = date.getSeconds();
            day = date.getDate();
            month = parseInt(date.getMonth()) + 1;

            year = date.getFullYear();

            if (hour < 10) {
                hour = "0" + hour;
            }
            if (minute < 10) {
                minute = "0" + minute;
            }
            if (second < 10) {
                second = "0" + second;
            }
            if (day < 10) {
                day = "0" + day;
            }
            month = parseInt(month);
            if (month < 10) {
                month = "0" + month;
            }

            this.clock = hour + ":" + minute + ":" + second;

            this.date = day + "." + month + "." + year;
        }, 100);

        this._keyListener = function (e) {
            if (e.key === "Enter" && e.ctrlKey && this.payProduct.length > 0) {
                document.getElementById("confirmButton").click();
            }
        };

        this._keyListener2 = function (e) {
            if (e.key === "Enter" && this.dialogTableVisible) {
                document.getElementById("confirmOrder").click();
            }
        };

        document.addEventListener("keyup", this._keyListener.bind(this));
        document.addEventListener("keydown", this._keyListener2.bind(this));

        let reg = await this.$axios.get("region/all");

        console.log("data", reg.data.data);
    },
    computed: {
        allSum() {
            let sum = 0;
            this.payProduct.forEach((item) => {
                sum = sum + item.count * item.price;
            });

            return sum;
        },
    },
    methods: {
        searchProduct() {
            let product = this.products.find((item) => item.code == this.code);
            this.code = "";
            if (product) {
                let isPay = this.payProduct.findIndex(
                    (item) => item.code == product.code
                );

                if (isPay != -1) {
                    this.payProduct[isPay].count =
                        this.payProduct[isPay].count + 1;
                } else {
                    this.payProduct.push({
                        name: product.name,
                        count: 1,
                        price: product.price,
                        code: product.code,
                    });
                }
            } else {
                // alert("Bunday mahsulot yo'q");
            }
        },
        deleteProduct(index) {
            this.payProduct.splice(index, 1);
        },
        clickPay() {
            this.dialogTableVisible = true;
            this.payType = 1;
        },
        confirmOrder() {
            this.dialogTableVisible = false;
        },
    },
};
</script>

<style lang="scss" scoped>
div.cash {
    padding: 15px 0px;
    div.dialog-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        div.modal-price {
            display: flex;
            align-items: center;
            h5 {
                font-size: 22px;
                color: #666;
                font-weight: 400;
            }
            h4 {
                font-size: 32px;
                color: #333;
                margin-left: 10px;
            }
        }
    }
    div.cash-box {
        display: flex;
        margin: 0px -10px;
        div.cash-left {
            width: 60%;
            padding: 0px 10px;
        }
        div.cash-right {
            width: 40%;
            padding: 0px 10px;
        }

        div.cash-top-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ccc;
            padding-bottom: 10px;
            h6 {
                font-size: 28px;
            }
            h5 {
                font-size: 14px;
                color: #666;
                text-align: right;
                font-weight: 400;
            }
        }

        div.cash-search {
            display: flex;
            align-items: center;
            input {
                width: 400px;
                height: 50px;
                border-radius: 5px;
                padding-left: 15px;
                font-size: 20px;
                color: #333;
                border: 1px solid #999;
                &:focus {
                    outline: none;
                    border: 1px solid #000;
                }
            }
            button {
                height: 50px;
                margin-left: 15px;
            }
        }

        div.ul-products {
            display: flex;
            flex-wrap: wrap;
            margin: 0px -7px;
            div.ul-item {
                width: 25%;
                padding: 0px 7px;
                button {
                    padding: 15px 10px;
                    border-radius: 5px;
                    background-color: #ddd;
                    color: #333;
                    font-weight: 600;
                    font-size: 18px;
                    width: 100%;
                    margin-bottom: 10px;
                    cursor: pointer;
                    transition: 0.2s;
                    &:hover {
                        background-color: #eee;
                    }
                    &:active {
                        background-color: #ccc;
                    }
                }
            }
        }
        div.table-products {
            margin-top: 10px;
            max-height: calc(100vh - 200px);
            overflow-y: scroll;
            table {
                width: 100%;
                border: none;

                th {
                    padding: 5px 10px;
                    text-align: left;
                    font-size: 14px;
                }
                td {
                    padding: 8px 10px;
                    font-size: 14px;
                    border-bottom: 1px solid #ccc;
                }
            }
        }
    }

    div.fixed-bottom {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 30;
        background-color: #e8f3ff;

        div.bottom-inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0px;
            div.bottom-inner-left {
                display: flex;
                align-items: center;
                h6 {
                    font-size: 22px;
                    font-weight: 400;
                }
                h4 {
                    font-size: 28px;
                    margin-left: 15px;
                }
            }

            div.bottom-inner-right {
                .el-button--primary {
                    font-size: 30px !important;
                }
            }
        }
    }
}
</style>
