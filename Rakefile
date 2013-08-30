source_dir      = "source"    # source file directory
public_dir      = "public"    # public file directory
deploy_dir      = "deploy"    # build file directory
repo_url = "git@github.com:logdown/themes.git"






task :generate do
  system "jekyll build --source #{source_dir}/ --destination #{public_dir}/"


  Dir.entries("#{source_dir}").select do |theme|
    if File.directory?("#{source_dir}/#{theme}") && !(theme =='.' || theme == '..')
      puts theme
      system "compass compile --css-dir #{public_dir}/#{theme}/stylesheets" +
        " --sass-dir #{source_dir}/#{theme}/_sass" +
        " --images-dir #{public_dir}/#{theme}/images" +
        " --fonts-dir #{public_dir}/#{theme}/fonts" +
        " --relative-assets" + 
        " --output-style compressed"
    end
  end 

end


task :deploy do
  system "cp -r #{public_dir} #{deploy_dir} "

  cd deploy_dir do 
    system "git pull"
  end

  (Dir["#{deploy_dir}/*"]).each { |f| rm_rf(f) }

  cp_r "#{public_dir}/.", deploy_dir

  cd "#{deploy_dir}" do
    system "git add -A"
    puts "\n## Commiting: Site updated at #{Time.now.utc}"
    message = "Site updated at #{Time.now.utc}"
    system "git commit -m \"#{message}\""
    puts "\n## Pushing generated #{deploy_dir} website"
    system "git push origin gh-pages"
    puts "\n## Github Pages deploy complete"
  end

end

task :setup_github_pages do
  rm_rf deploy_dir
  mkdir deploy_dir

  cd deploy_dir do
    system "git init"
    system "git remote add origin #{repo_url}"
    system "git fetch origin"
    system "git checkout gh-pages"
  end

end