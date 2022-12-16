import React from "react";
import Layout from "../components/Layout";

export default function login() {
  return (
    <div>
      <Layout title="Create Account">
        <form className="bg-zinc-700 rounded-lg p-3">
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              className="bg-zinc-600 rounded-lg p-2"
              type="text"
              id="email"
              autoFocus
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              className="bg-zinc-600 rounded-lg p-2"
              type="text"
              id="password"
              autoFocus
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </Layout>
    </div>
  );
}
