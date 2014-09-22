
webshims.setOptions('waitReady', false);
webshims.setOptions('forms-ext', { types: 'date' });
webshims.polyfill('forms forms-ext');
var resultString;
var selectedCellId;
var $AppendText;
var menu1ID;
var menu2ID;
function clickpopup(event) {
    //alert(selectedCellId);
    var divID = selectedCellId;
    //alert(divID);
    var innerValue = event.firstChild.innerHTML;
    // alert(innerValue);
    var element = innerValue.charAt(0);
    // alert(element);
    var color;
    if (element == 'V') {
        color = "313ae5";
    } else {
        if (element == 'S') {
            color = "34a52b";
        }
        else {
            if (element == 'P') {
                color = "ff2187";
            }
            else {
                if (element == 'M') {
                    color = "f4f63d";
                }
                else {
                    if (element == 'C') {
                        color = "ff00dc";
                    }


                }
            }
        }
    }
    if (divID != "") {
        //alert($('#'+divID).html());
        if (element == 'R') {
            element = "";
            color = "ffc9e9";
            // $AppendText = '<div style="font-weight: bold;border: 0px solid #000;font-size: 2.0em;text-align:center;">' + element + '</div>';
            $('#' + divID + '.popupCell').html(resultString);
            $('#' + divID + '.popupCell').css('background-color', '#' + color);
            $('#' + divID + '.popupCell').removeClass('valueSet');
        }
        else {
            $AppendText = '<div style="font-weight: bold;border: 0px solid #000;font-size: 2.0em;text-align:center;">' + element + '</div>';
            $('#' + divID + '.popupCell').html($AppendText);
            $('#' + divID + '.popupCell').css('background-color', '#' + color);
            $('#' + divID + '.popupCell').addClass('valueSet');


        }
    }
    //alert(selectedCellId);
    //var x = selectedCellId.replace('LeaveCell ', '');
    //var splits = x.split(',');
    //employeeRowNo = splits[0];
    //$('#totalLeaveCount ' + employeeRowNo).html(GetLeavesCountByEmployee(employeeRowNo));
    return event.id;
}

