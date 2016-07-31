json.customers @customers do |customer|
  json.title customer.title
  json.company customer.company
  json.contact_person customer.contact_person
  json.notes customer.notes

  json.address
    json.line1 customer.address.line1
    json.line2 customer.address.line2
    json.city customer.address.city
    json.state customer.address.state
    json.zip customer.address.zip
end

