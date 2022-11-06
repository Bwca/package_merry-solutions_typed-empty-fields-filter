export interface User {
  id: number;
  surname: string;
  name?: string;
  middleName: string | undefined;
  phone: string | null;
  hobby?: string | null;
}
