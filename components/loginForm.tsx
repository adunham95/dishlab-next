import { useState, FormEvent } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

// This goes to our signup API endpoint
async function createUser(email: string, password: string) {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}

// This gets handled by the [...nextauth] endpoint
function AuthForm() {
  const [registered, setRegistered] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // We keep track of whether in a login / or register state
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event: FormEvent) {
    event.preventDefault();

    const enteredEmail = email;
    const enteredPassword = password;

    // optional: Add validation here

    if (isLogin) {
      await signIn('credentials', {
        redirect: true,
        email: enteredEmail,
        password: enteredPassword,
      });
    } else {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const result = await createUser(enteredEmail, enteredPassword);
        setRegistered(true);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section className="max-w-xl mx-auto my-7">
      {!registered ? (
        <>
          <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
          <form onSubmit={submitHandler}>
            <div>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Your Password</label>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="my-5">
              <button className="button button-color mr-4">
                {isLogin ? 'Login' : 'Create Account'}
              </button>
              <button type="button" onClick={switchAuthModeHandler}>
                {isLogin ? 'No Account? Create One' : 'Already a user? Login'}
              </button>
            </div>
          </form>
        </>
      ) : (
        <div className="">
          <p>You have successfully registered!</p>

          <button
            onClick={() => router.reload()}
            className="button button-color"
          >
            Login Now
          </button>
        </div>
      )}
    </section>
  );
}

export default AuthForm;
