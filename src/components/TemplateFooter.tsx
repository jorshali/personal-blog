import Link from 'next/link';
import { Background } from './Background';
import { CenteredFooter } from './CenteredFooter';

import { Logo } from './Logo';
import { ProfileIcons } from './ProfileIcons';
import { Section } from './Section';

const TemplateFooter = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter
        logo={<Logo />}
        iconList={
          <ProfileIcons />
        }
      >
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="#About-Me">
            About
          </Link>
        </li>
        <li>
          <Link href="#Recent-Articles">
            Articles
          </Link>
        </li>
        <li>
          <Link href="https://github.com/jorshali/personal-blog">
            GitHub
          </Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { TemplateFooter };
