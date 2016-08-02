Rails.application.routes.draw do
  root to: 'application#angular'

  resources :posts, only: [:create, :index, :show] do
    resources :organizations, only: [:create, :index, :show] do
    resources :customers
  end
  end

end

