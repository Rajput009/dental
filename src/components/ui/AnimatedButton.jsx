import { ArrowUpRight } from 'lucide-react'

function AnimatedButton({ children = "Start a Project", href = "#booking" }) {
  return (
    <a href={href} className="btn-animated group">
      <span className="btn-text">
        {children}
      </span>
      <div className="btn-icon">
        <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
        <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
      </div>
    </a>
  )
}

export default AnimatedButton
