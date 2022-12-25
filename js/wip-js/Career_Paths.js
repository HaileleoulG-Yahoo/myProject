// jquery ready start
$(document).ready(function () {




}); // jquery end



function position_modal(position) {

    //console.log("Position : ",position);

    var siteurl = _spPageContextInfo.webAbsoluteUrl;

    oDataCareerPathPosition = siteurl + "/_api/web/lists/getbytitle('Career-Path-Position')/items?$select=Job_Title,Similar_Job_Titles,Job_Summary,Top_Skill_1,Top_Skill_1_Rating,Top_Skill_2,Top_Skill_2_Rating,Top_Skill_3,Top_Skill_3_Rating,Top_Skill_4,Top_Skill_4_Rating,Top_Skill_5,Top_Skill_5_Rating&$filter=Job_Title eq '" + position + "'&$top=1";

    //console.log("oDataCareerPathPosition : ",oDataCareerPathPosition);
    

    $.ajax({

        url: oDataCareerPathPosition,
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },

        success: function (data) {

            var items = data.d.results;

            items.forEach(function (item, index) {

                var _Job_Title = item.Job_Title;
                var _Similar_Job_Titles = item.Similar_Job_Titles;
                var _Job_Summary = item.Job_Summary;
                var _Top_Skill_1 = item.Top_Skill_1;
                var _Top_Skill_1_Rating = item.Top_Skill_1_Rating;
                var _Top_Skill_2 = item.Top_Skill_2;
                var _Top_Skill_2_Rating = item.Top_Skill_2_Rating;
                var _Top_Skill_3 = item.Top_Skill_3;
                var _Top_Skill_3_Rating = item.Top_Skill_3_Rating;
                var _Top_Skill_4 = item.Top_Skill_4;
                var _Top_Skill_4_Rating = item.Top_Skill_4_Rating;
                var _Top_Skill_5 = item.Top_Skill_5;
                var _Top_Skill_5_Rating = item.Top_Skill_5_Rating;


                //remove space and fwd slash from 'position' to make is usable for modal id
                var _Position = position.replace(" ", "");

                var _Position = position.replace(" ", "");
                var _Position = _Position.replace(" ", "");
                var _Position = _Position.replace(" ", "");


                // Count number of times space character in Top_Skill_1;
                var CountSpace = (_Top_Skill_1.split(" ").length - 1);


                // Replace space characters with '_' characters from Top_Skill_1;
                var _Top_Skill_1_Definition_ID = _Top_Skill_1;

                for (i = 0; i < CountSpace; i++) {

                    var _Top_Skill_1_Definition_ID = _Top_Skill_1_Definition_ID.replace(" ", "_");

                }

                // Count number of times space character in Top_Skill_2;
                var CountSpace = (_Top_Skill_2.split(" ").length - 1);


                // Replace space characters with '_' characters from Top_Skill_2;
                var _Top_Skill_2_Definition_ID = _Top_Skill_2;

                for (i = 0; i <= CountSpace; i++) {

                    var _Top_Skill_2_Definition_ID = _Top_Skill_2_Definition_ID.replace(" ", "_");

                }


                // Count number of times space character in Top_Skill_3;
                var CountSpace = (_Top_Skill_3.split(" ").length - 1);


                // Replace space characters with '_' characters from Top_Skill_3;
                var _Top_Skill_3_Definition_ID = _Top_Skill_3;

                for (i = 0; i < CountSpace; i++) {

                    var _Top_Skill_3_Definition_ID = _Top_Skill_3.replace(" ", "_");

                }

                // Count number of times space character in Top_Skill_4;
                var CountSpace = (_Top_Skill_4.split(" ").length - 1);


                // Replace space characters with '_' characters from Top_Skill_4;
                var _Top_Skill_4_Definition_ID = _Top_Skill_4;

                for (i = 0; i < CountSpace; i++) {

                    var _Top_Skill_4_Definition_ID = _Top_Skill_4.replace(" ", "_");

                }

                // Count number of times space character in Top_Skill_5;
                var CountSpace = (_Top_Skill_5.split(" ").length - 1);


                // Replace space characters with '_' characters from Top_Skill_5;            
                var _Top_Skill_5_Definition_ID = _Top_Skill_5;

                for (i = 0; i < CountSpace; i++) {

                    var _Top_Skill_5_Definition_ID = _Top_Skill_5.replace(" ", "_");

                }


                htmlPositionmodal = `
            <div class="modal fade" id="staticBackdrop${_Position}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                  aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h5 class="modal-title" id="staticBackdropLabel" style="margin-left:0px; font-size:1.5rem;">
                              ${_Job_Title} </h5>
                              <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body" style="margin-left: 5%; margin-right: 5%;">


          
                              <p style="text-align:left;"><b>Similar Job Title(s)</b>: ${_Similar_Job_Titles} </p>
                              <p style="text-align:justify;"><b>Job Summary</b>: ${_Job_Summary} </p>          
                              <p
                                  style="color:black; font-family:Arial, Helvetica, sans-serif; font-weight:bold; font-size:1.25rem; text-align:left;">
                                  Featured Skills</p>


          
                              <div class="container position-container">
                                  <div class="row" style="margin-left: 1rem; margin-right: 1rem; margin-top: 1.5rem; margin-bottom: 0px;">
                                      <div class="col"
                                          style="font-family:Arial, Helvetica, sans-serif; font-weight:bold; text-align:left; padding-left:0px;">          
          
                                          <body>

                                          <span onclick="show_Skill_Definition_For_Position('${_Position}','Top_Skill_1')">${_Top_Skill_1} : </span>
                                          <br>

                                          </body>
          
          
                                      </div>
                                      <div class="col capitol-icons" style="padding-right:0px;">`;


                for (let i = 0; i < _Top_Skill_1_Rating; i++) {

                    htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                            src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/ComparingPositions/Capitol-Icon-Black.png"> `;
                }


                var Skill_Rating_Gap = 5 - _Top_Skill_1_Rating;


                for (let i = 0; i < Skill_Rating_Gap; i++) {

                    htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                            src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/ComparingPositions/Capitol-Icon-Gray.png"> `;
                }


                htmlPositionmodal = htmlPositionmodal + `      
                                      </div>

                                  </div>


                                  <div id="Definition_${_Top_Skill_1_Definition_ID}" class="row" style="text-align:justify; font-style:italic; margin: 0px 1rem 1rem;"> `;
                                  
                                  
                              

                                    
                                htmlPositionmodal = htmlPositionmodal + `</div>


                                  <div class="row" style="margin-left: 1rem; margin-right: 1rem; margin-top: 1.5rem; margin-bottom: 0px;">
                                      <div class="col"
                                      style="font-family:Arial, Helvetica, sans-serif; font-weight:bold; text-align:left; padding-left:0px;">
          

                                      <body>

                                          <span onclick="show_Skill_Definition_For_Position('${_Position}','Top_Skill_2')">${_Top_Skill_2} : </span>
                                          <br>

                                      </body>


          
                                      </div>
                                      <div class="col capitol-icons" style="padding-right:0px;">`;


                for (let i = 0; i < _Top_Skill_2_Rating; i++) {

                    htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                            src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/ComparingPositions/Capitol-Icon-Black.png"> `;
                }


                var Skill_Rating_Gap = 5 - _Top_Skill_2_Rating;


                for (let i = 0; i < Skill_Rating_Gap; i++) {

                    htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                            src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/ComparingPositions/Capitol-Icon-Gray.png"> `;
                }


                htmlPositionmodal = htmlPositionmodal + `            
                                      </div>
                                  </div>


                                  <div id="Definition_${_Top_Skill_2_Definition_ID}" class="row" style="text-align:justify; font-style:italic; margin: 0px 1rem 1rem;">
                                  
                                  

                                  
                                  </div>


                                  <div class="row" style="margin-left: 1rem; margin-right: 1rem; margin-top: 1.5rem; margin-bottom: 0px;">
                                      <div class="col"
                                          style="font-family:Arial, Helvetica, sans-serif; font-weight:bold; text-align:left; padding-left:0px;">
          

                                          <body>

                                          <span onclick="show_Skill_Definition_For_Position('${_Position}','Top_Skill_3')">${_Top_Skill_3} : </span>
                                          <br>

                                      </body>

          
                                      </div>
                                      <div class="col capitol-icons" style="padding-right:0px;">`;


                for (let i = 0; i < _Top_Skill_3_Rating; i++) {

                    htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                            src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/ComparingPositions/Capitol-Icon-Black.png"> `;
                }


                var Skill_Rating_Gap = 5 - _Top_Skill_3_Rating;


                for (let i = 0; i < Skill_Rating_Gap; i++) {

                    htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                            src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/ComparingPositions/Capitol-Icon-Gray.png"> `;
                }


                htmlPositionmodal = htmlPositionmodal + `
                                      </div>
                                  </div>


                                  <div id="Definition_${_Top_Skill_3_Definition_ID}" class="row" style="text-align:justify; font-style:italic; margin: 0px 1rem 1rem;">                                
                                
                                  </div>


                                  <div class="row" style="margin-left: 1rem; margin-right: 1rem; margin-top: 1.5rem; margin-bottom: 0px;">
                                      <div class="col"
                                          style="font-family:Arial, Helvetica, sans-serif; font-weight:bold; text-align:left; padding-left:0px;">
          

                                          <body>

                                          <span onclick="show_Skill_Definition_For_Position('${_Position}','Top_Skill_4')">${_Top_Skill_4} : </span>
                                          <br>

                                      </body>


          
                                      </div>
                                      <div class="col capitol-icons" style="padding-right:0px;">`;


                for (let i = 0; i < _Top_Skill_4_Rating; i++) {

                    htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                            src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/ComparingPositions/Capitol-Icon-Black.png"> `;
                }


                var Skill_Rating_Gap = 5 - _Top_Skill_4_Rating;


                for (let i = 0; i < Skill_Rating_Gap; i++) {

                    htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                            src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/ComparingPositions/Capitol-Icon-Gray.png"> `;
                }


                htmlPositionmodal = htmlPositionmodal + `          
                                      </div>
                                  </div>


                                  <div id="Definition_${_Top_Skill_4_Definition_ID}" class="row" style="text-align:justify; font-style:italic; margin: 0px 1rem 1rem;">                                
                                
                                  </div>



                                  <div class="row" style="margin-left: 1rem; margin-right: 1rem; margin-top: 1.5rem; margin-bottom: 0px;">
                                      <div class="col"
                                          style="font-family:Arial, Helvetica, sans-serif; font-weight:bold; text-align:left; padding-left:0px;">


                                        <body>

                                          <span onclick="show_Skill_Definition_For_Position('${_Position}','Top_Skill_5')">${_Top_Skill_5} : </span>
                                          <br>

                                      </body>
                                      
                                      
          
                                      </div>
          
                                      <div class="col capitol-icons" style="padding-right:0px;">`;


                for (let i = 0; i < _Top_Skill_5_Rating; i++) {

                    htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                            src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/ComparingPositions/Capitol-Icon-Black.png"> `;
                }


                var Skill_Rating_Gap = 5 - _Top_Skill_5_Rating;


                for (let i = 0; i < Skill_Rating_Gap; i++) {

                    htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                            src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/ComparingPositions/Capitol-Icon-Gray.png"> `;
                }


                htmlPositionmodal = htmlPositionmodal + `         
                                      </div>
                                  </div>



                                  <div id="Definition_${_Top_Skill_5_Definition_ID}" class="row" style="text-align:justify; font-style:italic; margin: 0px 1rem 1rem;">                                
                                
                                  </div>

          
                              </div>
          
                          </div>
                          <div class="modal-footer" style="justify-content:center">
          
                              <button type="button" class="btn" style="background-color:brown; color:white; width:50%;"><a
                                      style="color:white; text-decoration:none; font-size:1.2rem; font-weight:bold;"
                                      href="#">Position
                                      Description </a></button>
          
                          </div>
                      </div>
                  </div>
              </div>
            `;



            });


            console.log("htmlPositionmodal : ", htmlPositionmodal);

            if (position == 'Intern') {
                document.getElementById('Intern-Position').innerHTML = htmlPositionmodal;
            } else if (position == 'Staff Assistant') {
                document.getElementById('StaffAsssitant-Position').innerHTML = htmlPositionmodal;
            } else if (position == 'Scheduler/Executive Assistant') {
                document.getElementById('SchedulerExecutiveAssistant-Position').innerHTML = htmlPositionmodal;
            } else if (position == 'Operations Director') {
                document.getElementById('OperationsDirector-Position').innerHTML = htmlPositionmodal;
            } else if (position == 'Deputy Chief of Staff') {
                document.getElementById('DeputyChiefOfStaff-Position').innerHTML = htmlPositionmodal;
            } else if (position == 'Chief of Staff') {
                document.getElementById('ChiefOfStaff-Position').innerHTML = htmlPositionmodal;
            } else if (position == 'Legislative Assistant') {
                document.getElementById('LegislativeAssistant-Position').innerHTML = htmlPositionmodal;
            }




        },
        error: function (data) {
            alert("Error: " + data);
        }
    });

    

};



