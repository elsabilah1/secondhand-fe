import { useDropzone } from 'react-dropzone'

const Dropzone = ({ children, maxFiles, onDrop, multiple }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles,
    multiple,
  })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {children}
    </div>
  )
}

export default Dropzone
