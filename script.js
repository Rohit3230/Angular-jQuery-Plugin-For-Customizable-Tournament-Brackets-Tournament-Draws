var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, drawData) {
    
    $scope.demoData = drawData;
    $scope.about = $scope.demoData.aboutText;

    // All demo data have value for round name, School name etc.
    
    // pass data for make draw of single types of team.
    // $scope.drawData = $scope.demoData.data0;

    // pass data for make draw of dobules types of team.
    // $scope.drawData = $scope.demoData.data1;
   
    // pass data for make draw for dobules with some walkover.
    // $scope.drawData = $scope.demoData.data2;

    // pass data for make draw for no-match status
    $scope.drawData = $scope.demoData.data3;



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
                


})

app.service('drawData', function(){
    this.aboutText = 'Demo text by rohit';

    this.data0 = {"teams":[["Shehjar","Divya Joshi"],["Bhavya Mittal","Shruti Jain"],["Kritika Bhatt","Batul Talib"],["Nikita Rawat","Nimisha Pandey"]],"results":[[[2,1],[2,1],[2,1],[1,2]],[[2,1],[2,1]],[[2,1]]],"displayResults":[{"roundValue":{"roundIndex":0,"roundString":"Quarter Final"},"teamInfo":{"team1Info":"<div class=\"schoolName1\">Vishwa Bharati Public School</div>","team2Info":"<div class=\"schoolName1\">Mother Convent School</div>"},"team1Name":"Shehjar","team2Name":"Divya Joshi","matchSerial":1,"teamValue":["<b>21-7 21-7</b>"],"teamScore":[2,1]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">Apeejay School</div>","team2Info":"<div class=\"schoolName1\">Delhi Public School</div>"},"team1Name":"Bhavya Mittal","team2Name":"Shruti Jain","matchSerial":2,"teamValue":["<b>21-17 21-19</b>"],"teamScore":[2,1]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">Jaypee Public School</div>","team2Info":"<div class=\"schoolName1\">Army Public School</div>"},"team1Name":"Kritika Bhatt","team2Name":"Batul Talib","matchSerial":3,"teamValue":["<b>Retd. Hurt</b>"],"teamScore":[2,1]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">Assis Convent School</div>","team2Info":"<div class=\"schoolName1\">Mayoor School Noida</div>"},"team1Name":"Nikita Rawat","team2Name":"Nimisha Pandey","matchSerial":4,"teamValue":["<b>7-21 11-21</b>"],"teamScore":[1,2]},{"roundValue":{"roundIndex":1,"roundString":"Semi Final"},"team1Name":"Shehjar","team2Name":"Bhavya Mittal","matchSerial":5,"teamValue":["<b>21-16 21-11</b>"],"teamScore":[2,1]},{"team1Name":"Kritika Bhatt","team2Name":"Nimisha Pandey","matchSerial":6,"teamValue":["<b>21-19 21-11</b>"],"teamScore":[2,1]},{"roundValue":{"roundIndex":2,"roundString":"Final"},"team1Name":"Shehjar","team2Name":"Kritika Bhatt","matchSerial":7,"teamValue":["<b>21-11 21-8</b>"],"teamScore":[2,1]}]};

    this.data1 = {"teams":[["Aadi+Himanshu",null],["Sahil+Shaurya","Sachit+Parth"],["Pranav+Shubham","Shrihan+Ameya"],[null,"Aryan+Harshvardhan"]],"results":[[[null,null],[1,2],[1,2],[null,null]],[[2,1],[2,1]],[[2,1]]],"displayResults":[{"roundValue":{"roundIndex":0,"roundString":"Quarter Final"},"teamInfo":{"team1Info":"<div class=\"schoolName1\">Step by Step School</div><div class=\"schoolName2\">Deep Memorial Public School</div>"},"team1Name":"Aadi+Himanshu","team2Name":null,"matchSerial":1,"teamValue":["<b>null</b>"],"teamScore":[null,null]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">Somerville School</div><div class=\"schoolName2\">Somerville School</div>","team2Info":"<div class=\"schoolName1\">Shiv Nadar School</div><div class=\"schoolName2\">Shiv Nadar School</div>"},"team1Name":"Sahil+Shaurya","team2Name":"Sachit+Parth","matchSerial":2,"teamValue":["<b>Walkover (W.O)</b>"],"teamScore":[1,2]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">Bharti Public School</div><div class=\"schoolName2\">Kendriya Vidyalaya</div>","team2Info":"<div class=\"schoolName1\">Mayoor School Noida</div><div class=\"schoolName2\">Amity International School</div>"},"team1Name":"Pranav+Shubham","team2Name":"Shrihan+Ameya","matchSerial":3,"teamValue":["<b>16-21 21-17 18-21</b>"],"teamScore":[1,2]},{"teamInfo":{"team2Info":"<div class=\"schoolName1\">Samsara World School</div><div class=\"schoolName2\">Kaushalya World School</div>"},"team1Name":"Bye","team2Name":"Aryan+Harshvardhan","matchSerial":4,"teamValue":["<b>null</b>"],"teamScore":[null,null]},{"roundValue":{"roundIndex":1,"roundString":"Semi Final"},"team1Name":"Aadi+Himanshu","team2Name":"Sachit+Parth","matchSerial":5,"teamValue":["<b>21-11 21-5</b>"],"teamScore":[2,1]},{"team1Name":"Shrihan+Ameya","team2Name":"Aryan+Harshvardhan","matchSerial":6,"teamValue":["<b>Walkover (W.O)</b>"],"teamScore":[2,1]},{"roundValue":{"roundIndex":2,"roundString":"Final"},"team1Name":"Aadi+Himanshu","team2Name":"Shrihan+Ameya","matchSerial":7,"teamValue":["<b>21-12 23-21</b>"],"teamScore":[2,1]}]};

    this.data2 = {"teams":[["Aadi+Himanshu",null],["Sahil+Shaurya","Sachit+Parth"],["Pranav+Shubham","Shrihan+Ameya"],[null,"Aryan+Harshvardhan"]],"results":[[[null,null],[1,2],[1,2],[null,null]],[[2,1],[2,1]],[[2,1]]],"displayResults":[{"roundValue":{"roundIndex":0,"roundString":"Quarter Final"},"teamInfo":{"team1Info":"<div class=\"schoolName1\">Step by Step School</div><div class=\"schoolName2\">Deep Memorial Public School</div>"},"team1Name":"Aadi+Himanshu","team2Name":null,"matchSerial":1,"teamValue":["<b>null</b>"],"teamScore":[null,null]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">Somerville School</div><div class=\"schoolName2\">Somerville School</div>","team2Info":"<div class=\"schoolName1\">Shiv Nadar School</div><div class=\"schoolName2\">Shiv Nadar School</div>"},"team1Name":"Sahil+Shaurya","team2Name":"Sachit+Parth","matchSerial":2,"teamValue":["<b>Walkover (W.O)</b>"],"teamScore":[1,2]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">Bharti Public School</div><div class=\"schoolName2\">Kendriya Vidyalaya</div>","team2Info":"<div class=\"schoolName1\">Mayoor School Noida</div><div class=\"schoolName2\">Amity International School</div>"},"team1Name":"Pranav+Shubham","team2Name":"Shrihan+Ameya","matchSerial":3,"teamValue":["<b>16-21 21-17 18-21</b>"],"teamScore":[1,2]},{"teamInfo":{"team2Info":"<div class=\"schoolName1\">Samsara World School</div><div class=\"schoolName2\">Kaushalya World School</div>"},"team1Name":"Bye","team2Name":"Aryan+Harshvardhan","matchSerial":4,"teamValue":["<b>null</b>"],"teamScore":[null,null]},{"roundValue":{"roundIndex":1,"roundString":"Semi Final"},"team1Name":"Aadi+Himanshu","team2Name":"Sachit+Parth","matchSerial":5,"teamValue":["<b>21-11 21-5</b>"],"teamScore":[2,1]},{"team1Name":"Shrihan+Ameya","team2Name":"Aryan+Harshvardhan","matchSerial":6,"teamValue":["<b>Walkover (W.O)</b>"],"teamScore":[2,1]},{"roundValue":{"roundIndex":2,"roundString":"Final"},"team1Name":"Aadi+Himanshu","team2Name":"Shrihan+Ameya","matchSerial":7,"teamValue":["<b>21-12 23-21</b>"],"teamScore":[2,1]}]};

    this.data3 = {"teams":[["Bishamber+Supriya",null],["Ritika+Bhavesh","Abhisar+Bhabya"],["Yash Jain+Mohini","Bhavay+Pooja Ray"],["Vikhyaat+Priya","Somil+Keshav"],["Geeta+Jitendar","Saumya+Rishti"],["Priya Roy+Deepansh","Akanksha+Himanshu"],["Ansh Goel+Vanya","Kunal+Shivani"],[null,"Vitesh+Khushi"]],"results":[[[null,null],[1,2],[2,1],[-2,-1],[1,2],[2,1],[1,2],[null,null]],[[1,2],[-3,-4],[2,1],[1,2]],[[1,2],[1,2]],[[1,2]]],"displayResults":[{"roundValue":{"roundIndex":0,"roundString":"R16"},"teamInfo":{},"team1Name":"Bishamber+Supriya","team2Name":null,"matchSerial":1,"teamValue":["<b>null</b>"],"teamScore":[null,null]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">Deep Memorial School</div><div class=\"schoolName2\">null</div>","team2Info":"<div class=\"schoolName1\">null</div><div class=\"schoolName2\">null</div>"},"team1Name":"Ritika+Bhavesh","team2Name":"Abhisar+Bhabya","matchSerial":2,"teamValue":["<b>Walkover (W.O)</b>"],"teamScore":[1,2]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">null</div><div class=\"schoolName2\">null</div>","team2Info":"<div class=\"schoolName1\">null</div><div class=\"schoolName2\">null</div>"},"team1Name":"Yash Jain+Mohini","team2Name":"Bhavay+Pooja Ray","matchSerial":3,"teamValue":["<b>15-12</b>"],"teamScore":[2,1]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">null</div><div class=\"schoolName2\">null</div>","team2Info":"<div class=\"schoolName1\">null</div><div class=\"schoolName2\">null</div>"},"team1Name":"Vikhyaat+Priya","team2Name":"Somil+Keshav","matchSerial":4,"teamValue":["<b>No Match</b>"],"teamScore":[-2,-1]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">null</div><div class=\"schoolName2\">null</div>","team2Info":"<div class=\"schoolName1\">null</div><div class=\"schoolName2\">null</div>"},"team1Name":"Geeta+Jitendar","team2Name":"Saumya+Rishti","matchSerial":5,"teamValue":["<b>3-15</b>"],"teamScore":[1,2]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">null</div><div class=\"schoolName2\">null</div>","team2Info":"<div class=\"schoolName1\">null</div><div class=\"schoolName2\">null</div>"},"team1Name":"Priya Roy+Deepansh","team2Name":"Akanksha+Himanshu","matchSerial":6,"teamValue":["<b>Walkover (W.O)</b>"],"teamScore":[2,1]},{"teamInfo":{"team1Info":"<div class=\"schoolName1\">null</div><div class=\"schoolName2\">null</div>","team2Info":"<div class=\"schoolName1\">null</div><div class=\"schoolName2\">null</div>"},"team1Name":"Ansh Goel+Vanya","team2Name":"Kunal+Shivani","matchSerial":7,"teamValue":["<b>10-15</b>"],"teamScore":[1,2]},{"teamInfo":{},"team1Name":"Bye","team2Name":"Vitesh+Khushi","matchSerial":8,"teamValue":["<b>null</b>"],"teamScore":[null,null]},{"roundValue":{"roundIndex":1,"roundString":"Quarter Final"},"team1Name":"Bishamber+Supriya","team2Name":"Abhisar+Bhabya","matchSerial":9,"teamValue":["<b>Walkover (W.O)</b>"],"teamScore":[1,2]},{"team1Name":"Yash Jain+Mohini","team2Name":"Vikhyaat+Priya","matchSerial":10,"teamValue":["<b>Walkover (W.O)</b>"],"teamScore":[-3,-4]},{"team1Name":"Saumya+Rishti","team2Name":"Priya Roy+Deepansh","matchSerial":11,"teamValue":["<b>15-5</b>"],"teamScore":[2,1]},{"team1Name":"Kunal+Shivani","team2Name":"Vitesh+Khushi","matchSerial":12,"teamValue":["<b>5-15</b>"],"teamScore":[1,2]},{"roundValue":{"roundIndex":2,"roundString":"Semi Final"},"team1Name":"Abhisar+Bhabya","team2Name":"Yash Jain+Mohini","matchSerial":13,"teamValue":["<b>21-17 19-21 13-21</b>"],"teamScore":[1,2]},{"team1Name":"Saumya+Rishti","team2Name":"Vitesh+Khushi","matchSerial":14,"teamValue":["<b>14-21 11-21</b>"],"teamScore":[1,2]},{"roundValue":{"roundIndex":3,"roundString":"Final"},"team1Name":"Yash Jain+Mohini","team2Name":"Vitesh+Khushi","matchSerial":15,"teamValue":["<b>9-21 16-21</b>"],"teamScore":[1,2]}]};
    


});