
function load_head() {
    head_ctrl = new Vue({
        el: "#head_ctrl",
        data: {
            is_login: false,
            username: "AAA",

            in_username: "",
            in_password: "",
            in_password2: "",

            show_head: false,
            login_or_reg: false,
            key: "",
            img_path: 'static/' + "321E228DB592A5CC06799B7E68EC605D.jpg"
        },
        // mounted() {
        //     axios.get("http://127.0.0.1:5000/is_login").then(
        //         function (response) {
        //             login_ctrl.is_login = response.data.data.code
        //             if (login_ctrl.is_login) {
        //                 login_ctrl.username = response.data.data.username
        //                 login_ctrl.img_path = response.data.data.img_path
        //             }
        //         }
        //     );
        // },
        methods: {
            switch_head: function () {
                head_ctrl.show_head = !head_ctrl.show_head
            },
            switch_login: function () {
                head_ctrl.login_or_reg = !head_ctrl.login_or_reg
            },
            search: function () {
                if (head_ctrl.key != "") {
                    window.location.href = "user/search.html?key=" + head_ctrl.key
                }
            },
            login: function () {
                if (head_ctrl.in_username != "" && head_ctrl.in_password != "") {
                    axios.get("http://127.0.0.1:5000/login?username=" + head_ctrl.in_username + "&passowrd=" + head_ctrl.in_password).then(
                        function (response) {
                            if (response.data.data.code) {
                                window.location.href = window.location.href
                            }
                            else {
                                alert("登录失败")
                            }
                        }
                    );
                }
                else {
                    alert("用户名或密码不能为空")
                }

            },
            register: function () {
                if (head_ctrl.in_password == head_ctrl.in_password2) {
                    axios.get("http://127.0.0.1:5000/register?username=" + head_ctrl.in_username + "&passowrd=" + head_ctrl.in_password).then(
                        function (response) {
                            if (response.data.data.code) {
                                window.location.href = window.location.href
                            }
                            else {
                                alert("登录失败")
                            }
                        }
                    );
                }
                else {
                    alert("两次密码输入不一致")
                }

            }


        },
    });
}

function load_rank() {
    rank_ctrl = new Vue({
        el: "#rank",
        data: {
            items: [{
                index: 1,
                head: 'static/' + "321E228DB592A5CC06799B7E68EC605D.jpg",
                name: "AAAAAA"
            }, {
                index: 2,
                head: 'static/' + "321E228DB592A5CC06799B7E68EC605D.jpg",
                name: "AAAAAA"
            }, {
                index: 3,
                head: 'static/' + "321E228DB592A5CC06799B7E68EC605D.jpg",
                name: "AAAAAA"
            }]
        },
        // mounted() {
        //     axios.get("http://127.0.0.1:5000/rank").then(
        //         function (response) {
        //             if (response.data.data.code) {
        //                 rank_ctrl.items = response.data.data.items;
        //             }
        //         }
        //     )
        // }
    })
}

function load_suggest() {
    suggest_ctrl = new Vue({
        el: "#suggest",
        data: {
            items: [{
                image: 'static/' + "321E228DB592A5CC06799B7E68EC605D.jpg",
                name: "小说《野果》",
                description: "《野果》女生自用二手新真的很好看啊啊啊啊啊但是最近买衣服花太多钱了剁手出了书很新喜欢的集美们快来看看吧",
                price: "￥30.00",
                good_url: "detail.html?id=1"
            }, {
                image: 'static/' + "321E228DB592A5CC06799B7E68EC605D.jpg",
                name: "小说《野果》",
                description: "《野果》女生自用二手新真的很好看啊啊啊啊啊但是最近买衣服花太多钱了剁手出了书很新喜欢的集美们快来看看吧",
                price: "￥30.00",
                good_url: "detail.html?id=1"
            }, {
                image: 'static/' + "321E228DB592A5CC06799B7E68EC605D.jpg",
                name: "小说《野果》",
                description: "《野果》女生自用二手新真的很好看啊啊啊啊啊但是最近买衣服花太多钱了剁手出了书很新喜欢的集美们快来看看吧",
                price: "￥30.00",
                good_url: "detail.html?id=1"
            }, {
                image: 'static/' + "321E228DB592A5CC06799B7E68EC605D.jpg",
                name: "小说《野果》",
                description: "《野果》女生自用二手新真的很好看啊啊啊啊啊但是最近买衣服花太多钱了剁手出了书很新喜欢的集美们快来看看吧",
                price: "￥30.00",
                good_url: "detail.html?id=1"
            }]
        },
        // mounted() {
        //     axios.get("http://127.0.0.1:5000/suggest").then(
        //         function (response) {
        //             if (response.data.data.code) {
        //                 suggest_ctrl.items = response.data.data.items;
        //             }
        //         }
        //     )
        // }
    })
}

