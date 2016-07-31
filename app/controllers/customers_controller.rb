class CustomersController < ApplicationController

  def index
    respond_with Customer.all
  end

  def show
    respond_with Customer.find(params[:id])
  end

  def new
    @customers = Customer.all
    @customer = Customer.new
  end

  def create
    @customer = Customer.new(customer_params)
    @customer.organization = current_user.organization
    @customer.create_address
    @customer.address = Address.new(customer_params['address_attributes'])
    @customer.save
    respond_with @customer
  end

  private

  def customer_params
    params.require(:customer).permit(:title, :company, :contact_person, :notes, address_attributes: [:line1, :line2, :city, :state, :zip])
  end

end
