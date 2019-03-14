class TodosController < ApplicationController
  def index
    @todos = Todo.all
    render json: @todos
  end

  def create
    @todo = Todo.create(todo_params)
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

  private

  def todo_params
    params.require(:todo).permit(:title, :description, :priority, :deadline)
  end
end
