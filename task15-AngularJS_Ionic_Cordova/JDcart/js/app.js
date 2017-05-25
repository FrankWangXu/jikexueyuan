(function (angular) {
    'use strict';
    // 创建一个模块用于管理整个应用
    var myApp = angular.module('myApp', []);
    myApp.factory('dataService', function () {
        var cart = [{
                id: 1,
                name: '【京东超市】辉山（huishan）风干牛肉干礼盒装',
                img: './images/a1.jpg',
                price: 19,
                prop: ' 风干牛肉干原味400g 1件',
                quantity: 1,
                weight: '0.40kg/件',
            },
            {
                id: 2,
                name: '三星（SAMSUNG）32GB UHS-1 Class10 TF(Micro SD)存储卡（读速80Mb/s）升级版',
                img: './images/a2.jpg',
                price: 1927,
                prop: ' TF卡80MB/s, 32GB 1个',
                quantity: 1,
                weight: '0.01kg/件',
            },
            {
                id: 3,
                name: 'Apple iPhone 5s (A1530) 16GB 金色 移动联通4G手机',
                img: './images/a3.jpg',
                price: 1699,
                prop: ' TF卡80MB/s, 32GB 1个',
                quantity: 1,
                weight: '0.01kg/件',
            },
            {
                id: 4,
                name: '奥克斯（AUX）正1.5匹 冷暖 定速 空调挂机(KFR-35GW/HFJ+3)',
                img: './images/a4.jpg',
                price: 1899,
                prop: ' TF卡80MB/s, 32GB 1个',
                quantity: 1,
                weight: '0.01kg/件',
            },
            {
                id: 5,
                name: '金士顿（Kingston）16GB 80MB/s TF(Micro SD)Class10 UHS-I高速存储卡 ',
                img: './images/a5.jpg',
                price: 789,
                prop: ' TF卡80MB/s, 32GB 1个',
                quantity: 1,
                weight: '0.01kg/件',
            },
            {
                id: 6,
                name: 'TP-LINK TL-WR886N 450M无线路由器（宝蓝） 智能路由 WIFI无线穿墙*12礼盒装',
                img: './images/a6.jpg',
                price: 99,
                prop: ' TF卡80MB/s, 32GB 1个',
                quantity: 1,
                weight: '0.01kg/件',
            },
            {
                id: 7,
                name: '【京东超市】可爱民国',
                img: './images/a7.jpg',
                price: 250,
                prop: ' TF卡80MB/s, 32GB 1个',
                quantity: 1,
                weight: '0.01kg/件',
            },
            {
                id: 8,
                name: '【京东超市】超可爱民国',
                img: './images/a8.jpg',
                price: 250,
                prop: ' TF卡80MB/s, 32GB 1个',
                quantity: 1,
                weight: '0.01kg/件',
            }
        ];
        var buy = [];
        var service = {
            data: cart,
            buyData: buy
        };
        return service;
    });
    //创建一个控制器用于和界面交互数据
    myApp.controller('cartController', function ($scope, dataService) {
        // 完成控制器中对视图的数据暴露操作
        $scope.cart = dataService.data;
        $scope.buy = dataService.buyData;
        $scope.seleData = dataService.selector1;
        // 暴露行为
        $scope.actions = {};
        // 获取点击的id
        $scope.actions.getId = function (id) {
            var index = 0;
            angular.forEach($scope.cart, function (item, key) {
                if (item.id === id) {
                    index = key;
                }
            });
            return index;
        }
        // 点击加入购物车
        $scope.actions.purches = function (id) {
            var buyId = $scope.actions.getId(id);
            var buyCart = $scope.cart[buyId];
            $scope.buy.push(buyCart);
        }
        // 计算购物总价
        $scope.actions.totalPrice = function () {
            var total = 0;
            angular.forEach($scope.buy, function (good) {
                total += good.quantity * good.price;
            })
            return total;
        }
        // 计算总购买数
        $scope.actions.totalQuantity = function () {
            var total = 0;
            angular.forEach($scope.buy, function (good) {
                total += parseInt(good.quantity);
            })
            return total;
        }
        //购买数量 + - add(id) reduce(id)
        $scope.actions.add = function (id) {
            var index = $scope.actions.getId(id);
            if (index != -1) {
                var item = $scope.buy[index];
                item.quantity++;
            }
        }
        $scope.actions.reduce = function (id) {
            var index = $scope.actions.getId(id);
            if (index != -1) {
                var item = $scope.buy[index];
                if (item.quantity > 1) {
                   item.quantity--;
                } else {
                    var returnKey = confirm('从购物车内删除该产品!')
                    if (returnKey) {
                        $scope.actions.remove(id);
                    }
                }
            }
        }
        // 删除
        $scope.actions.remove = function (id) {
            var index = $scope.actions.getId(id);
            if (index !== -1) {
                $scope.buy.splice(index, 1);
            }
        }
        $scope.$watch('buy', function (newValue, oldValue) {
            angular.forEach(newValue, function (item, key) {
                if (item.quantity < 1) {
                    var returnKey = confirm('从购物车内删除该产品!')
                    if (returnKey) {
                        $scope.actions.remove(key);
                    } else {
                        item.quantity = oldValue[key].quantity;
                    }
                }
            })
        }, true);
    });
})(angular);