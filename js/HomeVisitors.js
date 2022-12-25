// jquery ready start
$(document).ready(function () {
    // jQuery code
  
  
    var _PageTitle = "Home";

    var _FullName = "Haileleoul Borou"; 
  

  
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
                  'UserName': _FullName
        
              }),
              headers: {
                  "accept": "application/json;odata=verbose", //It defines the Data format   
                  "content-type": "application/json;odata=verbose", //It defines the content type as JSON  
                  "X-RequestDigest": $("#__REQUESTDIGEST").val() //It gets the digest value   
              },
              success: function (data) {
                    //swal("Item created successfully", "success"); // Used sweet alert for success message  
                    console.log("Item created successfully!!");
              },
              error: function (error) {
                  console.log(JSON.stringify(error));
        
              }
        
          })
  
  
  

    
  
  }); // jquery end
  
  
  
  
  
  
  
  
  