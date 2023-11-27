import Nav from '@/components/Nav';

export default function FullLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
