describe('sample test 101',() => {
    it.skip('works as expected', () => {
        expect(1).toEqual(1)
    });
    it.skip('handles ranges', () => {
        const age = 200;
        expect(age).toBeGreaterThan(100)
    });
    it.skip('looks funny', () => {
        const funs= ["fun","funny"];
        expect(funs).toEqual(funs)
        expect(funs).toContain("fun")

    })
});