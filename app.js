var app = angular.module("app", ['ngMaterial']);

app.controller("mainController", function ($scope) {
    $scope.pessoa = {};

    console.log($scope.pessoa)
});