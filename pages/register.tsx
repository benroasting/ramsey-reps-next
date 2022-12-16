import React from "react";
import Layout from "../components/Layout";
import handler from "./api/hello";

export default function register() {
  return (
    <div className="block">
      <Layout title="Create Account">
        <div className="bg-zinc-700 rounded-lg p-3">
          <form>
            <div className="m-2 mb-4 block">
              <label htmlFor="firstName">First Name</label>
              <input
                className="bg-zinc-600 rounded-lg p-2"
                type="text"
                id="firstName"
                autoFocus
              />
            </div>
            <div className="m-2 mb-4">
              <label htmlFor="lastName">Last Name</label>
              <input
                className="bg-zinc-600 rounded-lg p-2"
                type="text"
                id="lastName"
                autoFocus
              />
            </div>
            <div className="m-2 mb-4">
              <label htmlFor="firstName">First Name</label>
              <input
                className="bg-zinc-600 rounded-lg p-2"
                type="text"
                id="name"
                autoFocus
              />
            </div>
            <div className="m-2 mb-4">
              <label htmlFor="teamName">Team Name</label>
              <input
                className="bg-zinc-600 rounded-lg p-2"
                type="text"
                id="teamName"
                autoFocus
              />
            </div>
            <div className="m-2 mb-4">
              <label htmlFor="email">Email</label>
              <input
                className="bg-zinc-600 rounded-lg p-2"
                type="text"
                id="email"
                autoFocus
              />
            </div>
            <div className="m-2 mb-4">
              <label htmlFor="password">Password</label>
              <input
                className="bg-zinc-600 rounded-lg p-2"
                type="text"
                id="password"
                autoFocus
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </Layout>
    </div>
  );
}
