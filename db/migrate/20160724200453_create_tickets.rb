class CreateTickets < ActiveRecord::Migration
  def change
    create_table :tickets do |t|
      t.text :title
      t.integer :address_id
      t.integer :service_id
      t.integer :customer_id
      t.integer :truck_id
      t.text :notes

      t.timestamps null: false
    end
  end
end
