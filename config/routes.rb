Grabmycard::Application.routes.draw do
  resources :cards
  resources :user_sessions
  resources :users
  match '/' => 'users#index', :constraints => { :subdomain => /.+/ }
  match '/' => 'users#index'
  match 'users/:id/edit' => 'users#edit'
  match 'login' => 'user_sessions#new', :as => :login
  match 'logout' => 'user_sessions#destroy', :as => :logout
  match 'index' => 'users#index', :as => :index
  match '/:controller(/:action(/:id))'
end
