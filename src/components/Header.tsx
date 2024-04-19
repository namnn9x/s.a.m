import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'

export function Header() {
  const date = new Date()
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <div className='flex items-center'>
            <Logo className="h-12 w-auto text-slate-900" />
            <span className='font-black text-4xl text-[#4EBA52]'> S.<span className='text-[#0D5CA5]'>A</span>.M </span>
          </div>
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-blue-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              <time>{date.getDate()}</time>-<time>{date.getMonth() + 1}</time>-
              <time>{date.getFullYear()}</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p>Ha Noi</p>
          </div>
        </div>
      </Container>
    </header>
  )
}
