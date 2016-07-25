class Ticket < ActiveRecord::Base
  belongs_to :organization
  has_one :service
  has_one :truck
  has_one :product
  has_one :address, :as => :addressable
  accepts_nested_attributes_for :address
end
