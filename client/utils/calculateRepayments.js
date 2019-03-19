import RepaymentSchedule from '@danacita/loanjs';

export default (startDate, tenor, interestRatePerYear, balanceRequested, origination, gracePeriod) => {
    let repaymentSchedule = new RepaymentSchedule({
        startDate: new Date(startDate),
        tenor: +tenor,
        interestRatePerYear: +interestRatePerYear,
        balanceRequested: +balanceRequested,
        origination: +origination,
        gracePeriod: +gracePeriod
    });

    let schedules = repaymentSchedule.generateSchedule();
    let repaymentSchedulesHexArr = [];
    for (let i = 0; i < schedules.length; i++) {
        repaymentSchedulesHexArr.push('0x' + new Buffer(schedules[i].date).toString('hex'));
        repaymentSchedulesHexArr.push('0x' + new Buffer(String(schedules[i].balance)).toString('hex'));
        repaymentSchedulesHexArr.push('0x' + new Buffer(String(schedules[i].payment)).toString('hex'));
        repaymentSchedulesHexArr.push('0x' + new Buffer(String(schedules[i].interest)).toString('hex'));
        repaymentSchedulesHexArr.push('0x' + new Buffer(String(schedules[i].principal)).toString('hex'));
    }
    debugger;
    return repaymentSchedulesHexArr;
};
