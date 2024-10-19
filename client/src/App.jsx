import { Outlet } from "react-router-dom"
export default function App() {
  return (
    <>
    <header>Header</header>
    <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6">
    <Outlet />
    </main>
    <footer>Footer</footer>
      </>
  )
}