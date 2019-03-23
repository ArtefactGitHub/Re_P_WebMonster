module Api
  module V1
    class MonstersController < ApplicationController
      def index
        render json: Monster.all
      end
    end
  end
end
