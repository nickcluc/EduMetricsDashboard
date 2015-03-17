class CreateResponderTypes < ActiveRecord::Migration
  def change
    create_table :responder_types do |t|
      t.string :name, null: false
    end
  end
end
