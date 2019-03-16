class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.string :title, null: false, limit: 20
      t.text :description, limit: 100
      t.integer :state, default: 0
      t.integer :priority, default: 0
      t.datetime :deadline

      t.timestamps
    end
  end
end
