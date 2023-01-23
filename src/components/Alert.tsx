import Container from './Container'
import cn from 'classnames'
import { PERSONAL_BLOG_SOURCE_CODE } from '../lib/constants'

type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn('border-b', {
        'bg-neutral-800 border-neutral-800 text-white': preview,
        'bg-neutral-50 border-neutral-200': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          <>
            The source code for my site is{' '}
            <a
              href={PERSONAL_BLOG_SOURCE_CODE}
              className="underline hover:text-blue-600 duration-200 transition-colors"
            >
              available on GitHub
            </a>
            .
          </>
        </div>
      </Container>
    </div>
  )
}

export default Alert
