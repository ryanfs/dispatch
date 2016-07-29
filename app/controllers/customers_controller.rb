class CustomersController < ApplicationController

  def index
    @customers = Customer.all
  end

  def show
  end

  def new
    @customers = Customer.all
    @customer = Customer.new
    @customer.create_address
  end



  def create
    @customer = Customer.new(customer_params)
    @customer.organization = current_user.organization
    @customer.address = Address.new(customer_params['address_attributes'])
    if @customer.save
      redirect_to @customer, notice: 'Customer was successfully created.'
    else
      render action: 'new'
    end
  end

  private

  def customer_params
    params.require(:customer).permit(:title, :company, :contact_person, :notes, address_attributes: [:line1, :line2, :city, :state, :zip])
  end

end
