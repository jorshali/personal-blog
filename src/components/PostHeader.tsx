import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
  LinkedinIcon,
  TwitterIcon,
  EmailIcon
} from 'react-share';

import Avatar from './Avatar'
import DateFormatter from './DateFormatter'
import CoverImage from './CoverImage'
import PostTitle from './PostTitle'
import type Author from '../interfaces/author'
import markdownStyles from './markdown-styles.module.css';

type Props = {
  shareUrl: string;
  title: string;
  subtitle: string;
  coverImage: string;
  coverImageAttribution: string;
  date: string;
  author: Author;
}

const PostHeader = ({ shareUrl, title, subtitle, coverImage, coverImageAttribution, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>

      <div className="flex items-center mb-8">
        <h2 className="text-1xl md:text-2xl lg:text-2xl tracking-tighter leading-tight md:leading-none text-center md:text-left text-gray-600">{subtitle}</h2>
      </div>

      <div className="flex items-center mb-8">
        <img src={author.picture} className="w-12 h-12 rounded-full mr-4" alt={author.name} />
        
        <DateFormatter dateString={date} />

        <FacebookShareButton className="ml-8 hover:opacity-60" url={shareUrl}>
          <FacebookIcon size={28} bgStyle={{fill: '#a0aec0'}} />
        </FacebookShareButton>
        <LinkedinShareButton className="ml-2 hover:opacity-70" url={shareUrl}>
          <LinkedinIcon size={28} bgStyle={{fill: '#a0aec0'}} />
        </LinkedinShareButton>
        <TwitterShareButton className="ml-2 hover:opacity-70" url={shareUrl}>
          <TwitterIcon size={28} bgStyle={{fill: '#a0aec0'}} />
        </TwitterShareButton>
        <EmailShareButton className="ml-2 hover:opacity-70" url={shareUrl}>
          <EmailIcon size={28} bgStyle={{fill: '#a0aec0'}} />
        </EmailShareButton>
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
