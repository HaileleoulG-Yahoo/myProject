// jquery ready start
$(document).ready(function () {
    // jQuery code


    var siteurl = _spPageContextInfo.webAbsoluteUrl;
    $.ajax({
        url: siteurl + "/_api/web/lists/getbytitle('HRHUBAnalytics')/items",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },

        success: function (data) {

            var items = data.d.results;


            for (var index in items) {


                _VisitedPage = items[index].Title;

                //console.log("_VisitedPage : ", _VisitedPage);

                getTotalVisitors(_VisitedPage);
                getUniqueVisitors(_VisitedPage);

            }

        },
        error: function (data) {
            alert("Error: " + data);
        }
    });




}); // jquery end


function getTotalVisitors(_VisitedPageParameter) {


    var siteurl = _spPageContextInfo.webAbsoluteUrl;

    oDataVisitedPage = siteurl + "/_api/web/lists/getbytitle('HRHUBVisitors')/items?$filter=VisitedPage eq '" + _VisitedPageParameter + "'&$top=5000";

    $.ajax({
        
        url: oDataVisitedPage,
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },

        success: function (data) {

            var _count_Total_Visitors = data.d.results.length;

            console.log(_VisitedPageParameter, " : Total Visitiors : ", _count_Total_Visitors);


        },
        error: function (data) {
            alert("Error: " + data);
        }
    });


}



function getUniqueVisitors(_VisitedPageParameter) {

    var siteurl = _spPageContextInfo.webAbsoluteUrl;

    oDataVisitedPage = siteurl + "/_api/web/lists/getbytitle('HRHUBVisitors')/items?$select=VisitedPage,UserName&$filter=VisitedPage eq '" + _VisitedPageParameter + "'&$top=5000&$orderby=UserName";

    $.ajax({
        url: oDataVisitedPage,
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },

        success: function (data) {

            var items = data.d.results;

            var _count_Unique = 0;


            var current_User = "";

            for (i = 0; i < data.d.results.length; i++) {

                if (items[i].UserName != current_User) {
                    _count_Unique++;
                    current_User = items[i].UserName;
                }

            }

            console.log(_VisitedPageParameter, " Unique Visitors : ", _count_Unique);

        },
        error: function (data) {
            alert("Error: " + data);
        }
    });


}



















