import toast, { Toaster } from 'react-hot-toast'

const notify = () =>
  toast.success('Here is your toast.', { className: 'font-bold text-success' })

const AlertExample = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster containerClassName="px-10 py-2 font-bold" />
    </div>
  )
}

export default AlertExample
