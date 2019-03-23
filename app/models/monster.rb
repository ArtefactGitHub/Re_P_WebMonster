class Monster < ApplicationRecord
  validates :name, presence: true, length: { maximum: 20 }
  validates :description, presence: true, length: { maximum: 100 }
  validates :hp, numericality:      { only_integer: true, greater_than_or_equal_to: 1}
  validates :wp, numericality:      { only_integer: true, greater_than_or_equal_to: 1}
  validates :attack, numericality:  { only_integer: true, greater_than_or_equal_to: 1}
  validates :defense, numericality: { only_integer: true, greater_than_or_equal_to: 1}
  validates :speed, numericality:   { only_integer: true, greater_than_or_equal_to: 1}
  validates :intelligence, numericality: { only_integer: true, greater_than_or_equal_to: 1}
end
