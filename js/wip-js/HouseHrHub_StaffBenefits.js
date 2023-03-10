// jquery ready start
$(document).ready(function () {
    // jQuery code
  
  
    // footer - START
    document.getElementById('Footer').innerHTML = `
    <footer class="text-center text-lg-start text-muted" style="background: #003349;">  
     
    <section class="">        
      
      <div class="row">         
        <div id="footer-logo-row" class="col-md-12 col-lg-3 col-xl-3 mx-auto mb-4">
  
          <img id="footer-logo"
            src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CAO-Logo_White_USHR.svg"
            alt="US House of Representatives Logo">
  
        </div>           
  
        <div class="col-md-12 col-lg-9 col-xl-9 mx-auto mb-4" style="display:flex; align-items:center;">
          <p style="color:white; font-size: 15px;">
            The House HR Hub will be updated on a regular basis. Please check back often for additional content. | <a style="color:white; font-size: 15px;" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Sitemap.aspx" target="_blank">Sitemap</a> | <a style="color:white;" href= "mailto:HouseHRHub@mail.house.gov"> Contact </a> | <a style="color:white; font-size: 15px;" href="https://www.housestudies.com/SE/1/HRHubFeedback/ " target="_blank">Submit Feedback </a>
          </p>
  
        </div>  
  
      </div>  
  
    </section>
  
  </footer>`;
  
    // footer - END
  
  
    // Top navbar - START
    document.getElementById('topNavigationBar').innerHTML = `
  
    <div class="container-fluid" style="background: #003349;">
    <div id="House-HR-Hub-Logo-Row" class="row">
  
      <a href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Home.aspx"
        style="padding-right:125px;">
        <img id="House-HR-Hub-Logo"
          src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/HR-Hub_Logo_wordmark-white.svg">
      </a>
  
      <div class="input-group">
        <input type="search" id="SearchKey" onclick="checkEnter();" class="form-control rounded" placeholder="Search" aria-label="Search"
          aria-describedby="search-addon" />
        <button id="SearchButton" type="button" class="btn btn-outline-primary" onclick="searchResource();"><i
            class="fas fa-search"></i></button>
      </div>
  
    </div>
  
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-dark" style="background: #003349;">
  
        <div class="container-fluid">
  
          <!-- <a class="navbar-brand" href="#">Brand</a> -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
            <span class="navbar-toggler-icon"></span>
          </button>
  
          <!-- To keep the navbar at center of the page -->
          <div class="collapse navbar-collapse"></div>
  
          <div class="collapse navbar-collapse" id="main_nav">
            <ul class="navbar-nav">
  
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle"
                  href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Hiring.aspx"
                  data-bs-toggle="dropdown"> HIRING </a>
                <ul id="hiring-dropdown" class="dropdown-menu fade-up">
                  <li><a class="dropdown-item"
                      href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Hiring.aspx"> Hiring
                    </a></li>
                  <hr style="width:100%; margin-left:0; margin-top:0; margin-bottom:0;">
                  <li><a class="dropdown-item" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Recruiting&Selecting.aspx"> Recruiting & Selecting </a></li>
                  <li><a class="dropdown-item" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Salary&Benefits.aspx"> Salary & Benefits </a></li>
                  <li><a class="dropdown-item" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Onboarding.aspx"> Onboarding </a></li>
                  <li><a class="dropdown-item" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/SettingUpAnOffice.aspx"> Setting Up An Office  </a></li>
                </ul>
              </li>
  
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> DEVELOPING </a>
                <ul id="developing-dropdown" class="dropdown-menu fade-up">
                  <li><a class="dropdown-item" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Developing.aspx#"> Developing </a></li>
                  <hr style="width:100%; margin-left:0; margin-top:0; margin-bottom:0;">
                  <li><a class="dropdown-item" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/PerformanceManagement.aspx#"> Performance Management </a></li>
                  <li><a class="dropdown-item" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/ProfessionalGrowth.aspx#"> Professional Growth </a></li>
                </ul>
              </li>
  
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> RETAINING </a>
                <ul id="retaining-dropdown" class="dropdown-menu fade-up">
                  <li><a class="dropdown-item" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Retaining.aspx#"> Retaining </a></li>
                  <hr style="width:100%; margin-left:0; margin-top:0; margin-bottom:0;">
                  <li><a class="dropdown-item" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Engaging&SupportingStaff.aspx#"> Engaging & Supporting Staff </a></li>
                  <li><a class="dropdown-item" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/ManagingStaffTransitions.aspx#"> Managing Staff Transitions </a></li>
                </ul>
              </li>
      
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> STAFF BENEFITS </a>
                <ul id="additional-services-dropdown" class="dropdown-menu fade-up">
                  <li><a class="dropdown-item" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/StaffBenefits.aspx#"> <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Staff Benefits &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> </a></li>
                </ul>
              </li>
  
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle"
                  href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/ResumeBank.aspx"
                  data-bs-toggle="dropdown"> HOUSE RESUME BANK </a>
                <ul id="hiring-dropdown" class="dropdown-menu fade-up">
                  <li><a class="dropdown-item"
                      href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/ResumeBank.aspx"> House Resume Bank
                    </a></li>
                  <hr style="width:100%; margin-left:0; margin-top:0; margin-bottom:0;">
                  <li><a class="dropdown-item" href="https://urldefense.com/v3/__https:/house.csod.com/ux/ats/careersite/7/home?c=house__;!!Bg5easoyC-OII2vlEqY8mTBrtW-N4OJKAQ!ZnXEaEIZfMEvHjDm90hgLH6a_8FBMPAbcmyASA8B8h5iV3LgRDDk-hfb8DV0yhVuGkqS-Ybu$#" target="_blank" onclick="downloadResource('Submit a Resume - Top Nav Bar')"> Submit a Resume </a></li>
                  <li><a class="dropdown-item" href="https://house.csod.com/samldefault.aspx?returnurl=https%253a%252f%252fhouse.csod.com%252fcatalog%252fCustomPage.aspx%253fid%253d221000398%2526tab_page_id%253d221000398#" target="_blank" onclick="downloadResource('Request Resumes - Top Nav Bar')"> Request Resumes </a></li>
                  <li><a class="dropdown-item" href="https://housenet.house.gov/vacancy-announcements#" target="_blank" onclick="downloadResource('Vacancy Announcements - Top Nav Bar')"> Vacancy Announcements </a></li>
                </ul>
              </li>
              
  
            </li>  
  
            </ul>
          </div> <!-- navbar-collapse.// -->
        </div> <!-- container-fluid.// -->
      </nav>
    </div>
  
  </div>
      
      `;
    // Top navbar - END
  
  
    // Left navbar - START
  
    var currentUrl = window.location.href;
  
    //console.log("Current URL : ", currentUrl);
  
  
    // Logic to check the page and set a variable to expand leftNav dropdown accordingly - START
  
    var expand_hiring_dropdown = "";
    var expand_developing_dropdown = "";
    var expand_retaining_dropdown = "";
  
  // 
    if(currentUrl.includes('Hiring') || currentUrl.includes('Recruiting') ||currentUrl.includes('Salary&Benefits') || currentUrl.includes('Onboarding') || currentUrl.includes('SettingUpAnOffice')){
      var expand_hiring_dropdown = "show";
    } else if(currentUrl.includes('Developing') || currentUrl.includes('PerformanceManagement') ||currentUrl.includes('ProfessionalGrowth') ) {
      var expand_developing_dropdown = "show";
    } else if (currentUrl.includes('Retaining') || currentUrl.includes('Engaging&SupportingStaff') ||currentUrl.includes('ManagingStaffTransitions') ){
      var expand_retaining_dropdown = "show";
    }
  
  
  
    htmlLeftNavigation = `
    <nav id="sidebar" style="background:#003349; border-width:1px; border-style:solid;">
  
    <ul class="list-unstyled components" style="padding:0px; margin:0px;">
  
      <li id="home_link"> 
        <a id="home" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Home.aspx#">Home</a>
      </li>
  
      <hr style="width:100%; margin-left:0; margin-top:0; margin-bottom:0; background: white;">
  
      <li id="hiring_link">
        <a id="hiring" href="#hiringSubmenu" data-toggle="collapse" aria-expanded="false"
          class="dropdown-toggle">Hiring</a>
        <ul class="collapse list-unstyled ${expand_hiring_dropdown}" id="hiringSubmenu">
          <li>
            <a id="RecruitingAndSelecting" class="sidebar-link" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Recruiting&Selecting.aspx#"> Recruiting & Selecting </a>
          </li>
          <li>
            <a id="SalaryAndBenefits" class="sidebar-link" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Salary&Benefits.aspx#"> Salary & Benefits <br></a>
          </li>
          <li>
            <a id="Onboarding" class="sidebar-link" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Onboarding.aspx#"> Onboarding </a>
          </li>
          <li>
          <a id="SettingUpAnOffice" class="sidebar-link" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/SettingUpAnOffice.aspx#"> Setting Up An Office  </a>
        </li>
        </ul>
      </li>
  
      <hr style="width:100%; margin-left:0; margin-top:0; margin-bottom:0; background: white;">
  
      <li id="developing_link">
        <a id="developing" href="#developingSubmenu" data-toggle="collapse" aria-expanded="false"
          class="dropdown-toggle">Developing </a>
        <ul class="collapse list-unstyled ${expand_developing_dropdown}" id="developingSubmenu">
          <li>
            <a id="PerformanceManagement" class="sidebar-link" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/PerformanceManagement.aspx#"> Performance Management </a>
          </li>
          <li>
            <a id="ProfessionalGrowth" class="sidebar-link" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/ProfessionalGrowth.aspx#"> Professional Growth </a>
          </li>
        </ul>
      </li>
  
      <hr style="width:100%; margin-left:0; margin-top:0; margin-bottom:0; background: white;">
  
      <li id="retaining_link">
        <a id="retaining" href="#retainingSubmenu" data-toggle="collapse" aria-expanded="false"
          class="dropdown-toggle">Retaining </a>
        <ul class="collapse list-unstyled ${expand_retaining_dropdown}" id="retainingSubmenu">
          <li>
            <a id="EngagingAndSupportingStaff" class="sidebar-link" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Engaging&SupportingStaff.aspx#"> Engaging & Supporting Staff </a>
          </li>
          <li>
            <a id="ManagingStaffTransitions" class="sidebar-link" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/ManagingStaffTransitions.aspx#"> Managing Staff Transitions </a>
          </li>
        </ul>
      </li>
  
      <hr style="width:100%; margin-left:0; margin-top:0; margin-bottom:0; background: white;">
  
      <li id="AdditionalServices_link"> 
          <a id="AdditionalServices" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/StaffBenefits.aspx#">Staff Benefits</a>
      </li>
  
      <hr style="width:100%; margin-left:0; margin-top:0; margin-bottom:0; background: white;">
  
      <li id="ResumeBank_link"> 
          <a id="ResumeBank" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/ResumeBank.aspx">House Resume Bank</a>
      </li>
  
    </ul>
  
  </nav>
      `;
  
    var _fullURL = window.location.href;
  
    if (!_fullURL.includes('Home.aspx')) {
      document.getElementById('leftNavigation').innerHTML = htmlLeftNavigation;
    }else {    
    }
  
  
    // Left navbar - END
  
  
  }); // jquery end
  
  
  
  
  //To search from 'Search' page
  function searchResource() {
  
    // Hide SearchDataTable when the page loads
    $('#SearchDataTable').hide();
  
    // spinner to appear when the page loads
    $('#spinner').show();
  
   // setTimeOut function to delay execution to allow for spinner
    setTimeout(function () {
  
      //spinner to hide after delay set in mili-seconds
      $('#spinner').hide();
  
  
      //Search for the document - START
      var _searchKey = document.getElementById("SearchKey").value;
  
      var _fullURL = window.location.href;
  
      //set SearchCounter to zero
      var SearchReturnCounter = 0;
  
  
      //Check the page is 'Search' page
      if (_fullURL.includes('Search.aspx')) {
  
        getListItems()
          .then(function (response) {
            //success area  inputVal
  
            //console.log('Data coming from sharePoint is ', response);
  
            var items = response.d.results; //items 
  
            //console.log('SampleData Items are ', items);
  
            mySearchHtml = `<table class="table table-hover">
                              <thead>
                                <tr>
                                  <th scope="col">  </th>
                                </tr>
                              </thead>
                              <tbody>`;
  
            for (var index in items) {
  
              var item = items[index];
  
              var _title = item.Title;
  
              //console.log('Resource Ready : ', item.Resource_Ready);
  
              //change both document title and search key into lower case.
              _title = _title.toLowerCase();
              _searchKey = _searchKey.toLowerCase();
  
              if (_title.includes(_searchKey) || item.Tag_01.includes(_searchKey) || item.Tag_02.includes(_searchKey) || item.Tag_03.includes(_searchKey)
                || item.Tag_04.includes(_searchKey) || item.Tag_05.includes(_searchKey) || item.Tag_06.includes(_searchKey)
                || item.Tag_07.includes(_searchKey) || item.Tag_08.includes(_searchKey) || item.Tag_09.includes(_searchKey)
                || item.Tag_10.includes(_searchKey) || item.Tag_11.includes(_searchKey) || item.Tag_12.includes(_searchKey)
                || item.Tag_13.includes(_searchKey) || item.Tag_14.includes(_searchKey) || item.Tag_15.includes(_searchKey)) {
  
                var _ResourceURL = item.ResourceURL
  
  
                ResourceTitle = item.Title.replace(/&/g,"and");              
  
                // check the resource is ready, if not avoid inserting resource url, instead insert 'coming soon!' after resource title
                if (item.Resource_Ready === "Yes") {
                  //create row for SearchDataTable with clickable link to access the resource
                  mySearchHtml += `
                              <tr>                            
                                <td style="text-align:left;"><a class="document" href="${_ResourceURL}" target="_blank" onclick="downloadResource('${ResourceTitle}')" >${item.Title}</a></td>                      
                              </tr>
                                          `;
                } else {
                  //create row for SearchDataTable with non-clickable link, since the resource is not ready yet
                  mySearchHtml += `
                              <tr>                            
                                <td style="text-align:left;"><a class="document" href="javascript: void(0)">${item.Title} - <span style="font-weight:bold; color:black;">coming soon!</span></a></td>                      
                              </tr>
                                          `;
                }
  
  
  
                // increment SearchReturnCounter by one.
                SearchReturnCounter = SearchReturnCounter + 1;
  
              }
  
            }// end of loop 
  
            // console.log("SearchReturnCounter : ", SearchReturnCounter);
  
            // Check either there is no item retrived, or no search key entered on search window
  
            if (SearchReturnCounter === 0 || _searchKey == "") {
  
              console.log("Not even one record gets returned1");
  
          // message when no record gets returned
          mySearchHtml = `No records found for <b>"`;
          mySearchHtml = mySearchHtml + _searchKey ;
          mySearchHtml = mySearchHtml + `"</b>, please try another term to search`;
  
            } else {
  
              //console.log("At least one record gets returned");
  
              mySearchHtml += `</tbody>
                            </table>`;
  
              // mySearchHtml = `  Total of <b>` + SearchReturnCounter + `</b> document/s found for <b>"` + _searchKey + `"</b>.<br>` + mySearchHtml;
              mySearchHtml = SearchReturnCounter + `</b> result(s) found for <b>"` + _SearchCriteria + `"</b>.<br>` + mySearchHtml;
  
             //function call to collect data for HR HUB Analytics
              tagSearches(_searchKey, SearchReturnCounter);
  
            }
  
            $('#SearchDataTable').html(mySearchHtml);
            $('#SearchDataTable').show();
  
  
            //end of success area
  
          },
            function (error) {
              console.error('Ooops error occured during ajax call', error);
              //end of error area
            });
  
      } else {
        // Open Search page and load the returned documents
        var _urlSearchPage = "https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Search.aspx?SearchCriteria=" + _searchKey;
        window.open(_urlSearchPage);
      }
  
    }, 2000);
    //Search for the document - END
  
  }
  
  
  // Left navbar - function - START
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.sidebar .nav-link').forEach(function (element) {
  
      element.addEventListener('click', function (e) {
  
        let nextEl = element.nextElementSibling;
        let parentEl = element.parentElement;
  
        if (nextEl) {
          e.preventDefault();
          let mycollapse = new bootstrap.Collapse(nextEl);
  
          if (nextEl.classList.contains('show')) {
            mycollapse.hide();
          } else {
            mycollapse.show();
            // find other submenus with class=show
            var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
            // if it exists, then close all of them
            if (opened_submenu) {
              new bootstrap.Collapse(opened_submenu);
            }
          }
        }
      }); // addEventListener
    }) // forEach
  });
  // Left navbar - function - END
  
  
  
  
  // Get items from 'HR-HUB-Resources' list
  function getListItems() {
    var siteUrl = _spPageContextInfo.webAbsoluteUrl;
  
    var apiUrl = siteUrl + "/_api/web/lists/getbytitle('HR-HUB-Resources')/items?$select=Title,ResourceURL,Tag_01,Tag_02,Tag_03,Tag_04,Tag_05,Tag_06,Tag_07,Tag_08,Tag_09,Tag_10,Tag_11,Tag_12,Tag_13,Tag_14,Tag_15,Resource_Ready&$orderby=Title&$top=1000";
    
  
    return $.ajax({
      url: apiUrl,
      method: 'GET',
      headers: { "Accept": "application/json; odata=verbose" }
    });
  
  }
  
  
  
  // Search from the rest of the pages other than 'Search' page
  function searchResourceWithSearchKey(SearchCriteria) {
  
    //console.log("Inside searchResourceWithSearchKey function");
  
    var SearchReturnCounter = 0;
  
    getListItems()
      .then(function (response) {
        //success area  inputVal
  
        // console.log('Data coming from sharePoint is ', response);
  
        var items = response.d.results; //items 
  
        // console.log('SampleData Items are ', items);
  
        mySearchHtml = `<table class="table table-hover">
        <thead>
          <tr>
   
              <th scope="col">  </th>
          </tr>
        </thead>
        <tbody>`;
  
  
  
        for (var index in items) {
  
          var item = items[index];
  
          var _title = item.Title;
  
          _title = _title.toLowerCase();
          _SearchCriteria = SearchCriteria.toLowerCase();
  
          if (_title.includes(_SearchCriteria) || item.Tag_01.includes(_SearchCriteria) || item.Tag_02.includes(_SearchCriteria) || item.Tag_03.includes(_SearchCriteria)
            || item.Tag_04.includes(_SearchCriteria) || item.Tag_05.includes(_SearchCriteria) || item.Tag_06.includes(_SearchCriteria)
            || item.Tag_07.includes(_SearchCriteria) || item.Tag_08.includes(_SearchCriteria) || item.Tag_09.includes(_SearchCriteria)
            || item.Tag_10.includes(_SearchCriteria) || item.Tag_11.includes(_SearchCriteria) || item.Tag_12.includes(_SearchCriteria)
            || item.Tag_13.includes(_SearchCriteria) || item.Tag_14.includes(_SearchCriteria) || item.Tag_15.includes(_SearchCriteria)) {
  
            var _ResourceURL = item.ResourceURL
  
  
                // check the resource is ready, if not avoid inserting resource url, instead insert 'coming soon!' after resource title
                if (item.Resource_Ready === "Yes") {
                  //create row for SearchDataTable with clickable link to access the resource
                  mySearchHtml += `
                              <tr>                            
                                <td style="text-align:left;"><a class="document" href="${_ResourceURL}" target="_blank">${item.Title}</a></td>                      
                              </tr>
                                          `;
                } else {
                  //create row for SearchDataTable with non-clickable link, since the resource is not ready yet
                  mySearchHtml += `
                              <tr>                            
                                <td style="text-align:left;"><a class="document" href="javascript: void(0)">${item.Title} - <span style="font-weight:bold; color:black;">coming soon!</span></a></td>                      
                              </tr>
                                          `;
                }
  
  
            SearchReturnCounter=SearchReturnCounter + 1;
          }
  
        }// end of loop 
  
  
  
        // console.log("SearchReturnCounter : ",SearchReturnCounter);
  
  
        if(SearchReturnCounter===0 || _SearchCriteria==""){
  
          //console.log("Not even one record gets returned");
  
          // message when no record gets returned
          mySearchHtml = `No records found for <b>"`;
          mySearchHtml = mySearchHtml + _SearchCriteria ;
          mySearchHtml = mySearchHtml + `"</b>, please try another term to search`;
  
        }else{
  
          //console.log("At least one record gets returned");
  
          mySearchHtml +=`</tbody>
          </table>`; 
          
          // mySearchHtml = `  Total of <b>` + SearchReturnCounter + `</b> document/s found for <b>"` + _SearchCriteria + `"</b>.<br>` + mySearchHtml;
          mySearchHtml = SearchReturnCounter + `</b> result(s) found for <b>"` + _SearchCriteria + `"</b>.<br>` + mySearchHtml;
  
  
          //function call to collect data for HR HUB Analytics
          tagSearches(_SearchCriteria, SearchReturnCounter);
          
        }
  
        $('#SearchDataTable').html(mySearchHtml);
  
  
  
  
        //end of success area
      },
        function (error) {
          console.error('Ooops error occured during ajax call', error);
          //end of error area
        });
  
  
  }
  
  
  // A function that listens for enter key on search box and run the search accordingly
  function checkEnter() {
    $("#SearchKey").on('keyup', function (event) {
  
      var _fullURL = window.location.href;
  
      if (event.keyCode === 13) {
  
        //console.log("Enter key pressed!!!!!");
  
        // Confirm search done from pages other than 'Search.aspx'
        if (!_fullURL.includes('Search.aspx')) {
  
          var _searchKey = document.getElementById("SearchKey").value;
          var _urlSearchPage = "https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Search.aspx?SearchCriteria=" + _searchKey;
          window.open(_urlSearchPage);
  
        }else {     
  
          // Function call to do a search from 'Search.aspx'
          searchResource();
          
        }
  
  
      }
    });
  }
  
  