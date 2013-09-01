# Logdown Theme Genetator

## Install

``` bash
$ git clone git@github.com:rocodev/theme-generator.git
$ cd theme-generator
$ bundle install
$ rake setup_github_pages
```

## Working flow


### Step1. Create a new theme

After install, you can create a new theme by typing `rake new`:

``` bash
$ rake new 
Enter a name for your new theme: theme_name  # Type you theme name here
```

If the name of your theme is valid, then you will see the new theme `./source/theme_name` created.

### Step2. Edit theme

After the theme was created. Your will see folders and files like below:

```
.
├── source    # Edit you templates here
    ├── your_theme
        ├── font
        ├── images
        ├── javascripts
        ├── stylesheets
        ├── _sass    # Placing your sass file here, will compiling to public/your_theme/stylesheets
        ├── index.liquid
```

You can put fonts, images, javascripts and stylesheets to the folders just like the folder names.

If you have `scss` file like `screen.scss` put it to the `_sass` folder: `./source/your_theme/_sass/screen.scss`,
and in the next step it will compiled to `./public/your_theme/stylesheets/screen.css`.




### Step3. Compile source to public

Generate theme form source is quite simple, just type:

``` bash
$ rake generate
```

### Step4. Preview Result

If you are using pow:

``` bash
$ powder link
$ powder open
```

Open your browser and type the url: `http://theme_generator.dev/your_theme/stylesheets/your_css_name.css`,
then you can see the compiled css file.


### Step5. Deploy

Before deploy, remember to commit and push it to master.

```bash
$ git add .
$ git commit -m "edit theme"
$ git push origin master
$ rake deploy
```

After deploy, your theme baseurl will be at `ttp://cdn-theme.logdown.io/your_theme/`
REMEMBER to edit index.liquid to using the url.


## Folders

```
.
├── _deploy    # For github deploy, don't directly edit it.
├── public    # For github deploy, don't directly edit it.
├── source
    ├── your_theme
        ├── font
        ├── images
        ├── javascripts
        ├── stylesheets
        ├── _sass    # Placing your sass file here, will compiling to public/your_theme/stylesheets
        ├── index.liquid
```
