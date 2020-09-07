class AddHometownIdToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :hometown_id, :integer
  end
end
