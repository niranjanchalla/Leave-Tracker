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
            leaveID = $('#' + divID + '.popupCell').attr("title");
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
            _employeeID = employeeID.substring(0, 4);
            _managerID = employeeID.substring(5, 9);
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
        $('#' + divID + '.popupCell').attr("title", "" + leaveid + "");
    }

    return true;
}

function Leavecounts(Lid) {
    var LeaveCountID = Lid;
    var count = 0;
    if (LeaveCountID == 0) {
        for (var m = 0; m <= 30; m++) {
            var id = $('.cell').attr("id").charAt(2) + 0 + m;
            if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                count = count + 1;
            }
            $('#' + LeaveCountID + '.leavecount').text(count);
        }
    }
    else {
        if (LeaveCountID == 1) {
            for (var m = 0; m <= 30; m++) {
                var id = $('.cell').attr("id").charAt(2) + 1 + m;
                if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                    count = count + 1;
                }
                $('#' + LeaveCountID + '.leavecount').text(count);
            }
        } else {
            if (LeaveCountID == 2) {
                for (var m = 0; m <= 30; m++) {
                    var id = $('.cell').attr("id").charAt(2) + 2 + m;
                    if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                        count = count + 1;
                    }
                    $('#' + LeaveCountID + '.leavecount').text(count);
                }
            } else {
                if (LeaveCountID == 3) {
                    for (var m = 0; m <= 30; m++) {
                        var id = $('.cell').attr("id").charAt(2) + 3 + m;
                        if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                            count = count + 1;
                        }
                        $('#' + LeaveCountID + '.leavecount').text(count);
                    }
                } else {
                    if (LeaveCountID == 4) {
                        for (var m = 0; m <= 30; m++) {
                            var id = $('.cell').attr("id").charAt(2) + 4 + m;
                            if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                count = count + 1;
                            }
                            $('#' + LeaveCountID + '.leavecount').text(count);
                        }
                    } else {
                        if (LeaveCountID == 5) {
                            for (var m = 0; m <= 30; m++) {
                                var id = $('.cell').attr("id").charAt(2) + 5 + m;
                                if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                    count = count + 1;
                                }
                                $('#' + LeaveCountID + '.leavecount').text(count);
                            }
                        } else {
                            if (LeaveCountID == 6) {
                                for (var m = 0; m <= 30; m++) {
                                    var id = $('.cell').attr("id").charAt(2) + 6 + m;
                                    if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                        count = count + 1;
                                    }
                                    $('#' + LeaveCountID + '.leavecount').text(count);
                                }
                            } else {
                                if (LeaveCountID == 7) {
                                    for (var m = 0; m <= 30; m++) {
                                        var id = $('.cell').attr("id").charAt(2) + 7 + m;
                                        if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                            count = count + 1;
                                        }
                                        $('#' + LeaveCountID + '.leavecount').text(count);
                                    }
                                } else {
                                    if (LeaveCountID == 8) {
                                        for (var m = 0; m <= 30; m++) {
                                            var id = $('.cell').attr("id").charAt(2) + 8 + m;
                                            if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                count = count + 1;
                                            }
                                            $('#' + LeaveCountID + '.leavecount').text(count);
                                        }
                                    } else {
                                        if (LeaveCountID == 9) {
                                            for (var m = 0; m <= 30; m++) {
                                                var id = $('.cell').attr("id").charAt(2) + 9 + m;
                                                if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                    count = count + 1;
                                                }
                                                $('#' + LeaveCountID + '.leavecount').text(count);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function DailyLeavecounts(dLid) {
    var DailyLeaveCountID = dLid;
    var Dailycount = 0;
    if (DailyLeaveCountID == 0) {
        for (var m = 0; m <= 9; m++) {
            var id = $('.cell').attr("id").charAt(2) + m + 0;
            if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                Dailycount = Dailycount + 1;
            }
            $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
        }
    } else {
        if (DailyLeaveCountID == 1) {
            for (var m = 0; m <= 9; m++) {
                var id = $('.cell').attr("id").charAt(2) + m + 1;
                if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                    Dailycount = Dailycount + 1;
                }
                $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
            }
        } else {
            if (DailyLeaveCountID == 2) {
                for (var m = 0; m <= 9; m++) {
                    var id = $('.cell').attr("id").charAt(2) + m + 2;
                    if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                        Dailycount = Dailycount + 1;
                    }
                    $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                }
            } else {
                if (DailyLeaveCountID == 3) {
                    for (var m = 0; m <= 9; m++) {
                        var id = $('.cell').attr("id").charAt(2) + m + 3;
                        if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                            Dailycount = Dailycount + 1;
                        }
                        $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                    }
                } else {
                    if (DailyLeaveCountID == 4) {
                        for (var m = 0; m <= 9; m++) {
                            var id = $('.cell').attr("id").charAt(2) + m + 4;
                            if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                Dailycount = Dailycount + 1;
                            }
                            $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                        }
                    } else {
                        if (DailyLeaveCountID == 5) {
                            for (var m = 0; m <= 9; m++) {
                                var id = $('.cell').attr("id").charAt(2) + m + 5;
                                if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                    Dailycount = Dailycount + 1;
                                }
                                $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                            }
                        } else {
                            if (DailyLeaveCountID == 6) {
                                for (var m = 0; m <= 9; m++) {
                                    var id = $('.cell').attr("id").charAt(2) + m + 6;
                                    if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                        Dailycount = Dailycount + 1;
                                    }
                                    $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                }
                            } else {
                                if (DailyLeaveCountID == 7) {
                                    for (var m = 0; m <= 9; m++) {
                                        var id = $('.cell').attr("id").charAt(2) + m + 7;
                                        if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                            Dailycount = Dailycount + 1;
                                        }
                                        $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                    }
                                } else {
                                    if (DailyLeaveCountID == 8) {
                                        for (var m = 0; m <= 9; m++) {
                                            var id = $('.cell').attr("id").charAt(2) + m + 8;
                                            if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                Dailycount = Dailycount + 1;
                                            }
                                            $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                        }
                                    } else {
                                        if (DailyLeaveCountID == 9) {
                                            for (var m = 0; m <= 9; m++) {
                                                var id = $('.cell').attr("id").charAt(2) + m + 9;
                                                if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                    Dailycount = Dailycount + 1;
                                                }
                                                $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                            }
                                        } else {
                                            if (DailyLeaveCountID == 10) {
                                                for (var m = 0; m <= 9; m++) {
                                                    var id = $('.cell').attr("id").charAt(2) + m + 10;
                                                    if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                        Dailycount = Dailycount + 1;
                                                    }
                                                    $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                }
                                            } else {
                                                if (DailyLeaveCountID == 11) {
                                                    for (var m = 0; m <= 9; m++) {
                                                        var id = $('.cell').attr("id").charAt(2) + m + 11;
                                                        if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                            Dailycount = Dailycount + 1;
                                                        }
                                                        $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                    }
                                                } else {
                                                    if (DailyLeaveCountID == 12) {
                                                        for (var m = 0; m <= 9; m++) {
                                                            var id = $('.cell').attr("id").charAt(2) + m + 12;
                                                            if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                Dailycount = Dailycount + 1;
                                                            }
                                                            $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                        }
                                                    } else {
                                                        if (DailyLeaveCountID == 13) {
                                                            for (var m = 0; m <= 9; m++) {
                                                                var id = $('.cell').attr("id").charAt(2) + m + 13;
                                                                if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                    Dailycount = Dailycount + 1;
                                                                }
                                                                $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                            }
                                                        } else {
                                                            if (DailyLeaveCountID == 14) {
                                                                for (var m = 0; m <= 9; m++) {
                                                                    var id = $('.cell').attr("id").charAt(2) + m + 14;
                                                                    if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                        Dailycount = Dailycount + 1;
                                                                    }
                                                                    $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                }
                                                            } else {
                                                                if (DailyLeaveCountID == 15) {
                                                                    for (var m = 0; m <= 9; m++) {
                                                                        var id = $('.cell').attr("id").charAt(2) + m + 15;
                                                                        if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                            Dailycount = Dailycount + 1;
                                                                        }
                                                                        $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                    }
                                                                } else {
                                                                    if (DailyLeaveCountID == 16) {
                                                                        for (var m = 0; m <= 9; m++) {
                                                                            var id = $('.cell').attr("id").charAt(2) + m + 16;
                                                                            if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                Dailycount = Dailycount + 1;
                                                                            }
                                                                            $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                        }
                                                                    } else {
                                                                        if (DailyLeaveCountID == 17) {
                                                                            for (var m = 0; m <= 9; m++) {
                                                                                var id = $('.cell').attr("id").charAt(2) + m + 17;
                                                                                if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                    Dailycount = Dailycount + 1;
                                                                                }
                                                                                $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                            }
                                                                        } else {
                                                                            if (DailyLeaveCountID == 18) {
                                                                                for (var m = 0; m <= 9; m++) {
                                                                                    var id = $('.cell').attr("id").charAt(2) + m + 18;
                                                                                    if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                        Dailycount = Dailycount + 1;
                                                                                    }
                                                                                    $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                                }
                                                                            } else {
                                                                                if (DailyLeaveCountID == 19) {
                                                                                    for (var m = 0; m <= 9; m++) {
                                                                                        var id = $('.cell').attr("id").charAt(2) + m + 19;
                                                                                        if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                            Dailycount = Dailycount + 1;
                                                                                        }
                                                                                        $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                                    }
                                                                                } else {
                                                                                    if (DailyLeaveCountID == 20) {
                                                                                        for (var m = 0; m <= 9; m++) {
                                                                                            var id = $('.cell').attr("id").charAt(2) + m + 20;
                                                                                            if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                                Dailycount = Dailycount + 1;
                                                                                            }
                                                                                            $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                                        }
                                                                                    } else {
                                                                                        if (DailyLeaveCountID == 21) {
                                                                                            for (var m = 0; m <= 9; m++) {
                                                                                                var id = $('.cell').attr("id").charAt(2) + m + 21;
                                                                                                if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                                    Dailycount = Dailycount + 1;
                                                                                                }
                                                                                                $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                                            }
                                                                                        } else {
                                                                                            if (DailyLeaveCountID == 22) {
                                                                                                for (var m = 0; m <= 9; m++) {
                                                                                                    var id = $('.cell').attr("id").charAt(2) + m + 22;
                                                                                                    if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                                        Dailycount = Dailycount + 1;
                                                                                                    }
                                                                                                    $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                                                }
                                                                                            } else {
                                                                                                if (DailyLeaveCountID == 23) {
                                                                                                    for (var m = 0; m <= 9; m++) {
                                                                                                        var id = $('.cell').attr("id").charAt(2) + m + 23;
                                                                                                        if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                                            Dailycount = Dailycount + 1;
                                                                                                        }
                                                                                                        $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                                                    }
                                                                                                } else {
                                                                                                    if (DailyLeaveCountID == 24) {
                                                                                                        for (var m = 0; m <= 9; m++) {
                                                                                                            var id = $('.cell').attr("id").charAt(2) + m + 24;
                                                                                                            if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                                                Dailycount = Dailycount + 1;
                                                                                                            }
                                                                                                            $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                                                        }
                                                                                                    } else {
                                                                                                        if (DailyLeaveCountID == 25) {
                                                                                                            for (var m = 0; m <= 9; m++) {
                                                                                                                var id = $('.cell').attr("id").charAt(2) + m + 25;
                                                                                                                if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                                                    Dailycount = Dailycount + 1;
                                                                                                                }
                                                                                                                $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (DailyLeaveCountID == 26) {
                                                                                                                for (var m = 0; m <= 9; m++) {
                                                                                                                    var id = $('.cell').attr("id").charAt(2) + m + 26;
                                                                                                                    if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                                                        Dailycount = Dailycount + 1;
                                                                                                                    }
                                                                                                                    $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                                                                }
                                                                                                            } else {
                                                                                                                if (DailyLeaveCountID == 27) {
                                                                                                                    for (var m = 0; m <= 9; m++) {
                                                                                                                        var id = $('.cell').attr("id").charAt(2) + m + 27;
                                                                                                                        if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                                                            Dailycount = Dailycount + 1;
                                                                                                                        }
                                                                                                                        $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                                                                    }
                                                                                                                } else {
                                                                                                                    if (DailyLeaveCountID == 28) {
                                                                                                                        for (var m = 0; m <= 9; m++) {
                                                                                                                            var id = $('.cell').attr("id").charAt(2) + m + 28;
                                                                                                                            if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                                                                Dailycount = Dailycount + 1;
                                                                                                                            }
                                                                                                                            $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                                                                        }
                                                                                                                    } else {
                                                                                                                        if (DailyLeaveCountID == 29) {
                                                                                                                            for (var m = 0; m <= 9; m++) {
                                                                                                                                var id = $('.cell').attr("id").charAt(2) + m + 29;
                                                                                                                                if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                                                                    Dailycount = Dailycount + 1;
                                                                                                                                }
                                                                                                                                $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                                                                            }
                                                                                                                        } else {
                                                                                                                            if (DailyLeaveCountID == 30) {
                                                                                                                                for (var m = 0; m <= 9; m++) {
                                                                                                                                    var id = $('.cell').attr("id").charAt(2) + m + 30;
                                                                                                                                    if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                                                                        Dailycount = Dailycount + 1;
                                                                                                                                    }
                                                                                                                                    $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
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

$(document).ready(function () {
    setDateRange(new Date());
    $('#inputDate').change(function () {
        if (inputDate.value == "") {
            setDateRange(new Date())
        } else {
            setDateRange(inputDate.value)
        }
        $.post("/Home/Index", { date: $('#inputDate').val() });
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 31; j++) {
                $('#' + i + j + '.popupCell').text("");
                $('#' + i + j + '.popupCell').removeClass("valueSet");
                $('#' + i + j + '.popupCell').css('background-color', '#fff');
            }
        }
        for (var l = 15; l <= 915; l = l + 100) {
            if (l == 15) {
                var id = $('.popupCell').attr("id").charAt(2) + 0 + l;
            } else {
                var id = $('.popupCell').attr("id").charAt(2) + l;
            }
            $('#' + id + '.popupCell').css('background-color', '#69bff9');
        }
    });
    resultString = "<div class='dropdown theme-dropdown clearfix'><ul id='LeaveMenu' class='dropdown-menu' role='menu' aria-labelledby='dropdownMenu1'><li role='presentation' id ='1' onmousedown='clickpopup(this);'><a role='menuitem' tabindex='-1' href='#' >Vacation Leave </a></li><li role='presentation' id = '2' onmousedown='clickpopup(this);'><a role='menuitem' tabindex='-1' href='#'>Sick Leave</a></li><li role='presentation' id = '3' onmousedown='clickpopup(this);'><a role='menuitem' tabindex='-1' href='#'>Personal Leave</a></li><li role='presentation' id = '4' onmousedown='clickpopup(this);'><a role='menuitem' tabindex='-1' href='#'>Marriage Leave</a></li><li role='presentation' id = '5' onmousedown='clickpopup(this);'><a role='menuitem' tabindex='-1' href='#'>Custom Leave</a></li><li role='presentation' id = '6' onmousedown='clickpopup(this);'><a role='menuitem' tabindex='-1' href='#'>Remove Selection</a></li></ul></div>";
    $('.popupCell').bind('click', function () {
        selectedCellId = this.id;
        var self = this;
        $('#' + selectedCellId + '.popupCell').html(resultString);
    });
    for (var l = 15; l <= 915; l = l + 100) {
        if (l == 15) {
            var id = $('.popupCell').attr("id").charAt(2) + 0 + l;
        } else {
            var id = $('.popupCell').attr("id").charAt(2) + l;
        }
        $('#' + id + '.popupCell').css('background-color', '#69bff9');
    }
    var getId = $('.dailyLeaves').attr("id").charAt(2) + 15;
    if (getId == 15) {
        $('#' + getId + '.dailyLeaves').css('background-color', '#69bff9');
    }
});

$(document).mouseup(function () {
    $('.dropdown').slideUp();
    for (var l = 15; l < 915; l = l + 100) {
        if (l == 15) {
            var id = $('.popupCell').attr("id").charAt(2) + 0 + l;
        } else {
            var id = $('.popupCell').attr("id").charAt(2) + l;
        }
        $('#' + id + '.popupCell').css('background-color', '#69bff9');
    }

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

