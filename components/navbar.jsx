import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-preto py-4 w-full flex justify-around">
      <div className="text-lg">
        <Link href="/">Jónatas Roque</Link>
      </div>
      <div className="flex justify-between">
        <div className="mx-4">
          <Link href="/teste1">Teste1</Link>
        </div>
        <div className="mx-4"><Link href="/teste2">Teste2</Link></div>
        <div className="mx-4">Teste3</div>
      </div>
    </nav>
  );
};
export default Navbar;
