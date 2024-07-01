const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="bg-black text-yellow-50">
        Shared nav segment
      </nav>
      {children}
    </div>
  )
}

export default DashboardLayout;