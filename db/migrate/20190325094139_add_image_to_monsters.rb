class AddImageToMonsters < ActiveRecord::Migration[5.2]
  def change
    add_column :monsters, :image, :string
  end
end
