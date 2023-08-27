import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 w-screen h-20 bg-slate-100 flex justify-between p-4 pr-8 items-center shadow-md">
      <div>Logo</div>
      <ul className="flex gap-8">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/api/auth/signin">Sign In</Link>
        </li>
        <li>
          <Link href="/api/auth/signout">Sign Out</Link>
        </li>
        <li>
          <Link href="/server">Server</Link>
        </li>
        <li>
          <Link href="/client">Client</Link>
        </li>
        <li>
          <Link href="/extra">Extra</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
