describe('Pruebas en demo.test.js', () => {
    test('strings iguales', () => {
        const mensaje1 = "Hola mundo";
        const mensaje2 = 'Hola mundo';
        expect(mensaje1).toBe(mensaje2);
    })
});
