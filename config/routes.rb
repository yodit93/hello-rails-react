Rails.application.routes.draw do
  root 'root#index'
  get 'greeting/index'
  namespace :api do
    namespace :v1 do
      get 'greeting', to: 'greetings#random'
    end
  end
end
