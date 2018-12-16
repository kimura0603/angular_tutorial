//プロパティやメソッドを定義するとビューで利用できる！

//module名はviewのhtmlタグに記載
angular.module('myapp',[])
    //スコープは、アプリケーションのモデルを参照するオブジェクト
    .controller('MainController', ['$scope', function($scope){

//        $scope.user = [];

        $scope.users = [
            {"name":"taguchi", "score":52.22},
            {"name":"Kimura", "score":60.22},
            {"name":"hogehoge", "score":80.22},
            {"name":"Jen", "score":50.22},
            {"name":"Koji", "score":99.22},

        ];

        $scope.addUser = function(){
            console.log($scope.user);  // 確認用
//            console.log('hogehoge');
            //$location.path('./index2.html');
            $window.location.href = './index2.html';
        }
        //日付のオブジェクト
        $scope.today = new Date();
    }])
    .controller('UseritemController', ['$scope', function($scope){
        $scope.increment = function(){
            $scope.user.score++;
        }
    }]);
