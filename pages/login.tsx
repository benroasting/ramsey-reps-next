import React from "react";
import Layout from "../components/Layout";

export default function login() {
  return (
    <div>
      <Layout title="Create Account">
        <form onSubmit={handler}>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" autoFocus />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input type="text" id="password" autoFocus />
          </div>
          <button type="submit">Login</button>
        </form>
      </Layout>
    </div>
  );
}
