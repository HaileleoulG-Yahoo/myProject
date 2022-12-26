// jquery ready start
$(document).ready(function () {


    var SectionShortForm = "ProfessionalGrowth";

    var siteUrl = _spPageContextInfo.webAbsoluteUrl;

    var oDataUrlSections = siteUrl + "/_api/web/lists/getbytitle('HR-HUB-Sections')/items?$select=Title,SectionShortForm&$filter=SectionShortForm eq '" + SectionShortForm + "'";

    var oDataUrlSubsections = siteUrl + "/_api/web/lists/getbytitle('HR-HUB-Subsections')/items?$select=Title,Icon_Url_Black,Icon_Url_White,Short_Form,SectionShortForm/SectionShortForm&$expand=SectionShortForm&$filter=SectionShortForm/SectionShortForm eq '" + SectionShortForm + "'";

    var oDataUrlResources = siteUrl + "/_api/web/lists/getbytitle('HR-HUB-Resources')/items?$select=Title,ResourceURL,Tag_01,Tag_02,Tag_03,Tag_04,Tag_05,Tag_06,Tag_07,Tag_08,Tag_09,Tag_10,Tag_11,Tag_12,Tag_13,Tag_14,Tag_15,Resource_Ready,Subsection/Title&$expand=Subsection";



    $.ajax({
        url: oDataUrlSubsections,
        type: "GET",
        dataType: "json",
        headers: {
          "accept": "application/json;odata=verbose"
        }
      }).done(function (data) {
        var items = data.d.results;
    
        items.forEach(function (item, index) {
    
          var _counter = 0;
    
          var _SubsectionTitle = item.Title;
    
          // inner loop - ajax call - START
    
              $.ajax({
                url: oDataUrlResources,
                type: "GET",
                dataType: "json",
                headers: {
                  "accept": "application/json;odata=verbose"
                }
              }).done(function (data) {
    
                var items = data.d.results;
    
                items.forEach(function (item, index) {
    
                  var _Resources_Subsection_Title = item.Subsection.Title;
    
                  // console.log("_Resources_Subsection_Title :", _Resources_Subsection_Title);
                  // console.log("_SubsectionTitle :",_SubsectionTitle);
    
                  if (_Resources_Subsection_Title == _SubsectionTitle) {
                    _counter += 1;
    
    
                    // BUILD THE ACCORDION HERE
    
    
                  }
    
                });
    
                console.log("Total resources for ", _SubsectionTitle, " : ", _counter);
    
              },
                function (error) {
                  console.error('Ooops error occured during ajax call - Inner', error);
                  //end of error area
                }
              );
    
          // inner loop - ajax call - END
    
        }
    
        );
    
      },
        function (error) {
          console.error('Ooops error occured during ajax call - Outer', error);
          //end of error area
        }
      );




var myAccordionHtml = ` 

<div class="accordion accordion-flush" id="accordionFlush"` +  SectionShortForm + ">";


myAccordionHtml = myAccordionHtml + `

<div class="accordion-item">
  <h2 class="accordion-header" id="flush-headingCareerPlanning">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
      data-bs-target="#flush-collapseCareerPlanning" aria-expanded="false"
      aria-controls="flush-collapseCareerPlanning" style="font-weight: bold; font-family: Arial;"
      onclick="iconToggleFunction('CareerPlanning')">

      <img class="icon" id="CareerPlanning-black"
        src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/HRHub-Icon-black-career-planning.svg"
        alt="">

      <img class="icon" id="CareerPlanning-white"
        src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/HRHub-Icon-white-career-planning.svg"
        alt="">

      &nbsp Career Planning 
    </button>
  </h2>
  <div id="flush-collapseCareerPlanning" class="accordion-collapse collapse"

    aria-labelledby="flush-headingCareerPlanning" data-bs-parent="#accordionFlushProfessionalGrowth">

    <div class="accordion-body">

      <div style="margin-left:1rem;">

        <a class="document" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/Shared%20Documents/Quick-Tips-for-Conducting-Career-Conversations.pdf?web=1" style="text-decoration:none;" target="_blank" onclick="downloadResource('Quick Tips for Conducting Career Conversations')"> Quick Tips for Conducting Career Conversations </a> <br>
        <a class="document" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/Shared%20Documents/Establishing-Realistic-Career Plans-for Staff-FAQ.pdf?web=1" style="text-decoration:none;" target="_blank" onclick="downloadResource('Establishing Realistic Career Plans for Staff: FAQ')"> Establishing Realistic Career Plans for Staff: FAQ </a><br>
        <a class="document" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/Shared%20Documents/Individual-Development-Roadmap-Template.docx?web=1" style="text-decoration:none;" target="_blank" onclick="downloadResource('Individual Development Roadmap Template')"> Individual Development Roadmap Template </a> <br>
        <a class="document" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/Shared%20Documents/Individual-Development-Roadmap-Example.pdf?web=1" style="text-decoration:none;" target="_blank" onclick="downloadResource('Individual Development Roadmap Example')"> Individual Development Roadmap Example </a> <br>

       </div>

    </div>
  </div>
</div> 



<div class="accordion-item">
  <h2 class="accordion-header" id="flush-headingAdditionalProfessionalGrowthServices">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
      data-bs-target="#flush-collapseAdditionalProfessionalGrowthServices" aria-expanded="false"
      aria-controls="flush-collapseAdditionalProfessionalGrowthServices"
      style="font-weight: bold; font-family: Arial; font-weight: 20px;"
      onclick="iconToggleFunction('AdditionalProfessionalGrowthServices')">
      <img class="icon" id="AdditionalProfessionalGrowthServices-black"
        src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/HRHub-Icon_profiessional-growth.svg"
        alt="">
      <img class="icon" id="AdditionalProfessionalGrowthServices-white"
        src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/HRHub-Icon-white_profiessional-growth.svg"
        alt="">
      &nbsp Additional Professional Growth Services
    </button>
  </h2>
  <div id="flush-collapseAdditionalProfessionalGrowthServices" class="accordion-collapse collapse" aria-labelledby="flush-headingAdditionalProfessionalGrowthServices"
    data-bs-parent="#accordionFlushProfessionalGrowth">
    <div class="accordion-body">

      <div style="margin-left:1rem;">

        <a class="document" href="https://house.csod.com/samldefault.aspx" style="text-decoration:none;"
          target="_blank" onclick="downloadResource('Congressional Staff Academy')"> Congressional Staff
          Academy </a><br>
        <a class="document" href="https://caocoach.house.gov/" style="text-decoration:none;"
          target="_blank" onclick="downloadResource('CAO Coach Program')"> CAO Coach Program </a><br>

      </div>

    </div>
  </div>
</div>


</div>`;

console.log("myAccordionHtml : ",myAccordionHtml)


//document.getElementById('ProfessionalGrowthAccordion').innerHTML = myAccordionHtml;








    // jQuery code

    console.log("Recruiting and selecting js loaded");

  var siteUrl = _spPageContextInfo.webAbsoluteUrl;
  var oDataUrlSubsections = siteUrl + "/_api/web/lists/getbytitle('HR-HUB-Subsections')/items?$select=Title,Icon_Url_Black,Icon_Url_White,Short_Form,Section/Sections&$expand=Section&$filter=Section/Sections eq 'Recruiting And Selecting'";
  var oDataUrlResources = siteUrl + "/_api/web/lists/getbytitle('HR-HUB-Resources')/items?$select=Title,ResourceURL,Tag_01,Tag_02,Tag_03,Tag_04,Tag_05,Tag_06,Tag_07,Tag_08,Tag_09,Tag_10,Tag_11,Tag_12,Tag_13,Tag_14,Tag_15,Resource_Ready,Subsection/Title&$expand=Subsection";
  



 }); // jquery end



