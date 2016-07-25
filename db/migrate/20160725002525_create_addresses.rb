class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.string :line1
      t.string :line2
      t.string :city
      t.string :state
      t.string :zip
      t.references :addressable, polymorphic: true, index: true
      t.references :organization

      t.timestamps null: false
    end
  end
end
