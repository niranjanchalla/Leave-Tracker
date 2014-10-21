var resultString;
var selectedCellId;
var $AppendText;
var menu1ID;
var menu2ID;
var leaveTypeID;
var leaveFromDate;
var leaveFromMonth;
var leaveFromYear;
var employeeID;
var divID;
var leaveID;
function clickpopup(event) {
    divID = selectedCellId;
    var leaveValue = event.firstChild.innerHTML;
    var element = leaveValue.charAt(0);
    var color;
    switch (element) {
        case 'V': color = "f9a369";
            break;
        case 'S': color = "bff969";
            break;
        case 'P': color = "a369f9";
            break;
        case 'M': color = "f4f63d";
            break;
        case 'C': color = "ff00dc";
            break;
        case 'R': color = "fff";
            break;

        default: alert("No Leave Found");
            break;
    }
    if (divID != "") {
        if (element == 'R') {
            element = "";
            $('#' + divID + '.popupCell').html(resultString);
            $('#' + divID + '.popupCell').css('background-color', '#' + color);
            $('#' + divID + '.popupCell').removeClass('valueSet');
            leaveID = $('#' + divID + '.popupCell').attr("role");
            $.post("/Home/Index", { leaveID: leaveID });
        } else {
            $AppendText = element;
            $('#' + divID + '.popupCell').text($AppendText);
            $('#' + divID + '.popupCell').css('background-color', '#' + color);
            $('#' + divID + '.popupCell').css('font-size', '25px');
            $('#' + divID + '.popupCell').addClass('valueSet');
            var dateDetails = divID.substring(1, 3);
            var empID = divID.charAt(0);
            leaveTypeID = event.id;
            leaveFromDate = $('#' + dateDetails + '.date').text();
            leaveFromMonth = $('#' + dateDetails + '.months').text();
            leaveFromYear = $('#' + dateDetails + '.date').attr("title");
            employeeID = $('#' + empID + '.employeeName').attr("title");
            _employeeID = employeeID.substring(11, 16);
            _managerID = employeeID.substring(26, 30);
            $.post("/Home/Index", { leaveTypeID: leaveTypeID, leaveFromDate: leaveFromDate, leaveFromMonth: leaveFromMonth, leaveFromYear: leaveFromYear, _employeeID: _employeeID, _managerID: _managerID });
        }
    }
    return leaveTypeID, leaveFromDate, leaveFromMonth, leaveFromYear, employeeID;

}

function DisplayLeaves(elementid, LeaveName, leaveid) {
    var divID = elementid;
    var element = LeaveName.charAt(0);
    var color;
    switch (element) {
        case 'V': color = "f9a369";
            break;
        case 'S': color = "bff969";
            break;
        case 'P': color = "a369f9";
            break;
        case 'M': color = "f4f63d";
            break;
        case 'C': color = "ff00dc";
            break;
        default: alert("No Leave Found");
            break;
    }
    if (divID != "") {

        $AppendText = element;
        $('#' + divID + '.popupCell').text($AppendText);
        $('#' + divID + '.popupCell').css('background-color', '#' + color);
        $('#' + divID + '.popupCell').css('font-size', '25px');
        $('#' + divID + '.popupCell').addClass('valueSet');
        $('#' + divID + '.popupCell').attr("title", "" + LeaveName + "");
        $('#' + divID + '.popupCell').attr("role", "" + leaveid + "");
    }

    return true;
}

function Leavecounts(Lid) {
    var LeaveCountID = Lid;
    var count = 0;

    switch (LeaveCountID) {
        case LeaveCountID:
            for (var m = 0; m <= 30; m++) {
                var id = $('.cell').attr("id").charAt(2) + LeaveCountID + m;
                if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                    count = count + 1;
                }
                $('#' + LeaveCountID + '.leavecount').text(count);
            }
            break;
        default: alert("Employee Leave Not Found");
            break;
    }
}

function DailyLeavecounts(dLid) {
    var DailyLeaveCountID = dLid;
    var Dailycount = 0;

    switch (DailyLeaveCountID) {
        case DailyLeaveCountID:
            for (var m = 0; m <= 9; m++) {
                var id = $('.cell').attr("id").charAt(2) + m + DailyLeaveCountID;
                if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                    Dailycount = Dailycount + 1;
                }
                $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
            }
            break;
        default: alert("Day Not Found");
            break;
    }
}