/*

Subsection
Icon_Url_Black
Icon_Url_White
Resource_Url
Resource_Title

*/


/* <div class="accordion-item">
<h2 class="accordion-header" id="flush-headingCommunications">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
    data-bs-target="#flush-collapseCommunications" aria-expanded="false"
    aria-controls="flush-collapseCommunications" style="font-weight: bold; font-family: Arial;"
    onclick="iconToggleFunction('Communications')">

    <img class="icon" id="recruitingAndSelecting-black"
      src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/HRHub-Icon_communications.svg"
      alt="">

    <img class="icon" id="recruitingAndSelecting-white"
      src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/HRHub-Icon-white_communications.svg"
      alt="">

    &nbsp Recruiting & Selecting Communications
  </button>
</h2>
<div id="flush-collapseCommunications" class="accordion-collapse collapse"
  aria-labelledby="flush-headingCommunications" data-bs-parent="#accordionFlushRecruitingAndSelecting">
  <div class="accordion-body">

    <div style="margin-left:1rem;">
      <a class="document" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/Shared%20Documents/Recruiting-%26-Selecting-Communications-Guide.docx?web=1" style="text-decoration:none;" target="_blank">Recruiting &
        Selecting Communications
        Guide</a><br>
      <a class="document" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/Shared%20Documents/Quick-Tips-for-Making-a-Job-Offer.pdf?web=1" style="text-decoration:none;" target="_blank">Quick Tips for
        Making a Job Offer</a><br>
      <a class="document" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/Shared%20Documents/Offer-Letter-Template.docx?web=1" style="text-decoration:none;" target="_blank">Offer Letter
        Template</a><br>
    </div>

  </div>
</div>
</div> */





 // Get items from 'HR-HUB-Resources' list
function getListItems_HR_HUB_Resources(_Subsection_Title) {
    var siteUrl = _spPageContextInfo.webAbsoluteUrl;
    var apiUrl = siteUrl + "/_api/web/lists/getbytitle('HR-HUB-Resources')/items?$select=Title,ResourceURL,Tag_01,Tag_02,Tag_03,Tag_04,Tag_05,Tag_06,Tag_07,Tag_08,Tag_09,Tag_10,Tag_11,Tag_12,Tag_13,Tag_14,Tag_15,Resource_Ready,Subsection/Title&$expand=Subsection";
  
    return $.ajax({
      url: apiUrl,
      method: 'GET',
      headers: { "Accept": "application/json; odata=verbose" }
    });
  
  }


  // Get items from 'HR-HUB-Subsections' list
function getListItems_HR_HUB_Subsections() {
    var siteUrl = _spPageContextInfo.webAbsoluteUrl;
    // var apiUrl = siteUrl + "/_api/web/lists/getbytitle('HR-HUB-Subsections')/items?$select=Title,Section,Icon_Url_Black,Icon_Url_White,Short_Form&$filter=Section Eq 'Recruiting & Selecting'";
    var apiUrl = siteUrl + "/_api/web/lists/getbytitle('HR-HUB-Subsections')/items?$select=Title,Icon_Url_Black,Icon_Url_White,Short_Form,Section/Sections&$expand=Section&$filter=Section/Sections eq 'Recruiting And Selecting'";
  
    return $.ajax({
      url: apiUrl,
      method: 'GET', 
      headers: { "Accept": "application/json; odata=verbose" }
    });
  
  }