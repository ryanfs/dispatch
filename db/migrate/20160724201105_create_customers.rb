class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.string :title
      t.string :company
      t.references :address
      t.string :contact_person
      t.text :notes

      t.timestamps null: false
    end

    add_index :customers, [:address_id, :title]
  end
end
