import { ChevronDown } from 'lucide-react'
import nivoLogo from '../assets/logo-nivo.svg'
import { Badge } from './ui/badge'

export function Header() {
  return (
    <div className="max-w-[1200px] mx-auto flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2.5">
          <img src={nivoLogo} alt="nivo.video" />

          <Badge variant='ghost'>BETA</Badge>
        </div>

        <svg
          width="6"
          height="16"
          viewBox="0 0 6 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.18372"
            y1="15.598"
            x2="5.32483"
            y2="0.143194"
            className="stroke-zinc-700"
          />
        </svg>

        <div className="flex items-center gap-2.5">
          <img
            src={nivoLogo}
            className="size-4 "
            alt=""
          />

          <span className="text-sm font-medium text-zinc-100">Nivo</span>

          <Badge variant="primary">PRO</Badge>

          <ChevronDown className="text-zinc-600 size-4" />
        </div>

        <svg
          width="6"
          height="16"
          viewBox="0 0 6 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.18372"
            y1="15.598"
            x2="5.32483"
            y2="0.143194"
            className="stroke-zinc-700"
          />
        </svg>

        <div className="flex items-center gap-2.5">
          <span className="text-sm font-medium text-zinc-100">Videos</span>

          <ChevronDown className="text-zinc-600 size-4" />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end gap-0.5">
          <span className="text-sm font-medium">Nivo</span>
          <span className="text-xs text-zinc-400">nivo@nivo.video</span>
        </div>
        <div className='border border-zinc-800 p-2 rounded-full'>
        <img
          src={nivoLogo}
          className="size-5 "
          alt=""
        />
        </div>
        <ChevronDown className="size-4 text-zinc-600" />
      </div>
    </div>
  )
}