class User < ActiveRecord::Base
  belongs_to :organization
  #before_create assign_test_org
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  private

  def assign_test_org
    self.organization << Organization.find(1)
  end

end
