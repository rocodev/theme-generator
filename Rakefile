source_dir      = "source"    # source file directory
public_dir      = "public"    # source file directory



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