function career_path_modal(position_1, position_2) {

    //console.log("Position_1 :", position_1, "Position_2 :", position_2);

    var siteurl = _spPageContextInfo.webAbsoluteUrl;

    oDataCareerPath = siteurl + "/_api/web/lists/getbytitle('Career-Path-Connection-Data')/items?$select=URL_Featured_Skills,Starting_Position/Job_Title,Desired_Position/Job_Title&$expand=Starting_Position&$expand=Desired_Position&$filter=Starting_Position/Job_Title eq '" + position_1 + "' and Desired_Position/Job_Title eq '" + position_2 + "'&$top=1";

    //console.log("oDataCareerPath:", oDataCareerPath);


    $.ajax({

        url: oDataCareerPath,
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },

        success: function (data) {

            //console.log("Sucess : Retured results :",results);

            var items = data.d.results;

            //console.log("items :",items);

            items.forEach(function (item, index) {

                var _Position_1 = position_1.replace(" ", "");
                var _Position_1 = _Position_1.replace(" ", "");
                var _Position_1 = _Position_1.replace(" ", "");
                var _Position_1 = _Position_1.replace("/", "");

                var _Position_2 = position_2.replace(" ", "");
                var _Position_2 = _Position_2.replace(" ", "");
                var _Position_2 = _Position_2.replace(" ", "");
                var _Position_2 = _Position_2.replace("/", "");

                var _URL_Featured_Skills = item.URL_Featured_Skills;


                // console.log("position_1 :",position_1);
                // console.log("position_2 :",position_2);
                // console.log("_URL_Featured_Skills :",_URL_Featured_Skills);


                htmlCareerPathModal = `<div class="modal fade" id="staticBackdrop${_Position_1}-to-${_Position_2}" data-bs-backdrop="static"
            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style="background:rgb(247, 245, 245);">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel"
                            style="margin-left:0px; font-size:1.5rem; text-align:left;">${position_1} <img
                                src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Arrow-Right.png"
                                style="width:8%;height:150%;"> ${position_2}</h5>
                        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
    
                        <p style="text-align:left;"><b>Exploring Skill Levels</b></p>
                        <p style="text-align:left;">The following chart presents the expected skill levels for the
                            featured skills for ${position_2} compared with the skill levels for ${position_1}. </p>
    
                        <div class="center-item">
    
                            <img src="${_URL_Featured_Skills}"
                                style="width:60%;" alt="">
    
                        </div>
    
                        <p style="text-align:left;"><b>Gap Closure Strategies</b></p>
                        <p style="text-align:left;">The following are recommended strategies to help address potential
                            gaps between your current position and the next position in the career path.</p>
    
                        <ul style="text-align: left;">
                            <li> Review the ${position_2} Position Description and featured skills. </li>
                            <li> Discuss options for job shadowing and informational interviews with your supervisor.
                            </li>
                            <li> Review available trainings on Congressional Staff Academy. </li>
                            <li> Work with your supervisor to identify stretch assignments. </li>
                        </ul>
    
                    </div>
    
                    <div class="modal-footer" style="justify-content:center">
    
                        <button type="button" class="btn" style="background-color:brown; color:white; width:50%;"><a
                                style="color:white; text-decoration:none; font-size:1.2rem; font-weight:bold;" href="#">Find
                                Out
                                More</a></button>
    
                    </div>
                </div>
            </div>
        </div>`;

                //console.log("htmlCareerPathModal : ", htmlCareerPathModal);

                if (position_1 == 'Intern' && position_2 == 'Staff Assistant') {

                    document.getElementById('Intern-to-StaffAssistant-Career-Path').innerHTML = htmlCareerPathModal;

                } else if (position_1 == 'Staff Assistant' && position_2 == 'Scheduler/Executive Assistant') {

                    document.getElementById('StaffAssistant-to-SchedulerExecutiveAssistant-Career-Path').innerHTML = htmlCareerPathModal;

                } else if (position_1 == 'Scheduler/Executive Assistant' && position_2 == 'Operations Director') {

                    document.getElementById('SchedulerExecutiveAssistant-to-OperationsDirector-Career-Path').innerHTML = htmlCareerPathModal;

                } else if (position_1 == 'Scheduler/Executive Assistant' && position_2 == 'Legislative Assistant') {

                    document.getElementById('SchedulerExecutiveAssistant-to-LegislativeAssistant-Career-Path').innerHTML = htmlCareerPathModal;

                } else if (position_1 == 'Operations Director' && position_2 == 'Deputy Chief of Staff') {

                    document.getElementById('OperationsDirector-to-DeputyChiefOfStaff-Career-Path').innerHTML = htmlCareerPathModal;

                } else if (position_1 == 'Operations Director' && position_2 == 'Chief of Staff') {

                    document.getElementById('OperationsDirector-to-ChiefOfStaff-Career-Path').innerHTML = htmlCareerPathModal;

                } else if (position_1 == 'Deputy Chief of Staff' && position_2 == 'Chief of Staff') {

                    document.getElementById('DeputyChiefOfStaff-to-ChiefOfStaff-Career-Path').innerHTML = htmlCareerPathModal;

                }

                // console.log("htmlCareerPathModal : ",htmlCareerPathModal);

            });


        },
        error: function (data) {

            console.log("Error : Ajax failed ");
            alert("Error: " + data);
        }
    });

}



