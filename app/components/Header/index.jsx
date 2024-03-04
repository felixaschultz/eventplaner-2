import { Link } from "@remix-run/react";
import { authenticator } from "../../services/auth.server";
import { useLoaderData } from "@remix-run/react";

export async function loader({ request }) {
    return await authenticator.isAuthenticated(request, {
        failureRedirect: "/signin"
    });
}

export default function Header() {
    const user = useLoaderData();

    console.log(user);

  return (
    <div className="grid grid-cols-2 p-8 text-slate-50 bg-slate-800">
        <Link to="/" className="decoration-transparent"><h1 className="text-3xl font-bold">Event Planer</h1></Link>
        <section className="text-right" >
            <Link className="text-right p-8" to="/login">Login</Link>
            <Link className="text-right p-8" to="/signup">Signup</Link>
        </section>
    </div>
  );
}