# Logdown Theme Genetator

## Install

``` bash

git clone 

bundle install

rake setup_github_pages

```

## Folder & Convention

```
.
├── deploy    # For github deploy, don't directly edit it.
├── public    # For github deploy, don't directly edit it.
├── source    # Edit you templates here
    ├── your_theme
        ├── font
        ├── images
        ├── javascripts
        ├── stylesheets
        ├── _sass    # Placing your sass file here, will compiling to public/your_theme/stylesheets
        ├── index.liquid

```




## Compile source to public

``` bash

rake generate

```

## Preview Result

``` bash

powder link

powder open

```

## Deploy

```bash

rake deploy

```