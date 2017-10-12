(function() {
    'use strict';

    angular
        .module('phoenix')
        .controller('studentCourseDetailCtrl', studentCourseDetailCtrl);

    studentCourseDetailCtrl.$inject = ['$scope', '$state'];

    function studentCourseDetailCtrl($scope, $state) {
        $scope.checkCourseHomework = function() {
            $state.go('index.studentHomework')
        }
        $scope.startExp = function() {

            $state.go('index.cloudware.experiment');
        }
        $scope.doHomework = function() {
            $state.go('index.studentDoHomework');
        }
        $scope.courseContent = [{
            moduleName: "R语言编程基础实验",
            moduleContent: [{
                id: "123",
                experimentName: "实验一：R基本环境",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验二：R包",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验三：查看帮助",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验四：定义变量",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验五：变量赋值",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验六：定义向量",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验七：定义数组",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验八：定义数据框",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验九：定义函数",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验十：条件判断语句",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验十一：循环语句",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验十二：可视化语句",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, ]
        }, {
            moduleName: "R语言统计建模与分析基础实验",
            moduleContent: [{
                id: "123",
                experimentName: "实验一：数据源连接",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验二：数据查看",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验三：数据切片",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验四：数据编辑",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验五：描述性统计",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验六：点图和条形图",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验七：直方图和核密度图",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验八：箱线图",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验九：Hexbin图",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验十：散点图矩阵",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }]
        }, {
            moduleName: "Python语言编程基础实验",
            moduleContent: [{
                id: "123",
                experimentName: "实验一：打印Hello World",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验二：使用文本编辑器",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验三：输入和输出",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验四：数据类型和变量",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验五：字符串和编码",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验六：使用list和tuple",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验七：条件判断和循环",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验八：使用dict和set",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验九：函数",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验十：高级特性（切片、迭代、列表生成式、生成器）",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }]
        }, {
            moduleName: "Python语言统计建模与分析基础实验",
            moduleContent: [{
                id: "123",
                experimentName: "实验一：连接数据库",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验二：数据导入",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验三：数据结构",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验四：数据切片",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验五：描述性统计",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验六：可视化处理",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验七：Numpy库操作",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验八：Scipy库操作",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验九：Pandas库操作",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }, {
                id: "123",
                experimentName: "实验十：Sciki-learn库操作",
                experimentDes: "描述",
                dueDate: "",
                date: "Jul 14, 2013",
                completed: 0
            }]
        }]
        $scope.condition = [{
            label: "全部",
            value: ""
        }]

        for (var i in $scope.courseContent) {
            $scope.condition.push({
                label: $scope.courseContent[i].moduleName,
                value: $scope.courseContent[i].moduleName
            })
        }

        $scope.q = $scope.condition[0].value

    }
})();