'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.sortorder = "-upVoteCount";
        $scope.mystyle = {color:'red'};
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;
        $scope.event = {
            name: 'Ciaran codes like a BOSS',
            date: '12/4/2016',
            time: '12:30 pm',
            location: {
                address: 'Fexco Headquarters',
                city:'Killorglin',
                county : 'Kerry'
            },
            imageUrl:'/img/angularjs-logo.png',

            sessions: [
                {
                    name :"Learn Angular",
                    priority:"HIGH",
                    abstract: "Must learn so I can be more awesome",
                    duration : 3,
                    upVoteCount: 0
                },
                {
                    name :"Learn Wordpress",
                    priority:"HIGH",
                    abstract: "Will need to build theme!!",
                    duration : 1,
                    upVoteCount: 0
                },
                {
                    name :"Complete PluralSight Course",
                    priority:"HIGH",
                    abstract: "If you watch it, You will learn!",
                    duration : 2,
                    upVoteCount: 0
                },
                {
                    name :"Finish Sprint!!",
                    priority:"HIGH",
                    abstract: "Winner winner chicken dinner",
                    duration : 4,
                    upVoteCount: 0
                }
            ]

        }

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    });