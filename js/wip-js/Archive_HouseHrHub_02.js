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
            The House HR Hub will be updated on a regular basis. Please check back often for additional content. For questions or feedback related to the House HR Hub, contact <a style="color:white;" href= "HouseHRHub@mail.house.gov">HouseHRHub@mail.house.gov</a>.
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
        <input type="search" id="SearchKey" class="form-control rounded" placeholder="Search" aria-label="Search"
          aria-describedby="search-addon" />
        <button type="button" class="btn btn-outline-primary" onclick="searchResource();"><i
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
                  <li><a class="dropdown-item"
                      href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Recruiting&Selecting.aspx">
                      Recruiting & Selecting </a></li>
                  <li><a class="dropdown-item" href="#"> Salary & Benefits - <span
                        style="font-size:15px; font-style:italic;">coming soon!</span> </a></li>
                  <li><a class="dropdown-item" href="#"> Onboarding - <span
                        style="font-size:15px; font-style:italic;">coming soon!</span> </a></li>
                </ul>
              </li>
  
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> DEVELOPING - <span
                    style="font-size:15px; font-style:italic;">coming soon!</span> </a>
                <ul id="developing-dropdown" class="dropdown-menu fade-up">
                  <li><a class="dropdown-item" href="#"> Developing - <span
                        style="font-size:15px; font-style:italic;">coming soon!</span> </a></li>
                  <hr style="width:100%; margin-left:0; margin-top:0; margin-bottom:0;">
                  <li><a class="dropdown-item" href="#"> Performance Management - <span
                        style="font-size:15px; font-style:italic;">coming soon!</span></a></li>
                  <li><a class="dropdown-item" href="#"> Professional Growth - <span
                        style="font-size:15px; font-style:italic;">coming soon!</span> </a></li>
                </ul>
              </li>
  
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> RETAINING - <span
                    style="font-size:15px; font-style:italic;">coming soon!</span> </a>
                <ul id="retaining-dropdown" class="dropdown-menu fade-up">
                  <li><a class="dropdown-item" href="#"> Retaining - <span
                        style="font-size:15px; font-style:italic;">coming soon!</span></a></li>
                  <hr style="width:100%; margin-left:0; margin-top:0; margin-bottom:0;">
                  <li><a class="dropdown-item" href="#"> Engaging & Supporting Staff - <span
                        style="font-size:15px; font-style:italic;">coming soon!</span></a></li>
                  <li><a class="dropdown-item" href="#"> Managing Staff Transitions - <span
                        style="font-size:15px; font-style:italic;">coming soon!</span> </a></li>
                </ul>
              </li>
  
              <!-- <li class="nav-item icon">
  
                <div class="input-group" style="padding-top:1rem !important;">
                  <input type="search" id="SearchKey" class="form-control rounded" placeholder="Search"
                    aria-label="Search" aria-describedby="search-addon" />
                  <button type="button" class="btn btn-outline-primary" onclick="searchResource();"><i
                      class="fas fa-search"></i></button>
                </div>
  
              </li> -->
  
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
  
    console.log("Current URL : ", currentUrl);
  
    htmlLeftNavigation = `
      <nav class="sidebar py-2">
      <ul class="nav flex-column" id="nav_accordion">
        <li id="Home" class="nav-item main top">
          <a class="nav-link" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Home.aspx"> Home </a>
        </li>`;
  
    if (currentUrl.includes('TestPage') || currentUrl.includes('Hiring') || currentUrl.includes('Recruiting%26Selecting') || currentUrl.includes('Recruiting&Selecting') ||
      currentUrl.includes('Salary%26Benefits') || currentUrl.includes('Onboarding')) {
  
      htmlLeftNavigation = htmlLeftNavigation + `
          <li id="Hiring" class="nav-item has-submenu main">
          <a class="nav-link top" href="#" style="font-weight:bold;"> Hiring </a>
          <ul class="submenu collapse show">`;
  
    } else {
  
      htmlLeftNavigation = htmlLeftNavigation + `
        <li id="Hiring" class="nav-item has-submenu main">
        <a class="nav-link top" href="#"> Hiring </a>
        <ul class="submenu collapse">`;
    }
  
    htmlLeftNavigation = htmlLeftNavigation + `
    
            <li class="nav-item has-submenu">
              <a class="nav-link first-level hiring" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Recruiting&Selecting.aspx#">Recruiting & Selecting </a>
    
              <!--
    
              <ul class="submenu collapse">
                <li><a class="nav-link second-level" href="#">Recruiting & Selecting -1 </a></li>
                <li><a class="nav-link second-level" href="#">Recruiting & Selecting -2 </a></li>
                <li><a class="nav-link second-level" href="#">Recruiting & Selecting -3 </a></li>
                 
                <li class="nav-item has-submenu">
                  <a class="nav-link second-level" href="#">Dummy </a>
                  <ul class="submenu collapse">
                    <li><a class="nav-link third-level" href="#">Dummy-1 </a></li>
                    <li><a class="nav-link third-level" href="#">Dummy-2 </a></li>
                    <li><a class="nav-link third-level" href="#">Dummy-3</a></li>
                    <li><a class="nav-link third-level" href="#">Dummy-4 </a></li>
                  </ul>
                </li>              
    
              </ul>
    
              --> 
    
            </li>
    
            <li class="nav-item has-submenu">
              <a class="nav-link first-level hiring" href="#">Salary & Benefits - <span style="font-size:12px; font-style:italic;">Coming soon!</span></a>
    
              <!-- 
    
              <ul class="submenu collapse">
                <li><a class="nav-link second-level" href="#">Salary & Benefits-1 </a></li>
                <li><a class="nav-link second-level" href="#">Salary & Benefits-2 </a></li>
                <li><a class="nav-link second-level" href="#">Salary & Benefits-3 </a></li>
    
                <li class="nav-item has-submenu">
                  <a class="nav-link second-level" href="#">Dummy </a>
                  <ul class="submenu collapse">
                    <li><a class="nav-link third-level" href="#">Dummy-1 </a></li>
                    <li><a class="nav-link third-level" href="#">Dummy-2 </a></li>
                    <li><a class="nav-link third-level" href="#">Dummy-3</a></li>
                    <li><a class="nav-link third-level" href="#">Dummy-4 </a></li>
                  </ul>
                </li>
    
              </ul>
    
              -->
    
            </li>
    
            <li class="nav-item has-submenu">
              <a class="nav-link first-level hiring" href="#">Onboarding - <span style="font-size:12px; font-style:italic;">Coming soon!</span> </a>
    
              <!--
    
              <ul class="submenu collapse">
                <li><a class="nav-link second-level" href="#">Onboarding-1 </a></li>
                <li><a class="nav-link second-level" href="#">Onboarding-2 </a></li>
                <li><a class="nav-link second-level" href="#">Onboarding-3 </a></li>
     
                <li class="nav-item has-submenu">
                  <a class="nav-link second-level" href="#">Dummy </a>
                  <ul class="submenu collapse">
                    <li><a class="nav-link third-level" href="#">Dummy-1 </a></li>
                    <li><a class="nav-link third-level" href="#">Dummy-2 </a></li>
                    <li><a class="nav-link third-level" href="#">Dummy-3</a></li>
                    <li><a class="nav-link third-level" href="#">Dummy-4 </a></li>
                  </ul>
                </li>
    
              </ul>
    
              -->
    
            </li>
          </ul>
        </li>
    
    
        <li id="Developing" class="nav-item has-submenu main">
          <a class="nav-link top" href="#"> Developing - <span style="font-size:12px; font-style:italic;">Coming soon!</span> </a>
          <ul class="submenu collapse">
    
            <li class="nav-item has-submenu">
              <a class="nav-link first-level developing" href="#"> Performance Management </a>
    
              <!--
    
              <ul class="submenu collapse">
                <li><a class="nav-link second-level" href="#">Developing-1-1 </a></li>
                <li><a class="nav-link second-level" href="#">Developing-1-2 </a></li>
                <li><a class="nav-link second-level" href="#">Developing-1-3 </a></li>
     
                <li class="nav-item has-submenu">
                  <a class="nav-link second-level" href="#">Dummy </a>
                  <ul class="submenu collapse">
                    <li><a class="nav-link third-level" href="#">Dummy-1 </a></li>
                    <li><a class="nav-link third-level" href="#">Dummy-2 </a></li>
                    <li><a class="nav-link third-level" href="#">Dummy-3</a></li>
                    <li><a class="nav-link third-level" href="#">Dummy-4 </a></li>
                  </ul>
                </li>
    
              </ul>
    
              -->
    
            </li>
    
            <li class="nav-item has-submenu">
              <a class="nav-link first-level developing" href="#"> Professional Growth </a>
    
              <!--
    
              <ul class="submenu collapse">
                <li><a class="nav-link second-level" href="#">Developing-2-1 </a></li>
                <li><a class="nav-link second-level" href="#">Developing-2-2 </a></li>
                <li><a class="nav-link second-level" href="#">Developing-2-3 </a></li>
     
                <li class="nav-item has-submenu">
                  <a class="nav-link second-level" href="#">Dummy </a>
                  <ul class="submenu collapse">
                    <li><a class="nav-link third-level" href="#">Dummy-1 </a></li>
                    <li><a class="nav-link third-level" href="#">Dummy-2 </a></li>
                    <li><a class="nav-link third-level" href="#">Dummy-3</a></li>
                    <li><a class="nav-link third-level" href="#">Dummy-4 </a></li>
                  </ul>
                </li>
    
              </ul>
    
              -->
    
            </li>
    
          </ul>
        </li>
    
        <li id="Retaining" class="nav-item has-submenu main">
          <a class="nav-link top" href="#"> Retaining - <span style="font-size:12px; font-style:italic;">Coming soon!</span> </a>
          <ul class="submenu collapse">
    
            <li class="nav-item has-submenu">
              <a class="nav-link first-level retaining" href="#"> Engaging & Supporting Staff </a>
    
              <!--
    
              <ul class="submenu collapse">
                <li><a class="nav-link second-level" href="#">Retaining-1-1 </a></li>
                <li><a class="nav-link second-level" href="#">Retaining-1-2 </a></li>
                <li><a class="nav-link second-level" href="#">Retaining-1-3 </a></li>
     
                <li class="nav-item has-submenu">
                  <a class="nav-link second-level" href="#">Dummy </a>
                  <ul class="submenu collapse">
                    <li><a class="nav-link third-level" href="#">Dummy-1 </a></li>
                    <li><a class="nav-link third-level" href="#">Dummy-2 </a></li>
                    <li><a class="nav-link third-level" href="#">Dummy-3</a></li>
                    <li><a class="nav-link third-level" href="#">Dummy-4 </a></li>
                  </ul>
                </li>
    
              </ul>
    
              -->
    
            </li>
    
            <li class="nav-item has-submenu">
              <a class="nav-link first-level retaining" href="#"> Managing Staff Transitions </a>
    
              <!--
    
              <ul class="submenu collapse">
                <li><a class="nav-link second-level" href="#">Retaining-2-1</a></li>
                <li><a class="nav-link second-level" href="#">Retaining-2-2 </a></li>
                <li><a class="nav-link second-level" href="#">Retaining-2-3 </a></li>
     
                <li class="nav-item has-submenu">
                  <a class="nav-link second-level" href="#">Dummy </a>
                  <ul class="submenu collapse">
                    <li><a class="nav-link third-level" href="#">Dummy-1 </a></li>
                    <li><a class="nav-link third-level" href="#">Dummy-2 </a></li>
                    <li><a class="nav-link third-level" href="#">Dummy-3</a></li>
                    <li><a class="nav-link third-level" href="#">Dummy-4 </a></li>
                  </ul>
                </li>
    
              </ul>
    
              -->
    
            </li>
    
          </ul>
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
  
              //change both document title and search key into lower case.
              _title = _title.toLowerCase();
              _searchKey = _searchKey.toLowerCase();
  
              if (_title.includes(_searchKey) || item.Tag_01.includes(_searchKey) || item.Tag_02.includes(_searchKey) || item.Tag_03.includes(_searchKey)
                || item.Tag_04.includes(_searchKey) || item.Tag_05.includes(_searchKey) || item.Tag_06.includes(_searchKey)
                || item.Tag_07.includes(_searchKey) || item.Tag_08.includes(_searchKey) || item.Tag_09.includes(_searchKey)
                || item.Tag_10.includes(_searchKey) || item.Tag_11.includes(_searchKey) || item.Tag_12.includes(_searchKey)
                || item.Tag_13.includes(_searchKey) || item.Tag_14.includes(_searchKey) || item.Tag_15.includes(_searchKey)) {
  
                var _ResourceURL = item.ResourceURL
  
  
                //create row for SearchDataTable
                mySearchHtml += `
                              <tr>                            
                                <td style="text-align:left;"><a class="document" href="${_ResourceURL}" target="_blank">${item.Title}</a></td>                      
                              </tr>
                                          `;
  
                // increment SearchReturnCounter by one.
                SearchReturnCounter = SearchReturnCounter + 1;
  
              }
  
            }// end of loop 
  
            console.log("SearchReturnCounter : ", SearchReturnCounter);
  
            // Check either there is no item retrived, or no search key entered on search window
  
            if (SearchReturnCounter === 0 || _searchKey == "") {
  
              console.log("Not even one record gets returned1");
  
              mySearchHtml = `No records found for <b>"`;
              mySearchHtml = mySearchHtml + _searchKey;
              mySearchHtml = mySearchHtml + `"</b>, please try another term to search`;
  
            } else {
  
              console.log("At least one record gets returned");
  
              mySearchHtml += `</tbody>
                            </table>`;
  
              mySearchHtml = `Total of <b>"` + SearchReturnCounter + `"</b>, document/s found for <b>"` + _searchKey + `"</b>.<br>` + mySearchHtml;
  
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
    var apiUrl = siteUrl + "/_api/web/lists/getbytitle('HR-HUB-Resources')/items?$select=Title,ResourceURL,Tag_01,Tag_02,Tag_03,Tag_04,Tag_05,Tag_06,Tag_07,Tag_08,Tag_09,Tag_10,Tag_11,Tag_12,Tag_13,Tag_14,Tag_15";
  
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
  
        console.log('Data coming from sharePoint is ', response);
  
        var items = response.d.results; //items 
  
        console.log('SampleData Items are ', items);
  
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
  
            mySearchHtml += `
            <tr>
            
            <td style="text-align:left;"><a class="document" href="${_ResourceURL}" target="_blank">${item.Title}</a></td>                      
        </tr>
                          `;
  
            SearchReturnCounter=SearchReturnCounter + 1;
          }
  
        }// end of loop 
  
  
  
        console.log("SearchReturnCounter : ",SearchReturnCounter);
  
  
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
          
          mySearchHtml = `Total of <b>"` + SearchReturnCounter + `"</b>, document/s found for <b>"` + _SearchCriteria + `"</b>.<br>` + mySearchHtml;
          
        }
  
        $('#SearchDataTable').html(mySearchHtml);
  
  
  
  
        //end of success area
      },
        function (error) {
          console.error('Ooops error occured during ajax call', error);
          //end of error area
        });
  
  
  }
  
  