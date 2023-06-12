export type TTodo = {
  id: number;
  username: string;
  email: string;
  text: string;
  status: 0 | 1 | 10 | 11;
  image_path: string;
};

export type TTodoList = {
  status: 'ok' | 'error';
  message: {
    tasks: TTodo[];
    total_task_count: number;
  };
};

export type TTodoListParams = {
  page: number;
  sortUrl: string;
};

export type TSignInParams = {
  username: string;
  password: string;
};

export type TSignInResponse = {
  status: string;
  message: {
    token: string;
  };
};

export type TCreateTodoParams = {
  username: string;
  email: string;
  text: string;
};

export type TCreateTodoResponse = {
  status: string;
  message: {
    id: number;
    username: string;
    email: string;
    text: string;
    status: 0 | 1 | 10 | 11;
  };
};
