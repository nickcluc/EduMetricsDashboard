class CreateResponses < ActiveRecord::Migration
  def change
    create_table :responses do |t|
      t.integer :category_id, null: false
      t.integer :value, null: false
      t.timestamps
    end
  end
end
