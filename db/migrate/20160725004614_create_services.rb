class CreateServices < ActiveRecord::Migration
  def change
    create_table :services do |t|
      t.text :title
      t.integer :color

      t.timestamps null: false
    end
  end
end
