class CreateTickets < ActiveRecord::Migration
  def change
    create_table :tickets do |t|
      t.text :title
      t.references :address
      t.references :service
      t.references :customer
      t.references :truck
      t.references :product
      t.references :organization
      t.text :notes

      t.timestamps null: false
    end

  add_index :tickets, :address_id
  add_index :tickets, :service_id
  add_index :tickets, :customer_id
  add_index :tickets, :truck_id
  add_index :tickets, :product_id
  end
end
