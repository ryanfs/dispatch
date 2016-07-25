class DashboardController < ApplicationController

  def index
    @tickets = Ticket.all
    @customer = Customer.new
    @customers = Customer.all
  end

end
