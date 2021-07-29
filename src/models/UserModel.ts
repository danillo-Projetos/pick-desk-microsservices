import { v4 as uuidV4 } from 'uuid';

class UserModel {
  id?: string;
  name: string;
  email: string;
  password: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
    this.email = '';
    this.name = '';
    this.password = '';
    this.created_at = null;
  }
}

export { UserModel };