function showDefination(Skill){


   console.log("Skill : ",Skill);   


   if (Skill === "Adaptability"){

    if(document.getElementById("Definition_Adaptability").style.display === "none"){
        document.getElementById("Definition_Adaptability").style.display = "block";
    } else{
        document.getElementById("Definition_Adaptability").style.display = "none";
    }

   }if (Skill === "Initiative"){

    if(document.getElementById("Definition_Initiative").style.display === "none"){
        document.getElementById("Definition_Initiative").style.display = "block";
    } else{
        document.getElementById("Definition_Initiative").style.display = "none";
    }

   }if (Skill === "Constituent Service Driven"){

    if(document.getElementById("Definition_Initiative_Constituent_Service_Driven").style.display === "none"){
        document.getElementById("Definition_Initiative_Constituent_Service_Driven").style.display = "block";
    } else{
        document.getElementById("Definition_Initiative_Constituent_Service_Driven").style.display = "none";
    }

   }if (Skill === "Interpersonal Skills"){

    if(document.getElementById("Definition_Interpersonal_Skills").style.display === "none"){
        document.getElementById("Definition_Interpersonal_Skills").style.display = "block";
    } else{
        document.getElementById("Definition_Interpersonal_Skills").style.display = "none";
    }

   }if (Skill === "Written Communication"){

    if(document.getElementById("Definition_Written_Communication").style.display === "none"){
        document.getElementById("Definition_Written_Communication").style.display = "block";
    } else{
        document.getElementById("Definition_Written_Communication").style.display = "none";
    }

   }



}



