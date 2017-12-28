var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.about = 'Demo code for ';
    $scope.drawData = {"teams":[["Rithwik Sriram",null],["Laksh Kohli","Yanshu Singhal"],["Meet Gupta",null],["Aarav Kwatra","Rohan Sharma"],["Dhruv Patadia",null],["Syed","Prayansh Gupta"],["Ekaansh Gulati",null],["Ryan Ranjan","Agamjot Singh"],["Sandeep Kumar",null],["Aryan Nayyar","Gunkar Singh"],["Parth Aneja",null],["Japji Gujral","Gitansh Kakkar"],["Devansh Lalwani",null],["Lakshya Dugar","Siddharth"],["Amish K Singh","Raghav Thind"],["Shaurya","Manas Kukreja"],["Saumitra","Kunal Arya"],["Arrsh Rehani","Kush Gupta"],["Ashwyn Kumar","Shresth"],[null,"Abhinav Bora"],["Kshaaunish","Pardeep Kumar"],[null,"Kritarth"],["Jatin Saini","Dhruv Verma"],[null,"Krishna Agrawal"],["Aaditya","Akshit Kumar"],[null,"Shivansh Saxena"],["Rohan Ramkumar","Shourya Gupta"],[null,"Divik Dodeja"],["Aryan Fotedar","Bhuvan Verma"],[null,"Divanshu Konwer"],["Aryan","Aditya"],[null,"Steve Mathew"]],"results":[[[null,null],[1,2],[null,null],[1,2],[null,null],[2,1],[null,null],[2,1],[null,null],[2,1],[null,null],[-2,-1],[null,null],[2,1],[1,2],[1,2],[2,1],[1,2],[1,2],[null,null],[2,1],[null,null],[2,1],[null,null],[2,1],[null,null],[2,1],[null,null],[1,2],[null,null],[2,1],[null,null]],[[2,1],[1,2],[1,2],[1,2],[2,1],[-3,-4],[1,2],[2,1],[1,2],[1,2],[2,1],[2,1],[2,1],[2,1],[2,1],[1,2]],[[2,1],[1,2],[2,1],[2,1],[1,2],[1,2],[2,1],[1,2]],[[1,2],[2,1],[1,2],[2,1]],[[2,1],[2,1]],[[2,1]]],"displayResults":[{"roundValue":{"roundIndex":0,"roundString":"R64"},"teamInfo":{},"team1Name":"Rithwik Sriram","team2Name":null,"matchSerial":1,"teamValue":["<b>null</b>"],"teamScore":[null,null]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">null</div>","team2Info":"<div class=\"schoolName1\">null</div>"},"team1Name":"Laksh Kohli","team2Name":"Yanshu Singhal","matchSerial":2,"teamValue":["<b>3-15</b>"],"teamScore":[1,2]},{"teamInfo":{},"team1Name":"Meet Gupta","team2Name":null,"matchSerial":3,"teamValue":["<b>null</b>"],"teamScore":[null,null]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">null</div>","team2Info":"<div class=\"schoolName1\">null</div>"},"team1Name":"Aarav Kwatra","team2Name":"Rohan Sharma","matchSerial":4,"teamValue":["<b>Walkover (W.O)</b>"],"teamScore":[1,2]},{"teamInfo":{},"team1Name":"Dhruv Patadia","team2Name":null,"matchSerial":5,"teamValue":["<b>null</b>"],"teamScore":[null,null]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">null</div>","team2Info":"<div class=\"schoolName1\">null</div>"},"team1Name":"Syed","team2Name":"Prayansh Gupta","matchSerial":6,"teamValue":["<b>Walkover (W.O)</b>"],"teamScore":[2,1]},{"teamInfo":{},"team1Name":"Ekaansh Gulati","team2Name":null,"matchSerial":7,"teamValue":["<b>null</b>"],"teamScore":[null,null]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">null</div>","team2Info":"<div class=\"schoolName1\">null</div>"},"team1Name":"Ryan Ranjan","team2Name":"Agamjot Singh","matchSerial":8,"teamValue":["<b>Walkover (W.O)</b>"],"teamScore":[2,1]},{"teamInfo":{},"team1Name":"Sandeep Kumar","team2Name":null,"matchSerial":9,"teamValue":["<b>null</b>"],"teamScore":[null,null]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">null</div>","team2Info":"<div class=\"schoolName1\">null</div>"},"team1Name":"Aryan Nayyar","team2Name":"Gunkar Singh","matchSerial":10,"teamValue":["<b>Walkover (W.O)</b>"],"teamScore":[2,1]},{"teamInfo":{},"team1Name":"Parth Aneja","team2Name":null,"matchSerial":11,"teamValue":["<b>null</b>"],"teamScore":[null,null]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">null</div>","team2Info":"<div class=\"schoolName1\">null</div>"},"team1Name":"Japji Gujral","team2Name":"Gitansh Kakkar","matchSerial":12,"teamValue":["<b>No Match</b>"],"teamScore":[-2,-1]},{"teamInfo":{},"team1Name":"Devansh Lalwani","team2Name":null,"matchSerial":13,"teamValue":["<b>null</b>"],"teamScore":[null,null]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">null</div>","team2Info":"<div class=\"schoolName1\">null</div>"},"team1Name":"Lakshya Dugar","team2Name":"Siddharth","matchSerial":14,"teamValue":["<b>15-13</b>"],"teamScore":[2,1]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">null</div>","team2Info":"<div class=\"schoolName1\">null</div>"},"team1Name":"Amish K Singh","team2Name":"Raghav Thind","matchSerial":15,"teamValue":["<b>Walkover (W.O)</b>"],"teamScore":[1,2]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">null</div>","team2Info":"<div class=\"schoolName1\">null</div>"},"team1Name":"Shaurya","team2Name":"Manas Kukreja","matchSerial":16,"teamValue":["<b>Walkover (W.O)</b>"],"teamScore":[1,2]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">null</div>","team2Info":"<div class=\"schoolName1\">null</div>"},"team1Name":"Saumitra","team2Name":"Kunal Arya","matchSerial":17,"teamValue":["<b>15-7</b>"],"teamScore":[2,1]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">null</div>","team2Info":"<div class=\"schoolName1\">Amity International School</div>"},"team1Name":"Arrsh Rehani","team2Name":"Kush Gupta","matchSerial":18,"teamValue":["<b>7-15</b>"],"teamScore":[1,2]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">null</div>","team2Info":"<div class=\"schoolName1\">null</div>"},"team1Name":"Ashwyn Kumar","team2Name":"Shresth","matchSerial":19,"teamValue":["<b>5-15</b>"],"teamScore":[1,2]},{"teamInfo":{},"team1Name":"Bye","team2Name":"Abhinav Bora","matchSerial":20,"teamValue":["<b>null</b>"],"teamScore":[null,null]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">null</div>","team2Info":"<div class=\"schoolName1\">null</div>"},"team1Name":"Kshaaunish","team2Name":"Pardeep Kumar","matchSerial":21,"teamValue":["<b>19-17</b>"],"teamScore":[2,1]},{"teamInfo":{},"team1Name":"Bye","team2Name":"Kritarth","matchSerial":22,"teamValue":["<b>null</b>"],"teamScore":[null,null]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">null</div>","team2Info":"<div class=\"schoolName1\">null</div>"},"team1Name":"Jatin Saini","team2Name":"Dhruv Verma","matchSerial":23,"teamValue":["<b>15-2</b>"],"teamScore":[2,1]},{"teamInfo":{},"team1Name":"Bye","team2Name":"Krishna Agrawal","matchSerial":24,"teamValue":["<b>null</b>"],"teamScore":[null,null]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">null</div>","team2Info":"<div class=\"schoolName1\">null</div>"},"team1Name":"Aaditya","team2Name":"Akshit Kumar","matchSerial":25,"teamValue":["<b>Walkover (W.O)</b>"],"teamScore":[2,1]},{"teamInfo":{},"team1Name":"Bye","team2Name":"Shivansh Saxena","matchSerial":26,"teamValue":["<b>null</b>"],"teamScore":[null,null]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">null</div>","team2Info":"<div class=\"schoolName1\">null</div>"},"team1Name":"Rohan Ramkumar","team2Name":"Shourya Gupta","matchSerial":27,"teamValue":["<b>15-5</b>"],"teamScore":[2,1]},{"teamInfo":{},"team1Name":"Bye","team2Name":"Divik Dodeja","matchSerial":28,"teamValue":["<b>null</b>"],"teamScore":[null,null]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">null</div>","team2Info":"<div class=\"schoolName1\">null</div>"},"team1Name":"Aryan Fotedar","team2Name":"Bhuvan Verma","matchSerial":29,"teamValue":["<b>3-15</b>"],"teamScore":[1,2]},{"teamInfo":{},"team1Name":"Bye","team2Name":"Divanshu Konwer","matchSerial":30,"teamValue":["<b>null</b>"],"teamScore":[null,null]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">null</div>","team2Info":"<div class=\"schoolName1\">null</div>"},"team1Name":"Aryan","team2Name":"Aditya","matchSerial":31,"teamValue":["<b>18-16</b>"],"teamScore":[2,1]},{"teamInfo":{},"team1Name":"Bye","team2Name":"Steve Mathew","matchSerial":32,"teamValue":["<b>null</b>"],"teamScore":[null,null]},{"roundValue":{"roundIndex":1,"roundString":"R32"},"team1Name":"Rithwik Sriram","team2Name":"Yanshu Singhal","matchSerial":33,"teamValue":["<b>15-7</b>"],"teamScore":[2,1]},{"team1Name":"Meet Gupta","team2Name":"Rohan Sharma","matchSerial":34,"teamValue":["<b>11-15</b>"],"teamScore":[1,2]},{"team1Name":"Dhruv Patadia","team2Name":"Syed","matchSerial":35,"teamValue":["<b>4-15</b>"],"teamScore":[1,2]},{"team1Name":"Ekaansh Gulati","team2Name":"Ryan Ranjan","matchSerial":36,"teamValue":["<b>3-15</b>"],"teamScore":[1,2]},{"team1Name":"Sandeep Kumar","team2Name":"Aryan Nayyar","matchSerial":37,"teamValue":["<b>15-3</b>"],"teamScore":[2,1]},{"team1Name":"Parth Aneja","team2Name":"Japji Gujral","matchSerial":38,"teamValue":["<b>Walkover (W.O)</b>"],"teamScore":[-3,-4]},{"team1Name":"Devansh Lalwani","team2Name":"Lakshya Dugar","matchSerial":39,"teamValue":["<b>4-15</b>"],"teamScore":[1,2]},{"team1Name":"Raghav Thind","team2Name":"Manas Kukreja","matchSerial":40,"teamValue":["<b>15-3</b>"],"teamScore":[2,1]},{"team1Name":"Saumitra","team2Name":"Kush Gupta","matchSerial":41,"teamValue":["<b>13-15</b>"],"teamScore":[1,2]},{"team1Name":"Shresth","team2Name":"Abhinav Bora","matchSerial":42,"teamValue":["<b>4-15</b>"],"teamScore":[1,2]},{"team1Name":"Kshaaunish","team2Name":"Kritarth","matchSerial":43,"teamValue":["<b>Walkover (W.O)</b>"],"teamScore":[2,1]},{"team1Name":"Jatin Saini","team2Name":"Krishna Agrawal","matchSerial":44,"teamValue":["<b>15-5</b>"],"teamScore":[2,1]},{"team1Name":"Aaditya","team2Name":"Shivansh Saxena","matchSerial":45,"teamValue":["<b>15-8</b>"],"teamScore":[2,1]},{"team1Name":"Rohan Ramkumar","team2Name":"Divik Dodeja","matchSerial":46,"teamValue":["<b>15-7</b>"],"teamScore":[2,1]},{"team1Name":"Bhuvan Verma","team2Name":"Divanshu Konwer","matchSerial":47,"teamValue":["<b>15-12</b>"],"teamScore":[2,1]},{"team1Name":"Aryan","team2Name":"Steve Mathew","matchSerial":48,"teamValue":["<b>6-15</b>"],"teamScore":[1,2]},{"roundValue":{"roundIndex":2,"roundString":"R16"},"team1Name":"Rithwik Sriram","team2Name":"Rohan Sharma","matchSerial":49,"teamValue":["<b>15-7</b>"],"teamScore":[2,1]},{"team1Name":"Syed","team2Name":"Ryan Ranjan","matchSerial":50,"teamValue":["<b>6-15</b>"],"teamScore":[1,2]},{"team1Name":"Sandeep Kumar","team2Name":"Parth Aneja","matchSerial":51,"teamValue":["<b>15-4</b>"],"teamScore":[2,1]},{"team1Name":"Lakshya Dugar","team2Name":"Raghav Thind","matchSerial":52,"teamValue":["<b>15-8</b>"],"teamScore":[2,1]},{"team1Name":"Kush Gupta","team2Name":"Abhinav Bora","matchSerial":53,"teamValue":["<b>8-15</b>"],"teamScore":[1,2]},{"team1Name":"Kshaaunish","team2Name":"Jatin Saini","matchSerial":54,"teamValue":["<b>5-15</b>"],"teamScore":[1,2]},{"team1Name":"Aaditya","team2Name":"Rohan Ramkumar","matchSerial":55,"teamValue":["<b>15-7</b>"],"teamScore":[2,1]},{"team1Name":"Bhuvan Verma","team2Name":"Steve Mathew","matchSerial":56,"teamValue":["<b>11-15</b>"],"teamScore":[1,2]},{"roundValue":{"roundIndex":3,"roundString":"Quarter Final"},"team1Name":"Rithwik Sriram","team2Name":"Ryan Ranjan","matchSerial":57,"teamValue":["<b>8-15</b>"],"teamScore":[1,2]},{"team1Name":"Sandeep Kumar","team2Name":"Lakshya Dugar","matchSerial":58,"teamValue":["<b>15-6</b>"],"teamScore":[2,1]},{"team1Name":"Abhinav Bora","team2Name":"Jatin Saini","matchSerial":59,"teamValue":["<b>8-15</b>"],"teamScore":[1,2]},{"team1Name":"Aaditya","team2Name":"Steve Mathew","matchSerial":60,"teamValue":["<b>15-5</b>"],"teamScore":[2,1]},{"roundValue":{"roundIndex":4,"roundString":"Semi Final"},"team1Name":"Ryan Ranjan","team2Name":"Sandeep Kumar","matchSerial":61,"teamValue":["<b>21-4 21-8</b>"],"teamScore":[2,1]},{"team1Name":"Jatin Saini","team2Name":"Aaditya","matchSerial":62,"teamValue":["<b>21-15 21-9</b>"],"teamScore":[2,1]},{"roundValue":{"roundIndex":5,"roundString":"Final"},"team1Name":"Ryan Ranjan","team2Name":"Jatin Saini","matchSerial":63,"teamValue":["<b>21-19 21-10</b>"],"teamScore":[2,1]}]};
    // $scope.drawData = drawData.data;

    function saveFn(data, userData) {
                console.log(data,'=====',userData); 
            } 

    angular.forEach($scope.drawData, function(drawObjVal, drawObjKey){ 
                    if(drawObjKey === 'displayResults'){
                        angular.forEach(drawObjVal, function(dispalyVal, dispalyKey){ 
                            if(dispalyVal.team1Name){
                                dispalyVal.team1Name = dispalyVal.team1Name.split('(')[0]; 
                            }

                            if(dispalyVal.team2Name){
                                dispalyVal.team2Name = dispalyVal.team2Name.split('(')[0]; 
                            } 

                            if(dispalyVal.teamValue && dispalyVal.teamValue[0]){
                              // dispalyVal.teamValue[0] =   '<b>'+(dispalyVal.teamValue[0]).replace(" null", "")+'</b>'; 
                              dispalyVal.teamValue[0] =   (dispalyVal.teamValue[0]).replace(" <b>null</b>", ""); 
                              dispalyVal.teamValue[0] =   (dispalyVal.teamValue[0]).replace("<b>null</b>", "");
                              dispalyVal.teamValue[0] =   (dispalyVal.teamValue[0]).replace(" null", ""); 
                            }  

                            if(
                                dispalyVal.teamInfo
                                && 
                                dispalyVal.teamInfo.team1Info
                                &&
                                ((dispalyVal.teamInfo.team1Info).indexOf('null') != -1)
                            ){
                                dispalyVal.teamInfo.team1Info = null;
                            }

                            if(
                                dispalyVal.teamInfo
                                && 
                                dispalyVal.teamInfo.team2Info
                                &&
                                ((dispalyVal.teamInfo.team2Info).indexOf('null') != -1)
                            ){
                                dispalyVal.teamInfo.team2Info = null;
                            }

                            if(
                                dispalyVal.teamInfo
                                && 
                                (
                                    dispalyVal.teamInfo.team1Info
                                    ||
                                    dispalyVal.teamInfo.team2Info
                                )
                            ){
                                $scope.drawData.schoonHeading = 'School / Club Name';
                            }
                        });
                    }
                    if(drawObjKey === 'teams'){
                        angular.forEach(drawObjVal, function(teamVal, teamKey){ 
                            if(teamVal[0]){
                                teamVal[0] = teamVal[0].split('(')[0]; 
                            }
                            if(teamVal[1]){
                                teamVal[1] = teamVal[1].split('(')[0]; 
                            } 
                        });
                    } 
                });    

                $scope.makeDynamicDraw = function(drawResponceObject){
                console.log('$scope.drawWidhtHeight--->',$scope.drawWidhtHeight);
                var drawObject = {
                                 init: drawResponceObject,
                                // init: $scope.demo1,
                                // init: $scope.demo2,
                                save: saveFn, // called whenever bracket is modified
                                userData: null, // custom user data
                                onMatchClick: null, // callback
                                onMatchHover: null, // callback 
                                decorator: null, // a function
                                skipSecondaryFinal: false,
                                skipGrandFinalComeback: true,
                                skipConsolationRound: true,
                                centerConnectors: true,
                                disableHighlight: false, // for disalbe highlight on mouve hower
                                dir: 'lr', // "rl" or  "lr",
                                disableToolbar: true,
                                disableTeamEdit: true,
                                disableScore: true, 
                                teamWidth: 190, // number
                                scoreWidth: 10, // number
                                roundMargin: 20, // number
                                matchMargin: 80 // number
                                // matchMargin: 120
                            }; 


                if(!drawObject){
                    return;
                }  
                $('.dynamicDrawContainor').bracket(drawObject); 
            }; 

                $scope.makeDynamicDraw($scope.drawData); 
                


});