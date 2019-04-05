module Api
  module V1
    class MonstersController < ApplicationController
      before_action :authenticate_user!, except: %i[index]

      def index
        render json: Monster.all
      end

      def create
        @monster = Monster.new(monsters_params)
        if @monster.save
          render status: 200, json: @monster
        else
          render status: 500, json: { status: 500,
                                      message: 'Internal Server Error',
                                      errors: {
                                        full_messages: @monster&.errors&.full_messages
                                      }
                                    }
        end
      end

      private

      def monsters_params
        params.permit(:name, :description, :hp, :wp, :attack, :defense, :speed, :intelligence, :image)
        # params.require(:monster).permit(:image, :name, :description, :hp, :wp, :attack, :defense, :speed, :intelligence)
      end
    end
  end
end
