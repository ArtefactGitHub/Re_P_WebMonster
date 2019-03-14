class TodosController < ApplicationController
  def index
    @todos = Todo.all
    render json: @todos
  end

  def create
    @todo = Todo.create(params[:todo])
    render json: @todo
  end

  def update
    @todo = Todo.find(params[:id])
    @todo.update(params[:todo])
    render json: @todo
  end

  def destroy
    @todo = Todo.find(params[:id])
    if @todo.destroy
      head :no_content, status: :ok
    else
      render json: todo.errors, status: :unprocessable_entity
    end
  end
end
