

// jquery ready start
$(document).ready(function () {



// To load the POSITION modals upon page opening - START

    var siteurl = _spPageContextInfo.webAbsoluteUrl;
    oDataCareerPathPosition = siteurl + "/_api/web/lists/getbytitle('Career-Path-Position')/items?$select=Job_Title";
    //console.log("oDataCareerPathPosition : ", oDataCareerPathPosition);

    $.ajax({

        url: oDataCareerPathPosition,
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },

        success: function (data) {

            var items = data.d.results;

            items.forEach(function (item, index) {

                var Job_Title = item.Job_Title;
                //console.log("Job_Title : ",Job_Title);

                position_modal(Job_Title);

            });

        },
        error: function (data) {
            alert("Error: " + data);
        }
    });

// To load the POSITION modals upon page opening - END





// To load the CONNECTION modals upon page opening - START

var siteurl = _spPageContextInfo.webAbsoluteUrl;
oDataCareerPathConnection = siteurl + "/_api/web/lists/getbytitle('Career-Path-Connection-Data')/items?$select=Starting_Position/Job_Title,Desired_Position/Job_Title&$expand=Starting_Position&$expand=Desired_Position";
//console.log("oDataCareerPathPosition : ", oDataCareerPathConnection);

$.ajax({

    url: oDataCareerPathConnection,
    method: "GET",
    headers: { "Accept": "application/json; odata=verbose" },

    success: function (data) {

        var items = data.d.results;


        items.forEach(function (item, index) {

            var _Starting_Position = item.Starting_Position.Job_Title;
            var _Desired_Position = item.Desired_Position.Job_Title;
            // console.log("_Starting_Position : ",_Starting_Position);
            // console.log("_Desired_Position : ",_Desired_Position);


            //Confirm the connection is not bi-directional
            if(!(_Starting_Position =='Caseworker' && _Desired_Position == 'Field Representative')){

                career_path_modal(_Starting_Position, _Desired_Position);

            }


        });

    },
    error: function (data) {
        alert("Error: " + data);
    }
});

// To load the CONNECTION modals upon page opening - END






// To load the modal for bi-directional CONNECTION/S  - START

career_path_modal_bidirectional('Caseworker', 'Field Representative');

// To load the modal for bi-directional CONNECTION/S  - END





}); // jquery end




