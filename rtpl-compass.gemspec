# Replace extension with the name of your extension's .rb file
require './lib/rtpl-compass'

Gem::Specification.new do |s|
  # Release Specific Information
  #  Replace Extension with the name you used in your extension.rb
  #   in the mdodule with version and date.
  s.version = Extension::VERSION
  s.date = Extension::DATE

  # Gem Details
  # Replace "extension" with the name of your extension
  s.name = "rtpl-compass"
  s.rubyforge_project = "rtpl-compass"
  # Description of your extension
  s.description = %q{A compass template (Sass syntax) implementation of Sergii Rudchyk's}
  # A summary of your Compass extension. Should be different than Description
  s.summary = %q{Sergii Rudchyk's compass template}
  # The names of the author(s) of the extension.
  # If more than one author, comma separate inside of the brackets
  s.authors = ["Sergii Rudchyk"]
  # The email address(es) of the author(s)
  # If more than one author, comma separate inside of the brackets
  s.email = ["sergii.rudchyk@gmail.com"]
  # URL of the extension
  s.homepage = 'http://rtpl.viking-r.pp.ua/'
  s.licenses = ['MIT']

  # Gem Files
  # These are the files to be included in your Compass extension.
  # Uncomment those that you use.

  # README file
  s.files = ["README.md"]

  # CHANGELOG
  # s.files += ["CHANGELOG.md"]

  # Library Files
  s.files += Dir.glob("lib/**/*.*")

  # Sass Files
  # s.files += Dir.glob("stylesheets/**/*.*")

  # Template Files
  s.files += Dir.glob("templates/**/*.*")

  # Gem Bookkeeping
  # Versions of Ruby and Rubygems you require
  s.required_rubygems_version = ">= 2.4.5"
  s.rubygems_version = %q{2.4.5}

  # Gems Dependencies
  # Gem names and versions that are required for your Compass extension.
  # These are Gem dependencies, not Compass dependencies. Including gems
  #  here will make sure the relevant gem and version are installed on the
  #  user's system when installing your gem.
  # s.add_dependency('sass')
  # s.add_dependency('compass')
end
