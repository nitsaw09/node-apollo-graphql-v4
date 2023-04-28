# Apollo GraphQL, Express, and Prisma ORM Example
This project is an example implementation of an Apollo GraphQL server using Express and the Prisma ORM. It has two modules: user and post.

## Requirements
- Node.js version 16 or higher
- MYSQL database

## Installation
- Clone the repository:
```git clone https://github.com/nitsaw09/node-apollo-graphql-v4.git```

## Install dependencies:
1. cd your-repository
2. ```npm install```
3. ```Create a .env file in the root directory and add the following```

### environment variables:
```DATABASE_URL="mysql://your-username:your-password@your-host:your-port/your-database-name"```

## Run the Prisma migration to generate the database schema:
```npx prisma migrate dev --name init```

### Generate Prisma client:
```npx prisma generate```

### Start the server:
```npm start```

### Usage
The GraphQL Playground is available at http://localhost:4000/graphql.

### Query example
```
query {
  users {
    id
    name
    email
    posts {
      id
      title
      content
    }
  }
}
```
### Mutation example
```mutation {
  createUser(
    data: {
      name: "John Doe"
      email: "johndoe@example.com"
    }
  ) {
    id
    name
    email
  }
}
```

### Project Structure
```
├── prisma
│   ├── migrations
│   ├── schema.prisma
├── src
│   ├── index.ts
|   ├── resolvers.ts
│   ├── modules
│   │   ├── post
│   │   │   ├── post.resolver.ts
│   │   │   ├── post.schema.ts
│   │   │   └── post.service.ts
│   │   └── user
│   │       ├── user.resolver.ts
│   │       ├── user.schema.ts
│   │       └── user.service.ts
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── tsconfig.json `
```

- ```Prisma```: directory containing Prisma schema and migrations files.
- ```src```: directory containing the source code for the application.
- ```src/index.ts```: main entry point of the application.
- ```src/resolvers.ts```: All modules resolver files.
- ```src/modules```: directory containing modules for the application (in this case, user and post).
- ```src/modules/user```: directory containing the code for the user module.
- ```src/modules/user/user.schema.ts```: defines the User schema.
- ```src/modules/user/user.resolver.ts```: defines the User resolver.
- ```src/utils```: directory containing utility functions for the application.
- ```.env.example```: example environment variable file.
- ```.gitignore```: Git ignore file.
- ```package.json```: project metadata and dependencies.
- ```package-lock.json```: automatically generated file for npm.
- ```tsconfig.json```: TypeScript configuration file.