function show_Skill_Definition_For_Position(Position, Top_Skill) {

    // console.log("Position : ",position);

    var siteurl = _spPageContextInfo.webAbsoluteUrl;

    oSkillDefination = siteurl + "/_api/web/lists/getbytitle('Career-Path-Position')/items?$select=Job_Title," + Top_Skill + "&$filter=Job_Title eq '" + Position + "'&$top=1";

    // console.log("oSkillDefination : ",oSkillDefination);


    $.ajax({

        url: oSkillDefination,
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },

        success: function (data) {

            var items = data.d.results;

            // console.log("items :",items);

            items.forEach(function (item, index) {

                //var _Position = item.Job_Title;

                if (Top_Skill === 'Top_Skill_1') {
                    var _Top_Skill = item.Top_Skill_1;
                } else if (Top_Skill === 'Top_Skill_2') {
                    var _Top_Skill = item.Top_Skill_2;
                } else if (Top_Skill === 'Top_Skill_3') {
                    var _Top_Skill = item.Top_Skill_3;
                } else if (Top_Skill === 'Top_Skill_4') {
                    var _Top_Skill = item.Top_Skill_4;
                } else if (Top_Skill === 'Top_Skill_5') {
                    var _Top_Skill = item.Top_Skill_5;
                } else if (Top_Skill === 'Top_Skill_6') {
                    var _Top_Skill = item.Top_Skill_6;
                } else if (Top_Skill === 'Top_Skill_7') {
                    var _Top_Skill = item.Top_Skill_7;
                }

                //              console.log("_Top_Skill : ",_Top_Skill); 
                //              console.log("_Position : ",_Position);


                //               Function call to display skill definition

                display_Skill_Definition(_Top_Skill);

            });

        },
        error: function (data) {

            console.log("Error : Ajax failed ");
            alert("Error: " + data);
        }
    });

}




