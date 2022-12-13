import React from "react";
import Layout from "../components/Layout";
import handler from "./api/hello";

export default function register() {
  return (
    <div>
      <Layout title="Create Account">
        <form onSubmit={handler}>
          <div className="mb-4">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" autoFocus />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" autoFocus />
          </div>
          <div className="mb-4">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="name" autoFocus />
          </div>
          <div className="mb-4">
            <label htmlFor="teamName">Team Name</label>
            <input type="text" id="teamName" autoFocus />
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" autoFocus />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input type="text" id="password" autoFocus />
          </div>
          <button type="submit">Submit</button>
        </form>
      </Layout>
    </div>
  );
}
