# Portfolio Server 2019

[![Build Status](https://travis-ci.org/johnfedoruk/portfolio-server-2019.svg?branch=master)](https://travis-ci.org/johnfedoruk/portfolio-server-2019)

## Http Routes

| HTTP Verb | HTTP Path                            | Controller        | Method           |
|:---------:|:-------------------------------------|:------------------|:-----------------|
| get       | /portfolio/:id/contact               | ProfileController | getContact       |
| get       | /portfolio/:id/education             | ProfileController | getEducation     |
| get       | /portfolio/:id/gallery               | ProfileController | getGallery       |
| get       | /portfolio/:id/info                  | ProfileController | getInfo          |
| get       | /portfolio/:id/links                 | ProfileController | getLinks         |
| get       | /portfolio/:id/locations             | ProfileController | getLocations     |
| get       | /portfolio/:id/profile               | ProfileController | getProfile       |
| get       | /portfolio/:id/projects              | ProfileController | getProjects      |
| get       | /portfolio/:id/work                  | ProfileController | getWork          |
| get       | /portfolio/:id/posts                 | PostController    | listPosts        |
| get       | /portfolio/post/:id                  | PostController    | getPost          |
| get       | /github/:username/contributions      | GithubController  | getContributions |
| get       | /github/:username/graph              | GithubController  | getGraph         |
| get       | /github/:username/repositories       | GithubController  | getRepositories  |
| get       | /github/:username/:repository/readme | GithubController  | getReadme        |
| get       | /npm/:username/packages              | NpmController     | listPackages     |
| post      | /mail/:id/contact                    | MailController    | sendContactMail  |

> _**Table 1:** Http Routes_
>
> List of all API Http Routes and their Controller Invocations
