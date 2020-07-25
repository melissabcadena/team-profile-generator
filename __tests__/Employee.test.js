const Employee = require('../lib/Employee')

test('creates employee object', () => {
    const employee = new Employee('James', 1, 'test@test.com')

    expect(employee.name).toBe('James');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('get name method will return string', () => {
    const employee = new Employee('James', 1, 'test@test.com');

    expect(employee.getName()).toEqual(expect.any(String));
})

test('get employee ID returns number', () => {
    const employee = new Employee('James', 1, 'test@test.com');

    expect(employee.getID()).toEqual(expect.any(Number));
})

test('get employee email returns string including @', () => {
    const employee = new Employee('James', 1, 'test@test.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
})

test('getRole returns class name', () => {
    const employee = new Employee('James', 1, 'test@test.com');

    expect(employee.getRole()).toBe('Employee')
})
