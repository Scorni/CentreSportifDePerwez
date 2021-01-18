
function Events(title,allDay,start,end,type,is_paid){
    this.title = title;
    this.allDay = allDay;
    this.start= start;
    this.end = end;
    this.type = type;
    this.is_paid = is_paid;
}
Events.prototype.fetchTitle = function(){
    return new Promise((resolve,reject) => {
        //Pour simuler mon API
        setTimeout(() => resolve(this.title),2000)
    })
}
    
describe('mocking learning',() => {
    it.skip('mocks a reg function', () => {
        const events = jest.fn();
        events('salut');
        expect(events).toHaveBeenCalled();
        expect(events).toHaveBeenCalledWith('salut');

    });
    it.skip('can create an event', () => {
        const today = new Events('Today is a good day',true,"22/01/2021 00:00","23/01/2021 00:00",'allDay',false)
        expect(today.title).toBe('Today is a good day')
    });
    it.skip('can fetch title', async () => {
        const today = new Events('Today is a good day',true,"22/01/2021 00:00","23/01/2021 00:00",'allDay',false)
        // mock the title function
        today.fetchTitle = jest.fn().mockResolvedValue('Today is a good day');
        const title = await today.fetchTitle();
        console.log(title)
        expect(title).toContain('Today is a good day')
    })
});