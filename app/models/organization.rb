class Organization < ActiveRecord::Base
  has_many :users
  has_many :addresses
  has_many :tickets
  has_many :products
  has_many :services
  has_many :trucks
  has_many :customers
end
