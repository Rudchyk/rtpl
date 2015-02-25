# All gems that are required for this extension to work should go here.
# These are the requires you would normally put in your config.rb file
# By default, you should always included Compass. Do not include your
#  extension.
require 'compass'

Compass.add_project_configuration(File.join(File.dirname(__FILE__), 'config.rb'))

# This tells Compass what your Compass extension is called, and where to find
#  its files
# Replace 'extension' with the name of your extension. Spaces allowed.

extension_path = File.expand_path(File.join(File.dirname(__FILE__), ".."))

Compass::Frameworks.register(
    'rtpl-compass',
    :path => extension_path
)


# Version and date of version for your Compass extension.
# Replace Extension with the name of your extension
#  Letters, numbers, and underscores only
#  Version is a number. If a version contains alphas, it will be created as
#    a prerelease version
#  Date is in the form of YYYY-MM-DD
module Extension
  VERSION = "1.0"
  DATE = "2015-02-25"
end

module Compass
  module AppIntegration
    module StandAlone
      module ConfigurationDefaults
        def default_project_type
          :stand_alone
        end

        def javascripts_dir_without_default
          "js"
        end

        def css_dir_without_default
          "css"
        end

      end

    end
  end
end

# This is where any custom SassScript should be placed. The functions will be
#  available on require of your extension without the need for users to import
#  any partials. Uncomment below.

# module Sass::Script::Functions

# end