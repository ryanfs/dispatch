class CustomersController < ApplicationController

  def index
    @customers = Customer.all
  end

  def show
  end

  def new
    @customer = Customer.new
    @customer.build_address
  end

  def create
    @customer = Customer.new(customer_params)
    @customer.organization = current_user.organization
    @customer.save
    if @customer.save
      redirect_to @customer, notice: 'Customer was successfully created.'
    else
      render action: 'new'
    end
  end

  private

  def customer_params
    params.require(:customer).permit(:title, :company, :contact_person, :notes)
  end

end
