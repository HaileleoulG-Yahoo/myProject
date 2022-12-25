// jquery ready start
$(document).ready(function () {
    // jQuery code
  
  
    var siteurl = _spPageContextInfo.webAbsoluteUrl;
    var oDataUrlSubsections = siteurl + "/_api/web/lists/getbytitle('HR-HUB-Subsections')/items?$select=Title,Icon_Url_Black,Icon_Url_White,Short_Form,Section/Sections&$expand=Section&$filter=Section/Sections eq 'Recruiting And Selecting'";
  
  
    $.ajax({
        url: oDataUrlSubsections,
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
  
        success: function (data) {
  
            var items = data.d.results;
  
            //var _returned_result;

            var accordionHTML = ``;
  
            for (var index in items) {
  
              var item_SubSection = items[index];
                
                _SubSection_Title = item_SubSection.Title;
                _SubSection_Icon_Url_Black = item_SubSection.Icon_Url_Black;
                _SubSection_Icon_Url_White = item_SubSection.Icon_Url_White;
                _SubSection_Short_Form = item_SubSection.Short_Form;  
  
  
                //console.log("_SubSection_Short_Form : ", _SubSection_Short_Form);
                //getResources(_SubSection_Short_Form);               
                //_returned_result = getResources(_SubSection_Short_Form);
                //getResources(_SubSection_Short_Form).then(value => console.log(value));              
                //console.log("_returned_result : ", _returned_result);
                //getResources(_SubSection_Short_Form).then(value => console.log(value.d.results));
  
  
  // Outer loop - START  
  
              var accordionHTML = accordionHTML + `
              <div class="accordion-item">  
              <h2 class="accordion-header" id="flush-${_SubSection_Short_Form}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse${_SubSection_Short_Form}" aria-expanded="false"
                  aria-controls="flush-collapse${_SubSection_Short_Form}" style="font-weight: bold; font-family: Arial;"
                  onclick="iconToggleFunction('${_SubSection_Short_Form}')">
  
                  <img class="icon" id="${_SubSection_Short_Form}-black"
                    src="${_SubSection_Icon_Url_Black}"
                    alt="">
  
                  <img class="icon" id="${_SubSection_Short_Form}-white"
                    src="${_SubSection_Icon_Url_White}"
                    alt="">
  
                  &nbsp ${_SubSection_Title}

                </button>
              </h2>
  
              <div id="flush-collapse${_SubSection_Short_Form}" class="accordion-collapse collapse"
                aria-labelledby="flush-heading${_SubSection_Short_Form}" data-bs-parent="#accordionFlushRecruitingAndSelecting">
                <div class="accordion-body">
  
                  <div style="margin-left:1rem;">

              `;
  
  // Outer loop - END
  
  
                getResources(_SubSection_Short_Form).then(value => 
  
                  {
  
                      Resource_items = value.d.results;
                      
                      var resourceHTML = ``;
  
                      for (var index_resource in Resource_items){
  
                          var item_resource = Resource_items[index_resource];
  
                          var _Resource_Title = item_resource.Title;
                          var _ResourceURL = item_resource.ResourceURL;
  
                          //console.log("_Resource_Title : ", _Resource_Title, "_ResourceURL : ", _ResourceURL );
  
                          resourceHTML = resourceHTML + `<a class="document" href="${_ResourceURL}?web=1" style="text-decoration:none;" target="_blank">${_Resource_Title}</a><br>`;

                          //console.log("inner accordionHTML :", accordionHTML);                          
  
                      }

                      console.log("resourceHTML : ", resourceHTML);
                      //accordionHTML = accordionHTML + resourceHTML;

                      //Resource_Length = value.d.results.length;  
                      //console.log(_SubSection_Short_Form, " : ", Resource_Length);
                  
                  }
                  
                  );

                  accordionHTML = accordionHTML + `                    
                  </div>

                </div>
              </div>
            </div>`;
  
            }  

  
//        console.log("accordionHTML : ", accordionHTML);
  
  
        },
        error: function (data) {
            alert("Error: " + data);
        }
    });
  
  
  
  }); // jquery end
  
  
  
  function getResources(_Parameter_SubSection_Short_Form) {
  
      //var siteUrl = _spPageContextInfo.webAbsoluteUrl;
      //var oDataUrlResources = siteUrl + "/_api/web/lists/getbytitle('HR-HUB-Resources')/items?$select=Title,ResourceURL,Resource_Ready,Subsection/Title&$expand=Subsection&$filter=Subsection_Short_Form/Short_Form eq '" + _Parameter_SubSection_Short_Form + "'";
  
  
      return Promise.resolve($.ajax({
  
          //url: oDataUrlResources,
          url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('HR-HUB-Resources')/items?$select=Title,ResourceURL,Resource_Ready,Subsection/Title&$expand=Subsection&$filter=Subsection_Short_Form/Short_Form eq '" + _Parameter_SubSection_Short_Form + "'",
          method: "GET",
          headers: { "Accept": "application/json; odata=verbose" },
  
          success: function (data) {
  
              var _count_Resources = data.d.results.length;
  
              //console.log(_Parameter_SubSection_Short_Form, " : Total Resource : ", _count_Resources);            
  
          },
          error: function (data) {
              alert("Error: " + data);
          }
  
  
      }));
  
  
  
  }
  
  
  
  {/*     
                <div class="accordion-item">
  
                  <h2 class="accordion-header" id="flush-VARIABLE">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseVARIABLE" aria-expanded="false"
                      aria-controls="flush-collapseVARIABLE" style="font-weight: bold; font-family: Arial;"
                      onclick="iconToggleFunction('VARIABLE')">
  
                      <img class="icon" id="VARIABLE-black"
                        src="VARIABLE"
                        alt="">
  
                      <img class="icon" id="VARIABLE-white"
                        src="VARIABLE"
                        alt="">
  
                      &nbsp VARIABLE
                    </button>
                  </h2>
  
                  <div id="flush-collapseVARIABLE" class="accordion-collapse collapse"
                    aria-labelledby="flush-headingVARIABLE" data-bs-parent="#accordionFlushRecruitingAndSelecting">
                    <div class="accordion-body">
  
                      <div style="margin-left:1rem;">
  
  
                        <a class="document" href="VARIABLE?web=1" style="text-decoration:none;" target="_blank">VARIABLE</a><br>
                        <a class="document" href="VARIABLE?web=1" style="text-decoration:none;" target="_blank">VARIABLE</a><br>
                        <a class="document" href="VARIABLE?web=1" style="text-decoration:none;" target="_blank">VARIABLE</a><br>
  
  
                      </div>
  
                    </div>
                  </div>
  
                </div>
  */}
  
  
  
  
  {/*     
                <div class="accordion-item">
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
                </div>
  */}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  