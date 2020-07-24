const Intern = require('../lib/Intern')

test('creates intern object', () => {
    const intern = new Intern ('James', 1, 'test@test.com', 'UTA');

    expect(intern.name).toBe('James');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test('get school method returns string', () => {
    const intern = new Intern ('James', 1, 'test@test.com', 'UTA');

    expect(intern.getSchool()).toEqual(expect.any(String));
})

test('getRole returns Intern', () => {
    const intern = new Intern ('James', 1, 'test@test.com', 'UTA');

    expect(intern.getRole()).toBe('Intern');
})