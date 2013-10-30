# Logdown Theme Genetator

## Install

``` bash
$ git clone git@github.com:rocodev/theme-generator.git
$ cd theme-generator
$ bundle install
```

copy config.example.yml to config.yml, and edit the keys.

``` yml
s3_id: xxx
s3_secret: xxx
s3_bucket: cdn-theme.logdown.io
```

Then you should init git submodules if you did not clone recursively:

``` bash
git submodule init
```

## Submodule

Theme generator now uses `git submodule` to manage theme source files. The `source/` directory is now a submodule pointed to [logdown/themes][1], thus need to be commit / update individually.

### Commit theme changes

```bash
$ cd source
$ git add .
$ git commit -m "Update theme files"
$ git push origin master
```

This will push your mods back to [logdown/themes][1].

### Update theme files

If the [logdown/themes][1] has been updated (e.g. just merged a pull request,) you'll have to *update* this submodule.

```bash
$ git submodule update
```

Or go to `source/` first and do `git pull` within it:

```bash
$ cd source
$ git pull origin master
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

You can put fonts, images, javascripts and stylesheets to the folders just like the folder name.

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

### Step5. Update source submodule

Since the `source/` folder is now a submodule of [logdown/themes][1], you should commit and push any changes in the folder to its own repository.

You'll need to commit the new “HEAD position of submodule” so to ensure we get the correct commit of themes.

### Step6. Deploy

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
├── public    # For pow preview, don't directly edit it.
├── source # Submodule from logdown/themes
    ├── your_theme
        ├── font
        ├── images
        ├── javascripts
        ├── stylesheets
        ├── _sass    # Placing your sass file here, will compiling to public/your_theme/stylesheets
        ├── index.liquid
```

[1]: https://github.com/logdown/themes