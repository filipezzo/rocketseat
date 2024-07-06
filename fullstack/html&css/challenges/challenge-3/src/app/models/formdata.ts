



export interface IFormData {
  title: string;
  startDate: Date;
  endDate: Date;
  type:' presential' | 'online';
  local: string;
  description: string;
  color: string
  theme: string;
  name: string;
  email: string;
  phone: string;
  terms: boolean;
  emailTerms: boolean;
  smsTerms: boolean;
}
