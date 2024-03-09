export type CreateUserParams = {
  username: string;
  password: string;
};

export type UpdateUserParams = {
  username: string;
  password: string;
};

export type CreateUserProfileParams = {
  fullname: string;
  age: number;
  avatar: string;
};

export type CreateUserPostParams = {
  title: string;
  description: string;
};
