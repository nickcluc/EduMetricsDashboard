class AddResponderTypeToResponses < ActiveRecord::Migration
  def change
    add_column :responses, :responder_type_id, :integer, null: false
  end
end
