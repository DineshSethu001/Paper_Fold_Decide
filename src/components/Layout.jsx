const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat">
      {children}
    </div>
  )
}

export default Layout
