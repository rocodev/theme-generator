# Logdown Theme Genetator

## Install

``` bash
git clone 
bundle install
rake setup_github_pages
```

## Create a new theme

After install, you can create a new theme by typing `rake new`:

``` bash
$ rake new 
Enter a name for your new theme: theme_name  # Type you theme name here
```

If the name of your theme is valid, then you will see the new theme `./source/theme_name` created.



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


## Folder & Convention

```
.
├── _deploy    # For github deploy, don't directly edit it.
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
