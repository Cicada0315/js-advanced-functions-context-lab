/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(arr){
    let obj={
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return obj;
}
function createEmployeeRecords(arr){
    let obj=[];
    for(let i=0; i<arr.length; i++){
        obj.push(createEmployeeRecord(arr[i]))
    }
    return obj;
}
function creatTimeObj(type, time){
    const timearr=time.split(" ");
    return {
        type: type,
        date: timearr[0],
        hour: parseInt(timearr[1])
    }
}

function createTimeInEvent(time){
    this.timeInEvents.push(creatTimeObj("TimeIn", time));
    return this;
}

function createTimeOutEvent(time){
    this.timeOutEvents.push(creatTimeObj("TimeOut", time));
    return this;
}

function hoursWorkedOnDate(date){
    const indobj = this.timeInEvents.find(e => e.date===date);
    const outobj= this.timeOutEvents.find(e=> e.date===date);

    return (outobj.hour-indobj.hour)/100;
}

function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date)*this.payPerHour;
}

function calculatePayroll(employee){
    let grandTotalOwed=0;
    for(let i=0; i<employee.length; i++){
        grandTotalOwed+=allWagesFor.call(employee[i])
    }
    return grandTotalOwed;
}

function findEmployeeByFirstName(records, name){
    for(let i=0; i<records.length; i++){
        if(records[i].firstName===name){
            return records[i];
        }
    }
}
