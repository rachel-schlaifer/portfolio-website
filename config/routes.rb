Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"

  root 'home#index'
  get 'contact', to: 'home#contact'
  post 'send_message', to: 'home#send_message'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
