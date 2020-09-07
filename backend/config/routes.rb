Rails.application.routes.draw do  
  resources :visits
  resources :trips
  resources :comments
  resources :attractions
  namespace :api do
    namespace :v1 do
      resources :locations
      resources :users
    end
  end
end
