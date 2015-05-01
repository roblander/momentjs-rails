var oldDateFunction = moment.fn.date;
moment.fn.date = function() {
    if (arguments.length >= 1) {
        var oldOffset = this.utcOffset();
        var result = oldDateFunction.apply(this, arguments);
        var newOffset = this.utcOffset();
        this.add(newOffset - oldOffset, 'minutes');//restore proper time
        return result;
    } else {
        return oldDateFunction.apply(this, arguments);
    }
};
moment.fn.dates = moment.fn.date;

var oldStartOfFunction = moment.fn.startOf;
moment.fn.startOf = function(units) {
    if (units === 'day' || units === 'days' || units === 'd') {
        var oldOffset = this.utcOffset();
        var result = oldStartOfFunction.apply(this, arguments);
        var newOffset = this.utcOffset();
        this.add(newOffset - oldOffset, 'minutes');//restore proper time
        return result;
    } else {
        return oldStartOfFunction.apply(this, arguments);
    }
}
