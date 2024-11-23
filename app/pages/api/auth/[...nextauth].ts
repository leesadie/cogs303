// pages/api/auth/[...nextauth].ts

import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { fetchUsersFromCSV } from '@/app/utils/fetchUsers';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const users = await fetchUsersFromCSV();
        const user = users.find(
          user => user.username === credentials?.username && user.password === credentials?.password
        );

        if (user) {
          return { id: user.id, name: user.first_name, title: user.title };
        }
        return null; // Returning null denies access
      }
    })
  ],
  pages: {
    signIn: '/', // Redirect to this page if authentication fails
  }
};

export default NextAuth(authOptions);
