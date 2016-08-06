Rails.application.routes.draw do
  root to: 'application#angular'
  resources :customers

  resources :tickets, only: [:create, :index, :show] do
    resources :organizations, only: [:create, :index, :show] do
    resources :customers
  end
  end

end

