import { useScroll, useTransform, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function Timeline({ data, title, subtitle }) {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(Math.max(0, rect.height - 48))
    }
  }, [ref])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div
      className="w-full bg-white/70 dark:bg-slate-950 font-sans md:px-10 rounded-3xl border border-slate-200/60 dark:border-slate-800/60"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-4xl mb-3 text-slate-900 dark:text-white max-w-4xl font-serif">
          {title}
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base max-w-2xl">
          {subtitle}
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-12">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-24 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-10 items-center top-28 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-slate-500 dark:text-slate-400">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-slate-500 dark:text-slate-400">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{ height: `${height}px` }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-slate-200 dark:via-slate-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-600 via-blue-400 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  )
}
