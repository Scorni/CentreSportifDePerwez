function daysInMonth (month, year) { 
    return new Date(year, month, 0).getDate(); 
}

describe('daysInMonth Function',() => {
    it.skip('tell the number of days in a month', () => {
        expect(daysInMonth('02','2020')).toEqual(29)
        expect(daysInMonth('12','2020')).toEqual(31)
        expect(daysInMonth('02','2021')).toEqual(28)

    });
});