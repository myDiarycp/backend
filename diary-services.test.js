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

  //console.log(put);

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



