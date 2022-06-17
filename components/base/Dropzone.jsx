import { useDropzone } from 'react-dropzone'

export default function Dropzone({ children, maxFiles, onDrop }) {
  const { getRootProps, getInputProps } = useDropzone({ onDrop, maxFiles })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {children}
    </div>
  )
}
