interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  image: string;
}

const resolvers = {
  Query: {
    users: async () => {
      try {
        const response = await fetch(process.env.URL_API as string);

        console.log(response);

        const data = await response.json();

        console.log(data);

        return data.users.map((u: IUser) => {
          return {
            id: u.id,
            firstName: u.firstName,
            lastName: u.lastName,
            email: u.email,
            username: u.username,
            image: u.image,
          };
        });
      } catch (error) {
        throw new Error('Something went wrong');
      }
    },
    searchUser: async (_: unknown, { value }: { value: string }) => {
      try {
        const response = await fetch(
          `${process.env.URL_API}/search?q=${value}`,
        );

        console.log(response);

        const data = await response.json();

        console.log(data);

        return data.users.map((u: IUser) => {
          return {
            id: u.id,
            firstName: u.firstName,
            lastName: u.lastName,
            email: u.email,
            username: u.username,
            image: u.image,
          };
        });
      } catch (error) {
        throw new Error('Something went wrong');
      }
    },
  },
};

export default resolvers;
