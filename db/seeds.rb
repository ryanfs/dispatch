# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

# rake db:drop
# rake db:create
# rake db:migrate
# rake db:seed
# rails console

org = Organization.create([{ name: 'Test Org 1'}, { name: 'Test Org 2'}])
user = User.create(name: 'Ryan', email: 'rfsalerno@gmail.com', password: 'password', organization: org.first)

10.times do |i|
  customer_params = { title: "Customer #{i}", company: "Customer Company #{i}", contact_person: 'Ryan', phone: "#{i}0012310#{i}", notes: 'Usually late...' }
  address_params = { line1: "#{i} street", line2: "floor #{i}", city: ["Brooklyn", "LA", "NYC"].sample, state: 'NY', zip: '11211' }
  customer = Customer.new(customer_params)
  customer.organization = org.first
  customer.create_address
  customer.address = Address.new(address_params)
  customer.save
end
