//function that displays day Date and Time
function startTime() {
        console.clear();
        //created a date object
        var today = new Date();
        var hours = today.getHours();
        var min = today.getMinutes();
        var sec = today.getSeconds();
        var day = today.getDay();
        var year = today.getFullYear();
        var month = today.getMonth();
        var date = today.getDate();
        if (hours < 10) {
                hours = "0" + hours;
        }
        if (min < 10) {
                min = "0" + min;
        }
        if (sec < 10) {
                sec = "0" + sec;
        }
        days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        months = ['Jan', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        var result = '' + days[day] + ' ' + date + '-' + months[month] + '-' + year + ' ' + hours + ':' + min + ':' + sec;
        console.log(result);
        //updating clock infinite times using setTimeout
        setTimeout(startTime, 1000);

}
startTime();
