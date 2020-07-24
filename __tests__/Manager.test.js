const Manager = require('../lib/Manager')

test('creates manager object', () => {
    const manager = new Manager('James', 1, 'test@test.com', 1);

    expect(manager.name).toBe('James');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('get role returns manager', () => {
    const manager = new Manager('James', 1, 'test@test.com', 1);

    expect(manager.getRole()).toBe('Manager');
})