class CreateTrucks < ActiveRecord::Migration
  def change
    create_table :trucks do |t|
      t.string :name
      t.string :phone
      t.string :email
      t.references :organization

      t.timestamps null: false
    end
  end
end
