class Todo < ApplicationRecord
  validates :title, presence: true, length: { maximum: 20 }
  validates :description, length: { maximum: 100 }
end