function position_modal(position) {

    //console.log("Position : ",position);

    var siteurl = _spPageContextInfo.webAbsoluteUrl;

    oDataCareerPathPosition = siteurl + "/_api/web/lists/getbytitle('Career-Path-Position')/items?$select=Job_Title,Similar_Job_Titles,Job_Summary,Top_Skill_1/Skill_Name,Top_Skill_1_Rating,Top_Skill_2/Skill_Name,Top_Skill_2_Rating,Top_Skill_3/Skill_Name,Top_Skill_3_Rating,Top_Skill_4/Skill_Name,Top_Skill_4_Rating,Top_Skill_5/Skill_Name,Top_Skill_5_Rating,URL_PositionDescription,Top_Skill_2_Definition,Top_Skill_1_Definition,Top_Skill_3_Definition,Top_Skill_4_Definition,Top_Skill_5_Definition,Position_Div_ID&$expand=Top_Skill_1&$expand=Top_Skill_2&$expand=Top_Skill_3&$expand=Top_Skill_4&$expand=Top_Skill_5&$filter=Job_Title eq '" + position + "'&$top=1";

    //console.log("oDataCareerPathPosition : ", oDataCareerPathPosition);


    var _position = position;

    // Count number of times space character in '_position';
    var CountCharacter = (_position.split(" ").length - 1);

    // Remove space character/s from '_position' to be used as part of modal ID ;                
    for (i = 0; i < CountCharacter; i++) {
        var _position = _position.replace(" ", "");
    }

    // Count number of times '/' charcter in '_position';
    var CountCharacter = (_position.split("/").length - 1);

    // Remove '/' character/s from '_position' to be used as part of modal ID ;                
    for (i = 0; i < CountCharacter; i++) {
        var _position = _position.replace("/", "");
    }

    //console.log("Position AFTER FOR LOOP", position);



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
                var _URL_PositionDescription = item.URL_PositionDescription;
                var _Position_Div_ID = item.Position_Div_ID;

                var _Top_Skill_1 = item.Top_Skill_1.Skill_Name;
                var _Top_Skill_1_Rating = item.Top_Skill_1_Rating;
                var _Top_Skill_1_Definition = item.Top_Skill_1_Definition;

                var _Top_Skill_2 = item.Top_Skill_2.Skill_Name;
                var _Top_Skill_2_Rating = item.Top_Skill_2_Rating;
                var _Top_Skill_2_Definition = item.Top_Skill_2_Definition;

                var _Top_Skill_3 = item.Top_Skill_3.Skill_Name;
                var _Top_Skill_3_Rating = item.Top_Skill_3_Rating;
                var _Top_Skill_3_Definition = item.Top_Skill_3_Definition;

                var _Top_Skill_4 = item.Top_Skill_4.Skill_Name;
                var _Top_Skill_4_Rating = item.Top_Skill_4_Rating;
                var _Top_Skill_4_Definition = item.Top_Skill_4_Definition;

                var _Top_Skill_5 = item.Top_Skill_5.Skill_Name;
                var _Top_Skill_5_Rating = item.Top_Skill_5_Rating;
                var _Top_Skill_5_Definition = item.Top_Skill_5_Definition;
            


                htmlPositionmodal = `
            <div class="modal fade" id="staticBackdrop${_position}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                  aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header" style="margin-left: 5%; margin-right: 0%;">
                              <h5 class="modal-title" id="staticBackdropLabel" style="margin-left:0px; font-size:1.5rem;">
                              ${_Job_Title} </h5>
                              <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close" style="margin-top: .25rem;" onClick="collapse_accordion()"></button>
                          </div>
                          <div class="modal-body" style="margin-left: 5%; margin-right: 5%;">


          
                              <p style="text-align:left; color:black; font-family:Arial, Helvetica, sans-serif; "><b style="font-weight:bold;">Similar Job Title(s)</b>: ${_Similar_Job_Titles} </p>
                              <p style="text-align:justify; color:black; font-family:Arial, Helvetica, sans-serif; font-size:1em; line-height:1.5em; "><b style="font-weight:bold;">Job Summary</b>: ${_Job_Summary} </p>          
                              <p
                                  style="color:black; font-family:Arial, Helvetica, sans-serif; font-weight:bold; font-size:1.25rem; text-align:left;">
                                  Featured Skills</p>


          
                              <div class="container position-container"> 
  
                              <div class="accordion" id="accordionFeaturedSkills">


                              <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style="display: block;">

                                  <div class="row">

                                  <div class="col" style="font-weight:bold;">

                                  ${_Top_Skill_1}: 
                        
                                  </div>

                                  <div class="col" style="text-align:right;">`;



                for (let i = 0; i < _Top_Skill_1_Rating; i++) {

                    htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                                                src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Capitol-Icon-Black.png"> `;
                }


                var Skill_Rating_Gap = 5 - _Top_Skill_1_Rating;


                for (let i = 0; i < Skill_Rating_Gap; i++) {

                    htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                                                src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Capitol-Icon-Gray.png"> `;
                }


                htmlPositionmodal = htmlPositionmodal + `                                    

                                  </div>
                              
                              </div> 

                                  </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionFeaturedSkills">
                                  <div class="accordion-body">

                                  ${_Top_Skill_1_Definition} 

                                  </div>
                                </div>
                              </div>





                              <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style="display: block;">

                                  <div class="row">

                                  <div class="col" style="font-weight:bold;">

                                    ${_Top_Skill_2}:
                        
                                  </div>

                                  <div class="col" style="text-align:right;">`;



                for (let i = 0; i < _Top_Skill_2_Rating; i++) {

                    htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                                            src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Capitol-Icon-Black.png"> `;
                }


                var Skill_Rating_Gap = 5 - _Top_Skill_2_Rating;


                for (let i = 0; i < Skill_Rating_Gap; i++) {

                    htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                                            src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Capitol-Icon-Gray.png"> `;
                }


                htmlPositionmodal = htmlPositionmodal + ` 

                                  </div>
                              
                              </div> 

                                  </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionFeaturedSkills">
                                  <div class="accordion-body">

                                  ${_Top_Skill_2_Definition} 

                                  </div>
                                </div>
                              </div>




                              <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style="display: block;">

                                  <div class="row">

                                  <div class="col" style="font-weight:bold;">

                                  ${_Top_Skill_3}:
                        
                                  </div>

                                  <div class="col" style="text-align:right;">`;



                for (let i = 0; i < _Top_Skill_3_Rating; i++) {

                    htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                                            src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Capitol-Icon-Black.png"> `;
                }


                var Skill_Rating_Gap = 5 - _Top_Skill_3_Rating;


                for (let i = 0; i < Skill_Rating_Gap; i++) {

                    htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                                            src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Capitol-Icon-Gray.png"> `;
                }


                htmlPositionmodal = htmlPositionmodal + ` 

                                  </div>
                              
                              </div> 

                                  </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionFeaturedSkills">
                                  <div class="accordion-body">

                                  ${_Top_Skill_3_Definition} 

                                  </div>
                                </div>
                              </div>



                              <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style="display: block;">

                                  <div class="row">

                                  <div class="col" style="font-weight:bold;">

                                        ${_Top_Skill_4}:
                        
                                  </div>

                                  <div class="col" style="text-align:right;">`;



                for (let i = 0; i < _Top_Skill_4_Rating; i++) {

                    htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                                            src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Capitol-Icon-Black.png"> `;
                }


                var Skill_Rating_Gap = 5 - _Top_Skill_4_Rating;


                for (let i = 0; i < Skill_Rating_Gap; i++) {

                    htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                                            src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Capitol-Icon-Gray.png"> `;
                }


                htmlPositionmodal = htmlPositionmodal + ` 

                                  </div>
                              
                              </div> 
                                    
                                  </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionFeaturedSkills">
                                  <div class="accordion-body">

                                  ${_Top_Skill_4_Definition} 

                                  </div>
                                </div>
                              </div>


                              <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFive">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style="display: block;">

                                  <div class="row">

                                  <div class="col" style="font-weight:bold;">

                                        ${_Top_Skill_5}:
                        
                                  </div>

                                  <div class="col" style="text-align:right;">`;


                for (let i = 0; i < _Top_Skill_5_Rating; i++) {

                    htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                                            src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Capitol-Icon-Black.png"> `;
                }


                var Skill_Rating_Gap = 5 - _Top_Skill_5_Rating;


                for (let i = 0; i < Skill_Rating_Gap; i++) {

                    htmlPositionmodal = htmlPositionmodal + `<img class="capitol-icon" 
                                                            src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Capitol-Icon-Gray.png"> `;
                }


                htmlPositionmodal = htmlPositionmodal + ` 

                                  </div>
                              
                              </div> 
                                    
                                  </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionFeaturedSkills">
                                  <div class="accordion-body">

                                  ${_Top_Skill_5_Definition} 

                                  </div>
                                </div>
                              </div>

                              

                            </div>

          
                              </div>
          
                          </div>
                          <div class="modal-footer" style="justify-content:center">
          
                              <button type="button" class="btn" style="background-color:brown; color:white; width:50%;"><a
                                      style="color:white; text-decoration:none; font-size:1.2rem; font-weight:bold;"
                                      href="${_URL_PositionDescription}">Position
                                      Description </a></button>
          
                          </div>
                      </div>
                  </div>
              </div>
            `;

            // insert 'htmlPositionmodal' to respective element id
            document.getElementById(_Position_Div_ID).innerHTML = htmlPositionmodal;

            });

        },
        error: function (data) {
            alert("Error: " + data);
        }
    });


}




