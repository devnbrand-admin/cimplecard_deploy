export default function SignIn() {
  return (
    <form className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Email"
        className="p-2 border rounded w-full"
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 border rounded w-full"
        required
      />
      <button
        type="submit"
        className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Sign In
      </button>
      <button
        type="button"
        className="w-full p-2 text-blue-500 border rounded hover:bg-gray-100"
      >
        Sign in with Google
      </button>
    </form>
  );
}