function display_Skill_Definition(Skill) {

    var siteurl = _spPageContextInfo.webAbsoluteUrl;

    oDisplaySkillDefination = siteurl + "/_api/web/lists/getbytitle('Career-Path-Skill-Data')/items?$select=Skill_Name,Skill_Definition&$filter=Skill_Name eq '" + Skill + "'&$top=1";

    //console.log("oDisplaySkillDefination : ",oDisplaySkillDefination);

    $.ajax({

        url: oDisplaySkillDefination,
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },

        success: function (data) {

            var items = data.d.results;

            //console.log("items :",items);

            items.forEach(function (item, index) {

                var _Skill_Name = item.Skill_Name;
                var _Skill_Definition = item.Skill_Definition;

                console.log("_Skill_Name : ", _Skill_Name);
                console.log("_Skill_Definition : ", _Skill_Definition);

                // Count number of times space character in _Skill_Name;
                var Count = (_Skill_Name.split(" ").length - 1);

                console.log("Count # of spaces in Skill Name : ", Count);

                for (i = 0; i < Count; i++) {

                    _Skill_Name = _Skill_Name.replace(" ", "_");

                }

                console.log("_Skill_Name after replacing space with _ : ", _Skill_Name);

                var Skill_Definition_ID = "Definition_" + _Skill_Name;


                console.log("Skill_Definition_ID : ", Skill_Definition_ID);


                insertSkillDefination (Skill_Definition_ID, _Skill_Definition );




            });

        },
        error: function (data) {

            console.log("Error : Ajax failed ");
            alert("Error: " + data);
        }
    });


}



