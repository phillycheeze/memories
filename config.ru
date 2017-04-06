require "bundler/setup"
require 'rack/contrib'
require 'rack-rewrite'

use Rack::Static, :urls => ['/assets', 'index.html'], :root => "./", :index => 'index.html'
use Rack::ETag
use Rack::Rewrite do
  rewrite '/', '/index.html'
end
run Rack::NotFound.new('index.html')
#run Rack::Directory.new('./')