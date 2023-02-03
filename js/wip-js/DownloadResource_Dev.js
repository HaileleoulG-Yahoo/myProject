$(document).ready(function () {

    console.log("_spPageContextInfo: ",_spPageContextInfo);

});


function downloadResource(documentTitle) {

    var DisplayName = _spPageContextInfo.userDisplayName;

    // Check/Confirm the user is not member of hr team
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

    //   console.log("hrTeamLength: ",hrTeamLength);
    //   HRHubResourceDownloadTracker(documentTitle);

      if(hrTeamLength == 0){  

        //console.log(DisplayName, " is not member of hr team");
        checkDuplicateInHRHubResourceDownloadTracker(documentTitle);

     }else {
        //console.log(DisplayName, " is member of hr team");
      }

    },
      function (error) {
        //console.error('Ooops error occured during ajax call - Outer', error);
      }
    );

}

function checkDuplicateInHRHubResourceDownloadTracker(documentTitle) {

    var DisplayName = _spPageContextInfo.userDisplayName;
    var _DispalyName = DisplayName.replace(",", "");

    _splitDispalyName = _DispalyName.split(" ");
    _FullName = _splitDispalyName[1] + " " + _splitDispalyName[0];
    console.log("_FullName: ", _FullName);

    var _pageTitle = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    //console.log("PageTitle : Before : ", _pageTitle);

    // Replace character '&' by '%26', by 'And' incase it exists on the _pageTitle;
    _pageTitle = _pageTitle.replace(/&/g, "And");
    _pageTitle = _pageTitle.replace(/%26/g, "And");
    //console.log("PageTitle : After : ", _pageTitle);

    //get today's date and set it in a 'YYYY-MM-DD' format
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    // get siteUrl to check for duplicate item in the list 
    var siteUrl = _spPageContextInfo.webAbsoluteUrl;

    // oData query to identify a record created today by a user for visiting the same page
    var oDataUrlHRHubResourceDownloadTracker = siteUrl + "/_api/web/lists/getbytitle('ResourcesDownloadTracker')/items?$select=Title,UserName,Created&$filter=(Created ge '" + date + "') and (UserName eq '" + _FullName + "') and (Title eq '" + documentTitle + "')";
    //console.log("oDataUrlHRHubResourceDownloadTracker: ", oDataUrlHRHubResourceDownloadTracker);

    $.ajax({
        url: oDataUrlHRHubResourceDownloadTracker,
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
            createItemHRHubResourceDownloadTracker(documentTitle, _FullName, _pageTitle);

        } else {
            // duplicate item found, creating new item skipped
            // console.log("Duplicate items found");
        }

    },
        function (error) {

            //console.error('Ooops error occured during ajax call - Outer', error);  
        }
    );
};


function createItemHRHubResourceDownloadTracker(documentTitle, _FullName, _pageTitle) {

    var siteUrl = _spPageContextInfo.webAbsoluteUrl;

    $.ajax({
        async: true, // Async by default is set to “true” load the script asynchronously  
        // URL to post data into sharepoint list  
        url: siteUrl + "/_api/web/lists/GetByTitle('ResourcesDownloadTracker')/items",

        method: "POST", //Specifies the operation to create the list item  
        data: JSON.stringify({
            '__metadata': {
                'type': 'SP.Data.ResourcesDownloadTrackerListItem' // it defines the ListEnitityTypeName  
            },
            //Pass the parameters

            'Title': documentTitle,
            'UserName': _FullName,
            'PageTitle': _pageTitle,

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

            // To reload and refresh the page when the system throws error. 
            location.reload();

        }
    })
}


function tagSearches(SearchKey, NumberOfResults) {

    var userName = _spPageContextInfo.userLoginName;

    //indentify the location of '@' and extract the user name
    var _index = userName.indexOf("@");
    var _FullName = userName.substring(0, _index);

    //split full using period character
    var splitFullName = _FullName.split(".");
    var _FirstName = splitFullName[0];
    var _LastName = splitFullName[1];

    //to change the first character of first name and last name to capital letter
    _FirstName = _FirstName.charAt(0).toUpperCase() + _FirstName.slice(1);
    _LastName = _LastName.charAt(0).toUpperCase() + _LastName.slice(1);

    // concatenate the first name and last name to form full name
    _FullName = _FirstName + " " + _LastName;

    //console.log("Full Name : ", _FullName);
    //console.log("SearchKey : ", SearchKey);
    //console.log("NumberOfResults : ", NumberOfResults);

    //get today's date and set it in a 'YYYY-MM-DD' format
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


    // get siteUrl to check for duplicate item in the list 
    var siteUrl = _spPageContextInfo.webAbsoluteUrl;

    // oData query to identify a record created today by a user for visiting the same page
    var oDataUrlTagSearches = siteUrl + "/_api/web/lists/getbytitle('TagSearches')/items?$select=Title,UserName,NumberOfResults&$filter=(Created ge '" + date + "') and (UserName eq '" + _FullName + "') and (Title eq '" + SearchKey + "')";

    $.ajax({
        url: oDataUrlTagSearches,
        type: "GET",
        dataType: "json",
        headers: {
            "accept": "application/json;odata=verbose"
        }
    }).done(function (data) {

        var items = data.d.results;
        var counter = items.length;

        console.log("counter : ", counter);

        if (counter == 0) {

            // duplicate item NOT found, new item TO BE CREATED
            //console.log("NO duplicate items found, READY TO CREATE A NEW ONE !!");
            createItemSearchTags(SearchKey, _FullName, NumberOfResults);

        } else {

            // duplicate item found, creating new item skipped
            //console.log("Duplicate items found");
        }
    },
        function (error) {

            //console.error('Ooops error occured during ajax call - Outer', error);
        }
    );

};


function createItemSearchTags(_SearchKeyParam, _FullNameParam, _NumberOfResults) {

    var siteUrl = _spPageContextInfo.webAbsoluteUrl;

    var oDataUrlTagSearches = siteUrl + "/_api/web/lists/getbytitle('TagSearches')/items?$select=Title,UserName,NumberOfResults";

    $.ajax({
        async: true, // Async by default is set to “true” load the script asynchronously  
        // URL to post data into sharepoint list  
        url: oDataUrlTagSearches,

        method: "POST", //Specifies the operation to create the list item  
        data: JSON.stringify({
            '__metadata': {
                'type': 'SP.Data.TagSearchesListItem' // it defines the ListEnitityTypeName  
            },
            //Pass the parameters

            'Title': _SearchKeyParam,
            'UserName': _FullNameParam,
            'NumberOfResults': _NumberOfResults,

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