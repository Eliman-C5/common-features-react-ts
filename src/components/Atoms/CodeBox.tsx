import { PropChildren } from "../../interfaces/app_interfaces"

export const CodeBox = ({children}: PropChildren) => {
  return (
    <code className='rounded-lg pl-8 py-4 block bg-black text-left'>
        <div className="">
          {children}
        </div>
    </code>
  )
}
