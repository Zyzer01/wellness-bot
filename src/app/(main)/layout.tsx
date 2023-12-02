import Navbar from "../../components/Nav";

export default function FullLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
