SourceDir      = "source"    # source file directory
PublicDir      = "public"    # public file directory
DeployDir      = "_deploy"    # deploy file directory
repo_url = "git@github.com:logdown/themes.git"



task :generate do
  system "jekyll build --source #{SourceDir}/ --destination #{PublicDir}/"

  Dir.entries("#{SourceDir}").select do |theme|
    if File.directory?("#{SourceDir}/#{theme}") && !(theme =='.' || theme == '..')
      puts theme
      system "compass compile --css-dir #{PublicDir}/#{theme}/stylesheets" +
        " --sass-dir #{SourceDir}/#{theme}/_sass" +
        " --images-dir #{PublicDir}/#{theme}/images" +
        " --fonts-dir #{PublicDir}/#{theme}/fonts" +
        " --relative-assets" +
        " --output-style compressed"
    end
  end
end

task :watch, :theme do |t, args|
  theme = args[:theme]

  if File.directory?("#{SourceDir}/#{theme}") && !(theme =='.' || theme == '..')
    puts "Watching Theme: #{theme}\n"
    system "compass watch --css-dir #{PublicDir}/#{theme}/stylesheets" +
      " --sass-dir #{SourceDir}/#{theme}/_sass" +
      " --images-dir #{PublicDir}/#{theme}/images" +
      " --fonts-dir #{PublicDir}/#{theme}/fonts" +
      " --relative-assets"
  end
end


task :new do |t, args|


  name = get_stdin("Enter a name for your new theme: ")
  name = theme_name_sanitize(name)

  if !validate_theme_name(name)
    abort "invalid theme name: #{name}"
  end

  puts "Creating new theme: #{name}"

  mkdir "#{SourceDir}/#{name}"

  cd "#{SourceDir}/#{name}" do
    mkdir "images"
    mkdir "javascripts"
    mkdir "stylesheets"
    mkdir "_sass"

    sh "touch index.liquid"
  end

end





task :deploy do
  if /nothing to commit/ !~ `git status`
    abort "Directory not clean, please commit and push it first"
  end

  system "git fetch"

  push_testing = `git diff --stat origin/master`

  if push_testing.length > 0
    abort "Some commits not push, please push it first"
  end


  cd DeployDir do
    system "git pull"
  end

  (Dir["#{DeployDir}/*"]).each { |f| rm_rf(f) }

  Rake::Task[:generate].execute

  cp_r "#{PublicDir}/.", DeployDir

  cd "#{DeployDir}" do
    system "git add -A"
    puts "\n## Commiting: Site updated at #{Time.now.utc}"
    message = "Site updated at #{Time.now.utc}"
    system "git commit -m \"#{message}\""
    puts "\n## Pushing generated #{DeployDir} website"
    system "git push origin gh-pages"
    puts "\n## Github Pages deploy complete"
  end
end

task :setup_github_pages do
  rm_rf DeployDir
  mkdir DeployDir

  cd DeployDir do
    system "git init"
    system "git remote add origin #{repo_url}"
    system "git fetch origin"
    system "git checkout gh-pages"
  end
end




def get_stdin(message)
  print message
  STDIN.gets.chomp
end

def theme_name_sanitize(name)
  name = name.downcase
  name.gsub!(/[^a-z-]/, "_")

  return name
end

def validate_theme_name(name)
  if !name
    return false
  end

  if File.directory?("#{SourceDir}/#{name}")
    return false
  end

  return true
end


