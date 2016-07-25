class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.string :title
      t.string :company
      t.integer :address_id
      t.string :contact_person
      t.text :notes

      t.timestamps null: false
    end
  end
end
