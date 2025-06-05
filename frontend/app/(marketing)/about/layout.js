export default function RootLayout({ children }) {
  return (
    <>
        <header style={{ background: "green"}}>Header (App)</header>
        {children}
        <footer style={{ background: "brown"}}>Footer (App)</footer>
    </>
  );
}