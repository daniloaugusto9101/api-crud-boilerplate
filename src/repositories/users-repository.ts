interface UserModel {
  id: Number;
  name: String;
}

const database: UserModel[] = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

export const findAllUsers = async (): Promise<UserModel[]> => {
  return database;
};
