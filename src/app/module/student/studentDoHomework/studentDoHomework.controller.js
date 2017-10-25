(function() {
    'use strict';

    angular
        .module('phoenix')
        .controller('studentDoHomeworkCtrl', studentDoHomeworkCtrl)
        .controller('uploadReportModalCtrl', uploadReportModalCtrl);

    studentDoHomeworkCtrl.$inject = ['$scope', '$uibModal', '$timeout', 'stuCourseSrv', '$stateParams'];
    uploadReportModalCtrl.$inject = ['$scope', '$uibModalInstance', '$timeout', 'reqUrl']

    function uploadReportModalCtrl($scope, $uibModalInstance, $timeout, reqUrl) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
        $scope.ok = function() {

            $uibModalInstance.close();
        }
        $scope.chooseFile = function() {
            $('#report').trigger('click');
        }
        $scope.filename = "选择报告";
        $scope.homeworkFile = new FormData();

        $scope.getFile = function(file) {
            console.log(file);
            $scope.homeworkFile.append('file', file)
            $scope.filename = file.name;
            $scope.showBtn = true;
            $scope.$apply()
        };
        $scope.upload = function() {
            $.ajax({
                type: 'POST',
                url: reqUrl + '/admin/course/experiment/markdown',
                dataType: 'json',
                processData: false, // Dont process the files
                contentType: false,
                data: $scope.homeworkFile,
                success: function(res) {
                    console.log(res)
                    if (res.errorCode == 0) {
                        toastr.success('上传成功');
                        $scope.homeworkUrl = res.data;
                        $scope.$apply();
                    } else {
                        toastr.error('啊哦，上传失败咯');
                    }
                }
            });
        }

        // $timeout(function() {
        //     // $('<input type="file" id="report" placeholder="" style="display:none"  class="form-control">').appendTo($('#choosefilebtn'));

        // })
    }


    function studentDoHomeworkCtrl($scope, $uibModal, $timeout, stuCourseSrv, $stateParams) {
        var vm = this;
        $scope.commitWork = function() {
            toastr.success("提交成功")
        }
        console.log($stateParams);
        stuCourseSrv.getHomeworkDetail().get({
            homeworkId: $stateParams.homeworkId
        }, function(response) {
            console.log(response);
            $scope.detail = response.data
            console.log($scope.detail)
        }, function(error) {
            console.log(error);
        })
        $scope.uploadReport = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'app/module/modal/uploadReportModal.html',
                controller: 'uploadReportModalCtrl'
            });


            modalInstance.rendered.then(function(result) {
                console.log(result);

            });
            modalInstance.result.then(function(result) {
                console.log(result);

            });
        }

    }
})();