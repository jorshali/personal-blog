import Avatar from './Avatar'
import DateFormatter from './DateFormatter'
import CoverImage from './CoverImage'
import PostTitle from './PostTitle'
import type Author from '../interfaces/author'
import markdownStyles from './markdown-styles.module.css';

type Props = {
  title: string;
  subtitle: string;
  coverImage: string;
  coverImageAttribution: string;
  date: string;
  author: Author;
}

const PostHeader = ({ title, subtitle, coverImage, coverImageAttribution, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>

      <div className="flex items-center mb-8">
        <h2 className="text-1xl md:text-2xl lg:text-2xl tracking-tighter leading-tight md:leading-none text-center md:text-left text-gray-600">{subtitle}</h2>
      </div>

      <div className="flex items-center mb-8">
        <img src={author.picture} className="w-12 h-12 rounded-full mr-4" alt={author.name} />
        <DateFormatter dateString={date} />
      </div>
      
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
        <div
          className={markdownStyles['markdown'] + ' text-xs mt-2 text-gray-600 text-center'}
          dangerouslySetInnerHTML={{ __html: coverImageAttribution }}
        />
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
        </div>
      </div>
    </>
  )
}

export default PostHeader