function setDateRange(SetDate) {
    $('#Days').html(function () {
        currdate = new Date(SetDate);
        var startingDate = new Date(currdate);
        startingDate.setDate(startingDate.getDate() - 15);
        var endingDate = new Date(currdate);
        endingDate.setDate(endingDate.getDate() + 15);
        var result = "";
        var date = new Date(startingDate);
        var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";
        var n = weekday[date.getDay()];
        var incr = 0;
        for (date = startingDate; date <= endingDate; date.setDate(date.getDate() + 1)) {
            n = weekday[date.getDay()];
            for (var j = 0; j < 1; j++) {
                if (n == "Sat" || n == "Sun") {
                    result = result + "<div id= '" + incr + "' class='headerCellHoliday'>" + n.toUpperCase() + "</div>";
                }
                else {
                    result = result + "<div id= '" + incr + "' class='headerCell'>" + n.toUpperCase() + "</div>";
                }
                incr++;
            }
        }
        return result;
    });
    $('#Dates').html(function () {
        var currdate = new Date(SetDate);
        var startingDate = new Date(currdate);
        startingDate.setDate(startingDate.getDate() - 15);
        var endingDate = new Date(currdate);
        endingDate.setDate(endingDate.getDate() + 15);
        var date = new Date(startingDate);
        var result = "";
        var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";
        var n = weekday[date.getDay()];
        var incr = 0;
        for (date = startingDate; date <= endingDate; date.setDate(date.getDate() + 1)) {
            n = weekday[date.getDay()];
            for (var j = 0; j < 1; j++) {
                if (n == "Sat" || n == "Sun") {
                    result = result + "<div id= '" + incr + "' class='headerCellHoliday date' title='" + date.getFullYear() + "'>" + date.getDate() + "</div>";
                }
                else {
                    result = result + "<div id='" + incr + "' class='headerCell date' title='" + date.getFullYear() + "'>" + date.getDate() + "</div>";
                }
                incr++;
            }
        }
        return result;
    });
    $('#Months').html(function () {
        var currdate = new Date(SetDate);
        var startingDate = new Date(currdate);
        startingDate.setDate(startingDate.getDate() - 15);
        var endingDate = new Date(currdate);
        endingDate.setDate(endingDate.getDate() + 15);
        var date = new Date(startingDate);
        var result = "";
        var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";
        var n = weekday[date.getDay()];
        var month = new Array(12);
        month[0] = "Jan";
        month[1] = "Feb";
        month[2] = "Mar";
        month[3] = "Apr";
        month[4] = "May";
        month[5] = "Jun";
        month[6] = "Jul";
        month[7] = "Aug";
        month[8] = "Sep";
        month[9] = "Oct";
        month[10] = "Nov";
        month[11] = "Dec";
        var m = month[date.getMonth()];
        var monthIncr = 0;
        for (date = startingDate; date <= endingDate; date.setDate(date.getDate() + 1)) {
            n = weekday[date.getDay()];
            m = month[date.getMonth()];
            for (var j = 0; j < 1; j++) {
                if (n == "Sat" || n == "Sun") {
                    result = result + "<div id='" + monthIncr + "' class='headerCellHoliday months'>" + m.toUpperCase() + "</div>";
                }
                else {
                    result = result + "<div id='" + monthIncr + "' class='headerCell months'>" + m.toUpperCase() + "</div>";
                }
                monthIncr++;
            }
        }
        return result;
    });
}

function disableHolidays() {
    for (var i = 0; i < 31; i++) {
        if ($('#' + i + '.headerCellHoliday').text().substring(3, 6) == 'SAT' || $('#' + i + '.headerCellHoliday').text().substring(3, 6) == 'SUN') {
            for (var k = 0; k < 10; k++) {
                $('#' + k + i + '.popupCell').unbind("click");
            }
        }
    }
}

function resetGrid() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 31; j++) {
            $('#' + i + j + '.popupCell').text("");
            $('#' + i + j + '.popupCell').removeClass("valueSet");
            $('#' + i + j + '.popupCell').css('background-color', '#fff');
            $('#' + i + j + '.popupCell').bind("click");
        }
    }

}

function setCurrDateCss() {
    for (var l = 15; l <= 915; l = l + 100) {
        if (l == 15) {
            var id = $('.popupCell').attr("id").charAt(2) + 0 + l;
        } else {
            var id = $('.popupCell').attr("id").charAt(2) + l;
        }
        $('#' + id + '.popupCell').css('background-color', '#69bff9');
    }
}

$(document).ready(function () {
    setDateRange(new Date());
    $('#inputDate').change(function () {
        if (inputDate.value == "") {
            setDateRange(new Date())
        } else {
            setDateRange(inputDate.value)
        }
        $.post("/Home/Index", { date: $('#inputDate').val() });
        resetGrid();
        disableHolidays();
    });
    resultString = "<div class='dropdown theme-dropdown clearfix'><ul id='LeaveMenu' class='dropdown-menu' role='menu' aria-labelledby='dropdownMenu1'><li role='presentation' id ='1' onmousedown='clickpopup(this);'><a role='menuitem' tabindex='-1' href='#' >Vacation Leave </a></li><li role='presentation' id = '2' onmousedown='clickpopup(this);'><a role='menuitem' tabindex='-1' href='#'>Sick Leave</a></li><li role='presentation' id = '3' onmousedown='clickpopup(this);'><a role='menuitem' tabindex='-1' href='#'>Personal Leave</a></li><li role='presentation' id = '4' onmousedown='clickpopup(this);'><a role='menuitem' tabindex='-1' href='#'>Marriage Leave</a></li><li role='presentation' id = '5' onmousedown='clickpopup(this);'><a role='menuitem' tabindex='-1' href='#'>Custom Leave</a></li><li role='presentation' id = '6' onmousedown='clickpopup(this);'><a role='menuitem' tabindex='-1' href='#'>Remove Selection</a></li></ul></div>";
    $('.popupCell').bind('click', function () {
        selectedCellId = this.id;
        var self = this;
        $('#' + selectedCellId + '.popupCell').html(resultString);
    });
    setCurrDateCss();
    var getId = $('.dailyLeaves').attr("id").charAt(2) + 15;
    if (getId == 15) {
        $('#' + getId + '.dailyLeaves').css('background-color', '#69bff9');
    }
    disableHolidays();
});

$(document).mouseup(function () {
    $('.dropdown').slideUp();
    setCurrDateCss();
});

$(document).mousemove(function () {

    for (var e = 0; e < 10; e++) {
        var LeaveCellID = $('.leavecount').attr("id").charAt(1) + e;
        Leavecounts(LeaveCellID);
    }
    for (var f = 0; f <= 30; f++) {
        if (f >= 10) {
            var dayLeavesID = $('.dailyLeaves').attr("id").charAt(2) + f;
        } else {
            var dayLeavesID = $('.dailyLeaves').attr("id").charAt(1) + f;
        }
        DailyLeavecounts(dayLeavesID);
    }

});

