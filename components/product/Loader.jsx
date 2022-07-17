const Loader = ({ length }) => {
  let content = []

  for (let i = 0; i < length; i++) {
    content.push(
      <div
        className=" h-60  animate-pulse rounded bg-neutral-100 px-2 py-4 transition-all"
        key={i}
      >
        <div className="relative mb-3 h-32 w-full bg-neutral-200"></div>
        <div className="mb-2 h-4 bg-neutral-200" />
        <div className="mb-2 h-4 bg-neutral-200" />
        <div className="h-4 bg-neutral-200" />
      </div>
    )
  }

  return content
}

export default Loader
