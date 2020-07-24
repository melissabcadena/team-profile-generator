const Engineer = require('../lib/Engineer')

test('creates engineer object', () => {
    const engineer = new Engineer ('James', 1, 'test@test.com', 'jameshub');

    expect(engineer.name).toBe('James');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.githubName).toEqual(expect.any(String));
})

test('returns github name', () => {
    const engineer = new Engineer ('James', 1, 'test@test.com', 'jameshub');

    expect(engineer.getGithub()).toEqual(expect.any(String));
})

test('get role returns engineer', () => {
    const engineer = new Engineer('James', 1, 'test@test.com', 'jameshub');

    expect(engineer.getRole()).toBe('Engineer');
})