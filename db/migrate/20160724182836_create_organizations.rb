class CreateOrganizations < ActiveRecord::Migration
  def change
    create_table :organizations do |t|
      t.text :name
      t.references :user

      t.timestamps null: false
    end
  end
end
