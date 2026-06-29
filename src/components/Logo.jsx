export const Logo = ({ light = false, className = '' }) => {
  const text = light ? '#ffffff' : '#0f5e3a'
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src="/images/logo.svg" alt="Havena logo" className="size-18 shrink-0" />
    
    </div>
  )
}