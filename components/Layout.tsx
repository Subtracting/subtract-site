import Header from './Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-8">
        {children}
      </main>
    </>
  )
}