function Leavecounts(Lid) {
    var LeaveCountID = Lid;
    var count = 0;

    if (LeaveCountID == 0) {

        for (var m = 0; m <= 30; m++) {
            if (m >= 10) {
                var id = $('.cell').attr("id").charAt(2) + m;
            } else {
                var id = $('.cell').attr("id").charAt(1) + m;
            }

            if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                count = count + 1;
                //alert(count);
            }
            $('#' + LeaveCountID + '.leavecount').text(count);
        }
    }
    else {
        if (LeaveCountID == 1) {

            for (var m = 31; m <= 61; m++) {

                var id = $('.cell').attr("id").charAt(2) + m;


                if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                    count = count + 1;
                    //alert(count);
                }
                $('#' + LeaveCountID + '.leavecount').text(count);
            }

        } else {
            if (LeaveCountID == 2) {

                for (var m = 62; m <= 92; m++) {

                    var id = $('.cell').attr("id").charAt(2) + m;


                    if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                        count = count + 1;
                        //alert(count);
                    }
                    $('#' + LeaveCountID + '.leavecount').text(count);
                }

            } else {
                if (LeaveCountID == 3) {

                    for (var m = 93; m <= 123; m++) {

                        var id = $('.cell').attr("id").charAt(2) + m;


                        if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                            count = count + 1;
                            //alert(count);
                        }
                        $('#' + LeaveCountID + '.leavecount').text(count);
                    }

                } else {
                    if (LeaveCountID == 4) {

                        for (var m = 124; m <= 154; m++) {

                            var id = $('.cell').attr("id").charAt(2) + m;


                            if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                count = count + 1;
                                //alert(count);
                            }
                            $('#' + LeaveCountID + '.leavecount').text(count);
                        }

                    } else {
                        if (LeaveCountID == 5) {

                            for (var m = 155; m <= 185; m++) {

                                var id = $('.cell').attr("id").charAt(2) + m;


                                if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                    count = count + 1;
                                    //alert(count);
                                }
                                $('#' + LeaveCountID + '.leavecount').text(count);
                            }

                        } else {
                            if (LeaveCountID == 6) {

                                for (var m = 186; m <= 216; m++) {

                                    var id = $('.cell').attr("id").charAt(2) + m;

                                    if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                        count = count + 1;
                                        //alert(count);
                                    }
                                    $('#' + LeaveCountID + '.leavecount').text(count);
                                }

                            } else {
                                if (LeaveCountID == 7) {

                                    for (var m = 217; m <= 247; m++) {

                                        var id = $('.cell').attr("id").charAt(2) + m;

                                        if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                            count = count + 1;
                                            //alert(count);
                                        }
                                        $('#' + LeaveCountID + '.leavecount').text(count);
                                    }

                                } else {
                                    if (LeaveCountID == 8) {

                                        for (var m = 248; m <= 278; m++) {

                                            var id = $('.cell').attr("id").charAt(2) + m;

                                            if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                count = count + 1;
                                                //alert(count);
                                            }
                                            $('#' + LeaveCountID + '.leavecount').text(count);
                                        }

                                    } else {
                                        if (LeaveCountID == 9) {

                                            for (var m = 279; m <= 309; m++) {

                                                var id = $('.cell').attr("id").charAt(2) + m;

                                                if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                    count = count + 1;
                                                    //alert(count);
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
        for (var m = 0; m <= 279; m = m + 31) {
            if (m == 0) {
                var id = $('.cell').attr("id").charAt(1) + m;
            } else {
                var id = $('.cell').attr("id").charAt(2) + m;
            }

            if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                Dailycount = Dailycount + 1;
                //alert(count);

            }
            $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
        }
    } else {
        if (DailyLeaveCountID == 1) {

            for (var m = 1; m <= 280; m = m + 31) {
                if (m == 1) {
                    var id = $('.cell').attr("id").charAt(1) + m;
                } else {
                    var id = $('.cell').attr("id").charAt(2) + m;
                }

                if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                    Dailycount = Dailycount + 1;
                    //alert(count);

                }
                $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
            }
        } else {
            if (DailyLeaveCountID == 2) {

                for (var m = 2; m <= 281; m = m + 31) {
                    if (m == 2) {
                        var id = $('.cell').attr("id").charAt(1) + m;
                    } else {
                        var id = $('.cell').attr("id").charAt(2) + m;
                    }

                    if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                        Dailycount = Dailycount + 1;
                        //alert(count);

                    }
                    $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                }
            } else {
                if (DailyLeaveCountID == 3) {

                    for (var m = 3; m <= 282; m = m + 31) {
                        if (m == 3) {
                            var id = $('.cell').attr("id").charAt(1) + m;
                        } else {
                            var id = $('.cell').attr("id").charAt(2) + m;
                        }

                        if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                            Dailycount = Dailycount + 1;
                            //alert(count);

                        }
                        $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                    }
                } else {
                    if (DailyLeaveCountID == 4) {

                        for (var m = 4; m <= 283; m = m + 31) {
                            if (m == 4) {
                                var id = $('.cell').attr("id").charAt(1) + m;
                            } else {
                                var id = $('.cell').attr("id").charAt(2) + m;
                            }

                            if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                Dailycount = Dailycount + 1;
                                //alert(count);

                            }
                            $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                        }
                    } else {
                        if (DailyLeaveCountID == 5) {

                            for (var m = 5; m <= 284; m = m + 31) {
                                if (m == 5) {
                                    var id = $('.cell').attr("id").charAt(1) + m;
                                } else {
                                    var id = $('.cell').attr("id").charAt(2) + m;
                                }

                                if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                    Dailycount = Dailycount + 1;
                                    //alert(count);

                                }
                                $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                            }
                        } else {
                            if (DailyLeaveCountID == 6) {

                                for (var m = 6; m <= 285; m = m + 31) {
                                    if (m == 6) {
                                        var id = $('.cell').attr("id").charAt(1) + m;
                                    } else {
                                        var id = $('.cell').attr("id").charAt(2) + m;
                                    }

                                    if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                        Dailycount = Dailycount + 1;
                                        //alert(count);

                                    }
                                    $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                }
                            } else {
                                if (DailyLeaveCountID == 7) {

                                    for (var m = 7; m <= 286; m = m + 31) {
                                        if (m == 7) {
                                            var id = $('.cell').attr("id").charAt(1) + m;
                                        } else {
                                            var id = $('.cell').attr("id").charAt(2) + m;
                                        }

                                        if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                            Dailycount = Dailycount + 1;
                                            //alert(count);

                                        }
                                        $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                    }
                                } else {
                                    if (DailyLeaveCountID == 8) {

                                        for (var m = 8; m <= 287; m = m + 31) {
                                            if (m == 8) {
                                                var id = $('.cell').attr("id").charAt(1) + m;
                                            } else {
                                                var id = $('.cell').attr("id").charAt(2) + m;
                                            }

                                            if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                Dailycount = Dailycount + 1;
                                                //alert(count);

                                            }
                                            $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                        }
                                    } else {
                                        if (DailyLeaveCountID == 9) {

                                            for (var m = 9; m <= 288; m = m + 31) {
                                                if (m == 9) {
                                                    var id = $('.cell').attr("id").charAt(1) + m;
                                                } else {
                                                    var id = $('.cell').attr("id").charAt(2) + m;
                                                }

                                                if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                    Dailycount = Dailycount + 1;
                                                    //alert(count);

                                                }
                                                $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                            }
                                        } else {
                                            if (DailyLeaveCountID == 10) {

                                                for (var m = 10; m <= 289; m = m + 31) {

                                                    var id = $('.cell').attr("id").charAt(2) + m;


                                                    if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                        Dailycount = Dailycount + 1;
                                                        //alert(count);

                                                    }
                                                    $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                }
                                            } else {
                                                if (DailyLeaveCountID == 11) {

                                                    for (var m = 11; m <= 290; m = m + 31) {

                                                        var id = $('.cell').attr("id").charAt(2) + m;


                                                        if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                            Dailycount = Dailycount + 1;
                                                            //alert(count);

                                                        }
                                                        $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                    }
                                                } else {
                                                    if (DailyLeaveCountID == 12) {

                                                        for (var m = 12; m <= 291; m = m + 31) {

                                                            var id = $('.cell').attr("id").charAt(2) + m;


                                                            if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                Dailycount = Dailycount + 1;
                                                                //alert(count);
                                                            }
                                                            $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                        }
                                                    } else {
                                                        if (DailyLeaveCountID == 13) {

                                                            for (var m = 13; m <= 292; m = m + 31) {

                                                                var id = $('.cell').attr("id").charAt(2) + m;


                                                                if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                    Dailycount = Dailycount + 1;
                                                                    //alert(count);
                                                                }
                                                                $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                            }
                                                        } else {
                                                            if (DailyLeaveCountID == 14) {

                                                                for (var m = 14; m <= 293; m = m + 31) {

                                                                    var id = $('.cell').attr("id").charAt(2) + m;


                                                                    if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                        Dailycount = Dailycount + 1;
                                                                        //alert(count);
                                                                    }
                                                                    $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                }
                                                            } else {
                                                                if (DailyLeaveCountID == 15) {

                                                                    for (var m = 15; m <= 294; m = m + 31) {

                                                                        var id = $('.cell').attr("id").charAt(2) + m;


                                                                        if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                            Dailycount = Dailycount + 1;
                                                                            //alert(count);
                                                                        }
                                                                        $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                    }
                                                                } else {
                                                                    if (DailyLeaveCountID == 16) {

                                                                        for (var m = 16; m <= 295; m = m + 31) {

                                                                            var id = $('.cell').attr("id").charAt(2) + m;


                                                                            if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                Dailycount = Dailycount + 1;
                                                                                //alert(count);
                                                                            }
                                                                            $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                        }
                                                                    } else {
                                                                        if (DailyLeaveCountID == 17) {

                                                                            for (var m = 17; m <= 296; m = m + 31) {

                                                                                var id = $('.cell').attr("id").charAt(2) + m;


                                                                                if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                    Dailycount = Dailycount + 1;
                                                                                    //alert(count);
                                                                                }
                                                                                $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                            }
                                                                        } else {
                                                                            if (DailyLeaveCountID == 18) {

                                                                                for (var m = 18; m <= 297; m = m + 31) {

                                                                                    var id = $('.cell').attr("id").charAt(2) + m;


                                                                                    if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                        Dailycount = Dailycount + 1;
                                                                                        //alert(count);
                                                                                    }
                                                                                    $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                                }
                                                                            } else {
                                                                                if (DailyLeaveCountID == 19) {

                                                                                    for (var m = 19; m <= 298; m = m + 31) {

                                                                                        var id = $('.cell').attr("id").charAt(2) + m;

                                                                                        if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                            Dailycount = Dailycount + 1;
                                                                                            //alert(count);
                                                                                        }
                                                                                        $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                                    }
                                                                                } else {
                                                                                    if (DailyLeaveCountID == 20) {

                                                                                        for (var m = 20; m <= 299; m = m + 31) {

                                                                                            var id = $('.cell').attr("id").charAt(2) + m;


                                                                                            if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                                Dailycount = Dailycount + 1;
                                                                                                //alert(count);
                                                                                            }
                                                                                            $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                                        }
                                                                                    } else {
                                                                                        if (DailyLeaveCountID == 21) {

                                                                                            for (var m = 21; m <= 300; m = m + 31) {

                                                                                                var id = $('.cell').attr("id").charAt(2) + m;


                                                                                                if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                                    Dailycount = Dailycount + 1;
                                                                                                    //alert(count);
                                                                                                }
                                                                                                $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                                            }
                                                                                        } else {
                                                                                            if (DailyLeaveCountID == 22) {

                                                                                                for (var m = 22; m <= 301; m = m + 31) {

                                                                                                    var id = $('.cell').attr("id").charAt(2) + m;


                                                                                                    if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                                        Dailycount = Dailycount + 1;
                                                                                                        //alert(count);
                                                                                                    }
                                                                                                    $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                                                }
                                                                                            } else {
                                                                                                if (DailyLeaveCountID == 23) {

                                                                                                    for (var m = 23; m <= 302; m = m + 31) {

                                                                                                        var id = $('.cell').attr("id").charAt(2) + m;


                                                                                                        if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                                            Dailycount = Dailycount + 1;
                                                                                                            //alert(count);
                                                                                                        }
                                                                                                        $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                                                    }
                                                                                                } else {
                                                                                                    if (DailyLeaveCountID == 24) {

                                                                                                        for (var m = 24; m <= 303; m = m + 31) {

                                                                                                            var id = $('.cell').attr("id").charAt(2) + m;


                                                                                                            if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                                                Dailycount = Dailycount + 1;
                                                                                                                //alert(count);
                                                                                                            }
                                                                                                            $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                                                        }
                                                                                                    } else {
                                                                                                        if (DailyLeaveCountID == 25) {

                                                                                                            for (var m = 25; m <= 304; m = m + 31) {

                                                                                                                var id = $('.cell').attr("id").charAt(2) + m;


                                                                                                                if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                                                    Dailycount = Dailycount + 1;
                                                                                                                    //alert(count);
                                                                                                                }
                                                                                                                $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                                                            }
                                                                                                        } else {
                                                                                                            if (DailyLeaveCountID == 26) {

                                                                                                                for (var m = 26; m <= 305; m = m + 31) {

                                                                                                                    var id = $('.cell').attr("id").charAt(2) + m;


                                                                                                                    if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                                                        Dailycount = Dailycount + 1;
                                                                                                                        //alert(count);
                                                                                                                    }
                                                                                                                    $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                                                                }
                                                                                                            } else {
                                                                                                                if (DailyLeaveCountID == 27) {

                                                                                                                    for (var m = 27; m <= 306; m = m + 31) {

                                                                                                                        var id = $('.cell').attr("id").charAt(2) + m;


                                                                                                                        if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                                                            Dailycount = Dailycount + 1;
                                                                                                                            //alert(count);
                                                                                                                        }
                                                                                                                        $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                                                                    }
                                                                                                                } else {
                                                                                                                    if (DailyLeaveCountID == 28) {

                                                                                                                        for (var m = 28; m <= 307; m = m + 31) {

                                                                                                                            var id = $('.cell').attr("id").charAt(2) + m;


                                                                                                                            if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                                                                Dailycount = Dailycount + 1;
                                                                                                                                //alert(count);
                                                                                                                            }
                                                                                                                            $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                                                                        }
                                                                                                                    } else {
                                                                                                                        if (DailyLeaveCountID == 29) {

                                                                                                                            for (var m = 29; m <= 308; m = m + 31) {

                                                                                                                                var id = $('.cell').attr("id").charAt(2) + m;


                                                                                                                                if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                                                                    Dailycount = Dailycount + 1;
                                                                                                                                    //alert(count);
                                                                                                                                }
                                                                                                                                $('#' + DailyLeaveCountID + '.dailyLeaves').text(Dailycount);
                                                                                                                            }
                                                                                                                        } else {
                                                                                                                            if (DailyLeaveCountID == 30) {

                                                                                                                                for (var m = 30; m <= 309; m = m + 31) {

                                                                                                                                    var id = $('.cell').attr("id").charAt(2) + m;


                                                                                                                                    if ($('#' + id + '.popupCell').hasClass("valueSet")) {
                                                                                                                                        Dailycount = Dailycount + 1;
                                                                                                                                        //alert(count);
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

        //alert(startingDate)

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

        for (date = startingDate; date <= endingDate; date.setDate(date.getDate() + 1)) {
            n = weekday[date.getDay()];
            for (var j = 0; j < 1; j++) {
                if (n == "Sat" || n == "Sun") {
                    result = result + "<div class='headerCellHoliday'>" + n.toUpperCase() + "</div>";
                }
                else {
                    if (date == currdate)
                    {
                        result = result + "<div class='headerCellToday'>" + n.toUpperCase() + "</div>";
                    }
                    else {
                        result = result + "<div class='headerCell'>" + n.toUpperCase() + "</div>";
                    }
                }
            }
        }
       return result;
    });
    $('#Dates').html(function () {

        var currdate = new Date(SetDate);
        //alert(currdate)

        var startingDate = new Date(currdate);
        startingDate.setDate(startingDate.getDate() - 15);

        //alert(startingDate)

        var endingDate = new Date(currdate);
        endingDate.setDate(endingDate.getDate() + 15);

        // alert(endingDate)

        var date = new Date(startingDate);
        // alert(date)

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

        //  alert(n)


        //alert(date)

        for (date = startingDate; date <= endingDate; date.setDate(date.getDate() + 1)) {
            n = weekday[date.getDay()];
            // result = result + "<div class='headerCell'>" + n.toUpperCase() + "</div>";
            for (var j = 0; j < 1; j++) {

                // alert(n);
                if (n == "Sat" || n == "Sun") {

                    // alert(n)
                    result = result + "<div class='headerCellHoliday'>" + date.getDate() + "</div>";
                    //alert(result)

                }
                else {

                    if (date==currdate) {
                        //alert(date)

                        result = result + "<div id='cdate' class='headerCellToday'>" + date.getDate() + "</div>";
                        //alert(result)

                    }
                    else {
                        result = result + "<div class='headerCell'>" + date.getDate() + "</div>";

                    }
                }

            }
        }

        return result;

    });
    $('#Months').html(function () {

        var currdate = new Date(SetDate);
        //alert(currdate)

        var startingDate = new Date(currdate);
        startingDate.setDate(startingDate.getDate() - 15);

        //alert(startingDate)

        var endingDate = new Date(currdate);
        endingDate.setDate(endingDate.getDate() + 15);

        // alert(endingDate)

        var date = new Date(startingDate);
        // alert(date)

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

        var month = new Array(7);
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
        //alert(m)


        //alert(date)

        for (date = startingDate; date <= endingDate; date.setDate(date.getDate() + 1)) {
            n = weekday[date.getDay()];
            m = month[date.getMonth()];
            // result = result + "<div class='headerCell'>" + n.toUpperCase() + "</div>";
            for (var j = 0; j < 1; j++) {

                // alert(n);
                if (n == "Sat" || n == "Sun") {

                    // alert(n)
                    result = result + "<div class='headerCellHoliday'>" + m.toUpperCase() + "</div>";
                    //alert(result)

                }
                else {

                    if (date == currdate) {
                        //alert(date)

                        result = result + "<div class='headerCellToday'>" + m.toUpperCase() + "</div>";
                        //alert(result)

                    }
                    else {
                        result = result + "<div class='headerCell'>" + m.toUpperCase() + "</div>";

                    }
                }

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

    });

    resultString = "<div class='dropdown theme-dropdown clearfix'><ul id='LeaveMenu' class='dropdown-menu' role='menu' aria-labelledby='dropdownMenu1'><li role='presentation' id ='1' onmousedown='clickpopup(this);'><a role='menuitem' tabindex='-1' href='#' >Vacation Leave </a></li><li role='presentation' id = '2' onmousedown='clickpopup(this);'><a role='menuitem' tabindex='-1' href='#'>Sick Leave</a></li><li role='presentation' id = '3' onmousedown='clickpopup(this);'><a role='menuitem' tabindex='-1' href='#'>Personal Leave</a></li><li role='presentation' id = '4' onmousedown='clickpopup(this);'><a role='menuitem' tabindex='-1' href='#'>Marriage Leave</a></li><li role='presentation' id = '5' onmousedown='clickpopup(this);'><a role='menuitem' tabindex='-1' href='#'>Custom Leave</a></li><li role='presentation' id = '6' onmousedown='clickpopup(this);'><a role='menuitem' tabindex='-1' href='#'>Remove Selection</a></li></ul></div>";
    //"<div class='dropdown theme-dropdown clearfix' aria-labelledby='dropdownMenu1'><div id='one' class='value1'  onclick='clickpopup(this);' >Record 1<div class='innervalue' style='display:none;' >d93fcb</div><div style='background-color:#d93fcb;height:25px;width:25px;'></div></div><br /><div  id='two' class='value2' onclick='clickpopup(this);'>Record 2<div class='innervalue' style='display:none;' >4568e6</div><div style='background-color:#4568e6;height:25px;width:25px;'></div></div><br /><div  id='two' class='value3' onclick='clickpopup(this);'>Record 3<div class='innervalue' style='display:none;' >3fa588</div><div style='background-color:#3fa588;height:25px;width:25px;'></div></div><br /><div  id='three' class='value4' onclick='clickpopup(this);'>Record 4<div class='innervalue' style='display:none;' >f0be73</div><div style='background-color:#f0be73;height:25px;width:25px;'></div></div><br /><div  id='five' class='value5' onclick='clickpopup(this);'>Record 5<div class='innervalue' style='display:none;' >9fdc6f</div><div style='background-color:#9fdc6f;height:25px;width:25px;'></div></div></div>";
    $('.popupCell').bind('click', function () {
        selectedCellId = this.id;
        // alert(selectedCellId);
        var self = this;
        $('#' + selectedCellId + '.popupCell').html(resultString);
    });

    for (var l = 15; l < 295; l = l + 31) {
        var id = $('.cell').attr("id").charAt(3) + l;
        $('#' + id + '.popupCell').css('background-color', 'lightblue');
    }
    var getId = $('.dailyLeaves').attr("id").charAt(1) + 15;
    //alert(getId);;
    if (getId == 15) {
        $('#' + getId + '.dailyLeaves').css('background-color', 'lightblue');
    }
    for (var i = 11; i < 31; i++) {

        menu1ID = $('.employeeName').attr("id").charAt(2) + i;
        $('#' + menu1ID + '.employeeName').css('visibility', 'hidden');

        menu2ID = $('.managerName').attr("id").charAt(2) + i;
        $('#' + menu2ID + '.managerName').css('visibility', 'hidden');
    }
    $('#stratingPage').click(function () {
        for (var i = 0; i < 30; i++) {
            if (i < 10) {
                menu1ID = $('.employeeName').attr("id").charAt(1) + i;
                $('#' + menu1ID + '.employeeName').css('position', 'relative');

                menu2ID = $('.managerName').attr("id").charAt(1) + i;
                $('#' + menu2ID + '.managerName').css('position', 'relative');

            } else {
                if (i < 20) {
                    menu1ID = $('.employeeName').attr("id").charAt(2) + i;
                    $('#' + menu1ID + '.employeeName').css('visibility', 'hidden');
                    $('#' + menu1ID + '.employeeName').css('position', 'relative');
                    $('#' + menu1ID + '.employeeName').css('margin-top', '.5px');

                    menu2ID = $('.managerName').attr("id").charAt(2) + i;
                    $('#' + menu2ID + '.managerName').css('visibility', 'hidden');
                    $('#' + menu2ID + '.managerName').css('position', 'relative');
                    $('#' + menu2ID + '.managerName').css('margin-top', '.5px');
                }
                else {
                    menu1ID = $('.employeeName').attr("id").charAt(2) + i;
                    $('#' + menu1ID + '.employeeName').css('visibility', 'hidden');

                    menu2ID = $('.managerName').attr("id").charAt(2) + i;
                    $('#' + menu2ID + '.managerName').css('visibility', 'hidden');
                }

            }

        }
    });
    $('#firstPage').click(function () {
        for (var i = 0; i < 30; i++) {
            if (i < 10) {
                menu1ID = $('.employeeName').attr("id").charAt(1) + i;
                $('#' + menu1ID + '.employeeName').css('position', 'relative');

                menu2ID = $('.managerName').attr("id").charAt(1) + i;
                $('#' + menu2ID + '.managerName').css('position', 'relative');

            } else {
                if (i < 20) {
                    menu1ID = $('.employeeName').attr("id").charAt(2) + i;
                    $('#' + menu1ID + '.employeeName').css('visibility', 'hidden');
                    $('#' + menu1ID + '.employeeName').css('position', 'relative');
                    $('#' + menu1ID + '.employeeName').css('margin-top', '.5px');

                    menu2ID = $('.managerName').attr("id").charAt(2) + i;
                    $('#' + menu2ID + '.managerName').css('visibility', 'hidden');
                    $('#' + menu2ID + '.managerName').css('position', 'relative');
                    $('#' + menu2ID + '.managerName').css('margin-top', '.5px');
                }
                else {
                    menu1ID = $('.employeeName').attr("id").charAt(2) + i;
                    $('#' + menu1ID + '.employeeName').css('visibility', 'hidden');

                    menu2ID = $('.managerName').attr("id").charAt(2) + i;
                    $('#' + menu2ID + '.managerName').css('visibility', 'hidden');
                }

            }

        }
    });
    $('#secondPage').click(function () {
        //alert("Hi");
        for (var i = 0; i < 30; i++) {
            if (i < 10) {
                menu1ID = $('.employeeName').attr("id").charAt(1) + i;
                $('#' + menu1ID + '.employeeName').css('position', 'absolute');

                menu2ID = $('.managerName').attr("id").charAt(1) + i;
                $('#' + menu2ID + '.managerName').css('position', 'absolute');

            } else {
                if (i < 20) {
                    menu1ID = $('.employeeName').attr("id").charAt(2) + i;
                    $('#' + menu1ID + '.employeeName').css('visibility', 'visible');
                    $('#' + menu1ID + '.employeeName').css('position', 'relative');
                    $('#' + menu1ID + '.employeeName').css('margin-top', '.5px');

                    menu2ID = $('.managerName').attr("id").charAt(2) + i;
                    $('#' + menu2ID + '.managerName').css('visibility', 'visible');
                    $('#' + menu2ID + '.managerName').css('position', 'relative');
                    $('#' + menu2ID + '.managerName').css('margin-top', '.5px');
                }
                else {
                    menu1ID = $('.employeeName').attr("id").charAt(2) + i;
                    $('#' + menu1ID + '.employeeName').css('visibility', 'hidden');

                    menu2ID = $('.managerName').attr("id").charAt(2) + i;
                    $('#' + menu2ID + '.managerName').css('visibility', 'hidden');
                }

            }

        }
    });
    $('#thirdPage').click(function () {
        //alert("Hi");
        for (var i = 0; i < 30; i++) {
            if (i < 20) {
                menu1ID = $('.employeeName').attr("id").charAt(1) + i;
                $('#' + menu1ID + '.employeeName').css('position', 'absolute');

                menu2ID = $('.managerName').attr("id").charAt(1) + i;
                $('#' + menu2ID + '.managerName').css('position', 'absolute');

            } else {
                if (i < 30) {
                    menu1ID = $('.employeeName').attr("id").charAt(2) + i;
                    $('#' + menu1ID + '.employeeName').css('visibility', 'visible');
                    $('#' + menu1ID + '.employeeName').css('position', 'relative');
                    $('#' + menu1ID + '.employeeName').css('margin-top', '.5px');

                    menu2ID = $('.managerName').attr("id").charAt(2) + i;
                    $('#' + menu2ID + '.managerName').css('visibility', 'visible');
                    $('#' + menu2ID + '.managerName').css('position', 'relative');
                    $('#' + menu2ID + '.managerName').css('margin-top', '.5px');
                }
                else {
                    menu1ID = $('.employeeName').attr("id").charAt(2) + i;
                    $('#' + menu1ID + '.employeeName').css('visibility', 'hidden');

                    menu2ID = $('.managerName').attr("id").charAt(2) + i;
                    $('#' + menu2ID + '.managerName').css('visibility', 'hidden');
                }

            }

        }
    });
    $('#lastPage').click(function () {
        //alert("Hi");
        for (var i = 0; i < 30; i++) {
            if (i < 20) {
                menu1ID = $('.employeeName').attr("id").charAt(1) + i;
                $('#' + menu1ID + '.employeeName').css('position', 'absolute');

                menu2ID = $('.managerName').attr("id").charAt(1) + i;
                $('#' + menu2ID + '.managerName').css('position', 'absolute');

            } else {
                if (i < 30) {
                    menu1ID = $('.employeeName').attr("id").charAt(2) + i;
                    $('#' + menu1ID + '.employeeName').css('visibility', 'visible');
                    $('#' + menu1ID + '.employeeName').css('position', 'relative');
                    $('#' + menu1ID + '.employeeName').css('margin-top', '.5px');

                    menu2ID = $('.managerName').attr("id").charAt(2) + i;
                    $('#' + menu2ID + '.managerName').css('visibility', 'visible');
                    $('#' + menu2ID + '.managerName').css('position', 'relative');
                    $('#' + menu2ID + '.managerName').css('margin-top', '.5px');
                }
                else {
                    menu1ID = $('.employeeName').attr("id").charAt(2) + i;
                    $('#' + menu1ID + '.employeeName').css('visibility', 'hidden');

                    menu2ID = $('.managerName').attr("id").charAt(2) + i;
                    $('#' + menu2ID + '.managerName').css('visibility', 'hidden');
                }

            }

        }
    });

});

$(document).mouseup(function () {
    $('.dropdown').slideUp();

    for (var l = 15; l < 295; l = l + 31) {
        var id = $('.popupCell').attr("id").charAt(2) + l;
        $('#' + id + '.popupCell').css('background-color', 'lightblue');
    }
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



