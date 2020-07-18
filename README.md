# Jekyll Starter

> Starting point for Jekyll sites using [Tailwind CSS](https://tailwindcss.com/)
and [Alpine.js](https://github.com/alpinejs/alpine/).

[![Use this template](https://img.shields.io/badge/template-Generate-green?style=for-the-badge)](https://github.com/mloberg/jekyll-starter/generate)
[![Unlicense](https://img.shields.io/badge/license-Unlicense-blue?style=for-the-badge)](https://choosealicense.com/licenses/unlicense/)

## Getting Started

You'll need [Ruby](https://www.ruby-lang.org/en/), [Bundler](https://bundler.io/),
and [Node.js](https://nodejs.org/en/) installed. Then install build dependencies
with

    npm install

_Tip_: Be sure to commit the generated `package-lock.json` and `Gemfile.lock` files.

Then to build and serve the dev site, run

    npm start

## What's Included

This is not a Jekyll theme. It's a starting point to create a website using
[Jekyll](https://jekyllrb.com/), [Tailwind CSS](https://tailwindcss.com/), and
[Alpine.js](https://github.com/alpinejs/alpine/). The layout includes almost
nothing, allowing you to start building right away instead of having to remove
code you won't use.

If you want to start creating posts and pages, we've included the
[Jekyll::Compose](https://github.com/jekyll/jekyll-compose) plugin.

    bundle exec jekyll page "My New Page"
    bundle exec jekyll post "My New Post"

## Deploying

Includes configuration for deploying to [Netlify](https://www.netlify.com/) and
[GitHub Pages](https://pages.github.com/) (via GitHub Actions).
