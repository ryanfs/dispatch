class CustomersController < ApplicationController

  def index
    @customers = Customer.all
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
    @customer.address = Address.new(address_params)
    @customer.save
    respond_with @customer
  end

  private

  def customer_params
    params.require(:customer).permit(:title, :company, :contact_person, :notes)
  end

  def address_params
    params.permit(:line1, :line2, :city, :state, :zip)
  end

end
