// jquery ready start
$(document).ready(function () {
  // jQuery code




  var PageTitle = jQuery(this).attr('title');
  var userName = _spPageContextInfo.userLoginName;


  //Replace '&' character with '%26', if needed, to avoid confilict on OData query  
  PageTitle = PageTitle.replace("&"," and ");

  //indentify the location of '@' and extract the user name
  var _index = userName.indexOf("@");
  var _FullName = userName.substring(0,_index);

  //split full using period character
  var splitFullName = _FullName.split(".");
  var _FirstName = splitFullName[0];
  var _LastName = splitFullName[1];

  //to change the first character of first name and last name to capital letter
  _FirstName=_FirstName.charAt(0).toUpperCase() + _FirstName.slice(1);
  _LastName=_LastName.charAt(0).toUpperCase() + _LastName.slice(1);

  // concatenate the first name and last name to form full name
  _FullName = _FirstName + " " + _LastName;



  //console.log("Full Name : ", _FullName);
  //console.log("Page Title : ", PageTitle);

  //get today's date and set it in a 'YYYY-MM-DD' format
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();


  // get siteUrl to check for duplicate item in the list 
  var siteUrl = _spPageContextInfo.webAbsoluteUrl;


    //get the window width 
    var screenWidth = window.screen.width;
    // console.log("screenWidth : ",screenWidth);

  // oData query to identify a record created today by a user for visiting the same page
  var oDataUrlHRHUBVisitors = siteUrl + "/_api/web/lists/getbytitle('HRHUBVisitors')/items?$select=VisitedPage,UserName,Created&$filter=(Created ge '" + date + "') and (UserName eq '" + _FullName + "') and (VisitedPage eq '" + PageTitle + "')";


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

      if(counter == 0){

          //console.log("NO duplicate items found, READY TO CREATE A NEW ONE !!");
          _createListItemPageVisitor(PageTitle, _FullName,screenWidth);

      }else {
          // duplicate item found, creating new item skipped
          //console.log("Duplicate items found");
      }        

    },
      function (error) {

        //console.error('Ooops error occured during ajax call - Outer', error);

      }
    );
  

}); // jquery end


function _createListItemPageVisitor(_PageTitle, _FullName,screenWidth) {

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
          'UserName': _FullName,
          'screenWidth':screenWidth

      }),
      headers: {
          "accept": "application/json;odata=verbose", //It defines the Data format   
          "content-type": "application/json;odata=verbose", //It defines the content type as JSON  
          "X-RequestDigest": $("#__REQUESTDIGEST").val() //It gets the digest value   
      },
      success: function (data) {
//            swal("Item created successfully", "success"); // Used sweet alert for success message  
      },
      error: function (error) {
          console.log(JSON.stringify(error));

      }

  })

}






