describe('mocking learning',() => {
    it('mocks a reg function', () => {
        const events = jest.fn();
        events('salut');
        expect(events).toHaveBeenCalled();
        expect(events).toHaveBeenCalledWith('salut');

    });
});