const Calculo = require("./calculo");

describe('Calculo da média CA', () => {
    test('A média CA é SR se a media é zero', () => {
        let nota = new Calculo(null, 0, 0, 0);
        expect(nota.mediaCA()).toEqual('SR – Sem rendimento');
        nota = new Calculo(null, null, null, null)
        expect(nota.mediaCA()).toEqual('SR – Sem rendimento');
    });

    test('A média CA é MI se a média é 4,2', () => {
        let nota = new Calculo(null, 3, 5, null);
        expect(nota.mediaCA()).toEqual('MI – Médio Inferior');
    });

    test('A média CA não é MI se a média é 5,2', () => {
        let nota = new Calculo(null, 7, 4, null);
        expect(nota.mediaCA()).not.toBe('MI');
    });

    test('A média CA é MI se a média é 4,2', () => {
        let  nota = new Calculo(null, 0, 5, 3);
        expect(nota.mediaCA()).toEqual('MI – Médio Inferior');

    });

    test('A média CA é MI se a média é 4,2', () => {
        let  nota = new Calculo(null, 2, 5, 3);
        expect(nota.mediaCA()).toEqual('MI – Médio Inferior');
    });

    test('A média CA é MS se a média é 8,6', () => {
        let nota = new Calculo(null, 8, 0, 9);
        expect(nota.mediaCA()).toEqual('MS – Médio Superior');
    });

    test('A média CA é MI se a média é 3,8', () => {
        let nota = new Calculo(null, 5, 4, 3);
        expect(nota.mediaCA()).toEqual('MI – Médio Inferior');
    });

    test('A média CA é MM se a média é 6,6', () => {
        let nota = new Calculo(null, 6, 4, 7);
        expect(nota.mediaCA()).toEqual('MM – Médio');
    });
});