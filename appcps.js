var app = angular.module("app", ['ngMaterial']);

app.controller("mainController", function ($scope) {
    $scope.resposta = {};

    console.log($scope.resposta)
});