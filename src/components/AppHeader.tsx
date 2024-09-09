import ThemeToggle from "./ThemeToggle";

function AppHeader() {
  return (
    <header className="app-header" role="banner">
      <h1>Manage your duties</h1>
      <ThemeToggle />
    </header>
  );
}
export default AppHeader;
