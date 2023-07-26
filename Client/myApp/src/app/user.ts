export class User {
  constructor(
    public _id?: string,
    public name?: string,
    public email?: string,
    public street?: string,
    public city?: string,
    public zipcode?: number,
    public tasks?: Task[],
    public posts?: Post[]
  ) {}
}

export class Task {
    public _id? :string;
    public title?: string;
    public completed?: boolean;
  }

  
  export class Post {
    public _id? :string;
    public title?: string;
    public body?: string;
  }