'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $anchorScroll) {
        $scope.sortorder = "-upVoteCount";
        $scope.mystyle = {color:'red'};
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;
        eventData.getEvent().$promise
            .then(function (event) {$scope.event = event; console.log(event);})
            .catch(function (response) { $console.log(response);}
            );




        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };

        $scope.scrollToSession = function () {
            $anchorScroll();
        };
    });