Rails.application.routes.draw do
  namespace :api, format: 'json' do
    namespace :v1 do
      resources :monsters, only: %i[index]
    end
  end
end
