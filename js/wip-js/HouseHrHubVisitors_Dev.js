// jquery ready start
$(document).ready(function () {
    // jQuery code
    var PageTitle = jQuery(this).attr('title');

    HrHubVisitors(PageTitle);
  
  }); // jquery end



  function HrHubVisitors(PageTitle){

    //console.log("PageTitle: ",PageTitle);

    var DisplayName = _spPageContextInfo.userDisplayName;

    // OData : to confirm the user is not member of hr team
    var siteUrl = _spPageContextInfo.webAbsoluteUrl;
    var oDataUrlHRTeam = siteUrl + "/_api/web/lists/getbytitle('HR-Team')/items?$select=Name&$filter=Name eq '" + DisplayName + "'";

    $.ajax({
      url: oDataUrlHRTeam,
      type: "GET",
      dataType: "json",
      headers: {
        "accept": "application/json;odata=verbose"
      }
    }).done(function (data) {   
        
      var items = data.d.results;
      var hrTeamLength = items.length;

      //console.log("hrTeamLength: ",hrTeamLength);
      //_HRHubVisitorNewItemCreate(PageTitle,DisplayName);

      if(hrTeamLength == 0){  

        //console.log(DisplayName, " is not member of hr team");
        _HRHubVisitorNewItemCreate(PageTitle,DisplayName);

     }else {

        //console.log(DisplayName, " is member of hr team");

      }   
    },
      function (error) {

        //console.error('Ooops error occured during ajax call - Outer', error);

      }
    );
  }


  function _HRHubVisitorNewItemCreate(PageTitle,DisplayName){

    //Replace '&' character with '%26', if needed, to avoid confilict on OData query 
    //console.log("PageTitle: ",PageTitle); 
    PageTitle = PageTitle.replace("&"," and ");
   
    var _DispalyName = DisplayName.replace(",","");

    _splitDispalyName = _DispalyName.split(" ");
    _DispalyName = _splitDispalyName[1] + " " + _splitDispalyName[0];
    //console.log("_DispalyName: ",_DispalyName);

    //get today's date and set it in a 'YYYY-MM-DD' format
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  
    //get the window width 
    var screenWidth = window.screen.width;
    // console.log("screenWidth : ",screenWidth);

    // get siteUrl to check for duplicate item in the list 
    var siteUrl = _spPageContextInfo.webAbsoluteUrl;

    // oData query to identify a record created today by a user for visiting the same page
     var oDataUrlHRHUBVisitors = siteUrl + "/_api/web/lists/getbytitle('HRHUBVisitors')/items?$select=VisitedPage,UserName,Created&$filter=(Created ge '" + date + "') and (UserName eq '" + _DispalyName + "') and (VisitedPage eq '" + PageTitle + "')";

    $.ajax({
      url: oDataUrlHRHUBVisitors,
      type: "GET",
      dataType: "json",
      headers: {
        "accept": "application/json;odata=verbose"
      }
    }).done(function (data) {

      var items = data.d.results;
      var counter = items.length;

      if (counter == 0) {

        //console.log("NO duplicate items found, READY TO CREATE A NEW ONE !!");
        _createListItemPageVisitor(PageTitle, _DispalyName, screenWidth);

      } else {
        // duplicate item found, creating new item skipped
        //console.log("Duplicate items found");
      }

    },
      function (error) {

        //console.error('Ooops error occured during ajax call - Outer', error);

      }
    ); 

  }


  function _createListItemPageVisitor(_PageTitle, _DispalyName,screenWidth) {

    $.ajax({
        async: true, // Async by default is set to “true” load the script asynchronously  
        // URL to post data into sharepoint list  
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('HRHUBVisitors')/items",
        method: "POST", //Specifies the operation to create the list item  
        data: JSON.stringify({
            '__metadata': {
                'type': 'SP.Data.HRHUBVisitorsListItem' // it defines the ListEnitityTypeName  
            },
            //Pass the parameters

            'VisitedPage': _PageTitle,
            'UserName': _DispalyName,
            'screenWidth':screenWidth

        }),
        headers: {
            "accept": "application/json;odata=verbose", //It defines the Data format   
            "content-type": "application/json;odata=verbose", //It defines the content type as JSON  
            "X-RequestDigest": $("#__REQUESTDIGEST").val() //It gets the digest value   
        },
        success: function (data) {
            //swal("Item created successfully", "success"); // Used sweet alert for success message  
        },
        error: function (error) {
            console.log(JSON.stringify(error));

        }

    })

}




  
  
