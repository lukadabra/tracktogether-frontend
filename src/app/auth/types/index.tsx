export type User ={
  provider: string;
  id: string;
  displayName: string;
  name?: {
    familyName: string;
    givenName: string;
    middleName: string;
  };
  emails: [
    {
      value: string;
      type: string;
    }
  ];
  photos?: [
    {
      value: string;
    }
  ];
}