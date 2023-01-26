import Head from "next/head";

import Container from "../components/Container";
import { IconList } from "../components/IconList";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import PostPreviews from "../components/PostPreviews";
import PoweredBy from "../components/PoweredBy";
import { ProfileLinks } from "../components/ProfileLinks";
import { Section } from "../components/Section";
import SectionSeparator from "../components/SectionSeparator";
import { UnsubscribeForm } from "../components/UnsubscribeForm";

import {
  HERO_TITLE,
  PROFILE_ABOUT_TEXT,
  PROFILE_IMAGE_LOCATION,
  SITE_NAME,
} from "../lib/constants";

export default function Unsubscribe() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`${SITE_NAME} | ${HERO_TITLE}`}</title>
        </Head>

        <Section>
          <UnsubscribeForm />
        </Section>
      </Layout>

      <PoweredBy />
    </>
  );
}