function collapse_accordion(){

    $(".btn-close").on('click', function () {
        $('.collapse').collapse('hide')
     });
}




function career_path_modal(position_1, position_2) {

    //console.log("Position_1 :", position_1, "Position_2 :", position_2);

    var siteurl = _spPageContextInfo.webAbsoluteUrl;

    oDataCareerPath = siteurl + "/_api/web/lists/getbytitle('Career-Path-Connection-Data')/items?$select=URL_Featured_Skills,div_Id,URL_Connection_Document,Track,Starting_Position/Job_Title,Desired_Position/Job_Title&$expand=Starting_Position&$expand=Desired_Position&$filter=Starting_Position/Job_Title eq '" + position_1 + "' and Desired_Position/Job_Title eq '" + position_2 + "'&$top=1";


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
                var _div_Id = item.div_Id;
                var _URL_Connection_Document = item.URL_Connection_Document;


                var htmlCareerPathModal = `<div class="modal fade" id="staticBackdrop${_Position_1}-to-${_Position_2}" data-bs-backdrop="static"
            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style="background:rgb(247, 245, 245);">
                    <div class="modal-header" style="margin-left: 5%; margin-right: 0%;">
                        <h5 class="modal-title" id="staticBackdropLabel"
                            style="margin-left:0px; font-size:1.5rem; text-align:left;">${position_1} <img
                                src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Arrow-Right.png"
                                style="width:6%;height:125%;"> ${position_2}</h5>
                        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close" style="margin-top: .25rem;"></button>
                    </div>
                    <div class="modal-body" style="margin-left: 5%; margin-right: 5%;">
    
                        <p
                        style="color:black; font-family:Arial, Helvetica, sans-serif; font-weight:bold; font-size:1.25rem; text-align:left;">
                        Exploring Skill Levels</p>


                        <p style="text-align:left; color:black; font-size:1em; line-height:1.5em;">The following chart presents the expected skill levels for the
                            featured skills for ${position_2} compared with the skill levels for ${position_1}. </p>
    
                        <div class="center-item">
    
                            <img src="${_URL_Featured_Skills}"
                                style="width:60%;" alt="">
    
                        </div>

                        <p
                        style="color:black; font-family:Arial, Helvetica, sans-serif; font-weight:bold; font-size:1.25rem; text-align:left; padding-top:1rem;">
                        Gap Closure Strategies</p>

                        <p style="text-align:left; margin-top:1rem; color:black; font-size:1em; line-height:1.5em;">The following are recommended strategies to help address potential
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
                                style="color:white; text-decoration:none; font-size:1.2rem; font-weight:bold;" href="${_URL_Connection_Document}">Find
                                Out
                                More</a></button>
    
                    </div>
                </div>
            </div>
        </div>`;


                //console.log("_div_Id : ",_div_Id);

                document.getElementById(_div_Id).innerHTML = htmlCareerPathModal;
                

            });


        },
        error: function (data) {

            console.log("Error : Ajax failed ");
            alert("Error: " + data);
        }
    });

}




