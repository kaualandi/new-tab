export interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  className?: string;
}

export function IconButton({ icon, className, ...props }: IconButtonProps) {
  return (
    <button className={`flex items-center justify-center w-10 h-10 rounded-full bg-zinc-100/10 ${className || ''}`}
     {...props}>
      { icon }
    </button>
  )
}