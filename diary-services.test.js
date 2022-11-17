const userServices = require('./models/diary-services.js');

test('Testing getUsers -- success', async () => {
    const result = await userServices.getUsers(); 

    expect(result[0].name).toBe("Yoel");
    expect(result[0].subject).toBe("9a5c1f3b-51a4-4baa-a9dd-4dc3a5c665b0")
  });

test('Testing findUserBySubject -- success', async () => {
  const result = await userServices.findUserBySubject("9a5c1f3b-51a4-4baa-a9dd-4dc3a5c665b0"); 

  expect(result[0].name).toBe("Yoel");
  expect(result[0].subject).toBe("9a5c1f3b-51a4-4baa-a9dd-4dc3a5c665b0")
});

test('Testing addUser -- success', async () => {
  user ={ 
    _id: 'testid',
    name: 'testname',
    subject: 'testsubject',
    userProfile: 'testprofile',
    diary: {},
    __v: 0
  }

  const add = await userServices.addUser(user); 

  const result = await userServices.findUserBySubject("testsubject")

  expect(result[0].subject).toBe("testsubject")

});

test('Testing findUserBySubjectAndUpdate -- success', async () => {

  const add = await userServices.addUser(user); 

  const result = await userServices.findUserBySubject("testsubject")

  expect(result[0].subject).toBe("testsubject")

});