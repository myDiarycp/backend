const userServices = require('./models/diary-services.js');

test('Testing addUser -- success', async () => {
  user ={ 
    _id: 'testsubject',
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

test('Testing getUsers -- success', async () => {
    const result = await userServices.getUsers(); 

    expect(result[result.length - 1].name).toBe("testname");
    expect(result[result.length - 1].subject).toBe("testsubject")
  });

test('Testing findUserBySubject -- success', async () => {
  const result = await userServices.findUserBySubject("testsubject"); 

  expect(result[0].name).toBe("testname");
  expect(result[0].subject).toBe("testsubject")
});


test('Testing findUserBySubjectAndUpdate -- success', async () => {

  const preResult = await userServices.findUserBySubject("testsubject")

  user ={ 
    _id: 'testsubject',
    name: 'testname',
    subject: 'testsubject',
    userProfile: 'testprofile',
    diary: { "10-11-2022": {
      "date": "10-11-2022",
      "title": "My First Entry",
      "text": "I had a great day!",
      "rating": 10,
      "_id": "6370958140cb4709d8981449"
  }},
    __v: 0
  }

  const put = await userServices.findUserBySubjectAndUpdate("testsubject", user);
  const result = await userServices.findUserBySubject("testsubject");

  expected = { 
  "date": "10-11-2022", 
  "rating": 10, 
  "text": "I had a great day!", 
  "title": "My First Entry"}

    expect(result[0].diary.get('10-11-2022')).toMatchObject(expected);

  });

test('Testing deleteUser -- success', async () => {

  const result = await userServices.findUserBySubject("testsubject");
  const del = await userServices.deleteUser(result[0].id);
  const afterResult = await userServices.findUserBySubject("testsubject")

  expect(afterResult).toEqual([]);

});



