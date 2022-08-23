interface User {
  id: number;
  name: string;
  age: number;
}

export class UsersTable {
  private static _instance?: UsersTable;
  private users: User[] = [];

  private constructor() {}

  static get instance(): UsersTable {
    if (UsersTable._instance === undefined) {
      UsersTable._instance = new UsersTable();
    }

    return UsersTable._instance;
  }

  add(user: Omit<User, "id">): void {
    this.users.push({
      id: this.users.length + 1,
      ...user,
    });
  }

  remove(name: string): void {
    const userIndex = this.users.findIndex((user) => user.name === name);
    this.users.splice(userIndex, 1);
  }

  show(): void {
    for (let user of this.users) {
      console.log(user);
    }
  }
}

const instance1 = UsersTable.instance;
instance1.add({ name: "Taiury", age: 21 });
instance1.add({ name: "Rafael", age: 19 });
instance1.add({ name: "Isa", age: 23 });

const instance2 = UsersTable.instance;
instance2.remove("Rafael");
instance2.show(); // { id: 1, name: 'Taiury', age: 21 } { id: 3, name: 'Isa', age: 23 }
