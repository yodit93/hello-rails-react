Rails.application.routes.draw do
  get 'greeting', to: 'greetings#random_greeting'
  root 'root#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
