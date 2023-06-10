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
  sort_field?: 'id' | 'username' | 'email' | 'status';
  sort_direction?: 'asc' | 'desc';
};
