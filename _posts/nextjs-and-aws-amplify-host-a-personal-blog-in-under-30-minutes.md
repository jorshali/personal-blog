---
title: 'Host a portfolio site with Next.js and AWS in under 30 minutes'
excerpt: 'A tutorial where you can learn how to use Next.js with AWS while actually building something useful.'
coverImage: '/assets/blog/nextjs-and-aws-amplify-host-a-personal-blog-in-under-30-minutes/sergio-capuzzimati-Ihml-Sigf6s-unsplash.jpg'
coverImageAttribution: 'Photo by <a href="https://unsplash.com/@sergio_capuzzimati?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sergio Capuzzimati</a> on <a href="https://unsplash.com/photos/Ihml-Sigf6s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
date: '2023-01-28T07:00:00.000Z'
ogImage:
  url: '/assets/blog/nextjs-and-aws-amplify-host-a-personal-blog-in-under-30-minutes/sergio-capuzzimati-Ihml-Sigf6s-unsplash.jpg'
---

We've all said it:

- I want to setup a portfolio site
- I want to learn Next.js
- I want to try out AWS Amplify

How can I do it all?

Here's your chance.  Finally, a tutorial where you learn while actually building something useful.

By the end of this article, you'll have your own portfolio site, built with Next.js, and hosted on AWS.  As an encore, I'll even show you how to [setup a subscriber service](https://jacoborshalick.me/posts/build-a-subscriber-rest-api-on-aws-in-under-30-minutes) and [your own custom domain](https://jacoborshalick.me/posts/configure-a-custom-domain-for-your-aws-amplify-app) so you can share it with the world.  It's never been easier to start some self-promotion.

Need proof?  This site was created using the steps shown here.

So let's get your portfolio site built!

## Before you get started

You'll need a few things.  You may already have some of them:

- [Setup an AWS Account](https://aws.amazon.com)
- [Install Node.js](https://nodejs.org)
- [Install Next.js](https://nextjs.org)
- Supported Git provider (e.g. [GitHub](https://github.com))

This tutorial assumes you have some JavaScript development experience.  It also assumes you are comfortable working in the terminal and using Git.  Outside of that, the tutorial will walk you through what you need to know.

## About the personal site starter

The [personal site starter](https://github.com/jorshali/personal-site-starter) creates a site that includes:

- professional information
- links to your online presence
- ability to subscribe
- blog posts
- responsiveness for mobile
- easy modification

You can see an example at [https://jacoborshalick.me](https://jacoborshalick.me).

The application was built with [Next.js](https://nextjs.org) and [Tailwind](https://tailwindcss.com).  The starter is a custom template inspired by the following projects:

- [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter)
- [Next-JS-Landing-Page-Starter-Template](https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template)


You can expect your site to be extremely performant.  My example site gets a near perfect Lighthouse score. 

![lighthouse score](/assets/images/lighthouse_score.png "Near perfect Lighthouse score")

Now let's get started.

## Retrieve the personal site starter

Start by running [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init):

```
npx create-next-app --example https://github.com/jorshali/personal-site-starter personal-site-starter-app
```

Once this completes, simply run:

```bash
npm run dev
```

Now your personal site starter should be up and running on [http://localhost:3000](http://localhost:3000)!

## Customize the project

You don't want my face and name on your blog.  Let's fix that.  Open the following file in your favorite editor:

`src/lib/constants.ts`

Here's how the constants modify the landing page:

![site_1](/assets/blog/nextjs-and-aws-amplify-host-a-personal-blog-in-under-30-minutes/site_1.png "Site constants for hero landing page")

The __About Me__ section can be customized with the following constants:

![site_2](/assets/blog/nextjs-and-aws-amplify-host-a-personal-blog-in-under-30-minutes/site_2.png "Site constants for About Me section")

And finally, here's how the constants modify the footer:

![site_3](/assets/blog/nextjs-and-aws-amplify-host-a-personal-blog-in-under-30-minutes/site_3.png "Site constants for articles and footer")

Now let's see how the new blog posts can be added in the `_posts` directory.

## Adding blog posts

All blog posts are stored in `/_posts` as Markdown files.  If you're unfamiliar with the Markdown format you can [learn about it here](https://www.markdownguide.org/basic-syntax/).  The Markdown is converted to HTML and displayed to the page.

The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.  
As an example, [here is the markdown](https://github.com/jorshali/personal-site-starter/blob/main/_posts/nextjs-and-aws-amplify-host-a-personal-blog-in-under-30-minutes.md?plain=1) (with metdata) for the post your reading now.

You'll see examples in the starter, but you should define the following at the top of every markdown file:

```
---
title: 'My new blog post'
excerpt: 'This is the latest technology I have been learning'
coverImage: '/assets/blog/my-new-blog-post/image.jpg'
coverImageAttribution: 'Photo by John Doe on Unsplash'
date: '2023-01-20T07:00:00.000Z'
ogImage:
  url: '/assets/blog/my-new-blog-post/image.jpg'
---
```

When a Markdown file is added, simply reload the landing page to see your new post.

## Commit your project to a public Git repository

Commit your code to Git, then push your repository to the provider of your choice.  Amplify supports:

- [GitHub](https://github.com)
- [GitLab](https://about.gitlab.com)
- [Bitbucket](https://bitbucket.org)
- [AWS CodeCommit](https://aws.amazon.com/codecommit/)

## Now let's deploy to AWS Amplify

Open the AWS Console, search for AWS Amplify, and open it.  If you have not created an Amplify app before, simply scroll to the bottom of the page and select: 

__Amplify Hosting
\> Host your web app > Get started__

If you have created an app before, select:

__New app > Host web app__

Now choose your Git repository provider and select __Continue__.

![screenshot_1](/assets/blog/nextjs-and-aws-amplify-host-a-personal-blog-in-under-30-minutes/screenshot_1.png "Fig 2.  Choose your Git repository provider")

For most Git providers, you will be prompted to allow Amplify Hosting access to your repositories.  Once you authorize access, choose the repository for the starter app and select __Next__.

![screenshot_2](/assets/blog/nextjs-and-aws-amplify-host-a-personal-blog-in-under-30-minutes/screenshot_2.png "Fig 3.  Choose your Git repository")

Amplify will automatically detect the correct build settings.  Simply select __Next__ to accept the default settings.

![screenshot_3](/assets/blog/nextjs-and-aws-amplify-host-a-personal-blog-in-under-30-minutes/screenshot_3.png "Fig 4.  Accept the default build settings")

When you reach the Review page, simply select __Save and Deploy__.

![screenshot_4](/assets/blog/nextjs-and-aws-amplify-host-a-personal-blog-in-under-30-minutes/screenshot_4.png "Fig 5.  Review the settings and deploy")

At this point, Amplify will build the project and deploy it. Expect to wait about 2–3 minutes for the build to complete.  You can monitor progress in the Amplify console.

![screenshot_5](/assets/blog/nextjs-and-aws-amplify-host-a-personal-blog-in-under-30-minutes/screenshot_5.png "Fig 6.  Monitor the build progress")

Any change to the branch you selected during setup will now result in a new build and deployment.  You can always return to the Amplify console to see the progress of a build or view the logs if a build fails.

## View your site live on AWS

That's it!  Your professional site is now live.  You can access your site from the __Domain__ link in the project build details.

If you run into any issues along the way, feel free to ask questions or post issues at:  [personal-site-starter](https://github.com/jorshali/personal-site-starter).

## What's next?

In the following posts, I'll show you how to track subscribers in AWS and how to setup a custom domain:

- Part 2: [Start tracking your subscribers in AWS in under 30 minutes](https://jacoborshalick.me/posts/build-a-subscriber-rest-api-on-aws-in-under-30-minutes)
- Part 3: [Configure a custom domain for your AWS Amplify App](https://jacoborshalick.me/posts/configure-a-custom-domain-for-your-aws-amplify-app)

Setting up subscribers is optional.  If you aren't ready for that just yet, you can disable subscribers in `src/lib/constants.ts`.  Simply set `SUBSCRIBE_ENABLED` to `false`.

You can now register a custom domain and connect it through [Route 53](https://aws.amazon.com/route53/) in AWS.  That way you can share your new portfolio site with the world.