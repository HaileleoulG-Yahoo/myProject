// jquery ready start
$(document).ready(function () {
    // jQuery code
  
  
    // footer - START
    document.getElementById('Footer').innerHTML = `
      <footer class="text-center text-lg-start text-muted" style="background: #003349;">  
       
        <section class="">        
          
          <div class="row">         
            <div class="col-md-12 col-lg-2 col-xl-2 mx-auto mb-4">
  
              <img
                src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/Images/CAO-Logo_White_USHR.svg"
                alt="US House of Representatives Logo" style=" width:175px; display: block; margin-left: 6px; margin-right: auto;">
  
            </div>           
  
            <div class="col-md-12 col-lg-10 col-xl-10 mx-auto mb-4" style="display:flex; align-items:center;">
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
  
      <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
     
       <a href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Home.aspx">
         <img id="House-HR-Hub-Logo" style="width:200px;"
           src="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SiteAssets/HR-Hub_Logo-white.png">
       </a>
     
       <!-- <a class="navbar-brand" href="#">Brand</a> -->
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
           <span class="navbar-toggler-icon"></span>
       </button>
     
           <!-- To keep the navbar at center of the page -->
           <div class="collapse navbar-collapse"></div>
     
     
       <div class="collapse navbar-collapse" id="main_nav">
       <ul class="navbar-nav">
     
         <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Hiring.aspx" data-bs-toggle="dropdown">  Hiring  </a>
             <ul id="hiring-dropdown" class="dropdown-menu fade-up">
             <li><a class="dropdown-item" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Hiring.aspx"> Hiring </a></li>
             <hr style="width:100%; margin-left:0; margin-top:0; margin-bottom:0;">
             <li><a class="dropdown-item" href="https://ushouse.sharepoint.com/sites/HumanResources/CAOHRHUB/SitePages/Recruiting&Selecting.aspx"> Recruiting & Selecting </a></li>
             <li><a class="dropdown-item" href="#"> Salary & Benefits - <span style="font-size:15px; font-style:italic;">coming soon!</span> </a></li>
             <li><a class="dropdown-item" href="#"> Onboarding - <span style="font-size:15px; font-style:italic;">coming soon!</span>  </a></li>
             </ul>
         </li>
  
         <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">  Developing - <span style="font-size:15px; font-style:italic;">coming soon!</span> </a>
             <ul id="developing-dropdown" class="dropdown-menu fade-up">
               <li><a class="dropdown-item" href="#"> Developing - <span style="font-size:15px; font-style:italic;">coming soon!</span> </a></li>
               <hr style="width:100%; margin-left:0; margin-top:0; margin-bottom:0;">
             <li><a class="dropdown-item" href="#"> Performance Management - <span style="font-size:15px; font-style:italic;">coming soon!</span></a></li>
             <li><a class="dropdown-item" href="#"> Professional Growth - <span style="font-size:15px; font-style:italic;">coming soon!</span> </a></li>
             </ul>
         </li>
         
         <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">  Retaining - <span style="font-size:15px; font-style:italic;">coming soon!</span> </a>
             <ul id="retaining-dropdown" class="dropdown-menu fade-up">
               <li><a class="dropdown-item" href="#"> Retaining - <span style="font-size:15px; font-style:italic;">coming soon!</span></a></li>
               <hr style="width:100%; margin-left:0; margin-top:0; margin-bottom:0;">
             <li><a class="dropdown-item" href="#"> Engaging & Supporting Staff - <span style="font-size:15px; font-style:italic;">coming soon!</span></a></li>
             <li><a class="dropdown-item" href="#"> Managing Staff Transitions - <span style="font-size:15px; font-style:italic;">coming soon!</span> </a></li>
             </ul>
         </li>
     
         <li class="nav-item icon" style="padding-top:2rem;">
         
         <div class="input-group">
            <input type="search" id="SearchKey" class="form-control rounded" placeholder="Search" aria-label="Search"
              aria-describedby="search-addon" />
            <button type="button" class="btn btn-outline-primary" onclick="searchResource();"><i class="fas fa-search"></i></button>
          </div>
  
         </li>
     
       </ul>
       </div> <!-- navbar-collapse.// -->
      </div> <!-- container-fluid.// -->
     </nav>
      
      `;
    // Top navbar - END
  
  
    // Left navbar - START
  
    var currentUrl = window.location.href;
  
    console.log("Current URL : ", currentUrl);
  
    htmlLeftNavigation = `
      <nav class="sidebar py-2 mb-4">
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
   
    var _searchKey = document.getElementById("SearchKey").value;
  
    var _fullURL = window.location.href;
  
    if (_fullURL.includes('Search.aspx')) {
  
      getListItems()
        .then(function (response) {
          //success area  inputVal
  
          //console.log('Data coming from sharePoint is ', response);
  
          var items = response.d.results; //items 
  
          //console.log('SampleData Items are ', items);
  
          var mySearchHtml = '';
  
          for (var index in items) {
  
            var item = items[index];
  
            var _title = item.Title;
  
            _title = _title.toLowerCase();
            _searchKey = _searchKey.toLowerCase();
  
            if (_title.includes(_searchKey) || item.Tag_01.includes(_searchKey) || item.Tag_02.includes(_searchKey) || item.Tag_03.includes(_searchKey)
              || item.Tag_04.includes(_searchKey) || item.Tag_05.includes(_searchKey) || item.Tag_06.includes(_searchKey)
              || item.Tag_07.includes(_searchKey) || item.Tag_08.includes(_searchKey) || item.Tag_09.includes(_searchKey)
              || item.Tag_10.includes(_searchKey) || item.Tag_11.includes(_searchKey) || item.Tag_12.includes(_searchKey)
              || item.Tag_13.includes(_searchKey) || item.Tag_14.includes(_searchKey) || item.Tag_15.includes(_searchKey)) {
  
              var _ResourceURL = item.ResourceURL
  
              mySearchHtml += `
                              <tr>
                              <td style="text-align:left;">${item.Title}</td>
                              <td style="text-align:left;"><a href="${_ResourceURL}" target="_blank">${item.Title}</a></td>                      
                              </tr>
                          `;
            }
  
          }// end of loop 
  
          $('#SearchDataTable').html(mySearchHtml);
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
  
    getListItems()
      .then(function (response) {
        //success area  inputVal
  
        console.log('Data coming from sharePoint is ', response);
  
        var items = response.d.results; //items 
  
        console.log('SampleData Items are ', items);
  
        var mySearchHtml = '';
  
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
                              <td style="text-align:left;">${item.Title}</td>
                              <td style="text-align:left;"><a href="${_ResourceURL}" target="_blank">${item.Title}</a></td>                      
                              </tr>
                          `;
          }
  
        }// end of loop 
  
        $('#SearchDataTable').html(mySearchHtml);
        //end of success area
      },
        function (error) {
          console.error('Ooops error occured during ajax call', error);
          //end of error area
        });
  
  
  }
  
  