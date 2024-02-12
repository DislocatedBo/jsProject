import { faker } from '@faker-js/faker'

export default {
    baseUrl: 'https://demowebshop.tricentis.com',
    defemail: 'zima@test.com',
    testpass: 'londo3',
    __RequestVerificationToken: '6SCFLhJyHbaFhXYCGwunEtngJ-iOqWqDcwh4gQzJDoTz91BWFdH2TY5EJM-eH7wWO7RLVYqwtgQAPmngHsayeqkM4EKf8NJ5ZVZ0NFighrI1',
    gender: 'M',
    firstname: faker.person.firstName('male'),
    email: faker.internet.email(),
    lastname: faker.person.lastName('female'),
    password: faker.internet.password(),

  }