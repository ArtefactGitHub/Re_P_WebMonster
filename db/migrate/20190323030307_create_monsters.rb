class CreateMonsters < ActiveRecord::Migration[5.2]
  def change
    create_table :monsters do |t|
      t.string :name, null: false, limit: 20
      t.text :description, limit: 100
      t.integer :hp, default: 0
      t.integer :wp, default: 0
      t.integer :attack, default: 0
      t.integer :defense, default: 0
      t.integer :speed, default: 0
      t.integer :intelligence, default: 0

      t.timestamps
    end
  end
end