// getSkillDefination function is currently not called anywhere, left here for reference purpose only.
function getSkillDefination (_Top_Skill_1){

    var siteurl = _spPageContextInfo.webAbsoluteUrl;

    oDisplaySkillDefination = siteurl + "/_api/web/lists/getbytitle('Career-Path-Skill-Data')/items?$select=Skill_Name,Skill_Definition&$filter=Skill_Name eq '" + _Top_Skill_1 + "'&$top=1";

    return $.ajax({

        url: oDisplaySkillDefination,
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },

        success: function (data) {

            var items = data.d.results;

            //console.log("items :",items);

            console.log("Skill definition in object : ",items[0].Skill_Definition);


            // return items[0].Skill_Definition;

            // items.forEach(function (item, index) {

            //     var _Skill_Name = item.Skill_Name;
            //     var _Skill_Definition = item.Skill_Definition;

            //     console.log("_Skill_Name inside new function : ", _Skill_Name);
            //     console.log("_Skill_Definition inside new function : ", _Skill_Definition);  
                
            //     return _Skill_Definition;

            // });


        },
        error: function (data) {

            console.log("Error : Ajax failed ");
            alert("Error: " + data);
        }
    });

}



function insertSkillDefination (Skill_Definition_ID, _Skill_Definition ){


    console.log("INSIDE insertSkillDefination FUNCTION :");


    if (document.getElementById(Skill_Definition_ID).style.display === "none") {

        //document.getElementById('Intern-Position').innerHTML = htmlPositionmodal;

        document.getElementById(Skill_Definition_ID).innerHTML = _Skill_Definition;
        document.getElementById(Skill_Definition_ID).style.display = 'block';

        console.log("inside if statement - TRUE - branch");                   


    } else {

        document.getElementById(Skill_Definition_ID).style.display = "none";

        console.log("inside if statement - ELSE - branch");
     

    }
}


