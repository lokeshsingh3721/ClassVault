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
