// // schema.prisma

// model User {
//     id        Int      @id @default(autoincrement())
//     email     String   @unique
//     name      String?
//     interviews Interview[]
//     answers    UserAnswer[]
//   }
  
//   model Interview {
//     id             Int      @id @default(autoincrement())
//     jobPosition    String
//     jobDescription String
//     jobExperience  String
//     createdAt      DateTime @default(now())
//     user           User     @relation(fields: [userId], references: [id])
//     userId         Int
//     questions      Question[]
//   }
  
//   model Question {
//     id           Int      @id @default(autoincrement())
//     // content      String
//     correctAnswer String?
//     interview    Interview @relation(fields: [interviewId], references: [id])
//     interviewId  Int
//     userAnswers  UserAnswer[]
//   }
  
//   model UserAnswer {
//     id         Int      @id @default(autoincrement())
//     content    String
//     feedback   String?
//     rating     Int?
//     question   Question @relation(fields: [questionId], references: [id])
//     questionId Int
//     user       User     @relation(fields: [userId], references: [id])
//     userId     Int
//     createdAt  DateTime @default(now())
//   }