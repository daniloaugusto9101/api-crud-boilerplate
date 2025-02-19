export interface UserModel {
  id: String;
  email: String;
  name: String;
  slug: String;
  city: String | null;
  maximunAttendees: number | null;
  createdAt: Date;
  updatedAt: Date;
}
