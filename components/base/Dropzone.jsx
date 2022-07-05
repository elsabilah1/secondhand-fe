import { useDropzone } from 'react-dropzone'

export default function Dropzone({ children, maxFiles, onDrop, multiple }) {
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
