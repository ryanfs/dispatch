class Customer < ActiveRecord::Base
  belongs_to :organization
  has_one :address, :as => :addressable
  accepts_nested_attributes_for :address
end
