import { PropChildren } from "../../interfaces/app_interfaces"

interface HookSectionProps extends PropChildren {
  title: string,
  desc: string,
}

export const HookSection = ({children, title, desc}: HookSectionProps) => {
  return (
    <div className='py-8 flex flex-col gap-4 border-y-2'>
      <h1 className='font-bold'>{title}</h1>
      <p className="font-semibold text-[20px]">{desc}</p>
      <div className="w-3/5 mx-auto flex flex-col gap-4">
      {children}
      </div>
    </div>
  )
}