function career_path_modal_bidirectional(position_1, position_2) {

    //console.log("Position_1 :", position_1, "Position_2 :", position_2);

    var siteurl = _spPageContextInfo.webAbsoluteUrl;

    oDataCareerPath_bidirectional = siteurl + "/_api/web/lists/getbytitle('Career-Path-Connection-Data')/items?$select=URL_Featured_Skills,Reverse_URL_Featured_Skills,div_Id,Starting_Position/Job_Title,Desired_Position/Job_Title&$expand=Starting_Position&$expand=Desired_Position&$filter=Starting_Position/Job_Title eq '" + position_1 + "' and Desired_Position/Job_Title eq '" + position_2 + "'&$top=1";


    //console.log("oDataCareerPath:", oDataCareerPath_bidirectional);

    $.ajax({

        url: oDataCareerPath_bidirectional,
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
                var _Reverse_URL_Featured_Skills = item.Reverse_URL_Featured_Skills;

                var _div_Id = item.div_Id;

                // console.log("position_1 :",position_1);
                // console.log("position_2 :",position_2);
                // console.log("_URL_Featured_Skills :",_URL_Featured_Skills);
                // console.log("Reverse_URL_Featured_Skills :",Reverse_URL_Featured_Skills);

                var htmlCareerPathModal = `
                <div class="modal fade" id="staticBackdrop${_Position_1}-to-${_Position_2}" tabindex="-1" role="dialog"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel"
                                style="margin-left:1.25rem;">Select a path below.</h5>
                            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"
                                style="margin-top: .25rem; min-width:4rem;"></button>
                        </div>
                        <div class="modal-body">
            
                            <div class="accordion accordion-flush" id="accordionFlush">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseOne" aria-expanded="false"
                                            aria-controls="flush-collapseOne"
                                            style="margin-left: 0px; font-size: 1.5rem; text-align: left; padding-bottom:1.25rem;">
                                            ${position_1} <img
                                                src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Arrow-Right.png"
                                                style="width:5.5%; height:125%; margin-left:.4rem;margin-right:.4rem;" data-themekey="#"> ${position_2}
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlush">
            
                                        <div style="background: rgb(247, 245, 245);">
            
                                            <!-- Modal body - START -->
            
                                            <div class="modal-body" style="margin-left: 5%; margin-right: 5%;">
            
                                                <p
                                                    style="color:black; font-family:Arial, Helvetica, sans-serif; font-weight:bold; font-size:1.25rem; text-align:left;">
                                                    Exploring Skill Levels</p>
            
                                                <p style="text-align:left; color:black; font-size:1em; line-height:1.5em;">The
                                                    following
                                                    chart presents the expected skill levels for the
                                                    featured skills for ${position_2} compared with the skill levels for
                                                    ${position_1}.
                                                </p>
            
                                                <div class="center-item">
            
                                                    <img src="${_URL_Featured_Skills}"
                                                        style="width:60%;" alt="">
            
                                                </div>
            
                                                <p
                                                    style="color:black; font-family:Arial, Helvetica, sans-serif; font-weight:bold; font-size:1.25rem; text-align:left; padding-top:1rem;">
                                                    Gap Closure Strategies</p>
            
                                                <p
                                                    style="text-align:left; margin-top:1rem; color:black; font-size:1em; line-height:1.5em;">
                                                    The following are recommended strategies to help address potential
                                                    gaps between your current position and the next position in the career path.</p>
            
                                                <ul style="text-align: left;">
                                                    <li> Review the ${position_2} Position Description and featured skills. </li>
                                                    <li> Discuss options for job shadowing and informational interviews with your
                                                        supervisor.
                                                    </li>
                                                    <li> Review available trainings on Congressional Staff Academy. </li>
                                                    <li> Work with your supervisor to identify stretch assignments. </li>
                                                </ul>
            
                                            </div>
            
                                            <div class="modal-footer" style="justify-content:center">
            
                                                <button type="button" class="btn"
                                                    style="background-color:brown; color:white; width:50%;"><a
                                                        style="color:white; text-decoration:none; font-size:1.2rem; font-weight:bold;"
                                                        href="#">Find
                                                        Out
                                                        More</a></button>
            
                                            </div>
            
                                            <!-- Modal body - END -->
            
                                        </div>            
            
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                            aria-controls="flush-collapseTwo"
                                            style="margin-left: 0px; font-size: 1.5rem; text-align: left; padding-top:1.25rem;">
                                            ${position_2} <img
                                                src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Arrow-Right.png"
                                                style="width:5.5%;height:125%; margin-left:.4rem;margin-right:.4rem;" data-themekey="#"> ${position_1}
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlush">
            
                                        <div style="background: rgb(247, 245, 245);">
            
                                            <!-- Modal body - START -->
            
                                            <div class="modal-body" style="margin-left: 5%; margin-right: 5%;">        
            
                                                <p
                                                    style="color:black; font-family:Arial, Helvetica, sans-serif; font-weight:bold; font-size:1.25rem; text-align:left;">
                                                    Exploring Skill Levels</p>
            
            
                                                <p style="text-align:left; color:black; font-size:1em; line-height:1.5em;">The
                                                    following
                                                    chart presents the expected skill levels for the
                                                    featured skills for ${position_1} compared with the skill levels for
                                                    ${position_2}.
                                                </p>
            
                                                <div class="center-item">
            
                                                    <img src="${_Reverse_URL_Featured_Skills}"
                                                        style="width:60%;" alt="">
            
                                                </div>
            
                                                <p
                                                    style="color:black; font-family:Arial, Helvetica, sans-serif; font-weight:bold; font-size:1.25rem; text-align:left; padding-top:1rem;">
                                                    Gap Closure Strategies</p>
            
                                                <p
                                                    style="text-align:left; margin-top:1rem; color:black; font-size:1em; line-height:1.5em;">
                                                    The following are recommended strategies to help address potential
                                                    gaps between your current position and the next position in the career path.</p>
            
                                                <ul style="text-align: left;">
                                                    <li> Review the ${position_1} Position Description and featured skills. </li>
                                                    <li> Discuss options for job shadowing and informational interviews with your
                                                        supervisor.
                                                    </li>
                                                    <li> Review available trainings on Congressional Staff Academy. </li>
                                                    <li> Work with your supervisor to identify stretch assignments. </li>
                                                </ul>
            
                                            </div>
            
                                            <div class="modal-footer" style="justify-content:center">
            
                                                <button type="button" class="btn"
                                                    style="background-color:brown; color:white; width:50%;"><a
                                                        style="color:white; text-decoration:none; font-size:1.2rem; font-weight:bold;"
                                                        href="#">Find
                                                        Out
                                                        More</a></button>
            
                                            </div>
            
                                            <!-- Modal body - END -->
            
                                        </div>
            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
                `;

                //console.log("htmlCareerPathModal : ", htmlCareerPathModal);
                // console.log("URL_Featured_Skills : ", _URL_Featured_Skills);
                // console.log("Reverse_URL_Featured_Skills : ", _Reverse_URL_Featured_Skills);
                // console.log("_div_Id : ", _div_Id);

                document.getElementById(_div_Id).innerHTML = htmlCareerPathModal;



            });


        },
        error: function (data) {

            console.log("Error : Ajax failed ");
            alert("Error: " + data);
        }
    });




}


















