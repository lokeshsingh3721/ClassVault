interface Card {
  title?: string;
  subject: string;
}

interface GetIdQuery {
  college?: string;
  semester?: string;
  course?: string;
  subject?: string;
}

interface GetId {
  _id: ObjectId;
  name: string;
}

interface SignUp {
  userType?: string;
  name: string;
  email: string;
  college: string;
  collegeRollNo?: string;
  course: string;
  semester: string;
  subject?: string;
  password: string;
}

interface Login {
  email: string;
  password: string;
  userType: string;
}
