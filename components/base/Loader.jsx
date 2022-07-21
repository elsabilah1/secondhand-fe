const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 grid h-screen w-screen place-items-center bg-black/60">
      <div className="animate-pulse text-3xl text-white">loading...</div>
    </div>
  )
}

export default Loader
