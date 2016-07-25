class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.text :name
      t.references :organization

      t.timestamps null: false
    end
  end
end