function load_detail() {
    detail_ctrl = new Vue({
        el: "#detail_box",
        data: {
            main_img_url: "static/ACA9C43B4B78FB1EEE9C41D26F801C66.jpg",
            nano_img_url1: "static/321E228DB592A5CC06799B7E68EC605D.jpg",
            nano_img_url2: "static/321E228DB592A5CC06799B7E68EC605D.jpg",
            nano_img_url3: "static/321E228DB592A5CC06799B7E68EC605D.jpg",

            title: "散文集《野果》",
            description: "出一本散文集《野果》出一本散文集《野果》出一本散文集《野果》出一本散文集《野果》出一本散文集《野果》出一本散文集《野果》出一本散文集《野果》",
            price: "￥30.00"
        },
        // mounted() {
        //     axios.get("http://127.0.0.1:5000/detail" + window.location.search).then(
        //         function (response) {
        //             if (response.data.data.code) {
        //                 detail_ctrl.main_img_url = response.data.data.main_img_url
        //                 detail_ctrl.nano_img_url1 = response.data.data.nano_img_url1
        //                 detail_ctrl.nano_img_url2 = response.data.data.nano_img_url2
        //                 detail_ctrl.nano_img_url3 = response.data.data.nano_img_url3
        //                 detail_ctrl.title = response.data.data.title
        //                 detail_ctrl.description = response.data.data.description
        //                 detail_ctrl.price = response.data.data.price
        //             }
        //         }
        //     )
        // },
        methods: {
            switch_main_img: function (nano_id) {
                tmp = detail_ctrl.main_img_url
                switch (nano_id) {
                    case 1:
                        detail_ctrl.main_img_url = detail_ctrl.nano_img_url1
                        detail_ctrl.nano_img_url1 = tmp
                        break;
                    case 2:
                        detail_ctrl.main_img_url = detail_ctrl.nano_img_url2
                        detail_ctrl.nano_img_url2 = tmp
                        break;
                    case 3:
                        detail_ctrl.main_img_url = detail_ctrl.nano_img_url3
                        detail_ctrl.nano_img_url3 = tmp
                        break;
                }
            },
            collect: function () {
                axios.get("http://127.0.0.1:5000/collect" + window.location.search).then(
                    function (response) {
                        if (response.data.data.code) {
                            alert("收藏成功")
                        }
                        else {
                            alert("收藏成功")
                        }
                    }
                )
            },
            buy: function () {
                axios.get("http://127.0.0.1:5000/buy" + window.location.search).then(
                    function (response) {
                        if (response.data.data.code) {
                            window.location = response.data.data.confirm
                        }
                    }
                )
            }
        }
    })
}

function load_order_detail() {
    order_detail_ctrl = new Vue({
        el: "#order_info",
        data: {
            order_id: "1212313421",
            origin_price: "19.9",
            finall_price: "19,9",
            store_name: "AAA",
            receiver_name: "BaiguiSB",
            receiver_id: "111111",
            receiver_adddress: "福州带学铜盘高中8#523",
            receiver_phone: "122313122"
        },
        // mounted() {
        //     axios.get("http://127.0.0.1:5000/detail" + window.location.search).then(
        //         function (response) {
        //             if (response.data.data.code) {
        //                 order_detail_ctrl.order_id = response.data.data.order_id
        //                 order_detail_ctrl.origin_price = response.data.data.origin_price
        //                 order_detail_ctrl.finall_price = response.data.data.finall_price
        //                 order_detail_ctrl.store_name = response.data.data.store_name
        //                 order_detail_ctrl.receiver_name = response.data.data.receiver_name
        //                 order_detail_ctrl.receiver_id = response.data.data.receiver_id
        //                 order_detail_ctrl.receiver_adddress = response.data.data.receiver_adddress
        //                 order_detail_ctrl.receiver_phone = response.data.data.receiver_phone
        //             }
        //         }
        //     )
        // },
        methods: {
            cancel: function () {
                axios.get("http://127.0.0.1:5000/cancel" + window.location.search).then(
                    function (response) {
                        if (response.data.data.code) {
                            window.location = "/"
                        }
                        else {
                            alert("取消失败")
                        }
                    }
                )
            }
        }
    })
}

function load_search(){
    search_ctrl=new Vue({
        el:"#search_ctrl",
        data
    })
}