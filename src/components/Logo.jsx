export const Logo = ({ light = false, className = '' }) => {
  const text = light ? '#ffffff' : '#0f5e3a'
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
  <img 
    src="/images/logo.png" 
    alt="Havena logo" 
    className="w-[110px] h-[29px] shrink-0 object-contain"
  />
</div>
  )
}