### Dev portfolio # dev-portfolio

Step 5. Set up environment variables
Follow the instructions in this post to generate a new access token.

Next, copy the .env.local.example file in this directory to .env.local (which will be ignored by Git):

cp .env.local.example .env.local
Then set each variable on .env.local:

PRISMIC_API_TOKEN should be the Permanent access token you just created
PRISMIC_REPOSITORY_NAME is the name of your repository (the one in the URL)
PRISMIC_REPOSITORY_LOCALE is the locale of your repository. Defaults to en-us
Your .env.local file should look like this:

PRISMIC_API_TOKEN=...
PRISMIC_REPOSITORY_NAME=...
PRISMIC_REPOSITORY_LOCALE=...
Make sure the locale matches your settings in the Prismic dashboard.
