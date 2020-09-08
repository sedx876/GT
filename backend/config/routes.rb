Rails.application.routes.draw do  
  
  namespace :api do
    namespace :v1 do
      resources :locations
      resources :users
      resources :visits
      resources :trips
      resources :comments
      resources :attractions
    end
  end
end
