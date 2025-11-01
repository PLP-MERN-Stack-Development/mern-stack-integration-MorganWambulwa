import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">MERN Blog</Link>
      <div className="space-x-2">
        <Button asChild variant="default">
          <Link to="/login">Login</Link>
        </Button>
        <Button asChild variant="default">
          <Link to="/register">Register</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
