

// jquery ready start
$(document).ready(function () {

    var siteurl = _spPageContextInfo.webAbsoluteUrl;
    oDataCareerPathPosition = siteurl + "/_api/web/lists/getbytitle('Career-Path-Position')/items?$select=Job_Title,Similar_Job_Titles,Job_Summary,Top_Skill_1/Skill_Name,Top_Skill_1_Rating,Top_Skill_2/Skill_Name,Top_Skill_2_Rating,Top_Skill_3/Skill_Name,Top_Skill_3_Rating,Top_Skill_4/Skill_Name,Top_Skill_4_Rating,Top_Skill_5/Skill_Name,Top_Skill_5_Rating,URL_PositionDescription,Top_Skill_2_Definition,Top_Skill_1_Definition,Top_Skill_3_Definition,Top_Skill_4_Definition,Top_Skill_5_Definition,Position_Div_ID&$expand=Top_Skill_1&$expand=Top_Skill_2&$expand=Top_Skill_3&$expand=Top_Skill_4&$expand=Top_Skill_5";

    //console.log(": ", oDataCareerPathPosition);

    $.ajax({

        url: oDataCareerPathPosition,
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },

        success: function (data) {

            var items = data.d.results;

            items.forEach(function (item, index) {

                //Cleaning Position Name - START
                var _position = item.Job_Title;;

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
                //Cleaning Position Name - END

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



                var htmlPositionmodal = `<div class="modal fade" id="${_position}ModalNew" tabindex="-1" aria-labelledby="${_position}ModalLabel" aria-hidden="true"
                data-bs-backdrop="static">
                <div class="modal-dialog modal-lg">
        
                    <div class="modal-content">
        
                        <div id="${_position}-header">
                            <div class="modal-header">
                                <h3 class="modal-title" id="${_position}ModalLabel" style="margin-left:2.2rem; color:black;">${_Job_Title}
                                </h3>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                        </div>
        
                        <div id="${_position}-modal-body">
                            <div class="modal-body">
                                <div style="text-align:left; width:90%;  margin-left:auto; margin-right:auto;">    
                                    <p style="color:black; font-size:1.25em;"><b>Similar Job Title(s):</b> ${_Similar_Job_Titles}</p>
                                    <p style="color:black; font-size:1.1em; text-align:justify;"><b>Job Summary:</b> ${_Job_Summary}</p>
                                    <p style="color:black; font-size:1.25em;"><b>Featured Skills:</b></p>
                                    <p style="color:black; font-size:1.1em;">These are the anticipated featured skills and skill
                                        levels for this position.</p>    
                                </div>    
                            </div>
                        </div>
        
                        <div id="${_position}-featured-skills">
                            <div class="featured-skills">
                                <div class="accordion" id="accordion${_position}FeaturedSkills">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="panelsStayOpen-${_position}FeaturedSkillsOne">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseOne-${_position}" aria-expanded="false"
                                                aria-controls="panelsStayOpen-collapseOne-${_position}">
                                                <div class="row" style="width:110%;">
                                                    <div class="col">
                                                        <b>${_Top_Skill_1}:</b>
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


                htmlPositionmodal = htmlPositionmodal +

                    `                                                                
                                                  </div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseOne-${_position}" class="accordion-collapse collapse"
                                            aria-labelledby="panelsStayOpen-${_position}FeaturedSkillsOne">
                                            <div class="accordion-body">
                                                <p style="color:black;">${_Top_Skill_1_Definition}</P>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="panelsStayOpen-${_position}FeaturedSkillsTwo">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseTwo-${_position}" aria-expanded="false"
                                                aria-controls="panelsStayOpen-collapseTwo-${_position}">
                                                <div class="row" style="width:110%;">
                                                    <div class="col">
                                                        <b>${_Top_Skill_2}:</b>
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


                htmlPositionmodal = htmlPositionmodal +
                    `                                                                
                                                    </div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseTwo-${_position}" class="accordion-collapse collapse"
                                            aria-labelledby="panelsStayOpen-${_position}FeaturedSkillsTwo">
                                            <div class="accordion-body">
                                                <p style="color:black;">${_Top_Skill_2_Definition}</p>
                                            </div>
                                        </div>
                                    </div>
            
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="panelsStayOpen-${_position}FeaturedSkillsThree">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseThree-${_position}" aria-expanded="false"
                                                aria-controls="panelsStayOpen-collapseThree-${_position}">
                                                <div class="row" style="width:110%;">
                                                    <div class="col">
                                                        <b>${_Top_Skill_3}:</b>
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




                htmlPositionmodal = htmlPositionmodal +
                    `
                                                                
                                                    </div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseThree-${_position}" class="accordion-collapse collapse"
                                            aria-labelledby="panelsStayOpen-${_position}FeaturedSkillsThree">
                                            <div class="accordion-body">
                                                <p style="color:black;">${_Top_Skill_3_Definition}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="panelsStayOpen-${_position}FeaturedSkillsFour">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseFour-${_position}" aria-expanded="false"
                                                aria-controls="panelsStayOpen-collapseFour-${_position}">
                                                <div class="row" style="width:110%;">
                                                    <div class="col">
                                                        <b>${_Top_Skill_4}:</b>
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




                htmlPositionmodal = htmlPositionmodal +
                    `
                                                                
                                                    </div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseFour-${_position}" class="accordion-collapse collapse"
                                            aria-labelledby="panelsStayOpen-${_position}FeaturedSkillsFour">
                                            <div class="accordion-body">
                                                <p style="color:black;">${_Top_Skill_4_Definition}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="panelsStayOpen-${_position}FeaturedSkillsFive">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseFive-${_position}" aria-expanded="false"
                                                aria-controls="panelsStayOpen-collapseFive-${_position}">
                                                <div class="row" style="width:110%;">
                                                    <div class="col">
                                                        <b>${_Top_Skill_5}</b>
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




                htmlPositionmodal = htmlPositionmodal +
                    `
                                                                
                                                    </div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseFive-${_position}" class="accordion-collapse collapse"
                                            aria-labelledby="panelsStayOpen-${_position}FeaturedSkillsFive">
                                            <div class="accordion-body">
                                                <p style="color:black;">"${_Top_Skill_5_Definition}</p>
                                            </div>
                                        </div>
                                    </div>            
                                </div>
                            </div>
                        </div>
        
                        <div id="${_position}-modal-footer">
                            <div class="modal-footer">
                                <a href="${_URL_PositionDescription}"
                                    onclick="downloadResource('${_Job_Title} - Position Description');"><button type="button" class="btn"
                                        style="background-color:brown; color:white; width:100%;color:white; text-decoration:none; font-size:1.2rem; font-weight:bold;">
                                        Sample Position Description </button>
                                </a>    
                            </div>
                        </div>
        
                    </div>
                </div>
                </div>`;


                // insert 'htmlPositionmodal' to respective element id
                document.getElementById(_Position_Div_ID).innerHTML = htmlPositionmodal;


            });

        },
        error: function (data) {
            alert("Error: " + data);
        }
    });


    var path = window.location.pathname;
    var siteurl = _spPageContextInfo.webAbsoluteUrl;

    if (path.includes("TestPage_02")|| path.includes("TestPage_07") || path.includes("Administrative")) {
        oDataCareerPathConnection = siteurl + "/_api/web/lists/getbytitle('Career-Path-Connection-Data')/items?$select=URL_Featured_Skills,div_Id,URL_Connection_Document,Track,Starting_Position/Job_Title,Desired_Position/Job_Title&$expand=Starting_Position&$expand=Desired_Position&$filter=Track eq 'Administrative'";
    } else if (path.includes("TestPage_03")||path.includes("TestPage_08") || path.includes("Communications")) {
        oDataCareerPathConnection = siteurl + "/_api/web/lists/getbytitle('Career-Path-Connection-Data')/items?$select=URL_Featured_Skills,div_Id,URL_Connection_Document,Track,Starting_Position/Job_Title,Desired_Position/Job_Title&$expand=Starting_Position&$expand=Desired_Position&$filter=Track eq 'Communications'";
    } else if (path.includes("TestPage_04") || path.includes("TestPage_09") || path.includes("District")) {
        oDataCareerPathConnection = siteurl + "/_api/web/lists/getbytitle('Career-Path-Connection-Data')/items?$select=URL_Featured_Skills,Reverse_URL_Featured_Skills,div_Id,URL_Connection_Document,Reverse_URL_Connection_Document,Track,Starting_Position/Job_Title,Desired_Position/Job_Title&$expand=Starting_Position&$expand=Desired_Position&$filter=Track eq 'District'";
    } else if (path.includes("TestPage_05") || path.includes("TestPage_10") || path.includes("Legislative")) {
        oDataCareerPathConnection = siteurl + "/_api/web/lists/getbytitle('Career-Path-Connection-Data')/items?$select=URL_Featured_Skills,div_Id,URL_Connection_Document,Track,Starting_Position/Job_Title,Desired_Position/Job_Title&$expand=Starting_Position&$expand=Desired_Position&$filter=Track eq 'Legislative'";
    }


    $.ajax({

        url: oDataCareerPathConnection,
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },

        success: function (data) {

            //console.log("Sucess : Retured results :",results);

            var items = data.d.results;

            //console.log("items :",items);

            items.forEach(function (item, index) {

                var _Position_1 = item.Starting_Position.Job_Title.replace(" ", "");
                var _Position_1 = _Position_1.replace(" ", "");
                var _Position_1 = _Position_1.replace(" ", "");
                var _Position_1 = _Position_1.replace("/", "");

                var _Position_2 = item.Desired_Position.Job_Title.replace(" ", "");
                var _Position_2 = _Position_2.replace(" ", "");
                var _Position_2 = _Position_2.replace(" ", "");
                var _Position_2 = _Position_2.replace("/", "");

                var _URL_Featured_Skills = item.URL_Featured_Skills;
                var _div_Id = item.div_Id;
                var _URL_Connection_Document = item.URL_Connection_Document;

                var htmlCareerPathConnectionModal = ``;

                if ((item.Starting_Position.Job_Title == "Caseworker") && (item.Desired_Position.Job_Title == "Field Representative")) {

                    var _Reverse_URL_Featured_Skills = item.Reverse_URL_Featured_Skills;
                    var _div_Id = item.div_Id;
                    var _Reverse_URL_Connection_Document = item.Reverse_URL_Connection_Document;

                    htmlCareerPathConnectionModal = `
                    <div class="modal fade" id="${_Position_1}-to-${_Position_2}ModalNew" tabindex="-1"
    aria-labelledby="${_Position_1}-to-F${_Position_2}ModalNewLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content" style="background:rgb(247, 245, 245);">
            <div class="modal-header" style="padding:16px 16px;">
                <h5 class="modal-title" id="${_Position_1}-to-${_Position_2}ModalNewLabel"
                    style="margin-left: 3%; color:black; text-align:left;">Select a path below.</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" style="padding:16px 0px;">
                <div class="accordion accordion-flush" id="accordionFlush${_Position_1}${_Position_2}">

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-heading${_Position_1}${_Position_2}">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapse${_Position_1}${_Position_2}" aria-expanded="false"
                                aria-controls="flush-collapse${_Position_1}${_Position_2}">
                                <h4
                                    style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:95%;">
                                    ${item.Starting_Position.Job_Title} <img
                                    src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Arrow-Right.png"
                                    style="width:6%;height:125%;"> ${item.Desired_Position.Job_Title}</h4>
                            </button>
                        </h2>
                        <div id="flush-collapse${_Position_1}${_Position_2}" class="accordion-collapse collapse"
                            aria-labelledby="flush-heading${_Position_1}${_Position_2}"
                            data-bs-parent="#accordionFlush${_Position_1}${_Position_2}" style="padding-top:1rem;">
                            <h5
                                style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%; font-size:1.25em;">
                                Exploring Skill Levels</h5>
                            <p style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%;">The
                                following chart compares the anticipated featured skills and skill levels for
                                ${item.Starting_Position.Job_Title} versus ${item.Desired_Position.Job_Title}.</p>
                            <div class="center-item" style="padding:1rem 0rem;">
                                <img src="${_URL_Featured_Skills}"
                                    style="width:60%;" alt="">
                            </div>
                            <h5
                                style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%; font-size:1.25em;">
                                Gap Closure Strategies</h5>
                            <p style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%;">The
                                following are recommended strategies to help address potential gaps between your current
                                position and the next position in the career path.</p>
                            <ul style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%;">
                                <li style="text-align:left; color:black;"> Review the ${item.Desired_Position.Job_Title}
                                    Position Description and featured skills. </li>
                                <li style="text-align:left; color:black;"> Discuss options for job shadowing and
                                    informational interviews with your supervisor.</li>
                                <li style="text-align:left; color:black;"> Review available trainings on Congressional
                                    Staff Academy. </li>
                                <li style="text-align:left; color:black;"> Work with your supervisor to identify stretch
                                    assignments. </li>
                            </ul>
                            <div class="modal-footer">
                                <a href="${_URL_Connection_Document}"
                                    onclick="downloadResource('${item.Starting_Position.Job_Title} TO ${item.Desired_Position.Job_Title} - Connection Document');"><button
                                        type="button" class="btn"
                                        style="background-color:brown; color:white; width:125%;color:white; text-decoration:none; font-size:1.2rem; font-weight:bold;">
                                        Find Out More </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-heading${_Position_2}${_Position_1}">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapse${_Position_2}${_Position_1}" aria-expanded="false"
                                aria-controls="flush-collapse${_Position_2}${_Position_1}">
                                <h4
                                    style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:95%;">
                                    ${item.Desired_Position.Job_Title} <img
                                    src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Arrow-Right.png"
                                    style="width:6%;height:125%;"> ${item.Starting_Position.Job_Title}</h4>
                            </button>
                        </h2>
                        <div id="flush-collapse${_Position_2}${_Position_1}" class="accordion-collapse collapse"
                            aria-labelledby="flush-heading${_Position_2}${_Position_1}"
                            data-bs-parent="#accordionFlush${_Position_1}${_Position_2}" style="padding-top:1rem;">

                            <h5
                                style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%; font-size:1.25em;">
                                Exploring Skill Levels</h5>
                            <p style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%;">The
                                following chart compares the anticipated featured skills and skill levels for ${item.Desired_Position.Job_Title} versus ${item.Starting_Position.Job_Title}.</p>
                            <div class="center-item" style="padding:1rem 0rem;">
                                <img src="${_Reverse_URL_Featured_Skills}"
                                    style="width:60%;" alt="">
                            </div>
                            <h5
                                style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%; font-size:1.25em;">
                                Gap Closure Strategies</h5>
                            <p style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%;">The
                                following are recommended strategies to help address potential gaps between your current
                                position and the next position in the career path.</p>
                            <ul style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%;">
                                <li style="text-align:left; color:black;"> Review the ${item.Starting_Position.Job_Title} Position
                                    Description and featured skills. </li>
                                <li style="text-align:left; color:black;"> Discuss options for job shadowing and
                                    informational interviews with your supervisor.</li>
                                <li style="text-align:left; color:black;"> Review available trainings on Congressional
                                    Staff Academy. </li>
                                <li style="text-align:left; color:black;"> Work with your supervisor to identify stretch
                                    assignments. </li>
                            </ul>
                            <div class="modal-footer">
                                <a href="${_Reverse_URL_Connection_Document}"
                                    onclick="downloadResource('${item.Desired_Position.Job_Title} TO ${item.Starting_Position.Job_Title} - Connection Document');"><button
                                        type="button" class="btn"
                                        style="background-color:brown; color:white; width:125%;color:white; text-decoration:none; font-size:1.2rem; font-weight:bold;">
                                        Find Out More </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

                } else {

                    htmlCareerPathConnectionModal = `
                <div class="modal fade" id="${_Position_1}-to-${_Position_2}ModalNew" tabindex="-1" aria-labelledby="${_Position_1}-to-${_Position_2}ModalNewLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content" style="background:rgb(247, 245, 245);">
                <div class="modal-header">
                    <h4 class="modal-title" id="${_Position_1}-to-${_Position_2}ModalNewLabel" style="margin-left: 5%; color:black; text-align:left;">${item.Starting_Position.Job_Title} <img
                        src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CareerPaths/Arrow-Right.png"
                        style="width:6%;height:125%;"> ${item.Desired_Position.Job_Title}</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h4 style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%;">Exploring Skill Levels</h4>
                    <p style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%;">The following chart compares the anticipated featured skills and skill levels for ${item.Starting_Position.Job_Title} versus ${item.Desired_Position.Job_Title}.</p>
                    <div class="center-item" style="padding:1rem 0rem;">        
                            <img src="${_URL_Featured_Skills}"
                                style="width:60%;" alt="">
                    </div>
                    <h4 style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%;">Gap Closure Strategies</h4>
                    <p style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%;">The following are recommended strategies to help address potential gaps between your current position and the next position in the career path.</p>
                    <ul style="text-align:left; color:black; margin-left:auto;margin-right:auto; width:90%;">
                        <li style="text-align:left; color:black;"> Review the ${item.Desired_Position.Job_Title} Position Description and featured skills. </li>
                        <li style="text-align:left; color:black;"> Discuss options for job shadowing and informational interviews with your supervisor.</li>
                        <li style="text-align:left; color:black;"> Review available trainings on Congressional Staff Academy. </li>
                        <li style="text-align:left; color:black;"> Work with your supervisor to identify stretch assignments. </li>
                    </ul>
                    <div class="modal-footer">
                        <a  href="${_URL_Connection_Document}" onclick="downloadResource('${item.Starting_Position.Job_Title} TO ${item.Desired_Position.Job_Title} - Connection Document');"><button type="button" class="btn" style="background-color:brown; color:white; width:125%;color:white; text-decoration:none; font-size:1.2rem; font-weight:bold;">
                            Find Out More </button>
                            </a>
                    </div>

                </div>

            </div>
        </div>
    </div>`;

                };

                //console.log("htmlCareerPathConnectionModal: ",htmlCareerPathConnectionModal);

                document.getElementById(_div_Id).innerHTML = htmlCareerPathConnectionModal;

            });


        },
        error: function (data) {

            console.log("Error : Ajax failed ");
            alert("Error: " + data);
        }
    });



}); // jquery end





























